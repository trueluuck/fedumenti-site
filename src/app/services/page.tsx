import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Soluções completas para acelerar seu crescimento digital.',
};

type Service = {
  icon: string;
  title: string;
  href?: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: '🚀',
    title: 'Tráfego Pago',
    href: '/lp/trafego-pago',
    desc:
      'Planejamento, execução e otimização em Google Ads, Meta Ads e LinkedIn Ads. Campanhas orientadas a metas (CAC, ROAS, LTV) com testes A/B e rotina de aceleração.',
  },
  {
    icon: '🛠️',
    title: 'Sites & Landing Pages',
    href: '/lp/sites',
    desc:
      'Páginas rápidas, responsivas e SEO-ready, com foco em conversão. Integração com formulários, CRM e mensuração de eventos.',
  },
  {
    icon: '🎨',
    title: 'Branding & Design',
    href: '/lp/branding-design',
    desc:
      'Identidade visual, guias de marca e materiais. Consistência estética e linguagem que comunicam valor e confiança.',
  },
  {
    icon: '🔗',
    title: 'Automação & CRM',
    href: '/lp/automacao-crm',
    desc:
      'Integrações, fluxos automatizados e nutrição de leads. Funil claro (MQL → SQL → Venda) e redução de atritos.',
  },
  {
    icon: '📈',
    title: 'SEO & Conteúdo',
    href: '/lp/seo-conteudo',
    desc:
      'SEO técnico + conteúdo estratégico para autoridade orgânica. Performance, indexação e relevância sustentáveis.',
  },
  {
    icon: '📊',
    title: 'BI & Dashboards',
    href: '/lp/bi-dashboards',
    desc:
      'Dados confiáveis em tempo real. Unificação de fontes (Ads, CRM, ERP) em painéis com KPIs de negócio.',
  },
  {
    icon: '📱',
    title: 'Redes Sociais',
    href: '/lp/redes-sociais',
    desc:
      'Calendário editorial, produção de conteúdo e community care. Engajamento com propósito e meta.',
  },
  {
    icon: '📸',
    title: 'Google 360°',
    href: '/lp/google-360',
    desc:
      'Imagens e tours 360° para reforçar presença local e digital. Otimizado para mapas e busca.',
  },
  {
    icon: '🛒',
    title: 'Marketplaces',
    href: '/lp/marketplaces',
    desc:
      'Integração, catálogo e performance multi-marketplace. Gestão de preço, promoções e mídia.',
  },
  {
    icon: '💼',
    title: 'Assessoria Digital',
    href: '/lp/assessoria-digital',
    desc:
      'Consultoria hands-on para transformação digital. Roadmap priorizado e acompanhamento do time.',
  },
  {
    icon: '🎥',
    title: 'Vídeo Mobile',
    href: '/lp/video-mobile',
    desc:
      'Conteúdo nativo para social, formatos por plataforma. Foco em CTR e retenção.',
  },
  {
    icon: '🎤',
    title: 'Treinamentos & Palestras',
    href: '/lp/treinamentos-palestras',
    desc:
      'Capacitação prática para squads. Atribuição, mídia paga, funil e cultura de dados.',
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold">Serviços</h1>
        <p className="mt-2 muted">
          Um portfólio completo para tracionar resultado, com execução ágil e foco em negócio.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.title} className="surface p-6 flex gap-4">
            <div className="text-3xl shrink-0">{s.icon}</div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed muted">{s.desc}</p>

              {!!s.href && (
                <div className="pt-1">
                  <a
                    href={s.href}
                    className="inline-flex items-center gap-2 font-semibold text-fg hover:opacity-80"
                  >
                    Acessar <span aria-hidden>→</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <div className="text-center mt-12">
        <a href="/contact" className="btn-primary">
          Falar com o time →
        </a>
      </div>
    </main>
  );
}
