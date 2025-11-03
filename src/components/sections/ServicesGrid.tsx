// src/components/sections/ServicesGrid.tsx
import Card from '@/components/common/Card';

type Service = {
  id?: string;        // âncora opcional (#sites, #branding etc.)
  icon: string;
  title: string;
  href?: string;      // link “Acessar” (LP ou /contact)
  desc: string;
};

const services: Service[] = [
  {
    id: 'trafego',
    icon: '🚀',
    title: 'Tráfego Pago',
    href: '/lp/trafego-pago',
    desc: 'Planejamento, execução e otimização contínua em Google Ads, Meta Ads e LinkedIn Ads. Estruturamos campanhas orientadas a metas (CAC, ROAS e LTV) com testes A/B de criativos e públicos, além de rotinas semanais para acelerar o que performa.',
  },
  {
    id: 'sites',
    icon: '🛠️',
    title: 'Sites & Landing Pages',
    href: '/lp/sites',
    desc: 'Páginas rápidas, responsivas e SEO-ready, com foco em conversão. Integramos formulários, CRM, pixel e mensuração de eventos para que cada visita tenha potencial de virar receita.',
  },
  {
    id: 'branding',
    icon: '🎨',
    title: 'Branding & Design',
    href: '/lp/branding-design',
    desc: 'Identidade visual, guias de marca e materiais de apoio. Criamos consistência visual e linguagem que comunicam valor e confiança em todos os pontos de contato.',
  },
  {
    id: 'automacao',
    icon: '🔗',
    title: 'Automação & CRM',
    href: '/lp/automacao-crm',
    desc: 'Integrações, fluxos automatizados e nutrição de leads. Conectamos seus canais a um funil claro (MQL → SQL → Venda) e reduzimos atrito nos pontos críticos com automações inteligentes.',
  },
  {
    id: 'seo',
    icon: '📈',
    title: 'SEO & Conteúdo',
    href: '/lp/seo-conteudo',
    desc: 'Conteúdo estratégico e SEO técnico para ganhar autoridade orgânica. Melhoramos performance, indexação e relevância com uma cadência previsível de criação e otimizações.',
  },
  {
    id: 'bi',
    icon: '📊',
    title: 'BI & Dashboards',
    href: '/lp/bi-dashboards',
    desc: 'Métricas confiáveis em tempo real. Unificamos dados (Ads, CRM, ERP) em painéis que orientam decisões, com KPIs de negócio e relatórios sob demanda.',
  },
  {
    id: 'redes',
    icon: '📱',
    title: 'Redes Sociais',
    href: '/lp/redes-sociais',
    desc: 'Calendário editorial, produção de conteúdo e community care. Unimos branding e performance para crescer com engajamento e intenção.',
  },
  {
    id: 'google-360',
    icon: '📸',
    title: 'Google 360°',
    href: '/lp/google-360',
    desc: 'Experiências imersivas no Google para reforçar presença local e digital. Imagens e tours 360° otimizados para resultados em mapas e busca.',
  },
  {
    id: 'marketplaces',
    icon: '🛒',
    title: 'Marketplaces',
    href: '/lp/marketplaces',
    desc: 'Integração, catálogo e performance em múltiplos marketplaces. Gestão de preço, promoções e mídia para crescer de forma sustentável.',
  },
  {
    id: 'assessoria',
    icon: '💼',
    title: 'Assessoria Digital',
    href: '/lp/assessoria-digital',
    desc: 'Consultoria hands-on para transformar processos e cultura digital. Roadmap priorizado e acompanhamento próximo do time.',
  },
  {
    id: 'video',
    icon: '🎥',
    title: 'Vídeo Mobile',
    href: '/lp/video-mobile',
    desc: 'Conteúdo nativo para social em formatos que respeitam a dinâmica de cada plataforma. Rápido, relevante e com foco em CTR e retenção.',
  },
  {
    id: 'treinamentos',
    icon: '🎤',
    title: 'Treinamentos & Palestras',
    href: '/lp/treinamentos-palestras',
    desc: 'Capacitação prática para squads de marketing, vendas e produto. Workshops de atribuição, mídia paga, funil e cultura orientada a dados.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.title} id={s.id} className="p-6">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="heading mt-3 text-lg font-semibold">{s.title}</h3>
            <p className="muted mt-2 text-sm leading-relaxed">{s.desc}</p>

            {s.href && (
              <div className="pt-2">
                <a href={s.href} className="underline text-default hover:opacity-90 inline-flex items-center gap-2">
                  Acessar <span aria-hidden>→</span>
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* CTA final para Contato */}
      <div className="text-center mt-12">
        <a href="/contact" className="btn-primary">
          Falar com o time →
        </a>
      </div>
    </section>
  );
}
