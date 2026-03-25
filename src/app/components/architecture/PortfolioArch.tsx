import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import xTraderImg from '@/assets/f85e4b7f6f500547d77e3d76ea502704dbd9434c.png';
import maddaImg from '@/assets/87da2e86a39dd307303b70285c0ce2f91ee81747.png';
import carrefourImg from '@/assets/30daa40ef1499f1b08d76902c0edc422bd016149.png';

type Project = {
  title: string;
  service: string;
  year: string;
  image?: string;
  CustomVisual?: React.ComponentType;
  color: string;
  glow: string;
  tag: string;
};

const projects: Project[] = [
  {
    title: 'X Trader',
    service: 'UX/UI Design e Implementação em Framer',
    year: '2024',
    image: xTraderImg,
    color: '#030602',
    glow: '#67c24e',
    tag: 'Landing Page + CRO',
  },
  {
    title: 'Maddá Sweets',
    service: 'UX/UI Design e Implementação em Framer',
    year: '2024',
    image: maddaImg,
    color: '#050404',
    glow: '#d98b8b',
    tag: 'Web Design + E-commerce',
  },
  {
    title: 'Carrefour Food',
    service: 'UX/UI e Design System',
    year: '2023',
    image: carrefourImg,
    color: '#020306',
    glow: '#0054A6',
    tag: 'UX/UI + SaaS',
  },
];

const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a 
      href="https://wa.me/554699247368"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] aspect-square sm:aspect-[4/5] rounded-xl overflow-hidden bg-[#050505] border border-white/10 flex-shrink-0 mx-3 md:mx-4 transition-all duration-700 hover:border-[#67c24e]/50 hover:shadow-[0_0_40px_rgba(103,194,78,0.15)] block"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" 
        style={{ background: `radial-gradient(circle at top right, ${project.glow}25 0%, transparent 60%)` }} 
      />

      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0a0a0a]">
        <div className="w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-center">
          {project.CustomVisual ? (
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-1000">
               <div className="scale-[0.65] sm:scale-[0.8] md:scale-[0.9] lg:scale-100 origin-center flex-shrink-0">
                 <project.CustomVisual />
               </div>
             </div>
          ) : project.image ? (
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent" />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8">
        
        <div className="flex justify-between items-start w-full">
            <span className="inline-flex items-center px-3 py-1.5 rounded-sm bg-black/60 border border-white/10 text-white text-[10px] md:text-xs font-mono tracking-widest uppercase backdrop-blur-md group-hover:border-[#67c24e]/50 group-hover:text-[#67c24e] transition-colors duration-300">
              {project.tag}
            </span>
            <span className="text-white/60 font-mono text-xs bg-black/60 px-3 py-1.5 rounded-sm border border-white/5 backdrop-blur-md">
              {project.year}
            </span>
        </div>

        <div className="flex flex-col mt-auto">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tighter mb-2 drop-shadow-xl group-hover:text-[#67c24e] transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm md:text-base font-sans font-light leading-relaxed">
            {project.service}
          </p>
        </div>
      </div>
    </a>
  );
}

export function PortfolioArch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 250]);

  return (
    <section ref={containerRef} className="bg-[#020202] py-12 md:py-20 relative overflow-hidden flex flex-col min-h-0 justify-center">
      
      <motion.div style={{ y: yBg }} className="absolute top-[20%] left-0 w-full overflow-hidden pointer-events-none z-0 opacity-[0.02] flex select-none mix-blend-screen">
        <div className="flex whitespace-nowrap animate-scroll-right text-[22vw] font-display font-black uppercase tracking-tighter text-white">
          {Array(4).fill('ARQUITETURA • ALTO PADRÃO • PLANTAS ').map((text, i) => (
             <span key={i} className="px-8">{text}</span>
          ))}
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.1) 0%, rgba(103,194,78,0) 70%)' }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10 mb-8 md:mb-12">
        <motion.div style={{ y: yText }} className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-16">
          <div className="flex flex-col items-start w-full lg:w-2/3">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-[#67c24e]/10 border border-[#67c24e]/30 text-[#67c24e] text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-6 md:mb-8 shadow-[0_0_20px_rgba(103,194,78,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#67c24e] animate-pulse" />
              Impacto Visual
            </div>
            <h2 className="text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white">
              Seu escritório de<br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-[#67c24e] to-[#80e563] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,194,78,0.3)]">
                portas abertas 24h.
              </span>
            </h2>
          </div>
          
          <div className="w-full lg:w-1/3 flex flex-col justify-end">
            <p className="text-gray-400 text-base md:text-xl font-sans font-light leading-relaxed">
              Destaque a complexidade das suas obras e o requinte da sua arquitetura em galerias dinâmicas e responsivas.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 w-[100vw] ml-[calc(50%-50vw)] overflow-hidden py-6 md:py-10">
        <div className="absolute top-0 bottom-0 left-0 w-[10vw] md:w-[15vw] bg-gradient-to-r from-[#020202] to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[10vw] md:w-[15vw] bg-gradient-to-l from-[#020202] to-transparent z-30 pointer-events-none" />

        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] items-stretch">
          {duplicatedProjects.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left-infinite {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right-infinite {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-infinite-scroll {
          animation: scroll-left-infinite 45s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right-infinite 70s linear infinite;
        }
      `}</style>
    </section>
  );
}
