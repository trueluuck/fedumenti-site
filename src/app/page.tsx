import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FCG — Fedumenti Group | Expansão Digital para Empresas Consolidadas',
  description:
    'Sua empresa já fatura no mercado tradicional. Nós lideramos sua expansão no digital. A FCG é a holding estratégica focada no empresário consolidado.',
};

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#fdfcfa] text-slate-900 overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      {/* Background glow com tom bordô/vinho aveludado */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#881337]/10 via-[#581c87]/5 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Frase 1 (Headline com o degradê bordô / vinho / púrpura nobre da FCG) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08] text-balance">
          Sua empresa já fatura no mercado tradicional.{' '}
          <span className="bg-gradient-to-r from-[#881337] via-[#9d174d] to-[#701a75] bg-clip-text text-transparent">
            Nós lideramos sua expansão no digital.
          </span>
        </h1>

        {/* Frase 2 (Subtítulo explicativo da FCG) */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal text-pretty">
          A FCG é a holding estratégica focada no empresário consolidado que quer ampliar suas vendas, modernizar processos e construir canais digitais lucrativos sem perder tempo com agências amadoras.
        </p>

        {/* CTAs Limpos sem uso do termo 'Diretoria' */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20holding%20FCG."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-900 hover:bg-[#881337] px-8 py-4 text-sm font-bold text-white transition-all hover:scale-[1.01] shadow-md hover:shadow-[#881337]/20"
          >
            <PhoneCall size={16} />
            <span>Entrar em Contato</span>
          </a>

          <Link
            href="/servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-[#9d174d]/40 hover:text-[#881337] transition-all shadow-xs"
          >
            <span>Conhecer Nossas Soluções</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  );
}
