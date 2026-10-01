import type { Metadata } from 'next';
import FCGHero from '@/components/home/FCGHero';
import CredentialsBand from '@/components/home/CredentialsBand';
import LinxarShowcase from '@/components/home/LinxarShowcase';
import Google360Banner from '@/components/home/Google360Banner';
import HoldingCTA from '@/components/home/HoldingCTA';

export const metadata: Metadata = {
  title: 'FCG — Fedumenti Group | Tecnologia e Inovação',
  description:
    'Holding proprietária da Linxar — infraestrutura de inteligência artificial para catálogo e dados de produtos no comércio brasileiro.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FCGHero />
      <CredentialsBand />
      <LinxarShowcase />
      <Google360Banner />
      <HoldingCTA />
    </div>
  );
}
