import ProductCard from './ProductCard';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';

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
      ctaText: 'Ver Detalhes do Produto',
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
      ctaText: 'Ver Detalhes do Produto',
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
      ctaText: 'Ver Detalhes do Produto',
      features: [
        'Consulta de base rica por EAN, GTIN ou Código de Barras',
        'Pesos, medidas, descrições e atributos oficiais',
        'API REST ultrarrápida com documentação OpenAPI',
        'Integração facilitada para desenvolvedores e TI',
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white border-b border-slate-100">
      <div className="container-xl">
        
        {/* Bloco de Contexto Estrutural */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Layers size={14} />
            Negócio 01 do Grupo FCG · Plataforma de Tecnologia
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            LINXAR: Nossa Marca de <span className="text-blue-600">Commerce Intelligence.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A <strong>Linxar</strong> é uma marca e produto controlado pela FCG. Desenvolvida para orquestrar dados de produtos através de 4 vertentes especializadas:
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Acessar a hospedagem oficial do Linxar Hub (linxar.com.br/pt)
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Grid dos 4 produtos Linxar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => (
            <ProductCard key={prod.title} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
