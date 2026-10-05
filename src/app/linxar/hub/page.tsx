import type { Metadata } from 'next';
import { ExternalLink, Check, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Hub — Automação de Catálogo e Marketplaces | FCG',
  description:
    'Linxar Hub: automação de catálogo para indústrias e grandes sellers publicarem em escala no Mercado Livre, Shopee, Amazon, Magalu e outros marketplaces.',
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
        'Fotos de estúdio em fundo branco',
        'Multiplicador de canais',
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
        'Katie SAC 24h autônoma',
        'Repricer de BuyBox',
        'Faturamento automatizado',
        'Guardião de NCM e catálogo',
      ],
      ctaText: 'Assinar Growth',
      href: 'https://linxar.com.br/pt#planos',
    },
    {
      name: 'ENTERPRISE',
      price: 'R$ 2.497',
      period: '/ mês',
      sub: 'Para grandes distribuidores',
      skus: '4.000 SKUs sob gestão',
      tokens: '15 Milhões de Tokens de IA/mês',
      features: [
        'Gestão multi-CNPJ em 1 painel',
        'Importador de catálogos externos',
        'Radar de oportunidades B2B',
        'Gerente de conta dedicado',
      ],
      ctaText: 'Falar com Consultor',
      href: 'https://linxar.com.br/pt#planos',
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl space-y-16">
        
        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Linxar Hub · Operação Omnichannel
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Automatize seu catálogo de produtos.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A infraestrutura líder de automação de produtos para indústrias, atacadistas e grandes sellers. Inteligência artificial que transforma dados brutos em anúncios completos para múltiplos canais.
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Acessar site oficial linxar.com.br/pt
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Canais */}
        <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
          <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">
            Canais de Venda Integrados
          </span>
          <p className="text-sm text-slate-700 leading-relaxed">
            Mercado Livre · Shopee · Amazon BR · Magalu · VTEX · Nuvemshop · Shopify · Tray · Casas Bahia · MadeiraMadeira · Carrefour · KaBuM
          </p>
        </div>

        {/* Planos */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Capacidade e Planos
            </h2>
            <p className="text-slate-600 text-sm">
              Contratação e ativação realizadas diretamente na plataforma Linxar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-6 rounded-xl border bg-white flex flex-col justify-between ${
                  p.highlight ? 'border-slate-900 shadow-sm' : 'border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{p.name}</span>
                    {p.highlight && <span className="font-bold text-slate-900">Destaque</span>}
                  </div>

                  <div>
                    <span className="text-3xl font-bold text-slate-950">{p.price}</span>
                    <span className="text-xs text-slate-500 ml-1">{p.period}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{p.sub}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-2">
                    <p className="font-semibold text-slate-900">{p.skus}</p>
                    <p className="text-slate-500">{p.tokens}</p>
                    <ul className="space-y-1.5 pt-1">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check size={14} className="text-slate-900 shrink-0 mt-0.5" />
                          <span>{f}</span>
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
                    className="btn-primary w-full text-xs uppercase tracking-wider py-2.5 text-center block"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Acessar demonstração completa em linxar.com.br/pt
            <ArrowRight size={15} />
          </a>
        </div>

      </div>
    </div>
  );
}
