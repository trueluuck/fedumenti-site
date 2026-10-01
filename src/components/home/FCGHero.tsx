import Link from 'next/link';
import { ArrowRight, Building2, Sparkles } from 'lucide-react';

export default function FCGHero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white border-b border-slate-100">
      <div className="container-xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge Holding */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-700">
            <Building2 size={14} className="text-blue-600" />
            Fedumenti Group · Holding de Tecnologia
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-[1.08] text-balance">
            Construindo e acelerando o futuro da <span className="text-blue-600">tecnologia no Brasil.</span>
          </h1>

          {/* Subtitle Explicativo Puro FCG */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed text-pretty">
            A <strong>FCG (Fedumenti Group)</strong> é uma holding empresarial e venture builder sediada em Guarapuava/PR. Desenvolvemos soluções proprietárias de software, operamos ativos de tecnologia e impulsionamos negócios digitais de alto impacto.
          </p>

          {/* Ações Institucionais */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sobre"
              className="w-full sm:w-auto btn-primary-lg shadow-sm"
            >
              Conhecer a FCG
              <ArrowRight size={18} />
            </Link>

            <a
              href="#portfolio"
              className="w-full sm:w-auto btn-outline-lg"
            >
              Ver Empresas & Ativos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
