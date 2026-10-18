import type { Metadata } from 'next';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Pref — GovTech & Compras Públicas | FCG',
  description:
    'O Oceano Azul B2G da Linxar: engenharia de catálogo estruturada para aprovação imediata em editais, pregões eletrônicos e no PNCP.',
};

export default function LinxarPrefPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-slate-800">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero Executivo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider">
            <span className="font-bold text-blue-400">Vertical 02 · Linxar Pref</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">O Oceano Azul B2G</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400 font-bold">Em Breve (Expansão de Vertical)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            GovTech & Compras Públicas
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            O mercado governamental movimenta bilhões, mas afasta fornecedores pela alta fricção burocrática e exigências técnicas de cadastro. A Linxar resolve esse atrito.
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Estruturamos engenharia de catálogo voltada para aprovação imediata em editais, pregões eletrônicos e no PNCP (Portal Nacional de Contratações Públicas), automatizando a conversão para os padrões oficiais brasileiros.
          </p>
        </div>

        {/* Pilares Executivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-3">
            <span className="text-[10px] uppercase font-mono text-blue-400 font-bold block">Proposta de Valor</span>
            <h3 className="font-bold text-white text-base">Aprovação em Editais</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engenharia de catálogo estruturada para aprovação imediata em editais, pregões eletrônicos e no PNCP sem retrabalho.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-3">
            <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold block">Aceleração com IA</span>
            <h3 className="font-bold text-white text-base">CATMAT / CATSER</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              De-para automatizado com inteligência artificial para padronização de itens conforme os rígidos padrões do Governo Federal.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-3">
            <span className="text-[10px] uppercase font-mono text-indigo-400 font-bold block">Orquestração Normativa</span>
            <h3 className="font-bold text-white text-base">Lei 14.133/21 & NCM</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Classificação tributária, verificação de NCM e adequação nativa à Nova Lei de Licitações para segurança jurídica total.
            </p>
          </div>
        </div>

        {/* Call to Action Institucional */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Acesso antecipado ao Linxar Pref
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-normal">
            Estamos selecionando empresas distribuidoras e fornecedores do setor público para a fase piloto do Linxar Pref. Fale diretamente com a equipe corporativa da FCG.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20Linxar%20Pref%20(GovTech)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
            >
              <span>Falar com Especialistas no WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
