import type { Metadata } from 'next';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Pref — Catálogo para Licitações e Compras Públicas | FCG',
  description:
    'Linxar Pref: estruturação e padronização técnica de itens de catálogo conforme CATMAT/CATSER e Nova Lei de Licitações para pregões eletrônicos.',
};

export default function LinxarPrefPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero */}
        <div className="space-y-4">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Linxar Pref · Compras Públicas & Licitações
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Catálogos padronizados para licitações.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Padronização e estruturação inteligente de catálogos para fornecedores e órgãos públicos, atendendo rigorosamente às exigências de editais, pregões eletrônicos e compras governamentais.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <FileText size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">CATMAT / CATSER</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mapeamento automatizado de códigos oficiais do Governo Federal para evitar desclassificações formais em pregões.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <ShieldCheck size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Lei 14.133/21</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Descritivos técnicos padronizados com base na Nova Lei de Licitações e no Portal Nacional de Contratações Públicas (PNCP).
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <CheckCircle2 size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Agilidade no Edital</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Montagem de lotes e propostas comerciais em minutos a partir da base padronizada pela inteligência artificial.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Acesso antecipado ao Linxar Pref
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Estamos selecionando empresas distribuidoras e fornecedores do setor público para a fase piloto. Fale com a equipe pelo WhatsApp.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20Linxar%20Pref"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
