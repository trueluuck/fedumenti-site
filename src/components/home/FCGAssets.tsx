import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FCGAssets() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="container-xl">
        
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold block">
            Ativos e Soluções
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            Negócios controlados pela FCG
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Cada iniciativa opera de forma autônoma para atender a demandas específicas de mercado:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Linxar */}
          <div className="p-8 rounded-xl border border-slate-200 bg-white flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">
                Software & Commerce Intelligence
              </span>
              <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                Linxar
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plataforma de inteligência de catálogo e distribuição de produtos. Desenvolvida para indústrias, atacadistas e grandes sellers automatizarem a publicação de milhares de SKUs em múltiplos marketplaces, licitações públicas e canais integrados.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/linxar"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
              >
                Acessar página da Linxar
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Card Google 360° */}
          <div className="p-8 rounded-xl border border-slate-200 bg-white flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">
                Presença Oficial no Google Maps
              </span>
              <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                Google 360°
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Serviço mantido pela equipe FCG para captação fotográfica profissional em HDR e criação de tours virtuais imersivos para empresas no Google Maps e Street View. Valor único de R$ 499,00 sem custos recorrentes.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/google-360"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
              >
                Acessar página do Google 360°
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
