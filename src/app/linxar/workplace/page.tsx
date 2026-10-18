import type { Metadata } from 'next';
import { Users2, PackageCheck, Zap, ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Workplace — Dropshipping & Redes Descentralizadas | FCG',
  description:
    'A Malha de Distribuição da Linxar: ecossistema B2B2C conectando indústrias e fornecedores a sellers de dropshipping e afiliados.',
};

export default function LinxarWorkplacePage() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero Executivo */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider">
            <span className="font-bold text-blue-700">Vertical 03 · Linxar Workplace</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">A Malha de Distribuição</span>
            <span className="text-slate-400">•</span>
            <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">Em Breve (Expansão de Canal)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Dropshipping & Redes Descentralizadas
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            O futuro do comércio é descentralizado. Esta vertical transforma a tecnologia da Linxar no elo perfeito entre quem produz e quem vende, surfando a onda da economia de afiliados.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Criamos um ecossistema B2B2C sem atrito, conectando indústrias e fornecedores diretamente a sellers de dropshipping e redes de afiliados com estoques sincronizados em tempo real e catálogo padronizado em alta resolução.
          </p>
        </div>

        {/* Pilares Executivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Proposta de Valor</span>
            <h3 className="font-bold text-slate-950 text-base">Ecossistema B2B2C</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Conexão direta e sem fricção entre quem tem produto físico e quem domina canais de tráfego, audiência e vendas digitais.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Aceleração com IA</span>
            <h3 className="font-bold text-slate-950 text-base">Replicação em Escala</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Catálogo unificado e homologado pronto para replicação em milhares de pontas de venda sem perda de qualidade visual ou de SEO.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Orquestração Operacional</span>
            <h3 className="font-bold text-slate-950 text-base">Estoque Real & Fulfillment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sincronização de estoque em milissegundos, rastreio transparente de comissões, repasses automatizados e fulfillment assistido.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
            Seja parceiro na expansão do Linxar Workplace
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Se você representa uma indústria com volume de estoque ou uma rede consolidada de sellers e afiliados, participe da primeira fase de testes da vertical.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Linxar%20Workplace%20(Dropshipping)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Falar com o Time de Parcerias</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
