import Link from 'next/link';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

export default function FCGHero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white border-b border-slate-100">
      <div className="container-xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge Holding */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-700">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            FCG · Fedumenti Group Holding
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-[1.08] text-balance">
            Tecnologia e inovação para o{' '}
            <span className="text-blue-600">comércio brasileiro.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed text-pretty">
            Desenvolvemos e aceleramos soluções inteligentes de software. Criadores da{' '}
            <strong className="text-slate-900 font-bold">LINXAR</strong> — infraestrutura de inteligência artificial para catálogo e dados de produtos omnichannel.
          </p>

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-primary-lg shadow-sm hover:shadow-md"
            >
              Conhecer a Linxar
              <ArrowRight size={18} />
            </a>

            <Link
              href="/google-360"
              className="w-full sm:w-auto btn-outline-lg flex items-center justify-center gap-2"
            >
              <MapPin size={18} className="text-blue-600" />
              Google 360° por R$ 499
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
