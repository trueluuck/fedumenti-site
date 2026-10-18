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
    <div className="relative min-h-[calc(100vh-76px)] flex items-center justify-center bg-[#fdfcfa] text-slate-900 overflow-hidden px-4 sm:px-8 lg:px-12 pt-28 pb-20">
      {/* Background glow com tom bordô e vermelho profundo sutil */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-[#881337]/10 via-[#be123c]/5 to-transparent blur-3xl pointer-events-none -z-10"
      />

      {/* Container horizontalmente estendido de ponta a ponta com respiro proporcional */}
      <div className="w-full max-w-6xl mx-auto text-center space-y-6 sm:space-y-7">
        
        {/* Frase 1: Headline de ponta a ponta, tamanho perfeitamente balanceado (3xl a 5xl) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-950 leading-[1.15] max-w-5xl mx-auto">
          Sua empresa já fatura no mercado tradicional.{' '}
          <span className="bg-gradient-to-r from-[#881337] via-[#9f1239] to-[#be123c] bg-clip-text text-transparent">
            Nós lideramos sua expansão no digital.
          </span>
        </h1>

        {/* Frase 2: Subtítulo amplo estendido de ponta a ponta */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-normal">
          A FCG é a holding estratégica focada no empresário consolidado que quer ampliar suas vendas, modernizar processos e construir canais digitais lucrativos sem perder tempo com agências amadoras.
        </p>

        {/* CTAs Proporcionais e elegantes */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20holding%20FCG."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-[#881337] px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.01] shadow-md hover:shadow-[#881337]/20"
          >
            <PhoneCall size={15} />
            <span>Entrar em Contato</span>
          </a>

          <Link
            href="/servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-[#be123c]/40 hover:text-[#881337] transition-all shadow-xs"
          >
            <span>Conhecer Nossas Soluções</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
