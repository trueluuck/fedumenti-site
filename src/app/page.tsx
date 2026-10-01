import type { Metadata } from 'next';
import FCGHero from '@/components/home/FCGHero';
import CredentialsBand from '@/components/home/CredentialsBand';
import FCGOverview from '@/components/home/FCGOverview';
import FCGPortfolio from '@/components/home/FCGPortfolio';
import HoldingCTA from '@/components/home/HoldingCTA';

export const metadata: Metadata = {
  title: 'FCG — Fedumenti Group | Holding de Tecnologia e Inovação',
  description:
    'Holding proprietária da Linxar e aceleradora de soluções de software e tecnologia sediada em Guarapuava/PR.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FCGHero />
      <CredentialsBand />
      <FCGOverview />
      <FCGPortfolio />
      <HoldingCTA />
    </div>
  );
}
