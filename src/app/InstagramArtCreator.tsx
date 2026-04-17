import { useState, useRef, useCallback } from "react";
import Anthropic from "@anthropic-ai/sdk";

interface Message {
  role: "user" | "assistant";
  content: string;
  imageBase64?: string;
  imageType?: string;
}

interface GeneratedResult {
  designBrief: string;
  colorPalette: string[];
  typographyNotes: string;
  layoutDescription: string;
  imagePrompt: string;
  htmlPreview: string;
  rawResponse: string;
}

function parseResult(text: string): GeneratedResult {
  const section = (tag: string) => {
    const re = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i");
    const m = text.match(re);
    return m ? m[1].trim() : "";
  };

  const colorsRaw = section("colors");
  const colors = colorsRaw
    ? colorsRaw
        .split(/[\n,]/)
        .map((c) => c.trim())
        .filter((c) => c.match(/#[0-9a-fA-F]{3,6}|rgb|hsl/))
    : ["#1a1a2e", "#e94560", "#0f3460", "#533483", "#ffffff"];

  const html = section("html");

  return {
    designBrief: section("brief"),
    colorPalette: colors.length > 0 ? colors : ["#1a1a2e", "#e94560", "#ffffff"],
    typographyNotes: section("typography"),
    layoutDescription: section("layout"),
    imagePrompt: section("prompt"),
    htmlPreview: html,
    rawResponse: text,
  };
}

const SYSTEM_PROMPT = `You are an expert Instagram visual designer and art director. Your job is to help create stunning Instagram posts.

When the user provides:
- A reference image (analyze its style, colors, mood, composition, typography)
- A title
- Body text

You must respond with a complete design package structured EXACTLY like this:

<brief>
A detailed design brief (2-3 paragraphs) describing the visual direction, mood, target audience, and key design decisions inspired by the reference.
</brief>

<colors>
List the exact hex color codes to use, one per line, e.g.:
#1a1a2e
#e94560
#0f3460
#ffffff
</colors>

<typography>
Font recommendations and hierarchy (heading size, weight, style; body text style; any special treatments).
</typography>

<layout>
Describe the Instagram post layout: where elements are positioned, proportions, spacing, visual flow.
</layout>

<prompt>
A detailed Midjourney/DALL-E image generation prompt to create the background or main visual for this post, incorporating the reference style.
</prompt>

<html>
A complete, self-contained HTML snippet (no external dependencies) that renders a pixel-perfect 1080x1080px Instagram post preview. Use inline styles only. Include the title and body text from the user's input. Make it visually stunning, matching the brief and color palette. The HTML must be wrapped in a single div with style="width:1080px;height:1080px;position:relative;overflow:hidden"
</html>

Always respond in the same language the user writes in (Portuguese if they write in Portuguese).`;

export default function InstagramArtCreator() {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("anthropic_key") || "");
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [showKeyForm, setShowKeyForm] = useState(!localStorage.getItem("anthropic_key"));

  const [image, setImage] = useState<{ base64: string; type: string; preview: string } | null>(null);
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [extraInstructions, setExtraInstructions] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [activeTab, setActiveTab] = useState<"preview" | "prompt" | "brief" | "chat">("preview");
  const [previewScale, setPreviewScale] = useState(0.4);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const saveApiKey = () => {
    localStorage.setItem("anthropic_key", apiKeyInput);
    setApiKey(apiKeyInput);
    setShowKeyForm(false);
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = (e.target?.result as string).split(",")[1];
      setImage({ base64, type: file.type, preview: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  const buildUserContent = (msg: string, img?: { base64: string; type: string }) => {
    if (img) {
      return [
        {
          type: "image" as const,
          source: { type: "base64" as const, media_type: img.type as "image/jpeg" | "image/png" | "image/gif" | "image/webp", data: img.base64 },
        },
        { type: "text" as const, text: msg },
      ];
    }
    return msg;
  };

  const generate = async () => {
    if (!apiKey) { setShowKeyForm(true); return; }
    if (!title && !bodyText) return;

    const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

    const userMsg = [
      image ? `📎 Referência visual anexada acima.` : "",
      `**Título:** ${title}`,
      `**Texto:** ${bodyText}`,
      extraInstructions ? `**Instruções adicionais:** ${extraInstructions}` : "",
    ].filter(Boolean).join("\n");

    const newMessage: Message = {
      role: "user",
      content: userMsg,
      imageBase64: image?.base64,
      imageType: image?.type,
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setLoading(true);
    setStreamText("");
    setResult(null);

    const apiMessages = newMessages.map((m) => ({
      role: m.role,
      content: m.imageBase64
        ? buildUserContent(m.content, { base64: m.imageBase64, type: m.imageType! })
        : m.content,
    }));

    try {
      const stream = await client.messages.stream({
        model: "claude-opus-4-6",
        max_tokens: 8000,
        system: SYSTEM_PROMPT,
        messages: apiMessages as Anthropic.MessageParam[],
      });

      let fullText = "";
      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
          fullText += event.delta.text;
          setStreamText(fullText);
        }
      }

      const parsed = parseResult(fullText);
      setResult(parsed);
      setMessages([...newMessages, { role: "assistant", content: fullText }]);
      setStreamText("");
      setActiveTab("preview");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro desconhecido";
      setMessages([...newMessages, { role: "assistant", content: `❌ Erro: ${msg}` }]);
    } finally {
      setLoading(false);
    }
  };

  const sendFollowUp = async () => {
    if (!followUp.trim() || !apiKey) return;

    const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
    const newMessage: Message = { role: "user", content: followUp };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setFollowUp("");
    setLoading(true);
    setStreamText("");

    const apiMessages = newMessages.map((m) => ({
      role: m.role,
      content: m.imageBase64
        ? buildUserContent(m.content, { base64: m.imageBase64, type: m.imageType! })
        : m.content,
    }));

    try {
      const stream = await client.messages.stream({
        model: "claude-opus-4-6",
        max_tokens: 8000,
        system: SYSTEM_PROMPT,
        messages: apiMessages as Anthropic.MessageParam[],
      });

      let fullText = "";
      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
          fullText += event.delta.text;
          setStreamText(fullText);
        }
      }

      const parsed = parseResult(fullText);
      if (parsed.htmlPreview) setResult(parsed);
      setMessages([...newMessages, { role: "assistant", content: fullText }]);
      setStreamText("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro desconhecido";
      setMessages([...newMessages, { role: "assistant", content: `❌ Erro: ${msg}` }]);
    } finally {
      setLoading(false);
      setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  const reset = () => {
    setImage(null);
    setTitle("");
    setBodyText("");
    setExtraInstructions("");
    setMessages([]);
    setResult(null);
    setStreamText("");
    setFollowUp("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d", color: "#f0f0f0", fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #222", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            ✦
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Instagram Art Creator</div>
            <div style={{ fontSize: 12, color: "#666" }}>Powered by Claude Opus</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setShowKeyForm(true)}
            style={{ padding: "6px 12px", borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#aaa", fontSize: 13, cursor: "pointer" }}
          >
            🔑 API Key
          </button>
          {messages.length > 0 && (
            <button
              onClick={reset}
              style={{ padding: "6px 12px", borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#aaa", fontSize: 13, cursor: "pointer" }}
            >
              Nova arte
            </button>
          )}
        </div>
      </div>

      {/* API Key Modal */}
      {showKeyForm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#161616", border: "1px solid #2a2a2a", borderRadius: 16, padding: 32, width: 400, maxWidth: "90vw" }}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Anthropic API Key</div>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>
              Necessário para usar o Claude. Sua chave fica salva localmente no browser.
            </div>
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveApiKey()}
              placeholder="sk-ant-..."
              style={{ width: "100%", padding: "10px 14px", borderRadius: 8, background: "#0d0d0d", border: "1px solid #333", color: "#f0f0f0", fontSize: 14, boxSizing: "border-box", outline: "none", marginBottom: 16 }}
            />
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={saveApiKey}
                disabled={!apiKeyInput}
                style={{ flex: 1, padding: "10px", borderRadius: 8, background: "linear-gradient(135deg, #833ab4, #fd1d1d)", border: "none", color: "#fff", fontWeight: 600, cursor: apiKeyInput ? "pointer" : "not-allowed", opacity: apiKeyInput ? 1 : 0.5 }}
              >
                Salvar
              </button>
              {apiKey && (
                <button
                  onClick={() => setShowKeyForm(false)}
                  style={{ padding: "10px 16px", borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#aaa", cursor: "pointer" }}
                >
                  Cancelar
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div style={{ display: "flex", height: "calc(100vh - 69px)" }}>
        {/* Left Panel — Inputs */}
        <div style={{ width: 360, borderRight: "1px solid #1a1a1a", padding: 24, overflowY: "auto", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Image Upload */}
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 10 }}>
              Referência Visual
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={onDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              style={{
                border: `2px dashed ${isDragging ? "#833ab4" : image ? "#333" : "#2a2a2a"}`,
                borderRadius: 12,
                padding: image ? 0 : "32px 16px",
                textAlign: "center",
                cursor: "pointer",
                background: isDragging ? "rgba(131,58,180,0.08)" : "#111",
                transition: "all 0.2s",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {image ? (
                <div style={{ position: "relative" }}>
                  <img src={image.preview} alt="referência" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
                  <button
                    onClick={(e) => { e.stopPropagation(); setImage(null); }}
                    style={{ position: "absolute", top: 8, right: 8, width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.7)", border: "none", color: "#fff", cursor: "pointer", fontSize: 14 }}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>🖼️</div>
                  <div style={{ fontSize: 13, color: "#555" }}>Arraste uma imagem ou clique para selecionar</div>
                  <div style={{ fontSize: 11, color: "#333", marginTop: 4 }}>JPG, PNG, WebP</div>
                </>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
          </div>

          {/* Title */}
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
              Título *
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Como escalar seu negócio em 2025"
              style={{ width: "100%", padding: "10px 14px", borderRadius: 8, background: "#111", border: "1px solid #222", color: "#f0f0f0", fontSize: 14, boxSizing: "border-box", outline: "none" }}
            />
          </div>

          {/* Body Text */}
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
              Texto do Post *
            </label>
            <textarea
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              placeholder="Escreva o texto que vai aparecer no post..."
              rows={5}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 8, background: "#111", border: "1px solid #222", color: "#f0f0f0", fontSize: 14, boxSizing: "border-box", outline: "none", resize: "vertical", fontFamily: "inherit" }}
            />
          </div>

          {/* Extra Instructions */}
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: 1, display: "block", marginBottom: 8 }}>
              Instruções Extras
            </label>
            <textarea
              value={extraInstructions}
              onChange={(e) => setExtraInstructions(e.target.value)}
              placeholder="Ex: Fundo escuro, estilo minimalista, inclua um CTA..."
              rows={3}
              style={{ width: "100%", padding: "10px 14px", borderRadius: 8, background: "#111", border: "1px solid #222", color: "#f0f0f0", fontSize: 14, boxSizing: "border-box", outline: "none", resize: "vertical", fontFamily: "inherit" }}
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generate}
            disabled={loading || (!title && !bodyText)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: 10,
              background: loading ? "#222" : "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              border: "none",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              cursor: loading || (!title && !bodyText) ? "not-allowed" : "pointer",
              opacity: (!title && !bodyText) ? 0.5 : 1,
              transition: "opacity 0.2s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {loading ? (
              <>
                <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span>
                Gerando...
              </>
            ) : (
              <>✦ Criar Arte</>
            )}
          </button>
        </div>

        {/* Right Panel — Results */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {!result && !streamText && messages.length === 0 ? (
            /* Empty state */
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#333" }}>
              <div style={{ fontSize: 64, marginBottom: 16, filter: "grayscale(0.5)" }}>📱</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: "#444", marginBottom: 8 }}>Pronto para criar</div>
              <div style={{ fontSize: 14, color: "#333", maxWidth: 300, textAlign: "center" }}>
                Preencha o título e texto, adicione uma referência visual e clique em "Criar Arte"
              </div>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div style={{ borderBottom: "1px solid #1a1a1a", padding: "0 24px", display: "flex", gap: 0 }}>
                {(["preview", "brief", "prompt", "chat"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: "14px 20px",
                      background: "none",
                      border: "none",
                      borderBottom: `2px solid ${activeTab === tab ? "#833ab4" : "transparent"}`,
                      color: activeTab === tab ? "#fff" : "#555",
                      fontWeight: activeTab === tab ? 600 : 400,
                      fontSize: 14,
                      cursor: "pointer",
                      transition: "all 0.15s",
                      textTransform: "capitalize",
                    }}
                  >
                    {tab === "preview" && "👁 Preview"}
                    {tab === "brief" && "📋 Brief"}
                    {tab === "prompt" && "🤖 Prompt IA"}
                    {tab === "chat" && `💬 Chat${messages.length > 1 ? ` (${Math.floor(messages.length / 2)})` : ""}`}
                  </button>
                ))}
              </div>

              <div style={{ flex: 1, overflow: "auto", padding: 24 }}>
                {/* Loading stream */}
                {loading && streamText && activeTab !== "chat" && (
                  <div style={{ marginBottom: 16, padding: 16, background: "#111", borderRadius: 10, border: "1px solid #222" }}>
                    <div style={{ fontSize: 12, color: "#555", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ animation: "pulse 1s ease-in-out infinite", display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#833ab4" }} />
                      Gerando...
                    </div>
                    <pre style={{ fontSize: 12, color: "#444", whiteSpace: "pre-wrap", maxHeight: 100, overflow: "hidden", margin: 0 }}>
                      {streamText.slice(-300)}
                    </pre>
                  </div>
                )}

                {/* Preview Tab */}
                {activeTab === "preview" && result?.htmlPreview && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                      <div style={{ fontSize: 13, color: "#555" }}>Preview 1080×1080px</div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: "#444" }}>Zoom:</span>
                        {[0.3, 0.4, 0.5, 0.6].map((s) => (
                          <button
                            key={s}
                            onClick={() => setPreviewScale(s)}
                            style={{
                              padding: "4px 10px",
                              borderRadius: 6,
                              background: previewScale === s ? "#222" : "transparent",
                              border: `1px solid ${previewScale === s ? "#444" : "#1a1a1a"}`,
                              color: previewScale === s ? "#fff" : "#444",
                              fontSize: 12,
                              cursor: "pointer",
                            }}
                          >
                            {Math.round(s * 100)}%
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Palette */}
                    {result.colorPalette.length > 0 && (
                      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                        {result.colorPalette.map((color, i) => (
                          <div
                            key={i}
                            title={color}
                            onClick={() => navigator.clipboard.writeText(color)}
                            style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 10px 4px 6px", background: "#111", borderRadius: 20, border: "1px solid #222", cursor: "pointer" }}
                          >
                            <div style={{ width: 16, height: 16, borderRadius: "50%", background: color, border: "1px solid rgba(255,255,255,0.1)" }} />
                            <span style={{ fontSize: 11, color: "#666", fontFamily: "monospace" }}>{color}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Post Preview */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ position: "relative" }}>
                        {/* Instagram frame */}
                        <div style={{
                          width: `${1080 * previewScale}px`,
                          height: `${1080 * previewScale}px`,
                          borderRadius: 12,
                          overflow: "hidden",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                          border: "1px solid #2a2a2a",
                        }}>
                          <div
                            style={{
                              width: 1080,
                              height: 1080,
                              transform: `scale(${previewScale})`,
                              transformOrigin: "top left",
                            }}
                            dangerouslySetInnerHTML={{ __html: result.htmlPreview }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Brief Tab */}
                {activeTab === "brief" && result && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {result.designBrief && (
                      <Section title="📋 Brief de Design">
                        <p style={{ lineHeight: 1.7, color: "#ccc", margin: 0 }}>{result.designBrief}</p>
                      </Section>
                    )}
                    {result.typographyNotes && (
                      <Section title="🔤 Tipografia">
                        <p style={{ lineHeight: 1.7, color: "#ccc", margin: 0 }}>{result.typographyNotes}</p>
                      </Section>
                    )}
                    {result.layoutDescription && (
                      <Section title="📐 Layout">
                        <p style={{ lineHeight: 1.7, color: "#ccc", margin: 0 }}>{result.layoutDescription}</p>
                      </Section>
                    )}
                  </div>
                )}

                {/* Prompt Tab */}
                {activeTab === "prompt" && result?.imagePrompt && (
                  <div>
                    <Section title="🤖 Prompt para Geração de Imagem">
                      <div style={{ position: "relative" }}>
                        <pre style={{ whiteSpace: "pre-wrap", color: "#ccc", lineHeight: 1.7, margin: 0, fontFamily: "inherit", fontSize: 14 }}>
                          {result.imagePrompt}
                        </pre>
                        <button
                          onClick={() => navigator.clipboard.writeText(result.imagePrompt)}
                          style={{ marginTop: 12, padding: "8px 16px", borderRadius: 8, background: "#1a1a1a", border: "1px solid #333", color: "#aaa", fontSize: 13, cursor: "pointer" }}
                        >
                          📋 Copiar prompt
                        </button>
                      </div>
                    </Section>
                  </div>
                )}

                {/* Chat Tab */}
                {activeTab === "chat" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 12,
                          flexDirection: m.role === "user" ? "row-reverse" : "row",
                        }}
                      >
                        <div style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background: m.role === "user" ? "#2a2a2a" : "linear-gradient(135deg, #833ab4, #fd1d1d)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 14,
                          flexShrink: 0,
                        }}>
                          {m.role === "user" ? "👤" : "✦"}
                        </div>
                        <div style={{ maxWidth: "80%" }}>
                          {m.imageBase64 && (
                            <img src={`data:${m.imageType};base64,${m.imageBase64}`} alt="ref" style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8, marginBottom: 6, display: "block" }} />
                          )}
                          <div style={{
                            padding: "10px 14px",
                            borderRadius: m.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                            background: m.role === "user" ? "#1a1a1a" : "#141414",
                            border: `1px solid ${m.role === "user" ? "#2a2a2a" : "#1e1e1e"}`,
                            fontSize: 13,
                            lineHeight: 1.6,
                            color: "#ccc",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                          }}>
                            {m.role === "assistant" ? summarizeAssistantMessage(m.content) : m.content}
                          </div>
                        </div>
                      </div>
                    ))}
                    {loading && streamText && (
                      <div style={{ display: "flex", gap: 12 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #833ab4, #fd1d1d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>✦</div>
                        <div style={{ padding: "10px 14px", borderRadius: "4px 16px 16px 16px", background: "#141414", border: "1px solid #1e1e1e", fontSize: 13, color: "#555" }}>
                          <span style={{ animation: "pulse 1s ease-in-out infinite", display: "inline-block" }}>●</span> Escrevendo...
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                )}
              </div>

              {/* Follow-up input */}
              {result && (
                <div style={{ borderTop: "1px solid #1a1a1a", padding: "16px 24px", display: "flex", gap: 10 }}>
                  <input
                    value={followUp}
                    onChange={(e) => setFollowUp(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendFollowUp()}
                    placeholder="Peça ajustes... ex: 'Mude para fundo escuro' ou 'Adicione mais impacto no título'"
                    disabled={loading}
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: "#111",
                      border: "1px solid #222",
                      color: "#f0f0f0",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={sendFollowUp}
                    disabled={loading || !followUp.trim()}
                    style={{
                      padding: "10px 20px",
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #833ab4, #fd1d1d)",
                      border: "none",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                      cursor: loading || !followUp.trim() ? "not-allowed" : "pointer",
                      opacity: !followUp.trim() ? 0.5 : 1,
                    }}
                  >
                    Enviar
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0d0d0d; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 3px; }
        input::placeholder, textarea::placeholder { color: #333; }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#111", borderRadius: 12, border: "1px solid #1e1e1e", padding: 20 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#666", marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );
}

function summarizeAssistantMessage(content: string): string {
  // Remove XML tags and show clean summary in chat
  const stripped = content
    .replace(/<html>[\s\S]*?<\/html>/gi, "[HTML Preview gerado]")
    .replace(/<\/?[a-z]+>/gi, "")
    .trim();
  return stripped.length > 600 ? stripped.slice(0, 600) + "..." : stripped;
}
