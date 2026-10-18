import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Layers, CheckCircle2, ShieldCheck, Award, Building2, Zap, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Linxar — O que é o Ecossistema de Vendas e Integração | FCG',
  description:
    'Conheça a Linxar: plataforma desenvolvida pela FCG que conecta empresas e indústrias aos maiores marketplaces do Brasil com Zero Digitação e cálculo fiscal automático.',
};

export default function LinxarBrandPage() {
  const verticals = [
    {
      num: '01',
      title: 'Linxar Hub',
      subtitle: 'Marketplaces & Varejo Autônomo',
      tagline: 'Em Operação Real',
      pitch:
        'A tecnologia que elimina o trabalho braçal de cadastro de produtos. Conecta indústrias, atacadistas e grandes lojas físicas ao Mercado Livre, Shopee, Amazon, Magalu e mais de 12 canais simultâneos.',
      features: [
        'Zero Digitação: publicação automática do seu catálogo em minutos',
        'Enriquecimento visual com IA: fotos com fundo 100% branco padronizado (#FFFFFF)',
        'Motor fiscal nativo com cálculo automático de DIFAL para as 27 UFs',
        'Sincronização instantânea de estoque e pedidos com seu ERP'
      ],
      cta: 'Acessar linxar.com.br/pt',
      href: 'https://linxar.com.br/pt',
      isExternal: true,
      internalHref: '/linxar/hub',
    },
    {
      num: '02',
      title: 'Linxar Pref',
      subtitle: 'Compras Públicas & GovTech',
      tagline: 'Mercado Governamental B2G',
      pitch:
        'Solução voltada para fornecedores que desejam vender para órgãos públicos sem a burocracia de cadastros manuais e exigências de editais.',
      features: [
        'Engenharia de catálogo compatível com editais e pregões eletrônicos',
        'Padronização de itens conforme os rígidos padrões CATMAT e CATSER',
        'Integração facilitada com o PNCP (Portal Nacional de Contratações Públicas)',
        'Adequação técnica completa à Nova Lei de Licitações (Lei 14.133/21)'
      ],
      cta: 'Conhecer Linxar Pref',
      href: '/linxar/pref',
      isExternal: false,
    },
    {
      num: '03',
      title: 'Linxar Workplace',
      subtitle: 'Dropshipping & Redes de Venda',
      tagline: 'Distribuição B2B2C',
      pitch:
        'O elo perfeito entre quem fabrica produtos e quem tem audiência para vender. Uma malha descentralizada de distribuição de produtos com repasses automáticos.',
      features: [
        'Conexão direta de estoques fabris a vendedores externos e afiliados',
        'Catálogo centralizado e homologado pronto para replicação',
        'Rastreio automático de comissões e divisão de pagamentos',
        'Fulfillment assistido para envio rápido ao cliente final'
      ],
      cta: 'Conhecer Linxar Workplace',
      href: '/linxar/workplace',
      isExternal: false,
    },
    {
      num: '04',
      title: 'Linxar Middleware',
      subtitle: 'Cérebro Central de Produtos (API Headless)',
      tagline: 'Deep Tech & Infraestrutura',
      pitch:
        'A base central de dados de produtos do Brasil para consumo via API. Feita para desenvolvedores, ERPs, redes de supermercados e comparadores de preço.',
      features: [
        'Consultas ultrarrápidas em milissegundos por EAN, GTIN ou Código de Barras',
        'Atributos fiscais, pesos, medidas e fotos em alta resolução pré-homologadas',
        'Arquitetura Headless com API REST moderna e documentação OpenAPI',
        'Fácil integração por equipes de tecnologia e desenvolvedores internos'
      ],
      cta: 'Conhecer Linxar Middleware',
      href: '/linxar/middleware',
      isExternal: false,
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl space-y-16">
        
        {/* Hero Comercial da Linxar */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight text-balance">
            A tecnologia que transforma sua empresa física em{' '}
            <span className="bg-gradient-to-r from-[#881337] via-[#9f1239] to-[#be123c] bg-clip-text text-transparent">
              uma máquina de vendas online.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            A <strong>Linxar</strong> é uma plataforma proprietária desenvolvida pela holding FCG para resolver o maior gargalo do comércio brasileiro: o tempo gasto cadastrando produtos manualmente e o medo de errar impostos interestaduais. Com a Linxar, seu estoque físico vai para os maiores marketplaces do Brasil com <strong>Zero Digitação</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Acessar Plataforma Oficial (linxar.com.br)</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20conectar%20minha%20empresa%20%C3%A0%20Linxar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
            >
              <span>Falar com um Especialista Linxar</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Chancelas Institucionais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <ShieldCheck size={20} className="text-slate-800 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Incubada na UTFPR Sprint</span>
              <span className="text-[11px] text-slate-500">Validação científica e tecnológica</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <Award size={20} className="text-slate-800 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Google for Startups</span>
              <span className="text-[11px] text-slate-500">Apoio oficial e infraestrutura em nuvem</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <Building2 size={20} className="text-slate-800 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Sebrae Startups</span>
              <span className="text-[11px] text-slate-500">Reconhecida no ecossistema paranaense</span>
            </div>
          </div>
        </div>

        {/* As 4 Verticais da Linxar */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
              Estrutura da Plataforma
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
              As 4 Verticais Estratégicas do Ecossistema Linxar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.map((v) => (
              <div
                key={v.title}
                className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between space-y-6 hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 pb-3">
                    <span className="font-bold text-blue-700">{v.tagline}</span>
                    <span className="text-slate-500">{v.num}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      {v.title}
                    </h3>
                    <p className="text-xs font-mono uppercase text-slate-500 mt-0.5">
                      {v.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {v.pitch}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200">
                    {v.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  {v.isExternal ? (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-slate-950 hover:text-blue-600 transition-colors"
                    >
                      <span>{v.cta}</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <Link
                      href={v.href}
                      className="inline-flex items-center gap-1.5 font-bold text-slate-950 hover:text-blue-600 transition-colors"
                    >
                      <span>{v.cta}</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}

                  {v.internalHref && (
                    <Link
                      href={v.internalHref}
                      className="text-slate-500 hover:text-slate-950 transition-colors font-mono"
                    >
                      Ver detalhes
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
