import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar — O Ecossistema de Commerce Intelligence | FCG',
  description:
    'A principal infraestrutura de orquestração de dados de e-commerce do Brasil. Sob o guarda-chuva da FCG, chancelada por Google for Startups, Sebrae e UTFPR.',
};

export default function LinxarBrandPage() {
  const verticals = [
    {
      num: '01',
      title: 'Linxar Hub',
      subtitle: 'Varejo Autônomo & Marketplaces',
      tagline: 'O Motor de Tração',
      pitch:
        'A vertical que já está no campo de batalha validando a nossa tecnologia, gerando caixa e erradicando o trabalho braçal do varejo B2B e B2C.',
      valueProp:
        'Transformar indústrias, atacadistas e grandes sellers em máquinas de vendas omnicanais com "Zero Digitação".',
      ai: 'Enriquecimento proprietário de SKUs e padronização visual cirúrgica (fundos #FFFFFF em lote).',
      orchestration:
        'Publicação em escala no Mercado Livre, Shopee, Amazon e mais de 10 canais simultâneos, com cálculo automático de DIFAL para as 27 UFs.',
      status: 'Disponível e tracionando',
      cta: 'Acessar linxar.com.br/pt',
      href: 'https://linxar.com.br/pt',
      isExternal: true,
      internalHref: '/linxar/hub',
    },
    {
      num: '02',
      title: 'Linxar Pref',
      subtitle: 'GovTech & Compras Públicas',
      tagline: 'O Oceano Azul B2G',
      pitch:
        'O mercado governamental movimenta bilhões, mas afasta fornecedores pela alta fricção burocrática e exigências técnicas de cadastro. A Linxar resolve esse atrito.',
      valueProp:
        'Engenharia de catálogo estruturada para aprovação imediata em editais, pregões eletrônicos e no PNCP (Portal Nacional de Contratações Públicas).',
      ai: 'De-para automatizado de padronização de itens conforme os rígidos padrões CATMAT e CATSER.',
      orchestration:
        'Classificação tributária, verificação de NCM e adequação nativa à Nova Lei de Licitações (14.133/21).',
      status: 'Em Breve · Expansão de Vertical',
      cta: 'Ver página do Linxar Pref',
      href: '/linxar/pref',
      isExternal: false,
    },
    {
      num: '03',
      title: 'Linxar Workplace',
      subtitle: 'Dropshipping & Redes Descentralizadas',
      tagline: 'A Malha de Distribuição',
      pitch:
        'O futuro do comércio é descentralizado. Esta vertical transforma a tecnologia da Linxar no elo perfeito entre quem produz e quem vende, surfando a onda da economia de afiliados.',
      valueProp:
        'Um ecossistema B2B2C sem atrito, conectando indústrias e fornecedores a sellers de dropshipping e afiliados.',
      ai: 'Catálogo unificado e homologado pronto para replicação em milhares de pontas de venda sem perda de qualidade (SEO e imagens).',
      orchestration:
        'Conexão direta de estoques em tempo real, rastreio de comissões, repasses automatizados e fulfillment assistido.',
      status: 'Em Breve · Expansão de Canal',
      cta: 'Ver página do Linxar Workplace',
      href: '/linxar/workplace',
      isExternal: false,
    },
    {
      num: '04',
      title: 'Linxar Middleware',
      subtitle: 'Cérebro de Produtos (API Headless)',
      tagline: 'A Infraestrutura Invisível',
      pitch:
        'O ativo de maior valuation da holding. A Linxar deixa de ser apenas a tela final e passa a ser o motor de inteligência consumido pelo mercado corporativo.',
      valueProp:
        'O cérebro central de produtos do Brasil, fornecendo dados ricos via API para ERPs, hubs de integração, comparadores de preço e redes de supermercados.',
      ai: 'Consultas de base rica em milissegundos por EAN, GTIN ou Código de Barras (pesos, medidas, descrições e atributos oficiais).',
      orchestration:
        'Arquitetura Headless com API REST ultrarrápida e documentação OpenAPI, desenhada de desenvolvedor para desenvolvedor (integração facilitada para equipes de TI).',
      status: 'Em Breve · Expansão Deep Tech',
      cta: 'Ver página do Linxar Middleware',
      href: '/linxar/middleware',
      isExternal: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl space-y-20">
        
        {/* Tese Executiva / Hero Linxar */}
        <div className="max-w-4xl space-y-6">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            FCG (Fedumenti Group) · Divisão de Tecnologia
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-tight">
            O Ecossistema Linxar de Commerce Intelligence
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            A Linxar deixou de ser apenas um produto para se tornar a <strong>principal infraestrutura de orquestração de dados de e-commerce do Brasil</strong>. Sob o guarda-chuva da FCG, chancelada por Google for Startups, Sebrae e UTFPR, o nosso ecossistema foi desenhado para dominar a jornada completa do produto: da indústria ao consumidor final, passando por ERPs e compras governamentais.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Acessar plataforma linxar.com.br
              <ExternalLink size={15} />
            </a>

            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20parceria%20estrat%C3%A9gica%20na%20Linxar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Falar com Relações Estratégicas
            </a>
          </div>
        </div>

        {/* 4 Verticais Executivas */}
        <div className="space-y-10">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
              As Quatro Verticais Estratégicas
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Estruturadas para cobrir toda a cadeia de dados comerciais do país:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-xl border border-slate-200 bg-white flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-5">
                  {/* Topo do Card */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 pb-3">
                    <span className="font-semibold text-slate-700">{v.tagline}</span>
                    <span>{v.status}</span>
                  </div>

                  {/* Título e Subtítulo */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      {v.title}
                    </h3>
                    <p className="text-xs font-mono uppercase text-slate-500 mt-0.5">
                      {v.subtitle}
                    </p>
                  </div>

                  {/* Pitch Executivo */}
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {v.pitch}
                  </p>

                  {/* 3 Blocos de Engenharia */}
                  <div className="space-y-3 pt-2 text-xs leading-relaxed text-slate-600 border-t border-slate-100">
                    <div>
                      <strong className="text-slate-900 block font-semibold">Proposta de Valor:</strong>
                      <span>{v.valueProp}</span>
                    </div>

                    <div>
                      <strong className="text-slate-900 block font-semibold">Aceleração com IA:</strong>
                      <span>{v.ai}</span>
                    </div>

                    <div>
                      <strong className="text-slate-900 block font-semibold">Orquestração:</strong>
                      <span>{v.orchestration}</span>
                    </div>
                  </div>
                </div>

                {/* Ações */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  {v.isExternal ? (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      <span>{v.cta}</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <Link
                      href={v.href}
                      className="inline-flex items-center gap-1.5 font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      <span>{v.cta}</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}

                  {v.internalHref && (
                    <Link
                      href={v.internalHref}
                      className="text-slate-500 hover:text-slate-900 transition-colors font-mono"
                    >
                      Ver detalhes
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fechamento Tese de Longo Prazo */}
        <div className="p-8 sm:p-10 rounded-xl bg-slate-50 border border-slate-200 space-y-4 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold block">
            Visão de Longo Prazo
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
            Pavimentando os trilhos do comércio digital brasileiro.
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Ao apresentar esta estrutura, a FCG deixa claro que não está construindo "mais um sistema de gestão", mas sim pavimentando os trilhos por onde passará todo o comércio eletrônico e licitatório do Brasil na próxima década. A máquina de vendas foi desenhada para escalar em todas as direções.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20apresenta%C3%A7%C3%A3o%20institucional%20do%20Ecossistema%20Linxar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider"
            >
              Solicitar Apresentação Estratégica
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
