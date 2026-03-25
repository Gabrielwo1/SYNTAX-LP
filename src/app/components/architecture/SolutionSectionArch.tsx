import { motion } from 'motion/react';
import { Layout, Zap, FileText, Gauge, TrendingUp } from 'lucide-react';
import solutionBg from '@/assets/975916bbd1b4ea562897ff70ed77f9e70aece157.png';
import { CtaButton } from '../ui/CtaButton';

const features = [
  {
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1772053966691-4926d83b3f5a?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGdlb21ldHJpYyUyMHNoYXBlcyUyMGRhcmslMjBncmVlbnxlbnwxfHx8fDE3NzMzNDA1Mzd8MA&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Arquitetura Imersiva',
    description: 'Design sofisticado que envolve o visitante e destaca a grandeza dos seus projetos em tela cheia.',
    className: 'md:col-span-2',
  },
  {
    icon: Gauge,
    image: 'https://images.unsplash.com/photo-1662972479309-11ef067219c7?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGR5bmFtaWMlMjBhYnN0cmFjdCUyMGdyZWVufGVufDF8fHx8MTc3MzM0MDUzN3ww&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Performance Impecável',
    description: 'Imagens em altíssima resolução que carregam instantaneamente sem frustrar o usuário final.',
    className: 'md:col-span-1',
  },
  {
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1588097247274-a174dd59f20d?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmx1aWQlMjBhYnN0cmFjdCUyMGdyZWVufGVufDF8fHx8MTc3MzM0NDk5M3ww&ixlib=rb-4.1.0&q=80&w=800&utm_source=figma&utm_medium=referral',
    title: 'Navegação Premium',
    description: 'Jornada desenhada para o alto padrão. Menos fricção, mais agendamentos qualificados.',
    className: 'md:col-span-1',
  },
  {
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1736843638421-9c3770d28c91?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwd2F2ZXMlMjBkYXJrfGVufDF8fHx8MTc3MzM0MDUzN3ww&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Posicionamento Forte',
    description: 'Textos que transmitem autoridade e afastam curiosos que buscam preço e não valor.',
    className: 'md:col-span-1',
  },
  {
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1700819000398-d1b72be76844?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGJsb2NrcyUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzMzNDA1Mzd8MA&ixlib=rb-4.1.0&q=80&w=800',
    title: 'Máquina de Captação',
    description: 'Integre integrações com WhatsApp e CRMs de obra para captar leads enquanto seu time atua.',
    className: 'md:col-span-1',
  },
];

export function SolutionSectionArch() {
  return (
    <section className="py-16 md:py-24 bg-[#020202] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={solutionBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[#020202]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.12) 0%, rgba(103,194,78,0) 70%)' }} />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-12 md:mb-16 items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 text-white/70 text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-8">
            Engenharia da Conversão
          </div>
          <h2 className="text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white">
            Como construímos <br/>
            <span className="bg-gradient-to-r from-[#67c24e] to-[#80e563] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,194,78,0.3)]">
              sua autoridade.
            </span>
          </h2>
          <p className="mt-8 text-gray-400 font-sans text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Construímos terrenos digitais inabaláveis. Seu site vai apresentar seus projetos 3D com a mesma imponência que você apresenta numa reunião presencial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`${feature.className} relative group`}
              >
                <div className="relative h-full overflow-hidden bg-black backdrop-blur-xl border border-[#67c24e]/50 transition-all duration-500 rounded-sm flex flex-col shadow-[0_10px_40px_rgba(103,194,78,0.15)] z-10 -translate-y-1 p-0">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={feature.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover scale-100 transition-transform duration-700 opacity-55 grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-[#020202]/20" />
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500" />
                  </div>

                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.3) 0%, rgba(103,194,78,0) 70%)' }} />

                  <div className="relative z-20 flex-1 flex flex-col p-8 md:p-10">
                    <div className="w-12 h-12 rounded-sm bg-[#67c24e]/20 backdrop-blur-md border border-[#67c24e]/50 flex items-center justify-center mb-8 transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                      <Icon className="w-5 h-5 text-[#67c24e] transition-colors duration-500" />
                    </div>

                    <div className="mt-auto space-y-3">
                      <div className="text-xs font-mono text-[#67c24e] tracking-widest uppercase transition-colors">
                        [ Pilar 0{index + 1} ]
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight text-[#67c24e] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-base md:text-lg font-sans text-white leading-relaxed font-medium transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 relative group"
          >
            <div className="relative h-full overflow-hidden bg-gradient-to-br from-black/80 to-[#020202] backdrop-blur-xl border border-white/5 transition-all duration-500 p-8 md:p-14 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-[0_20px_50px_rgba(103,194,78,0.12)] hover:border-[#67c24e]/50 z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#67c24e]/5 via-transparent to-[#67c24e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 bottom-0 w-[150px] bg-gradient-to-r from-transparent via-[#67c24e]/8 to-transparent skew-x-[-20deg] animate-scanline" />

              <div className="relative z-20 space-y-4 md:max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-white/5 border border-white/10 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#67c24e] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#67c24e]">Projetos Especiais</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white">
                  Pronto para a sua próxima<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#67c24e]">grande fundação?</span>
                </h3>
                <p className="text-lg font-sans text-gray-400 font-light">
                  Invista na principal vitrine do seu escritório hoje mesmo.
                </p>
              </div>

              <div className="relative z-20 w-full md:w-auto">
                <CtaButton href="https://wa.me/554699247368" className="w-full md:w-auto">
                  Agendar Reunião
                </CtaButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0%   { transform: translateX(-200%) skewX(-20deg); }
          100% { transform: translateX(800%) skewX(-20deg); }
        }
        .animate-scanline { animation: scanline 4s linear infinite; }
      `}</style>
    </section>
  );
}
