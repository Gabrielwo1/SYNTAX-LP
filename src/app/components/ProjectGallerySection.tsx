import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgWordpress from 'figma:asset/577a06b88dfdd8ca663c2b847ebd5252c8255333.png';
import carrefourImg from 'figma:asset/30daa40ef1499f1b08d76902c0edc422bd016149.png';
import xTraderImg from 'figma:asset/f85e4b7f6f500547d77e3d76ea502704dbd9434c.png';
import maddaImg from 'figma:asset/87da2e86a39dd307303b70285c0ce2f91ee81747.png';

const row1 = [
  {
    id: 'p1',
    label: 'MADDA SWEET LANDING PAGE HIGH TICKET',
    tag: 'E-commerce',
    image: maddaImg,
  },
  {
    id: 'p2',
    label: 'Carrefour Food: Compliance Dashboard',
    tag: 'Product Design',
    image: carrefourImg,
  },
];

const row2 = [
  {
    id: 'p11',
    label: 'UX E DESENVOLVIMENTO WORDPRESS',
    tag: 'Web Design',
    image: imgWordpress,
  },
  {
    id: 'p3',
    label: 'X TRADER LANDING PAGE HIGH TICKET',
    tag: 'Landing Page + CRO',
    image: xTraderImg,
  },
];

interface CardProps {
  image?: string;
  CustomVisual?: React.ComponentType;
  label: string;
  tag: string;
}

function GalleryCard({ image, CustomVisual, label, tag }: CardProps) {
  return (
    <div className="relative flex-none w-[80vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] xl:w-[26vw] aspect-[16/11] rounded-sm overflow-hidden border border-white/5 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#0a0a0a] mx-3 md:mx-4">
      {CustomVisual ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-1000 opacity-90 group-hover:opacity-100 group-hover:scale-105">
          <div className="scale-[0.5] sm:scale-[0.6] md:scale-[0.7] lg:scale-[0.8] xl:scale-90 origin-center flex-shrink-0">
            <CustomVisual />
          </div>
        </div>
      ) : image ? (
        <ImageWithFallback
          src={image}
          alt={label}
          width={800}
          height={550}
          className="w-full h-full object-cover object-top opacity-90 scale-100 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
          style={{ imageRendering: 'high-quality' }}
          loading="lazy"
          decoding="async"
        />
      ) : null}

      {/* Persistent gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 z-50">
        <div className="space-y-2">
          <div className="text-[#67c24e] font-mono text-xs tracking-widest uppercase">{tag}</div>
          <div className="text-white font-display font-black text-lg md:text-xl uppercase leading-tight">{label}</div>
        </div>
      </div>
    </div>
  );
}

export function ProjectGallerySection() {
  return (
    <section className="py-16 md:py-24 bg-[#020202] relative overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-left  { animation: scroll-left  45s linear infinite; }
        .animate-scroll-right { animation: scroll-right 45s linear infinite; }
      `}</style>

      {/* Soft Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(103,194,78,0.1) 0%, rgba(103,194,78,0) 70%)' }} />

      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] relative z-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/5 border border-white/10 text-white/70 text-xs md:text-sm font-mono uppercase tracking-widest backdrop-blur-md mb-8">
            Cases Premium
          </div>
          <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5rem] font-display font-black uppercase tracking-tighter leading-[0.9] text-white">
            Nível <br />
            <span className="bg-gradient-to-r from-[#67c24e] to-[#80e563] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(103,194,78,0.3)]">
              Internacional.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 flex flex-col gap-6 md:gap-8 overflow-hidden w-[100vw] ml-[calc(50%-50vw)] py-4">

        {/* Row 1 — left */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1, ...row1].map((item, i) => (
            <GalleryCard key={`r1-${item.id}-${i}`} image={item.image} CustomVisual={item.CustomVisual} label={item.label} tag={item.tag} />
          ))}
        </div>

        {/* Row 2 — right */}
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] ml-[-12vw]">
          {[...row2, ...row2, ...row2, ...row2].map((item, i) => (
            <GalleryCard key={`r2-${item.id}-${i}`} image={item.image} CustomVisual={item.CustomVisual} label={item.label} tag={item.tag} />
          ))}
        </div>

      </div>
    </section>
  );
}