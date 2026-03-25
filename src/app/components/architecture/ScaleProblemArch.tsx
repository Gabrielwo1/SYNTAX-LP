import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ScaleProblemArch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale effect on the background to represent "magnitude"
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacityText = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#020202] relative overflow-hidden min-h-[90vh] flex items-center">
      
      {/* Background with scaling effect to represent size/magnitude */}
      <motion.div 
        style={{ scale: scaleImage }}
        className="absolute inset-0 z-0 origin-center pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1762228498877-3e50669d6756?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHwzZCUyMGFic3RyYWN0JTIwYXJjaGl0ZWN0dXJlJTIwZGFya3xlbnwxfHx8fDE3NzMzNDYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1920" 
          alt="Abstract Scale" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2">
            <motion.div
              style={{ opacity: opacityText }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-[#67c24e]/30 text-[#67c24e] text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#67c24e] animate-pulse" />
                Dissonância de Escala
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter text-white leading-[1.05]">
                A magnitude da sua obra não cabe <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67c24e] to-[#80e563]">no Instagram.</span>
              </h2>
              
              <div className="space-y-6 text-gray-400 font-sans text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Você gasta meses planejando fundações, erguendo estruturas de milhares de metros quadrados e renderizando imagens 4K com riqueza absurda de detalhes.
                </p>
                <p>
                  E onde tudo isso vai parar? Espremido numa telinha de rede social, competindo por 3 segundos de atenção com dancinhas e memes, ou pior: num link de Drive/PDF que demora 5 minutos para carregar.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-white/10 bg-[#050505] shadow-[0_0_50px_rgba(103,194,78,0.1)] group pointer-events-none"
            >
              {/* Graphic showing tiny phone vs huge project */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-4 md:inset-8 border border-[#67c24e]/20 rounded-sm bg-[radial-gradient(circle_at_center,rgba(103,194,78,0.05),transparent)] flex items-center justify-center overflow-hidden">
                  
                  {/* Huge background simulation */}
                  <div className="absolute w-[200%] h-[200%] border border-white/5 opacity-30 animate-[spin_60s_linear_infinite]"
                       style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px)' }} />

                  {/* Tiny constraints simulation box */}
                  <motion.div 
                     animate={{ scale: [1, 0.95, 1] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="relative z-10 w-24 h-48 md:w-32 md:h-64 border border-red-500/50 bg-black/60 backdrop-blur-md rounded-lg flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                  >
                    <div className="w-12 h-1 bg-white/10 rounded-full" />
                    <div className="text-red-500/80 text-[10px] uppercase font-mono tracking-widest text-center px-2">
                       ESPAÇO INSUFICIENTE
                    </div>
                  </motion.div>

                  <div className="absolute bottom-8 left-8">
                     <div className="text-[#67c24e] font-mono text-sm tracking-widest uppercase">PROJETO REAL</div>
                     <div className="text-white/40 font-mono text-xs">10.000m² • 4K RENDER</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
