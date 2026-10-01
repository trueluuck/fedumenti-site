import Link from 'next/link';
import { ArrowRight, Sparkles, Camera, ExternalLink } from 'lucide-react';

export default function FCGPortfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-black uppercase font-mono tracking-widest text-slate-400">
            Portfólio de Ativos
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Nossas Empresas & Soluções
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A FCG atua no mercado por meio de marcas e serviços dedicados. Conheça as páginas específicas de cada frente:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 01: LINXAR */}
          <div className="card p-8 sm:p-10 border-blue-200 bg-gradient-to-b from-blue-50/20 to-white flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
                  <Sparkles size={13} />
                  Software & Inteligência Artificial
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">01</span>
              </div>

              <h3 className="font-heading font-black text-3xl text-slate-900">
                LINXAR<span className="text-blue-600">.</span>
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nossa principal marca e plataforma de <strong>Commerce Intelligence</strong>. Automatiza e padroniza dados de catálogos com IA generativa para marketplaces (Mercado Livre, Shopee, Amazon), licitações públicas, dropshipping e integração via API.
              </p>

              <div className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <p><strong>Linhas ativas:</strong> Linxar Hub · Linxar Pref · Linxar Workplace · Linxar Middleware</p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/linxar"
                className="btn-primary w-full text-center text-sm uppercase tracking-wider justify-between"
              >
                <span>Conhecer a Linxar e Produtos</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Card 02: GOOGLE 360° */}
          <div className="card p-8 sm:p-10 border-slate-200 bg-gradient-to-b from-slate-50/50 to-white flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <Camera size={13} className="text-emerald-600" />
                  Serviço Presencial Especializado
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">02</span>
              </div>

              <h3 className="font-heading font-black text-3xl text-slate-900">
                Google 360°
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Serviço oficial mantido pela equipe FCG para criação de <strong>tours virtuais imersivos em alta definição</strong> diretamente na ficha do Google Maps da sua empresa. Aumenta a autoridade, presença local e decisões de compra.
              </p>

              <div className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                <p><strong>Preço único FCG:</strong> R$ 499,00 sem anuidade nem mensalidade.</p>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/google-360"
                className="btn-outline w-full text-center text-sm uppercase tracking-wider justify-between text-slate-800 hover:border-slate-400"
              >
                <span>Ver Detalhes do Google 360°</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
