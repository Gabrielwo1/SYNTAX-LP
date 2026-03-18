import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CtaButton } from './ui/CtaButton';

export function FinalCTA() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-[#020202] relative overflow-hidden flex justify-center px-4 md:px-8">
      {/* Soft Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.05) 0%, rgba(103,194,78,0) 70%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="group relative z-10 w-full max-w-6xl rounded-[20px] md:rounded-[32px] border border-[#67c24e]/20 bg-[#050505] p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shadow-[0_0_50px_rgba(103,194,78,0.05)] hover:shadow-[0_0_80px_rgba(103,194,78,0.15)] hover:border-[#67c24e]/40 transition-all duration-500 overflow-hidden"
      >
        {/* Animated CSS Abstract Background instead of an image that has text baked into it */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[20px] md:rounded-[32px]">
          
          {/* Animated overlay gradient */}
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(103,194,78,0.15)_0%,transparent_70%)] mix-blend-screen"
            animate={{ 
              x: ["-10%", "10%", "-10%"],
              y: ["-5%", "5%", "-5%"]
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />

          <motion.div 
            className="absolute -right-[20%] -top-[20%] w-[60%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(103,194,78,0.08)_0%,transparent_60%)] mix-blend-screen rotate-12"
            animate={{ 
              rotate: [12, 15, 12],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
          
          {/* Subtle grid pattern background overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 md:space-y-8 relative z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-md bg-[#1a1a1a] border border-white/5 shadow-inner w-fit mb-2">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#67c24e] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#67c24e]" />
            </div>
            <span className="text-[#67c24e] text-xs font-mono font-bold tracking-[0.15em] uppercase">
              STATUS: OPERACIONAL
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-display font-black tracking-tighter uppercase leading-[1.05]">
            <span className="text-white block">Pronto para criar sua</span>
            <span className="text-[#67c24e] block mt-1">Máquina de vendas?</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 font-sans text-base md:text-lg max-w-xl leading-relaxed mt-4">
            Pare de perder dinheiro com sites que não convertem. Assuma o controle do seu tráfego hoje.
          </p>

        </div>

        {/* Button */}
        <div className="relative z-10 shrink-0 mt-8 md:mt-0 w-full md:w-auto flex justify-start md:justify-end">
          <CtaButton href="https://wa.me/554699247368" className="w-full md:w-auto">
            Iniciar Projeto
          </CtaButton>
        </div>

      </motion.div>
    </section>
  );
}