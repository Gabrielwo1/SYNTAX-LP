import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  textClassName?: string;
  size?: 'default' | 'sm';
  showArrow?: boolean;
}

export function CtaButton({ href, children, className = '', textClassName = '', size = 'default', showArrow = true }: CtaButtonProps) {
  const isSmall = size === 'sm';
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`group relative flex items-center justify-center gap-2 md:gap-4 ${isSmall ? 'px-6 h-10 rounded-full' : 'px-6 md:px-8 h-12 md:h-[60px] rounded-full'} bg-gradient-to-b from-[#c4fdae] via-[#a2fc86] to-[#7bcf5c] text-black font-display font-bold uppercase transition-all duration-300 shadow-[inset_0_4px_10px_rgba(255,255,255,0.8),inset_0_-4px_10px_rgba(0,100,0,0.3),0_8px_20px_rgba(103,194,78,0.2)] hover:shadow-[inset_0_4px_12px_rgba(255,255,255,1),inset_0_-4px_10px_rgba(0,100,0,0.4),0_12px_24px_rgba(103,194,78,0.3)] hover:scale-[1.03] active:scale-[0.97] overflow-hidden ${className}`}
    >
      {/* Ongoing shine/shimmer effect for movement */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-[shimmer_3s_infinite_ease-in-out]" />
      
      <span className={`relative z-10 ${isSmall ? 'text-xs' : 'text-sm md:text-[15px]'} tracking-widest text-center flex-1 md:flex-none ${textClassName}`}>
        {children}
      </span>
      
      {showArrow && (
        <div className={`relative z-10 ${isSmall ? 'w-6 h-6' : 'w-7 h-7 md:w-9 md:h-9'} rounded-full bg-black/10 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] group-hover:bg-black/20 transition-colors duration-300 shrink-0`}>
          <ArrowRight className={`${isSmall ? 'w-3 h-3' : 'w-4 h-4 md:w-5 md:h-5'} transition-transform duration-300 group-hover:translate-x-1`} strokeWidth={2.5} />
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-15deg); }
          50% { transform: translateX(150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
      `}</style>
    </motion.a>
  );
}
