import type { Metadata } from 'next';
import { Users2, PackageCheck, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Workplace — Dropshipping & Redes Descentralizadas | FCG',
  description:
    'A Malha de Distribuição da Linxar: ecossistema B2B2C conectando indústrias e fornecedores a sellers de dropshipping e afiliados.',
};

export default function LinxarWorkplacePage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Hero Executivo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-500 uppercase tracking-wider">
            <span className="font-semibold text-slate-900">Vertical 03 · Linxar Workplace</span>
            <span>•</span>
            <span>A Malha de Distribuição</span>
            <span>•</span>
            <span className="text-amber-700 font-semibold">Em Breve (Expansão de Canal)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Dropshipping & Redes Descentralizadas
          </h1>

          <p className="text-base sm:text-xl text-slate-700 leading-relaxed font-medium">
            O futuro do comércio é descentralizado. Esta vertical transforma a tecnologia da Linxar no elo perfeito entre quem produz e quem vende, surfando a onda da economia de afiliados.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Criamos um ecossistema B2B2C sem atrito, conectando indústrias e fornecedores diretamente a sellers de dropshipping e redes de afiliados com estoques sincronizados em tempo real e catálogo padronizado em alta resolução.
          </p>
        </div>

        {/* Pilares Executivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Proposta de Valor</span>
            <h3 className="font-bold text-slate-950 text-base">Ecossistema B2B2C</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Conexão direta e sem fricção entre quem tem produto físico e quem domina canais de tráfego, audiência e vendas digitais.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Aceleração com IA</span>
            <h3 className="font-bold text-slate-950 text-base">Replicação em Escala</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Catálogo unificado e homologado pronto para replicação em milhares de pontas de venda sem perda de qualidade visual ou de SEO.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
            <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Orquestração Operacional</span>
            <h3 className="font-bold text-slate-950 text-base">Estoque Real & Fulfillment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sincronização de estoque em milissegundos, rastreio transparente de comissões, repasses automatizados e fulfillment assistido.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-950">
            Seja parceiro na expansão do Linxar Workplace
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Se você representa uma indústria com volume de estoque ou uma rede consolidada de sellers e afiliados, participe da primeira fase de testes da vertical.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Linxar%20Workplace%20(Dropshipping)"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider"
            >
              Falar com o Time de Parcerias
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
