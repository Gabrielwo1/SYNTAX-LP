import { useEffect } from 'react';
import { Header } from '../components/Header';
import { LazySection } from '../components/LazySection';

// Custom Architecture Imports
import { HeroArch } from '../components/architecture/HeroArch';
import { ScaleProblemArch } from '../components/architecture/ScaleProblemArch';
import { PortfolioArch } from '../components/architecture/PortfolioArch';
import { ProblemSectionArch } from '../components/architecture/ProblemSectionArch';
import { LostValueArch } from '../components/architecture/LostValueArch';
import { SolutionSectionArch } from '../components/architecture/SolutionSectionArch';

// Reusing generic sections where appropriate (or updating later if needed)
import { ComparisonSection } from '../components/ComparisonSection';
import { ServicesArch } from '../components/architecture/ServicesArch';
import { FinalCTAArch } from '../components/architecture/FinalCTAArch';
import { Footer } from '../components/Footer';

export function ArchitecturePage() {
  useEffect(() => {
    document.title = "SYNTAX | Sites para Arquitetos e Engenheiros";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "A SYNTAX cria sites imersivos e de alto padrão para escritórios de arquitetura e engenharia civil. Transforme seus projetos em ferramentas de captação de clientes.";
    document.head.appendChild(metaDescription);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#020202] text-[#f5f5f5] selection:bg-[#67c24e]/30 selection:text-white flex flex-col"
      style={{ position: 'relative' }}
    >
      <Header />
      <HeroArch />
      <LazySection><ScaleProblemArch /></LazySection>
      <LazySection id="projetos"><PortfolioArch /></LazySection>
      <LazySection><ProblemSectionArch /></LazySection>
      <LazySection><LostValueArch /></LazySection>
      <LazySection><SolutionSectionArch /></LazySection>
      <LazySection><ComparisonSection /></LazySection>
      <LazySection id="servicos"><ServicesArch /></LazySection>
      <LazySection><FinalCTAArch /></LazySection>
      <LazySection id="contato"><Footer /></LazySection>
    </div>
  );
}
