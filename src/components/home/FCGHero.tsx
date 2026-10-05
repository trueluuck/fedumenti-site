import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FCGHero() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="container-xl">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Fedumenti Group · Holding de Tecnologia
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-tight text-balance">
            Tecnologia e escala para empresas consolidadas.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-pretty font-normal">
            A FCG é um grupo de tecnologia focado no empreendedor que já construiu uma operação sólida e busca estrutura proprietária de software, inteligência de dados e eficiência para acelerar sua expansão no mercado digital.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/sobre"
              className="btn-primary"
            >
              Sobre a holding
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/5542999217736"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Contato direto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
