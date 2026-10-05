import type { Metadata } from 'next';
import FCGHero from '@/components/home/FCGHero';
import FCGThesis from '@/components/home/FCGThesis';
import FCGAssets from '@/components/home/FCGAssets';
import FCGInstitutional from '@/components/home/FCGInstitutional';

export const metadata: Metadata = {
  title: 'FCG — Fedumenti Group | Tecnologia e Escala para Empresas Consolidadas',
  description:
    'Holding de tecnologia e venture builder focada no empreendedor consolidado que busca escala no mercado digital através de software e presença corporativa.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <FCGHero />
      <FCGThesis />
      <FCGAssets />
      <FCGInstitutional />
    </div>
  );
}
