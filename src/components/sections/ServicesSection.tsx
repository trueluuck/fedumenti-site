// src/components/sections/ServicesSection.tsx
import Link from 'next/link';

type Service = {
  icon: string;
  title: string;
  desc: string;
  href?: string; // mantido para futura/possível reativação do clique
};

const ALL_SERVICES: Service[] = [
  { icon: '🚀', title: 'Tráfego Pago', desc: 'Google Ads, Meta Ads, LinkedIn Ads e otimização contínua de performance.', href: '/lp/trafego-pago' },
  { icon: '🛒', title: 'Marketplaces', desc: 'Integração e gestão em múltiplos marketplaces.', href: '/services#marketplaces' },
  { icon: '📸', title: 'Google 360°', desc: 'Experiências imersivas e presença digital no Google.', href: '/lp/google-360' },
  { icon: '🛠️', title: 'Sites & Landing Pages', desc: 'Experiências rápidas, responsivas e orientadas à conversão.', href: '/services#sites' },
  { icon: '🎨', title: 'Branding & Design', desc: 'Identidade visual e materiais para fortalecer sua marca.', href: '/services#branding' },
  { icon: '🔗', title: 'Automação & CRM', desc: 'Integrações, fluxos e nutrição de leads para vender no automático.', href: '/services#automacao' },
  { icon: '📈', title: 'SEO & Conteúdo', desc: 'Conteúdo estratégico e autoridade orgânica.', href: '/services#seo' },
  { icon: '📊', title: 'BI & Dashboards', desc: 'Métricas claras e decisões mais rápidas.', href: '/services#bi' },
  { icon: '💼', title: 'Assessoria Digital', desc: 'Consultoria para transformação digital.', href: '/services#assessoria' },
  { icon: '🎥', title: 'Vídeo Mobile', desc: 'Conteúdo em vídeo para redes sociais.', href: '/services#video' },
  { icon: '📱', title: 'Redes Sociais', desc: 'Conteúdo e gestão para engajamento.', href: '/services#redes' },
];

const HIGHLIGHTS = ALL_SERVICES.slice(0, 3);

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold">O que fazemos</h2>
        <p className="mt-2 muted">
          Serviços para acelerar o crescimento da sua empresa.
        </p>
      </header>

      {/* Top 3 – apenas informativo (sem "Acessar →" em cada card) */}
      <div className="grid gap-6 md:grid-cols-3">
        {HIGHLIGHTS.map((s) => (
          <article
            key={s.title}
            className="surface p-6 block"
          >
            <div className="text-3xl">{s.icon}</div>
            <div className="mt-3 text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-sm muted">{s.desc}</p>
          </article>
        ))}
      </div>

      {/* CTA único para a página de serviços */}
      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="btn-primary"
        >
          Ver todos os serviços →
        </Link>
      </div>
    </section>
  );
}
