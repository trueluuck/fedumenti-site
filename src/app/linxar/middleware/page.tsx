import type { Metadata } from 'next';
import { Cpu, Database, Network, Code2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Middleware — Cérebro de Produtos (API Headless) | FCG',
  description:
    'A Infraestrutura Invisível da Linxar: fornecendo dados ricos via API para ERPs, hubs de integração, comparadores de preço e redes de supermercados.',
};

export default function LinxarMiddlewarePage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero Executivo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 uppercase tracking-wider">
            <span className="font-semibold text-slate-900">Vertical 04 · Linxar Middleware</span>
            <span>•</span>
            <span>A Infraestrutura Invisível</span>
            <span>•</span>
            <span className="text-amber-700 font-semibold">Em Breve (Expansão Deep Tech)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Cérebro de Produtos (API Headless)
          </h1>

          <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-medium">
            O ativo de maior valuation da holding. A Linxar deixa de ser apenas a tela final e passa a ser o motor de inteligência consumido pelo mercado corporativo.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Consolidamos o cérebro central de produtos do Brasil, fornecendo dados cadastrais ricos e enriquecidos via REST API para ERPs, hubs de integração, comparadores de preço e redes de supermercados e marketplaces.
          </p>
        </div>

        {/* Pilares Executivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Proposta de Valor</span>
            <h3 className="font-bold text-slate-950 text-base">Cérebro Central B2B</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fornecimento de dados estruturados e enriquecidos via API para ERPs, sistemas de PDV, marketplaces e redes de varejo.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Aceleração com IA</span>
            <h3 className="font-bold text-slate-950 text-base">Base Rica em Milissegundos</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consultas ultrarrápidas por EAN, GTIN ou Código de Barras contendo pesos, medidas, descrições e atributos oficiais verificados.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Orquestração Deep Tech</span>
            <h3 className="font-bold text-slate-950 text-base">Arquitetura Headless</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              API REST com documentação OpenAPI desenhada de desenvolvedor para desenvolvedor, permitindo integração imediata com times de TI.
            </p>
          </div>
        </div>

        {/* Code Snippet Demonstrativo */}
        <div className="p-6 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto space-y-2">
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
  "dimensions": { "weight_g": 350, "height_cm": 15, "width_cm": 10 },
  "attributes": { "origin": "national", "tax_icms_st": true }
}`}
          </pre>
        </div>

        {/* Call to Action */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Conecte seus sistemas ao Linxar Middleware
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Se sua empresa desenvolve ERPs, hubs de integração ou sistemas de gestão e deseja integrar nosso catálogo de produtos, agende uma reunião técnica com os fundadores.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20API%20do%20Linxar%20Middleware"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider"
            >
              Falar com Engenharia de Produto
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
