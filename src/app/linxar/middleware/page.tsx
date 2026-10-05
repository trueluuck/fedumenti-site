import type { Metadata } from 'next';
import { Cpu, Database, Network, Code2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Middleware — API de Produtos B2B | FCG',
  description:
    'Linxar Middleware: infraestrutura de dados e API REST para ERPs, hubs, e-commerces e mercados consultarem dados cadastrais e preços oficiais.',
};

export default function LinxarMiddlewarePage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero */}
        <div className="space-y-4">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Linxar Middleware · Cérebro Central de Produtos
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            API de dados e especificações de produtos.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A infraestrutura central de inteligência para hubs, ERPs, sistemas de PDV, mercados e plataformas que precisam consultar produtos, dados fiscais, medidas e preços em tempo real.
          </p>
        </div>

        {/* Casos de Uso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <Database size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Base de EANs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consulte pelo código de barras e receba a ficha técnica padronizada, marca, peso e categoria.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <Cpu size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Integração ERP</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Elimine o erro humano de cadastro nos sistemas de gestão corporativa conectando direto à API.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <Network size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Hubs & Mercados</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              APIs rápidas em formato JSON/REST com alta disponibilidade para operações de alto volume.
            </p>
          </div>
        </div>

        {/* Code Snippet Demonstrativo */}
        <div className="p-6 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto space-y-2">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span className="flex items-center gap-1.5">
              <Code2 size={14} /> GET /v1/products/lookup?ean=7891000100103
            </span>
            <span className="text-slate-400">200 OK</span>
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
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Conecte seus sistemas ao Linxar Middleware
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Converse com a nossa equipe de engenharia para agendar uma POC técnica ou entender a documentação da API.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20o%20Linxar%20Middleware"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider"
            >
              Falar com Engenharia
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
