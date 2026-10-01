import type { Metadata } from 'next';
import LinxarShowcase from '@/components/home/LinxarShowcase';
import CredentialsBand from '@/components/home/CredentialsBand';
import { ExternalLink, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar — Commerce Intelligence para o Brasil | FCG',
  description:
    'Linxar: marca principal do grupo FCG. Conheça as soluções de inteligência de produto: Linxar Hub, Linxar Pref, Linxar Workplace e Linxar Middleware.',
};

export default function LinxarBrandPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Brand Hero */}
      <section className="py-16 sm:py-24 border-b border-slate-100 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles size={14} />
              Holding FCG · Marca Principal de Tecnologia
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
              LINXAR<span className="text-blue-600">.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-700 font-semibold max-w-2xl mx-auto">
              Commerce Intelligence para o Brasil.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              A Linxar é a nossa marca dedicada a resolver o maior gargalo do comércio omnichannel: dados de produtos despadronizados, lentidão na publicação e atrito entre canais de venda.
            </p>

            <div className="pt-2">
              <a
                href="https://linxar.com.br/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-lg shadow-sm"
              >
                Acessar Site Oficial linxar.com.br
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CredentialsBand />
      <LinxarShowcase />
    </div>
  );
}
