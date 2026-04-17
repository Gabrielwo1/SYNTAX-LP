import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Logo } from './components/Logo';
import { CtaButton } from './components/ui/CtaButton';

const CATEGORIES = ['Todos', 'Sites', 'UX/UI', 'E-Commerce'] as const;
type Category = typeof CATEGORIES[number];

interface Project {
  id: number;
  title: string;
  client: string;
  category: Exclude<Category, 'Todos'>;
  tags: string[];
  color: string;
  year: string;
  featured?: boolean;
  // placeholder gradient instead of real image
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Carrefour App',
    client: 'Carrefour',
    category: 'UX/UI',
    tags: ['Mobile', 'UX Research', 'Protótipo'],
    color: '#0070F3',
    year: '2024',
    featured: true,
    gradient: 'from-blue-900 via-blue-700 to-blue-500',
  },
  {
    id: 2,
    title: 'XTrader Platform',
    client: 'XTrader',
    category: 'Sites',
    tags: ['Landing Page', 'React', 'Performance'],
    color: '#67c24e',
    year: '2024',
    featured: true,
    gradient: 'from-green-900 via-green-800 to-emerald-600',
  },
  {
    id: 3,
    title: 'Madda Store',
    client: 'Madda',
    category: 'E-Commerce',
    tags: ['Shopify', 'Conversão', 'Mobile-First'],
    color: '#F59E0B',
    year: '2024',
    gradient: 'from-amber-900 via-amber-700 to-yellow-500',
  },
  {
    id: 4,
    title: 'Gracie Barra Davie',
    client: 'Gracie Barra',
    category: 'Sites',
    tags: ['Institucional', 'SEO', 'Responsivo'],
    color: '#EF4444',
    year: '2024',
    gradient: 'from-red-900 via-red-700 to-rose-500',
  },
  {
    id: 5,
    title: 'Instituto Mussi',
    client: 'Instituto Mussi',
    category: 'Sites',
    tags: ['Saúde', 'Conversão', 'WordPress'],
    color: '#D4A849',
    year: '2023',
    gradient: 'from-yellow-900 via-yellow-800 to-amber-600',
  },
  {
    id: 6,
    title: 'SuperPix Dashboard',
    client: 'SuperPix',
    category: 'UX/UI',
    tags: ['Dashboard', 'Dados', 'B2B'],
    color: '#8B5CF6',
    year: '2024',
    gradient: 'from-violet-900 via-violet-700 to-purple-500',
  },
  {
    id: 7,
    title: 'Releva Shop',
    client: 'Releva',
    category: 'E-Commerce',
    tags: ['E-Commerce', 'VTEX', 'CRO'],
    color: '#A855F7',
    year: '2024',
    gradient: 'from-purple-900 via-fuchsia-800 to-pink-600',
  },
  {
    id: 8,
    title: 'Flakes Barber',
    client: 'Flakes',
    category: 'Sites',
    tags: ['Agendamento', 'Landing Page', 'Marca'],
    color: '#D4A849',
    year: '2023',
    gradient: 'from-stone-800 via-stone-700 to-amber-700',
  },
  {
    id: 9,
    title: 'MyTS App Design',
    client: 'MyTS',
    category: 'UX/UI',
    tags: ['App', 'Fintech', 'Design System'],
    color: '#06B6D4',
    year: '2024',
    gradient: 'from-cyan-900 via-cyan-700 to-teal-500',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative cursor-pointer"
    >
      {/* Card image area */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
        {/* Gradient placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-out ${hovered ? 'scale-105' : 'scale-100'}`} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 font-display font-black uppercase text-4xl tracking-tighter select-none">
            {project.client}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-mono text-xs tracking-widest uppercase">Ver projeto</span>
          </div>
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest"
            style={{ background: project.color + '30', color: project.color, border: `1px solid ${project.color}50` }}
          >
            {project.category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-4 right-4">
          <span className="text-white/40 font-mono text-[10px] tracking-widest">{project.year}</span>
        </div>
      </div>

      {/* Card info */}
      <div className="px-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-display font-bold text-lg leading-tight group-hover:text-[#67c24e] transition-colors duration-300">
            {project.title}
          </h3>
          <motion.div
            animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink className="w-4 h-4 text-[#67c24e] flex-shrink-0 mt-0.5" />
          </motion.div>
        </div>
        <p className="text-white/40 text-sm font-sans mb-3">{project.client}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span key={tag} className="text-[11px] text-white/50 font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>('Todos');

  const filtered = active === 'Todos'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-[#020202] text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[#020202]/95 border-b border-white/5">
        <a href="/">
          <Logo className="h-8 md:h-10 w-auto object-contain drop-shadow-2xl" />
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-mono tracking-widest uppercase text-white/60">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="/#sobre" className="hover:text-white transition-colors">Sobre</a>
        </div>
        <CtaButton href="https://wa.me/554699247368" size="sm" showArrow={false}>
          Iniciar Projeto
        </CtaButton>
      </header>

      {/* Hero com vídeo de fundo */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-end overflow-hidden pt-24">

        {/* Vídeo de fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="https://assets.mixkit.co/videos/preview/mixkit-working-on-code-in-a-dark-monitor-43474-large.mp4"
        />

        {/* Gradiente sobre o vídeo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/60 via-[#020202]/40 to-[#020202]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202]/80 via-transparent to-transparent" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

        {/* Conteúdo hero */}
        <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#67c24e]/10 border border-[#67c24e]/30 text-[#67c24e] text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#67c24e] animate-pulse" />
              Portfólio
            </div>

            <h1 className="text-[12vw] sm:text-[9vw] md:text-[7vw] font-display font-black uppercase tracking-tighter leading-[0.88] text-white mb-6">
              Projetos que
              <br />
              <span
                style={{
                  WebkitTextStroke: '2px rgba(255,255,255,0.7)',
                  color: 'transparent',
                }}
              >
                convertem.
              </span>
            </h1>

            <p className="text-white/50 text-base md:text-xl max-w-lg font-sans font-light leading-relaxed">
              Cada projeto é construído com estratégia, UX e performance — do conceito ao resultado real.
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 border-t border-white/8 grid grid-cols-3 divide-x divide-white/8"
        >
          {[
            { value: `${projects.length}+`, label: 'Projetos' },
            { value: '3', label: 'Categorias' },
            { value: '100%', label: 'Entregues' },
          ].map(stat => (
            <div key={stat.label} className="px-6 md:px-12 py-5 md:py-6">
              <div className="text-2xl md:text-3xl font-display font-black text-white">{stat.value}</div>
              <div className="text-white/40 font-mono text-xs uppercase tracking-widest mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Filtros + Grid */}
      <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24">

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                active === cat
                  ? 'text-[#020202] bg-[#67c24e]'
                  : 'text-white/50 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-[#67c24e] -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
            </button>
          ))}

          <span className="ml-auto text-white/30 font-mono text-xs">
            {filtered.length} projeto{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 md:mt-32 flex flex-col items-center text-center gap-6"
        >
          <p className="text-white/40 font-mono text-sm uppercase tracking-widest">Próximo projeto</p>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-white">
            Pode ser o seu.
          </h2>
          <CtaButton href="https://wa.me/554699247368" className="mt-4">
            Iniciar meu projeto
          </CtaButton>
        </motion.div>
      </section>

      {/* Footer mínimo */}
      <footer className="border-t border-white/5 px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo className="h-6 w-auto opacity-40" />
        <p className="text-white/20 font-mono text-xs">© {new Date().getFullYear()} SYNTAX. Todos os direitos reservados.</p>
        <a href="/" className="text-white/30 font-mono text-xs hover:text-white transition-colors uppercase tracking-widest">
          ← Voltar ao site
        </a>
      </footer>
    </div>
  );
}
