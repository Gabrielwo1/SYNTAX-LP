import { Logo } from './Logo';
import { CtaButton } from './ui/CtaButton';

export function Header() {
  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[#020202]/80 backdrop-blur-lg border-b border-white/5 animate-fade-in-down"
    >
      <div className="flex items-center justify-center">
        {/* Removido o fundo branco que estava ocultando o texto branco da logo */}
        <Logo className="h-8 md:h-12 w-auto object-contain drop-shadow-2xl" />
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm font-mono tracking-widest uppercase text-white/80">
        <a href="#projetos" className="hover:text-[#67c24e] cursor-pointer transition-colors">Projetos</a>
        <a href="#servicos" className="hover:text-[#67c24e] cursor-pointer transition-colors">Serviços</a>
        <a href="#sobre" className="hover:text-[#67c24e] cursor-pointer transition-colors">Sobre</a>
        <a href="#contato" className="hover:text-[#67c24e] cursor-pointer transition-colors">Contato</a>
      </div>
      
      <CtaButton href="https://wa.me/554699247368" size="sm" showArrow={false}>
        Iniciar Projeto
      </CtaButton>
    </header>
  );
}