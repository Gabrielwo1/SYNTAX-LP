import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';
import { Play } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { CtaButton } from '../ui/CtaButton';
import { RippleBackground } from '../RippleBackground';

export function HeroArch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bottomMarqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = latest * videoRef.current.duration;
    }
  });

  // Preload video to avoid blank starts
  useEffect(() => {
    if (videoRef.current) {
       videoRef.current.load();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300svh] bg-[#020202]"
    >
      {/* Scrollable Background Video */}
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden z-0 bg-black">
        <video 
          ref={videoRef}
          src="/hero-video.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          muted 
          playsInline 
          preload="auto"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80 z-10" />

        {/* Remodeled Content Container inside the sticky view */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-20 pb-12 md:pb-16 pointer-events-none">
          
          <div className="max-w-[1600px] mx-auto w-full flex flex-col xl:flex-row justify-between xl:items-end gap-8 mt-auto pointer-events-auto">
            
            {/* TITLE - EXTREME LEFT */}
            <div className="flex flex-col xl:w-1/2">
              <h1 className="text-[10vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-black uppercase tracking-tighter leading-[0.85] drop-shadow-2xl flex flex-col items-start text-left">
                <span className="block text-white/90">SEU PORTFÓLIO É</span>
                <span className="block text-white">FANTÁSTICO, MAS</span>
                <span className="block mt-1" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)', color: 'transparent' }}>
                  O SITE NÃO VENDE.
                </span>
              </h1>
            </div>

            {/* BUTTONS - EXTREME RIGHT */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 w-full xl:w-auto">
              <CtaButton href="https://wa.me/554699247368" className="w-full sm:w-auto shadow-[0_0_30px_rgba(103,194,78,0.2)] text-sm px-6 h-12 md:h-14">
                Falar com especialista
              </CtaButton>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-6 h-12 md:h-14 rounded-full bg-white/10 text-white transition-all duration-500 shadow-xl border border-white/20 hover:border-white/50 hover:bg-white/20 w-full sm:w-auto flex items-center justify-center gap-3 text-xs md:text-sm tracking-widest uppercase font-display font-bold backdrop-blur-md"
              >
                <Play className="w-3 h-3 md:w-4 md:h-4 fill-current transition-transform duration-500 group-hover:scale-110 text-white" />
                Ver Impacto
              </motion.button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
