import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { LazySection } from '../components/LazySection';

// Static imports for all sections
import { Portfolio } from '../components/Portfolio';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { ProjectGallerySection } from '../components/ProjectGallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ResultsSection } from '../components/ResultsSection';
import { ServicesSection } from '../components/ServicesSection';
import { AboutSection } from '../components/AboutSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

// Preload Hero Image for faster LCP
if (typeof document !== 'undefined' && !document.getElementById('preload-hero')) {
  const preloadHero = document.createElement('link');
  preloadHero.id = 'preload-hero';
  preloadHero.rel = 'preload';
  preloadHero.as = 'image';
  preloadHero.fetchPriority = 'high';
  preloadHero.href = 'https://images.unsplash.com/photo-1762258344624-52d8c3b74c66?crop=entropy&cs=tinysrgb&fit=max&auto=format&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBnZW9tZXRyaWMlMjAzZCUyMHRleHR1cmV8ZW58MXx8fHwxNzczMzQ4NDU2fDA&ixlib=rb-4.1.0&q=80&w=1200';
  document.head.appendChild(preloadHero);
}

export function Home() {
  useEffect(() => {
    document.title = "SYNTAX | Agência Digital - Dominância Online";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "A SYNTAX cria sites estratégicos, pensados em UX, performance e conversão para transformar visitantes em clientes reais. Experiências digitais agressivas e imponentes.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "agência digital, criação de sites, landing pages, e-commerce, UX, UI, conversão, performance";
    document.head.appendChild(metaKeywords);
    
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16 7C16 5.34315 14.6569 4 13 4H10C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10H14C15.6569 10 17 11.3431 17 13C17 14.6569 15.6569 16 14 16H10C8.34315 16 7 14.6569 7 13' stroke='%2367c24e' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#020202] text-[#f5f5f5] selection:bg-[#67c24e]/30 selection:text-white flex flex-col"
      style={{ position: 'relative' }}
    >
      <Header />
      <Hero />
      <LazySection id="projetos"><Portfolio /></LazySection>
      <LazySection><ProblemSection /></LazySection>
      <LazySection><SolutionSection /></LazySection>
      <LazySection><ComparisonSection /></LazySection>
      <LazySection><ProjectGallerySection /></LazySection>
      <LazySection><TestimonialsSection /></LazySection>
      <LazySection><ResultsSection /></LazySection>
      <LazySection id="servicos"><ServicesSection /></LazySection>
      <LazySection id="sobre"><AboutSection /></LazySection>
      <LazySection><FinalCTA /></LazySection>
      <LazySection id="contato"><Footer /></LazySection>
    </div>
  );
}
