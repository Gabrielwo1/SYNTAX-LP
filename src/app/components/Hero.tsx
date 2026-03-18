import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CtaButton } from './ui/CtaButton';
import { RippleBackground } from './RippleBackground';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll for marquee only
  const { scrollY } = useScroll();
  const bottomMarqueeX = useTransform(scrollY, [0, 1000], ['0%', '-20%']);
  const yParallax = useTransform(scrollY, [0, 800], ['0%', '15%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] bg-[#020202] overflow-hidden flex flex-col pt-24"
    >
      <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0 pointer-events-none">
        <RippleBackground />
      </motion.div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/5 bg-black/60 backdrop-blur-sm z-20 py-4 md:py-5 pointer-events-none">
        <motion.div style={{ x: bottomMarqueeX }} className="flex items-center justify-center h-full will-change-transform">
          <div className="flex whitespace-nowrap text-white/30 font-mono text-xs tracking-[0.2em] uppercase items-center animate-marquee-fast">
            {Array(10).fill(['SITES', 'LANDING PAGE', 'E-COMMERCE', 'UX/UI']).flat().map((text, i) => (
              <span key={i} className="mx-4">{text} <span className="text-[#67c24e]/50 ml-8">•</span></span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative flex-1 flex flex-col justify-between p-6 md:p-12 z-10 pointer-events-none pb-32 md:pb-32">

        {/* BRUTAL TYPOGRAPHY */}
        <div className="w-full flex flex-col pointer-events-auto my-auto py-12 md:py-0 relative z-10">
          <h1
            className="text-[13vw] sm:text-[11vw] md:text-[9vw] font-display font-black uppercase tracking-tighter leading-[0.85] text-white group relative z-10 animate-fade-in-up"
          >
            <span className="block hover:italic transition-all duration-500 text-white/90">Seu site pode</span>
            <span className="block text-white">estar custando</span>
            <span
              className="block text-right pr-[2vw] transition-all duration-500 hover:text-[#67c24e]"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.9)',
                color: 'transparent',
              }}
            >
              Clientes diários.
            </span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col xl:flex-row justify-between xl:items-end gap-8 mt-auto relative z-10 pointer-events-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl max-w-md font-sans font-light leading-relaxed">
            A SYNTAX cria sites estratégicos, pensados em UX, performance e conversão para transformar visitantes em clientes reais.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <CtaButton href="https://wa.me/554699247368" className="w-full sm:w-auto">
              Quero transformar meu site
            </CtaButton>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-6 md:px-8 h-12 md:h-[60px] rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#121212] text-white transition-all duration-500 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),0_15px_30px_rgba(0,0,0,0.8)] hover:shadow-[inset_0_2px_10px_rgba(255,255,255,0.15),0_20px_40px_rgba(0,0,0,0.9)] border border-white/10 hover:border-[#67c24e]/50 w-full sm:w-auto flex items-center justify-center gap-3 text-sm md:text-[15px] tracking-widest uppercase font-display font-bold backdrop-blur-xl"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 fill-current transition-transform duration-500 group-hover:scale-110 text-[#67c24e]" />
              Ver projetos
            </motion.button>
          </div>
        </div>
      </div>

      {/* Since we removed the orb animation, we can clear this unused style block or keep only what's necessary */}
    </section>
  );
}