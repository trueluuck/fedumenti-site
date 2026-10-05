import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar — Plataforma de Commerce Intelligence | FCG',
  description:
    'Linxar: marca e plataforma de software desenvolvida pela FCG para automação de catálogo, dados de produtos e distribuição omnichannel.',
};

export default function LinxarBrandPage() {
  const products = [
    {
      title: 'Linxar Hub',
      tag: 'Operação de Marketplaces',
      desc: 'Automação e publicação em escala para indústrias e grandes sellers no Mercado Livre, Shopee, Amazon, Magalu, VTEX e mais 10 canais integrados.',
      status: 'Disponível em produção',
      href: 'https://linxar.com.br/pt',
      isExternal: true,
      cta: 'Acessar linxar.com.br/pt',
    },
    {
      title: 'Linxar Pref',
      tag: 'Compras Públicas & Licitações',
      desc: 'Padronização e estruturação técnica de itens conforme CATMAT/CATSER e a Nova Lei de Licitações (14.133/21) para fornecedores do setor público.',
      status: 'Em desenvolvimento',
      href: '/linxar/pref',
      cta: 'Ver detalhes do produto',
    },
    {
      title: 'Linxar Workplace',
      tag: 'Sellers & Dropshipping',
      desc: 'Ambiente de integração entre indústrias com estoque real e afiliados/sellers digitais com catálogo enriquecido e sincronizado.',
      status: 'Em desenvolvimento',
      href: '/linxar/workplace',
      cta: 'Ver detalhes do produto',
    },
    {
      title: 'Linxar Middleware',
      tag: 'API de Produtos B2B',
      desc: 'Infraestrutura de dados de produtos e preços para ERPs, hubs, e-commerces e mercados consultarem especificações oficiais via REST API.',
      status: 'Em desenvolvimento',
      href: '/linxar/middleware',
      cta: 'Ver detalhes do produto',
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl space-y-16">
        
        {/* Header da LP Linxar */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Iniciativa FCG · Divisão de Software
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Linxar: Infraestrutura para o comércio digital.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A Linxar é a plataforma tecnológica proprietária da FCG criada para resolver a despadronização de dados de produtos, a lentidão na publicação e os gargalos operacionais entre indústrias, atacadistas e canais de venda.
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Acessar site oficial linxar.com.br
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Vertentes da Linxar */}
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight border-b border-slate-200 pb-4">
            Vertentes de Produto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-xl border border-slate-200 bg-white flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{p.tag}</span>
                    <span className="font-semibold text-slate-700">{p.status}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950">
                    {p.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  {p.isExternal ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      <span>{p.cta}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      <span>{p.cta}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contato Linxar */}
        <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-bold text-slate-950 text-base">
              Precisa integrar a Linxar à sua operação corporativa?
            </h4>
            <p className="text-sm text-slate-600">
              Converse diretamente com o time de engenharia e produto da FCG.
            </p>
          </div>

          <a
            href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20nas%20solu%C3%A7%C3%B5es%20da%20Linxar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs uppercase tracking-wider shrink-0"
          >
            Falar no WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
