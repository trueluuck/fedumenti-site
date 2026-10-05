import type { Metadata } from 'next';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Pref — GovTech & Compras Públicas | FCG',
  description:
    'O Oceano Azul B2G da Linxar: engenharia de catálogo estruturada para aprovação imediata em editais, pregões eletrônicos e no PNCP.',
};

export default function LinxarPrefPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero Executivo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 uppercase tracking-wider">
            <span className="font-semibold text-slate-900">Vertical 02 · Linxar Pref</span>
            <span>•</span>
            <span>O Oceano Azul B2G</span>
            <span>•</span>
            <span className="text-amber-700 font-semibold">Em Breve (Expansão de Vertical)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            GovTech & Compras Públicas
          </h1>

          <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-medium">
            O mercado governamental movimenta bilhões, mas afasta fornecedores pela alta fricção burocrática e exigências técnicas de cadastro. A Linxar resolve esse atrito.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Estruturamos engenharia de catálogo voltada para aprovação imediata em editais, pregões eletrônicos e no PNCP (Portal Nacional de Contratações Públicas), automatizando a conversão para os padrões oficiais brasileiros.
          </p>
        </div>

        {/* Pilares Executivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Proposta de Valor</span>
            <h3 className="font-bold text-slate-950 text-base">Aprovação em Editais</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Engenharia de catálogo estruturada para aprovação imediata em editais, pregões eletrônicos e no PNCP sem retrabalho.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Aceleração com IA</span>
            <h3 className="font-bold text-slate-950 text-base">CATMAT / CATSER</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              De-para automatizado com inteligência artificial para padronização de itens conforme os rígidos padrões do Governo Federal.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Orquestração Normativa</span>
            <h3 className="font-bold text-slate-950 text-base">Lei 14.133/21 & NCM</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Classificação tributária, verificação de NCM e adequação nativa à Nova Lei de Licitações para segurança jurídica total.
            </p>
          </div>
        </div>

        {/* Call to Action Institucional */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Acesso antecipado ao Linxar Pref
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Estamos selecionando empresas distribuidoras e fornecedores do setor público para a fase piloto do Linxar Pref. Fale diretamente com a equipe corporativa da FCG.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20Linxar%20Pref%20(GovTech)"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider"
            >
              Falar com Especialistas no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
