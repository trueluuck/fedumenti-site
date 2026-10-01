import type { Metadata } from 'next';
import { ExternalLink, Check, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar Hub — Automação de Catálogo e Marketplaces | FCG',
  description:
    'Conheça o Linxar Hub: IA para enriquecer, padronizar e publicar catálogos em múltiplos marketplaces como Mercado Livre, Shopee, Amazon e Magalu.',
};

export default function LinxarHubPage() {
  const plans = [
    {
      name: 'LITE',
      price: 'R$ 97',
      period: '/ mês',
      sub: '+ R$ 0,49 por pedido',
      skus: '150 SKUs sob gestão da IA',
      tokens: '250 Mil Tokens de IA/mês',
      features: [
        'Integração direta com ERPs',
        'Fim das planilhas manuais',
        'Publicação rápida no Mercado Livre',
      ],
      ctaText: 'Assinar na Linxar',
      href: 'https://linxar.com.br/pt#planos',
    },
    {
      name: 'START',
      price: 'R$ 497',
      period: '/ mês',
      sub: 'Sem fidelidade',
      skus: '300 SKUs sob gestão da IA',
      tokens: '1 Milhão de Tokens de IA/mês',
      features: [
        'Títulos e descrições otimizados para SEO',
        'Fotos de estúdio em fundo branco (#FFFFFF)',
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
      sub: 'Plano mais escolhido',
      highlight: true,
      skus: '1.000 SKUs sob gestão da IA',
      tokens: '5 Milhões de Tokens de IA/mês',
      features: [
        'Katie SAC 24h autônoma',
        'Repricer e ganhador de BuyBox',
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
      sub: 'Para grandes distribuidores',
      skus: '4.000 SKUs sob gestão da IA',
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
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl space-y-20">
        
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700">
            Produto Ativo · Ecossistema Linxar
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-[1.08]">
            Linxar Hub: Automatize seu catálogo.{' '}
            <span className="text-blue-600">Publique mais. Venda mais.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            A infraestrutura líder de automação de produtos para indústrias, atacadistas e grandes sellers. IA generativa que transforma dados brutos em anúncios campeões.
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-lg shadow-sm"
            >
              Acessar site completo linxar.com.br/pt
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Canais Conectados */}
        <div className="card p-8 bg-slate-50 text-center space-y-4">
          <p className="text-xs uppercase font-mono font-bold tracking-widest text-slate-500">
            Canais e Marketplaces Integrados
          </p>
          <p className="text-sm sm:text-base text-slate-700 font-medium max-w-3xl mx-auto">
            Mercado Livre · Shopee · Amazon BR · Magalu · VTEX · Nuvemshop · Shopify · Tray · Casas Bahia · MadeiraMadeira · Carrefour · KaBuM
          </p>
        </div>

        {/* Planos Resumidos */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
              Planos e Capacidade
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A contratação e ativação dos planos é realizada diretamente na plataforma oficial da Linxar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`card p-6 sm:p-7 flex flex-col justify-between ${
                  p.highlight
                    ? 'border-2 border-blue-600 shadow-lg relative bg-blue-50/10'
                    : 'border-slate-200'
                }`}
              >
                <div>
                  {p.highlight && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                      Mais Escolhido
                    </span>
                  )}
                  <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-500">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900">
                      {p.price}
                    </span>
                    <span className="text-xs text-slate-500">{p.period}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">{p.sub}</p>

                  <div className="border-t border-slate-100 pt-3 space-y-2 mb-6 text-xs text-slate-700">
                    <div className="font-bold text-slate-900">{p.skus}</div>
                    <div className="text-slate-500">{p.tokens}</div>
                    <ul className="space-y-2 pt-2">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center text-xs uppercase tracking-wider py-3 rounded-xl font-bold transition-colors ${
                    p.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-900 text-white hover:bg-blue-600'
                  }`}
                >
                  {p.ctaText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Rodapé */}
        <div className="text-center pt-8 border-t border-slate-200">
          <a
            href="https://linxar.com.br/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 text-base"
          >
            Visitar o site do Linxar Hub para ver a demonstração em vídeo
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}
