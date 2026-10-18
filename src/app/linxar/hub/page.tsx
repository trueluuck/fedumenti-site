import type { Metadata } from 'next';
import { ExternalLink, Check, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Hub — Varejo Autônomo & Marketplaces | FCG',
  description:
    'O Motor de Tração da Linxar: transformando indústrias, atacadistas e grandes sellers em máquinas de vendas omnicanais com Zero Digitação.',
};

export default function LinxarHubPage() {
  const plans = [
    {
      name: 'LITE',
      price: 'R$ 97',
      period: '/ mês',
      sub: '+ R$ 0,49 por pedido',
      skus: '150 SKUs sob gestão',
      tokens: '250 Mil Tokens de IA/mês',
      features: [
        'Integração direta com ERPs',
        'Fim das planilhas manuais',
        'Publicação no Mercado Livre',
      ],
      ctaText: 'Assinar na Linxar',
      href: 'https://linxar.com.br/pt#planos',
    },
    {
      name: 'START',
      price: 'R$ 497',
      period: '/ mês',
      sub: 'Sem fidelidade',
      skus: '300 SKUs sob gestão',
      tokens: '1 Milhão de Tokens de IA/mês',
      features: [
        'Títulos e descrições otimizados para SEO',
        'Fotos de estúdio em fundo branco (#FFFFFF)',
        'Multiplicador de canais simultâneos',
        'Emissão simplificada',
      ],
      ctaText: 'Assinar na Linxar',
      href: 'https://linxar.com.br/pt#planos',
    },
    {
      name: 'GROWTH',
      price: 'R$ 997',
      period: '/ mês',
      sub: 'Mais escolhido',
      highlight: true,
      skus: '1.000 SKUs sob gestão',
      tokens: '5 Milhões de Tokens de IA/mês',
      features: [
        'Katie SAC 24h autônoma no tom da marca',
        'Repricer e ganhador de BuyBox na madrugada',
        'Faturamento mãos-livres automático',
        'Guardião de integridade de NCM e catálogo',
      ],
      ctaText: 'Assinar Growth',
      href: 'https://linxar.com.br/pt#planos',
    },
    {
      name: 'ENTERPRISE',
      price: 'R$ 2.497',
      period: '/ mês',
      sub: 'Para indústrias e grandes marcas',
      skus: '4.000 SKUs sob gestão',
      tokens: '15 Milhões de Tokens de IA/mês',
      features: [
        'Gestão multi-CNPJ em 1 painel',
        'Importador inteligente de catálogos externos',
        'Radar de novas oportunidades B2B',
        'Suporte e gerente de conta dedicado',
      ],
      ctaText: 'Falar com Consultor',
      href: 'https://linxar.com.br/pt#planos',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl space-y-16">
        
        {/* Hero Executivo Linxar Hub */}
        <div className="max-w-4xl space-y-5">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider">
            <span className="font-bold text-blue-700">Vertical 01 · Linxar Hub</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">O Motor de Tração</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Disponível e Tracionando</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Varejo Autônomo & Marketplaces
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            A vertical que já está no campo de batalha validando a nossa tecnologia, gerando caixa e erradicando o trabalho braçal do varejo B2B e B2C.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Transformamos indústrias, atacadistas e grandes sellers em máquinas de vendas omnicanais com o conceito de <strong>"Zero Digitação"</strong>: enriquecimento proprietário de SKUs, padronização visual em lote e publicação automatizada com cálculo de DIFAL para 27 UFs.
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Acessar plataforma linxar.com.br/pt</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Pilares de Engenharia da Vertical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-2">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Proposta de Valor</span>
            <h3 className="font-bold text-slate-950 text-lg">Zero Digitação</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transforme cadastros brutos e planilhas confusas em anúncios campeões prontos para vender nos maiores canais do país.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-2">
            <span className="text-[10px] uppercase font-mono text-blue-700 font-bold block">Aceleração com IA</span>
            <h3 className="font-bold text-slate-950 text-lg">Padronização Cirúrgica</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enriquecimento proprietário de SKUs e tratamento visual com fotos em fundo branco (#FFFFFF) em lote para aprovação imediata.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xs space-y-2">
            <span className="text-[10px] uppercase font-mono text-emerald-700 font-bold block">Orquestração Fiscal</span>
            <h3 className="font-bold text-slate-950 text-lg">DIFAL 27 UFs & Multi-Canal</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Publicação simultânea no Mercado Livre, Shopee, Amazon, Magalu e mais 10 canais com regras tributárias verificadas.
            </p>
          </div>
        </div>

        {/* Canais */}
        <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2">
          <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block tracking-wider">
            Canais de Venda Integrados
          </span>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            Mercado Livre · Shopee · Amazon BR · Magalu · VTEX · Nuvemshop · Shopify · Tray · Casas Bahia · MadeiraMadeira · Carrefour · KaBuM
          </p>
        </div>

        {/* Planos (Linxar Light Cards) */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Capacidade e Planos
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Contratação e ativação realizadas diretamente na plataforma Linxar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${
                  p.highlight
                    ? 'border-blue-500 bg-white shadow-xl ring-2 ring-blue-500/20'
                    : 'border-slate-200 bg-white shadow-xs hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-900">{p.name}</span>
                    {p.highlight && <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">Mais Escolhido</span>}
                  </div>

                  <div>
                    <span className="text-3xl font-extrabold text-slate-950">{p.price}</span>
                    <span className="text-xs text-slate-500 ml-1">{p.period}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{p.sub}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-2">
                    <p className="font-bold text-slate-900">{p.skus}</p>
                    <p className="text-slate-500 font-mono text-[11px]">{p.tokens}</p>
                    <ul className="space-y-2 pt-1">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-slate-600">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 text-xs uppercase tracking-wider font-bold text-center block rounded-xl transition-colors ${
                      p.highlight
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {p.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé da LP */}
        <div className="pt-4 border-t border-slate-200">
          <a
            href="https://linxar.com.br/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-blue-600 transition-colors"
          >
            <span>Acessar demonstração completa em linxar.com.br/pt</span>
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </div>
  );
}
