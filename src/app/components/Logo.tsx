import imgFreepikReateAModernFuturisticLogoForAUxuiDesignA417043 from "@/assets/315d8cb9df218a4d108c1796691e847942e27f6b.png";

interface LogoProps {
  className?: string;
  invert?: boolean;
}

export function Logo({ className = "", invert = false }: LogoProps) {
  return (
    <div 
      className={`relative flex items-center shrink-0 ${className}`} 
      style={{ aspectRatio: '2244.9 / 878.8' }}
    >
      {/* Icon portion (green S) */}
      <div className="h-full relative shrink-0" style={{ width: '26.69%' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="SYNTAX Icon" 
            className="absolute max-w-none" 
            style={{ 
              height: '364.55%', 
              left: '-93.33%', 
              top: '-132.27%', 
              width: '534.67%' 
            }} 
            src={imgFreepikReateAModernFuturisticLogoForAUxuiDesignA417043} 
          />
        </div>
      </div>
      
      {/* Text portion (SYNTAX) */}
      <div className="h-full relative shrink-0" style={{ width: '73.31%' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="SYNTAX Text" 
            // The site is dark theme ("Cyber Brutalism"), but the original text is dark grey/black.
            // We use 'brightness-0 invert' to make the text white when not explicitly inverted.
            className={`absolute max-w-none transition-all duration-300 ${!invert ? 'brightness-0 invert' : ''}`} 
            style={{ 
              height: '364.55%', 
              left: '-72.33%', 
              top: '-132.27%', 
              width: '194.66%' 
            }} 
            src={imgFreepikReateAModernFuturisticLogoForAUxuiDesignA417043} 
          />
        </div>
      </div>
    </div>
  );
}