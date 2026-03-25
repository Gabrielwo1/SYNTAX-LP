import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, EyeOff } from 'lucide-react';

export function LostValueArch() {
  const cards = [
    {
      icon: EyeOff,
      title: 'A Primeira Impressão Falha',
      desc: 'Um cliente de R$ 500 mil entra no seu site. Se ele demora a carregar fotos pesadas ou parece um template de 2012, esse cliente vai fechar com o concorrente (que cobra mais caro que você).'
    },
    {
      icon: TrendingDown,
      title: 'O Efeito "Vitrine Quebrada"',
      desc: 'Não importa se suas plantas são perfeitas e se o As Built não tem falhas. A percepção de valor do seu serviço despenca quando a vitrine online aparenta amadorismo e descaso.'
    },
    {
      icon: AlertTriangle,
      title: 'Negociações por Preço',
      desc: 'Sem um ambiente digital que exale luxo, autoridade e solidez imobiliária, você passa a atrair clientes focados puramente em buscar o metro quadrado mais barato.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#020202] relative overflow-hidden flex flex-col justify-center">
      {/* Soft Top/Bottom Fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] pointer-events-none z-10" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-20">
        
        <div className="text-center md:max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white">
              O preço de não ter <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">uma vitrine à altura.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting line behind cards */}
          <div className="hidden md:block absolute top-[50px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent z-0" />

          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative z-10 group"
            >
              <div className="h-full bg-[#050505] border border-white/5 hover:border-red-500/30 rounded-sm p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(239,68,68,0.05)]">
                <div className="w-14 h-14 bg-red-500/5 border border-red-500/20 rounded-sm flex items-center justify-center mb-8 group-hover:bg-red-500/10 transition-colors duration-500">
                  <card.icon className="w-6 h-6 text-red-400" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 font-sans text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
