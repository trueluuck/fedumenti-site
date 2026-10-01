import type { Metadata } from 'next';
import { Users2, PackageCheck, Zap, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Workplace — Sellers e Afiliados Dropshipping | FCG',
  description:
    'Linxar Workplace: plataforma que conecta fornecedores, indústrias e sellers de dropshipping em um fluxo sincronizado de catálogo enriquecido.',
};

export default function LinxarWorkplacePage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        {/* Hero */}
        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold uppercase tracking-wider text-amber-800">
            Produto em Desenvolvimento · Ecossistema Linxar
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
            Linxar Workplace:{' '}
            <span className="text-blue-600">Sellers & Dropshipping.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Conectamos fornecedores com estoque real a uma rede de sellers e afiliados digitais prontos para vender com anúncios já otimizados e enriquecidos por IA.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users2 size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Rede de Vendas</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Indústrias multiplicam seus canais de distribuição sem precisar gerenciar contas de terceiros manualmente.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <PackageCheck size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Catálogo Pronto</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O seller recebe produtos com imagens em fundo branco, atributos fiscais, NCM, títulos SEO e descrições campeãs.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Zap size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Sincronização</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Estoque e pedidos sincronizados automaticamente para evitar ruptura, cancelamento e prejuízos operacionais.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card p-8 sm:p-12 text-center bg-slate-50 border-slate-200 space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
              Seja fornecedor ou seller parceiro pioneiro
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Entre em contato para participar da primeira fase de onboarding do Linxar Workplace.
            </p>
          </div>

          <div>
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Linxar%20Workplace%20(Dropshipping)"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-8 py-4 inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Entrar em Contato no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
