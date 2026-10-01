import type { Metadata } from 'next';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Pref — Catálogo para Licitações e Compras Públicas | FCG',
  description:
    'Linxar Pref: estruturação e padronização de itens de catálogo conforme CATMAT/CATSER e Nova Lei de Licitações para pregões eletrônicos.',
};

export default function LinxarPrefPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold uppercase tracking-wider text-amber-800">
            Produto em Desenvolvimento · Ecossistema Linxar
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Linxar Pref:{' '}
            <span className="text-blue-600">Catálogo para Licitações.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Padronização e estruturação inteligente de catálogos para fornecedores e órgãos públicos, atendendo rigorosamente às exigências de editais e pregões eletrônicos.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">CATMAT / CATSER</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mapeamento automatizado de códigos oficiais do Governo Federal para evitar desclassificações formais em pregões.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Lei 14.133/21</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Descritivos técnicos padronizados com base na Nova Lei de Licitações e no Portal Nacional de Contratações Públicas (PNCP).
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Agilidade no Edital</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Montagem de lotes e propostas comerciais em minutos a partir da base padronizada pela inteligência artificial.
            </p>
          </div>
        </div>

        {/* Call to Action Lista de Espera */}
        <div className="card p-8 sm:p-12 text-center bg-slate-50 border-slate-200 space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Quer ser avisado no lançamento do Linxar Pref?
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Estamos selecionando empresas distribuidoras e órgãos pilotos para acesso antecipado. Fale com a equipe pelo WhatsApp.
            </p>
          </div>

          <div>
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20Linxar%20Pref"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Quero Acesso Antecipado no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
