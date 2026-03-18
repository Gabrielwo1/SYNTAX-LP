import { motion, useMotionValue, useSpring } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    id: '01',
    title: 'Site Institucional',
    desc: 'Para empresas que precisam posicionar sua marca com autoridade.',
    image: 'https://images.unsplash.com/photo-1762279801044-3c37872f4534?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=800',
  },
  {
    id: '02',
    title: 'Landing Pages',
    desc: 'Páginas focadas em conversão para campanhas e captação de leads.',
    image: 'https://images.unsplash.com/photo-1692533801336-fb86a60f501f?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=800',
  },
  {
    id: '03',
    title: 'E-commerce',
    desc: 'Estruturas completas pensadas para transformar tráfego em receita.',
    image: 'https://images.unsplash.com/photo-1771790193799-2ee0163f2e87?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=800',
  },
  {
    id: '04',
    title: 'Redesign de sites',
    desc: 'Transformamos sites antigos em plataformas modernas de conversão.',
    image: 'https://images.unsplash.com/photo-1771014864099-11de9cb9a2ad?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=800',
  },
  {
    id: '05',
    title: 'Design System',
    desc: 'Padronização e escalabilidade visual para interfaces digitais complexas.',
    image: 'https://images.unsplash.com/photo-1761599821310-da0d6356b4f3?crop=entropy&cs=tinysrgb&fit=max&auto=format&q=80&w=800',
  }
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInside, setIsInside] = useState(false);
  
  // Follower physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame to throttle events and save JS execution time
      requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const handleMouseEnter = () => setIsInside(true);
    const handleMouseLeave = () => setIsInside(false);

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#000] relative md:cursor-none overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] z-10 relative">
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 text-white/70 text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-8">
            Soluções
          </div>
          <h3 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white">
            Qual é o seu<br/>
            <span className="bg-gradient-to-r from-[#67c24e] to-[#80e563] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,194,78,0.3)]">
              objetivo?
            </span>
          </h3>
        </div>

        {/* Brutalist List with Original Copy */}
        <div className="flex flex-col border-t border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative w-full border-b border-white/5 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-500 px-4 md:px-8 overflow-hidden"
            >
              {/* Background Fill Image on Hover */}
              <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 opacity-40 grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-[#67c24e]/10 to-black" />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="flex items-start md:items-center gap-6 md:gap-12 z-20">
                <span className="text-lg md:text-2xl font-mono text-white/20 group-hover:text-[#67c24e] transition-colors duration-300">
                  {service.id}
                </span>
                <h4 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tight text-white group-hover:text-[#67c24e] transition-all duration-300 uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                  {service.title}
                </h4>
              </div>
              
              <div className="md:max-w-sm z-20 opacity-70 group-hover:opacity-100 transition-opacity duration-300 pl-14 md:pl-0">
                <p className="text-gray-300 font-sans text-base md:text-lg font-light leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#67c24e] mix-blend-screen pointer-events-none z-50 hidden md:flex items-center justify-center shadow-[0_0_20px_#67c24e]"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          scale: hoveredIndex !== null ? 1.5 : 1,
          opacity: isInside ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.3, ease: 'easeOut' }, opacity: { duration: 0.3 } }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredIndex !== null ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </section>
  );
}