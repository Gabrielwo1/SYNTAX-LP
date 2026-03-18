import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface PremiumIconProps {
  icon: LucideIcon;
  color?: 'blue' | 'red' | 'purple' | 'cyan' | 'white' | 'green';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    icon: 'text-blue-400',
    glow: 'shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    gradient: 'from-blue-500/20 to-transparent'
  },
  green: {
    bg: 'bg-[#67c24e]/5',
    border: 'border-[#67c24e]/10',
    icon: 'text-[#67c24e]',
    glow: 'shadow-[0_0_20px_-5px_rgba(103,194,78,0.1)]',
    gradient: 'from-[#67c24e]/10 to-transparent'
  },
  red: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    icon: 'text-red-400',
    glow: 'shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]',
    gradient: 'from-red-500/20 to-transparent'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    icon: 'text-purple-400',
    glow: 'shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]',
    gradient: 'from-purple-500/20 to-transparent'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
    glow: 'shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]',
    gradient: 'from-cyan-500/20 to-transparent'
  },
  white: {
    bg: 'bg-white/5',
    border: 'border-white/10',
    icon: 'text-white',
    glow: 'shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]',
    gradient: 'from-white/10 to-transparent'
  }
};

const sizeMap = {
  sm: { wrapper: 'w-10 h-10 rounded-xl', icon: 'w-5 h-5' },
  md: { wrapper: 'w-14 h-14 rounded-2xl', icon: 'w-6 h-6' },
  lg: { wrapper: 'w-20 h-20 rounded-[1.5rem]', icon: 'w-8 h-8' }
};

export function PremiumIcon({ icon: Icon, color = 'blue', size = 'md', className = '' }: PremiumIconProps) {
  const c = colorMap[color];
  const s = sizeMap[size];

  return (
    <div className={`relative group/icon ${className}`}>
      {/* Background glow that expands on hover */}
      <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500 ${c.bg}`} />
      
      {/* Container */}
      <div className={`relative flex items-center justify-center border backdrop-blur-xl transition-all duration-500 
        ${s.wrapper} ${c.bg} ${c.border} ${c.glow} overflow-hidden`}
      >
        {/* Inner gradient sweep */}
        <div className={`absolute inset-0 bg-gradient-to-tr opacity-20 ${c.gradient}`} />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover/icon:translate-x-[100%] transition-transform duration-1000" />
        
        <Icon className={`${s.icon} ${c.icon} relative z-10 transition-transform duration-500 group-hover/icon:scale-110`} strokeWidth={1.5} />
      </div>
    </div>
  );
}

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: 'glow' | 'lift' | 'border' | 'none';
  color?: 'blue' | 'red' | 'purple' | 'cyan' | 'white' | 'green';
}

export function PremiumCard({ children, className = '', hoverEffect = 'glow', color = 'blue' }: PremiumCardProps) {
  const baseClasses = "relative bg-black/60 backdrop-blur-2xl border border-white/5 rounded-sm overflow-hidden";
  
  const glowColors = {
    blue: 'group-hover/card:shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)]',
    green: 'group-hover/card:shadow-[0_0_30px_-10px_rgba(103,194,78,0.1)]',
    red: 'group-hover/card:shadow-[0_0_30px_-10px_rgba(239,68,68,0.1)]',
    purple: 'group-hover/card:shadow-[0_0_30px_-10px_rgba(168,85,247,0.1)]',
    cyan: 'group-hover/card:shadow-[0_0_30px_-10px_rgba(6,182,212,0.1)]',
    white: 'group-hover/card:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]'
  };

  const borderColors = {
    blue: 'group-hover/card:border-blue-500/20',
    green: 'group-hover/card:border-[#67c24e]/20',
    red: 'group-hover/card:border-red-500/20',
    purple: 'group-hover/card:border-purple-500/20',
    cyan: 'group-hover/card:border-cyan-500/20',
    white: 'group-hover/card:border-white/10'
  };

  let effectClasses = "transition-all duration-500";
  if (hoverEffect === 'glow') effectClasses += ` group/card ${glowColors[color]} ${borderColors[color]}`;
  if (hoverEffect === 'lift') effectClasses += ` group/card hover:-translate-y-2 ${glowColors[color]} ${borderColors[color]}`;
  if (hoverEffect === 'border') effectClasses += ` group/card ${borderColors[color]}`;

  return (
    <div className={`${baseClasses} ${effectClasses} ${className}`}>
      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      
      {/* Inner top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
