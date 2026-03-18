import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import agencyImage from 'figma:asset/5cbc87767447094c25cb569732cb9acba580cd41.png';

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[#020202] relative overflow-hidden">
      {/* Replaced blur with radial gradients for performance */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.08) 0%, rgba(103,194,78,0) 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.08) 0%, rgba(103,194,78,0) 70%)' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 px-4 md:px-0"
          >
            {/* 3D Soft Card Container for the Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/5] p-2 md:p-3 rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-[#050505] shadow-[inset_0_2px_15px_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.8)] border border-white/5">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative group">
                <ImageWithFallback
                  src={agencyImage}
                  alt="Especialista em UX e Performance da SYNTAX"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge - 3D Soft */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#151515] to-[#080808] border border-white/10 shadow-[inset_0_2px_15px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl z-20"
              >
                <div className="text-center space-y-1">
                  <div className="text-5xl md:text-7xl font-display font-black text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] tracking-tighter">5+</div>
                  <div className="text-[10px] md:text-sm font-mono uppercase tracking-[0.1em] text-[#67c24e] font-bold">Anos de Domínio</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 order-2"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 text-[#67c24e] text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-8">
              O Especialista
            </div>

            <div className="space-y-2">
              <h2 className="text-[12vw] sm:text-[10vw] md:text-[6vw] lg:text-[5.5rem] font-display tracking-tight leading-none text-[#cacaca]">
                <span className="font-normal">Gabriel </span>
                <span className="font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">Oliveira</span>
              </h2>
              
              <h3 className="text-[8vw] sm:text-[7vw] md:text-[4vw] lg:text-[3.5rem] font-display font-black tracking-tighter leading-[0.9] text-[#67c24e] uppercase">
                UX/UI Sênior
              </h3>
            </div>

            <div className="pt-6 border-t border-white/5">
              <div className="relative p-6 md:p-8 rounded-[1.5rem] bg-gradient-to-r from-[#67c24e]/10 to-transparent border-l-4 border-[#67c24e] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#67c24e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <p className="relative z-10 text-[#d1d1d1] font-sans font-light text-xl md:text-2xl lg:text-3xl leading-snug w-full drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Apaixonado por conhecer e mergulhar no comportamento humano, através da <strong className="text-white font-medium">Psicologia & UX/UI!</strong>
                </p>
              </div>
            </div>
            
          </motion.div>

        </div>

      </div>
    </section>
  );
}