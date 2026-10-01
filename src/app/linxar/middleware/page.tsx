import type { Metadata } from 'next';
import { Cpu, Database, Network, MessageSquare, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Middleware — API e Cérebro Central de Produtos | FCG',
  description:
    'Linxar Middleware: infraestrutura de dados e API REST de alta performance para ERPs, hubs, e-commerces e mercados consultarem dados cadastrais e preços.',
};

export default function LinxarMiddlewarePage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold uppercase tracking-wider text-amber-800">
            Produto em Desenvolvimento · Ecossistema Linxar
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Linxar Middleware:{' '}
            <span className="text-blue-600">Cérebro de Produtos via API.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A infraestrutura central de inteligência para hubs, ERPs, sistemas de PDV, mercados e plataformas que precisam consultar produtos, dados fiscais, medidas e preços em tempo real.
          </p>
        </div>

        {/* Casos de Uso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Database size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Base de EANs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consulte pelo código de barras e receba instantaneamente a ficha técnica padronizada, marca, peso e categoria.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Integração ERP</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Elimine o erro humano de cadastro nos sistemas de gestão corporativa conectando direto ao nosso cérebro central.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Network size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Hubs & Mercados</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              APIs ultrarrápidas em formato JSON/REST com alta tolerância a falhas para operações de alto volume de transações.
            </p>
          </div>
        </div>

        {/* Code Snippet Demonstrativo */}
        <div className="card p-6 bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto space-y-2">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5">
              <Code2 size={14} /> GET /v1/products/lookup?ean=7891000100103
            </span>
            <span className="text-emerald-400">200 OK</span>
          </div>
          <pre className="text-slate-300 pt-2 leading-relaxed">
{`{
  "ean": "7891000100103",
  "name": "Produto Homologado Linxar",
  "ncm": "8471.30.12",
  "brand": "Linxar Standard",
  "enrichment_status": "verified",
  "dimensions": { "weight_g": 350, "height_cm": 15, "width_cm": 10 }
}`}
          </pre>
        </div>

        {/* Call to Action */}
        <div className="card p-8 sm:p-12 text-center bg-slate-50 border-slate-200 space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Precisa conectar seus sistemas ao Linxar Middleware?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Converse com a nossa equipe de engenharia para agendar uma POC técnica ou entender o modelo de API.
            </p>
          </div>

          <div>
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20API%20do%20Linxar%20Middleware"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Conversar com o Time Técnico
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
