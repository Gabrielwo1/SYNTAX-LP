import { motion } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';
import { PremiumCard } from './ui/PremiumComponents';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CtaButton } from './ui/CtaButton';

const comparison = {
  common: [
    'Apenas visualmente bonito',
    'Sem estratégia de conversão',
    'Experiência de navegação confusa',
    'Carregamento lento',
    'Não atrai nem converte leads',
  ],
  syntax: [
    'Arquitetura baseada em UX',
    'Copy agressiva e estratégica',
    'Foco absoluto em conversão',
    'Performance extrema',
    'Construído para escalar tráfego',
  ],
};

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#020202]">
      {/* Static Captivating Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768979121229-392fce4957ab?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZWxlZ2FudCUyMGFic3RyYWN0JTIwM2QlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MzM0NTI0Nnww&ixlib=rb-4.1.0&q=80&w=1200"
          alt="Premium Dark Background"
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#020202]/80 to-[#020202]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)]" />
      </div>

      {/* Glows – replaced blur with radial gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)' }} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.08) 0%, rgba(103,194,78,0) 70%)' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 text-white/70 text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            Comparativo
          </div>
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white">
            Qual você <br/>
            <span className="bg-gradient-to-r from-[#67c24e] to-[#80e563] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,194,78,0.3)]">
              prefere pro seu negócio?
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Common */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PremiumCard color="white" hoverEffect="none" className="p-8 md:p-12 h-full opacity-70 hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-2xl border-white/5">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Padrão de Mercado</div>
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white">Site Comum</h3>
                </div>

                <div className="space-y-6">
                  {comparison.common.map((item, index) => (
                    <div key={index} className="flex items-center gap-5 text-gray-400 group">
                      {/* 3D Soft X Icon */}
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-[1.25rem] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),inset_0_-2px_4px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.8)] border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                        <X className="w-5 h-5 text-gray-500 group-hover:text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors duration-500" strokeWidth={2.5} />
                      </div>
                      <span className="text-lg md:text-xl font-sans font-light group-hover:text-gray-300 transition-colors duration-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </motion.div>

          {/* SYNTAX */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PremiumCard color="green" hoverEffect="glow" className="p-8 md:p-12 h-full bg-gradient-to-br from-[#094334]/40 to-black/80 backdrop-blur-2xl border-[#67c24e]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#67c24e]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#67c24e]/10 border border-[#67c24e]/30">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#67c24e]">Máquina de Vendas</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white">A Experiência SYNTAX</h3>
                </div>

                <div className="space-y-6">
                  {comparison.syntax.map((item, index) => (
                    <div key={index} className="flex items-center gap-5 text-white group">
                      {/* 3D Soft Check Icon */}
                      <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-[1.25rem] bg-gradient-to-b from-[#1a3a14] to-[#0a1708] flex items-center justify-center flex-shrink-0 shadow-[inset_0_2px_4px_rgba(103,194,78,0.3),inset_0_-2px_4px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.8)] border border-[#67c24e]/30 group-hover:border-[#67c24e]/60 group-hover:shadow-[inset_0_2px_4px_rgba(103,194,78,0.5),0_10px_30px_rgba(103,194,78,0.3)] transition-all duration-500 group-hover:-translate-y-1">
                        <Check className="w-5 h-5 text-[#67c24e] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-colors duration-500" strokeWidth={3} />
                      </div>
                      <span className="text-lg md:text-xl font-sans font-bold tracking-wide group-hover:text-[#67c24e] transition-colors duration-500 uppercase">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </motion.div>
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
            Criar minha máquina<br className="block md:hidden"/> de vendas
          </CtaButton>
        </motion.div>

      </div>
    </section>
  );
}