import type { Metadata } from 'next';
import { Cpu, Database, Network, Code2, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Middleware — Cérebro de Produtos (API Headless) | FCG',
  description:
    'A Infraestrutura Invisível da Linxar: fornecendo dados ricos via API para ERPs, hubs de integração, comparadores de preço e redes de supermercados.',
};

export default function LinxarMiddlewarePage() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero Executivo */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider">
            <span className="font-bold text-blue-700">Vertical 04 · Linxar Middleware</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">A Infraestrutura Invisível</span>
            <span className="text-slate-400">•</span>
            <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">Em Breve (Deep Tech API)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Cérebro de Produtos (API Headless)
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            O ativo de maior valuation da holding. A Linxar deixa de ser apenas a tela final e passa a ser o motor de inteligência consumido pelo mercado corporativo.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Consolidamos o cérebro central de produtos do Brasil, fornecendo dados cadastrais ricos e enriquecidos via REST API para ERPs, hubs de integração, comparadores de preço e redes de supermercados e marketplaces.
          </p>
        </div>

        {/* Pilares Executivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Proposta de Valor</span>
            <h3 className="font-bold text-slate-950 text-base">Cérebro Central B2B</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fornecimento de dados estruturados e enriquecidos via API para ERPs, sistemas de PDV, marketplaces e redes de varejo.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Aceleração com IA</span>
            <h3 className="font-bold text-slate-950 text-base">Base Rica em Milissegundos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consultas ultrarrápidas por EAN, GTIN ou Código de Barras contendo pesos, medidas, descrições e atributos oficiais verificados.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Orquestração Deep Tech</span>
            <h3 className="font-bold text-slate-950 text-base">Arquitetura Headless</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              API REST com documentação OpenAPI desenhada de desenvolvedor para desenvolvedor, permitindo integração imediata com times de TI.
            </p>
          </div>
        </div>

        {/* Code Snippet Demonstrativo com Mockup Clean */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xs overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-3 text-slate-500">
            <span className="flex items-center gap-2 text-slate-800 font-semibold">
              <Code2 size={15} className="text-blue-600" />
              <span>GET /v1/products/lookup?ean=7891000100103</span>
            </span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">200 OK</span>
          </div>
          <pre className="p-6 text-slate-800 leading-relaxed overflow-x-auto bg-slate-900 text-slate-100 rounded-b-3xl">
{`{
  "ean": "7891000100103",
  "name": "Produto Homologado Linxar",
  "ncm": "8471.30.12",
  "brand": "Linxar Standard",
  "enrichment_status": "verified",
  "dimensions": { "weight_g": 350, "height_cm": 15, "width_cm": 10 },
  "attributes": { "origin": "national", "tax_icms_st": true }
}`}
          </pre>
        </div>

        {/* Call to Action */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
            Conecte seus sistemas ao Linxar Middleware
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Se sua empresa desenvolve ERPs, hubs de integração ou sistemas de gestão e deseja integrar nosso catálogo de produtos, agende uma reunião técnica com os fundadores.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20API%20do%20Linxar%20Middleware"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Falar com Engenharia de Produto</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
