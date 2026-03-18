import { motion } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import { CtaButton } from './ui/CtaButton';

const problems = [
  {
    num: '01',
    title: 'Sem Estratégia',
    desc: 'Seu site atual é apenas uma vitrine estática. O visitante entra, não entende a sua oferta e vai embora em segundos.',
  },
  {
    num: '02',
    title: 'UX Confusa',
    desc: 'Jornadas longas e difíceis. Se o cliente precisar pensar muito para comprar ou entrar em contato, ele não vai.',
  },
  {
    num: '03',
    title: 'Zero Conversão',
    desc: 'Você paga por tráfego, mas o design não converte. Um site bonito sem arquitetura de vendas é dinheiro no lixo.',
  },
];

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#020202] relative overflow-hidden flex flex-col justify-center min-h-0">

      {/* Lightweight static background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Static ambient blobs – replaced blur for performance */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(17,17,17,0.8) 0%, rgba(17,17,17,0) 70%)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0) 70%)' }} />

        {/* CSS panning grid – uses transform instead of background-position for GPU compositing */}
        <div className="absolute inset-[-64px] overflow-hidden opacity-[0.06]"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)',
          }}
        >
          <div
            className="absolute inset-0 animate-pan-grid will-change-transform"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        {/* Noise overlay – static */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMS41IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')] z-0" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sticky Left Content */}
          <div className="lg:w-5/12 flex flex-col justify-start">
          <div className="sticky top-40 relative pl-6 md:pl-10">
            {/* CSS scanner line */}
            <div className="absolute left-0 top-0 w-[2px] h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.2)] animate-scanner" />
            <div className="absolute left-[0.5px] top-0 w-[1px] h-full bg-white/5" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 text-white/70 text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                Alerta Crítico
              </div>

              <h2 className="text-[11vw] sm:text-[8vw] md:text-6xl lg:text-[4.5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white mb-8">
                A maioria<br />falha <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-[#67c24e] to-[#80e563] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,194,78,0.3)]">
                  antes de começar.
                </span>
              </h2>

              <p className="text-base md:text-xl text-gray-400 font-sans font-light leading-relaxed max-w-xl">
                O mercado está cheio de cartões de visita caros e inúteis. Se o seu projeto não foi estruturado para dominar, ele foi estruturado para fracassar.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="lg:w-7/12 flex flex-col gap-8 md:gap-12 mt-10 lg:mt-0 pb-12 perspective-[1500px]">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="relative transform-gpu"
            >
              <motion.div
                className="group/card relative overflow-hidden bg-black/80 border p-8 md:p-12 rounded-sm z-10 cursor-pointer"
                style={{
                  borderColor: 'rgba(103,194,78,0.5)',
                  boxShadow: '0 20px 50px rgba(103,194,78,0.12)',
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.3) 0%, rgba(103,194,78,0) 70%)' }} />

                <div className="relative z-20 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                  <div className="text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:1px_#67c24e] drop-shadow-[0_0_20px_rgba(103,194,78,0.4)] transition-all duration-500 font-mono tracking-tighter">
                    {problem.num}
                  </div>

                  <div className="space-y-4 pt-2 md:pt-4">
                    <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#67c24e] transition-all duration-500">
                      {problem.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 font-sans font-light leading-relaxed transition-colors duration-300">
                      {problem.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center w-full relative z-20 px-4 md:px-0"
        >
          <CtaButton href="https://wa.me/554699247368" className="w-full md:w-auto md:min-w-[400px]">
            Quero parar de<br className="block md:hidden"/> perder vendas
          </CtaButton>
        </motion.div>

      </div>

      <style>{`
        @keyframes pan-grid {
          0%   { transform: translate(0px, 0px); }
          100% { transform: translate(64px, 64px); }
        }
        .animate-pan-grid { animation: pan-grid 6s linear infinite; }

        @keyframes scanner-move {
          0%   { top: 0%; }
          100% { top: calc(100% - 8rem); }
        }
        .animate-scanner {
          animation: scanner-move 4s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}