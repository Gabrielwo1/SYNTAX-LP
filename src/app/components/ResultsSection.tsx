import { motion, useMotionValue, useTransform } from 'motion/react';
import { MouseEvent } from 'react';

const stats = [
  { value: '+150%', label: 'Conversão em Vendas', image: 'https://images.unsplash.com/photo-1745355918630-12bc8c1efbe4?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JlZW4lMjBhYnN0cmFjdCUyMGZsdWlkfGVufDF8fHx8MTc3MzQzNTQ2Nnww&ixlib=rb-4.1.0&q=80&w=600' },
  { value: '+40%', label: 'Tempo de Retenção', image: 'https://images.unsplash.com/photo-1755236402930-d88517a84c49?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWluaW1hbCUyMGFic3RyYWN0JTIwdGV4dHVyZXxlbnwxfHx8fDE3NzM0MzU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=600' },
  { value: '3x', label: 'Volume de Leads', image: 'https://images.unsplash.com/photo-1697899001862-59699946ea29?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwM2QlMjBhYnN0cmFjdCUyMGdlb21ldHJ5fGVufDF8fHx8MTc3MzQzNTQ2Nnww&ixlib=rb-4.1.0&q=80&w=600' },
  { value: '+90%', label: 'Percepção de Valor', image: 'https://images.unsplash.com/photo-1764303017897-16f5009d2bb1?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JlZW4lMjAzZCUyMHRlY2glMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzM0MzU0Njl8MA&ixlib=rb-4.1.0&q=80&w=600' },
];

function Soft3DCard({ stat, index }: { stat: { value: string; label: string; image: string }; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const rotateX = useTransform(mouseY, [-1, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [-1, 1], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 },
          rotateX: { type: "spring", stiffness: 400, damping: 30 },
          rotateY: { type: "spring", stiffness: 400, damping: 30 }
        }}
        className="relative h-full w-full rounded-sm bg-black backdrop-blur-xl border border-[#67c24e]/50 shadow-[0_10px_40px_rgba(103,194,78,0.15)] group overflow-hidden z-10 p-0"
      >
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={stat.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 opacity-55 grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-[#020202]/20" />
          <div className="absolute inset-0 bg-black/20 transition-colors duration-500" />
        </div>

        {/* Internal Card Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.3) 0%, rgba(103,194,78,0) 70%)' }} />

        {/* Content Layer */}
        <div 
          className="relative z-20 flex-1 flex flex-col p-8 md:p-10 h-full items-center justify-center text-center pointer-events-none" 
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="text-5xl md:text-7xl font-display font-black bg-gradient-to-br from-white via-gray-200 to-[#67c24e] bg-clip-text text-transparent mb-6 drop-shadow-[0_5px_15px_rgba(103,194,78,0.2)]">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-300">
            {stat.label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ResultsSection() {
  return (
    <section id="metodo" className="py-16 md:py-24 bg-[#020202] relative overflow-hidden">
      {/* Premium Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
      
      {/* Center Glow – replaced blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.12) 0%, rgba(9,67,52,0.05) 40%, rgba(103,194,78,0) 70%)' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 text-white/70 text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-8">
            Resultados Comprovados
          </div>
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white">
            A prova real vem <br/>
            <span className="bg-gradient-to-r from-[#67c24e] to-[#80e563] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,194,78,0.3)]">
              de quem usa.
            </span>
          </h2>
          <p className="mt-8 text-gray-400 max-w-2xl text-xl md:text-2xl font-sans font-light leading-relaxed">
            Plataformas digitais otimizadas geram impactos diretos:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 min-h-[250px] md:min-h-[350px]">
          {stats.map((stat, index) => (
            <Soft3DCard key={index} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-2xl md:text-4xl text-gray-400 font-sans font-light leading-relaxed">
            Seu site deixa de ser um gasto e passa a ser <br className="hidden md:block"/>
            <span className="font-display font-black text-white uppercase tracking-tight drop-shadow-[0_4px_15px_rgba(255,255,255,0.2)]">um ativo de crescimento exponencial.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}