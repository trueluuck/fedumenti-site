import type { Metadata } from 'next';
import { Users2, PackageCheck, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Workplace — Sellers e Afiliados Dropshipping | FCG',
  description:
    'Linxar Workplace: ambiente de integração entre fornecedores com estoque e sellers digitais com catálogo enriquecido e sincronizado.',
};

export default function LinxarWorkplacePage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero */}
        <div className="space-y-4">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Linxar Workplace · Sellers & Dropshipping
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Conecte fornecedores a redes de vendedores digitais.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Conectamos fornecedores com estoque real a uma rede de sellers e afiliados digitais prontos para vender com anúncios já otimizados e enriquecidos por IA.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <Users2 size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Rede de Vendas</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Indústrias multiplicam seus canais de distribuição sem precisar gerenciar contas de terceiros manualmente.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <PackageCheck size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Catálogo Pronto</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              O seller recebe produtos com imagens em fundo branco, atributos fiscais, NCM, títulos SEO e descrições completas.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <Zap size={20} className="text-slate-900" />
            <h3 className="font-bold text-slate-950 text-base">Sincronização</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Estoque e pedidos sincronizados automaticamente para evitar ruptura, cancelamento e atritos operacionais.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Parceria pioneira para indústrias e sellers
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Entre em contato para participar da primeira fase de integração do Linxar Workplace.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Linxar%20Workplace"
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
