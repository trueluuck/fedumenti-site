import ProductCard from './ProductCard';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function LinxarShowcase() {
  const products = [
    {
      title: 'Linxar Hub',
      subtitle: 'Marketplaces Omnichannel',
      description: 'Catálogo omnicanal automatizado com IA para indústrias, atacadistas e grandes sellers publicarem em escala.',
      href: 'https://linxar.com.br/pt',
      isExternal: true,
      ctaText: 'Acessar linxar.com.br/pt',
      features: [
        'Enriquecimento de SKUs com IA proprietária',
        'Publicação no Mercado Livre, Shopee, Amazon e +10 canais',
        'Imagens com fundo de estúdio padronizadas (#FFFFFF)',
        'Cálculo automático de DIFAL para 27 UFs',
      ],
    },
    {
      title: 'Linxar Pref',
      subtitle: 'Compras Públicas & Licitações',
      description: 'Catálogo estruturado para atender exigências de editais, compras de prefeituras, pregões e o PNCP.',
      badge: 'Em Breve',
      href: '/linxar/pref',
      ctaText: 'Conhecer & Lista de Espera',
      features: [
        'Padronização de itens conforme CATMAT / CATSER',
        'Especificações técnicas prontas para pregão eletrônico',
        'Adequação direta à Nova Lei de Licitações (14.133/21)',
        'Classificação tributária e NCM verificada',
      ],
    },
    {
      title: 'Linxar Workplace',
      subtitle: 'Dropshipping & Sellers Conectados',
      description: 'Ambiente que une indústrias e fornecedores a afiliados e sellers de dropshipping em um fluxo sincronizado.',
      badge: 'Em Breve',
      href: '/linxar/workplace',
      ctaText: 'Conhecer & Lista de Espera',
      features: [
        'Conexão direta de estoque com sellers terceiros',
        'Catálogo homologado pronto para replicação',
        'Rastreio de comissões e repasses automatizados',
        'Fulfillment assistido e sincronização de pedidos',
      ],
    },
    {
      title: 'Linxar Middleware',
      subtitle: 'Cérebro Central de Produtos',
      description: 'API e infraestrutura de dados de produtos para ERPs, hubs, e-commerces, supermercados e comparadores.',
      badge: 'Em Breve',
      href: '/linxar/middleware',
      ctaText: 'Conhecer & Lista de Espera',
      features: [
        'Consulta de base rica por EAN, GTIN ou Código de Barras',
        'Pesos, medidas, descrições e atributos oficiais',
        'API REST ultrarrápida com documentação OpenAPI',
        'Integração facilitada para desenvolvedores e TI',
      ],
    },
  ];

  return (
    <section id="linxar" className="py-20 bg-white">
      <div className="container-xl">
        {/* Header da seção */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Sparkles size={14} />
            Principal Marca do Grupo FCG
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Ecossistema <span className="text-blue-600">LINXAR.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Desenvolvido para orquestrar o comércio digital moderno. Do varejo online aos pregões governamentais, conectando dados de ponta a ponta.
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Visitar o site oficial do Linxar Hub (linxar.com.br)
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Grid dos 4 produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => (
            <ProductCard key={prod.title} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
