import { Linkedin, Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Ambient Footer Glow - Subtle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.1) 0%, rgba(103,194,78,0) 70%)' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10">
        <div className="py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-8 md:space-y-10 flex flex-col items-start text-left">
              <div className="flex items-center justify-start origin-left pt-4">
                <Logo className="h-10 md:h-14 lg:h-16 w-auto object-contain drop-shadow-2xl" />
              </div>
              <p className="text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed max-w-sm mt-4">
                Construindo as experiências digitais mais agressivas e imponentes do mercado.
              </p>
              
              <div className="flex gap-4 justify-start">
                {[Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href={i === 0 ? "https://instagram.com/syntax.ag" : "https://linkedin.com/company/syntaxag"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-[#2a2a2a] to-[#121212] flex items-center justify-center transition-all duration-500 group shadow-[inset_0_2px_10px_rgba(255,255,255,0.05),0_10px_20px_rgba(0,0,0,0.8)] hover:shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),0_15px_30px_rgba(103,194,78,0.2)] border border-white/5 hover:border-[#67c24e]/50 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#67c24e] transition-colors duration-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 pt-4 md:pl-8 lg:pl-16 text-left">
              <div className="space-y-8">
                <div className="text-xs font-mono uppercase tracking-widest text-white/50 font-bold">
                  Serviços
                </div>
                <ul className="space-y-4 text-gray-300 font-sans flex flex-col items-start">
                  <li><a href="#servicos" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">Plataformas Digitais</a></li>
                  <li><a href="#servicos" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">Experiências Web</a></li>
                  <li><a href="#servicos" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">E-Commerce</a></li>
                  <li><a href="#servicos" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">Estratégia de Marca</a></li>
                </ul>
              </div>

              <div className="space-y-8">
                <div className="text-xs font-mono uppercase tracking-widest text-white/50 font-bold">
                  Empresa
                </div>
                <ul className="space-y-4 text-gray-300 font-sans flex flex-col items-start">
                  <li><a href="#projetos" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">Projetos</a></li>
                  <li><a href="#sobre" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">A Agência</a></li>
                  <li><a href="#metodo" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">Método</a></li>
                  <li><a href="#contato" className="hover:text-[#67c24e] md:hover:pl-2 transition-all duration-300 flex items-center">Contato</a></li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1 space-y-8 flex flex-col items-start text-left">
                <div className="text-xs font-mono uppercase tracking-widest text-white/50 font-bold">
                  Contato
                </div>
                <ul className="space-y-4 text-gray-300 font-sans flex flex-col items-start">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#67c24e] shrink-0" />
                    <a href="mailto:gabrielux@uxsyntax.com" className="hover:text-[#67c24e] transition-colors duration-300 text-sm md:text-base">
                      gabrielux@uxsyntax.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#67c24e] shrink-0" />
                    <a href="mailto:adm@uxsyntax.com" className="hover:text-[#67c24e] transition-colors duration-300 text-sm md:text-base">
                      adm@uxsyntax.com
                    </a>
                  </li>
                  <li className="pt-4 flex justify-start w-full">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono uppercase tracking-widest backdrop-blur-md">
                      PATO BRANCO - PR
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-gray-500">
            <div>
              © {currentYear} SYNTAX. Digital Dominance.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
