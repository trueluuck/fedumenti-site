// src/components/sections/ServicesSection.tsx
import Link from "next/link";
import { ReactNode } from "react";

type Service = {
  id: string;
  title: string;
  desc: string;
  icon: ReactNode;
  href: string;
};

const surface =
  "rounded-2xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200/70 dark:ring-white/10 transition hover:shadow-xl hover:ring-gray-300/90 dark:hover:ring-white/25";

const services: Service[] = [
  // ——— Destaques no formato novo ———
  { id: "trafego-pago",      title: "Tráfego Pago",           desc: "Google Ads, Meta Ads, LinkedIn Ads e otimização contínua de performance.", icon: "🚀", href: "/lp/trafego-pago" },
  { id: "sites-lps",         title: "Sites & Landing Pages",  desc: "Experiências rápidas, responsivas e orientadas à conversão.",               icon: "🛠️", href: "/services#sites-lps" },
  { id: "branding",          title: "Branding & Design",      desc: "Identidade visual, diretrizes e materiais para fortalecer sua marca.",     icon: "🎨", href: "/services#branding" },
  { id: "automacao-crm",     title: "Automação & CRM",        desc: "Integrações, fluxos e nutrição de leads para vender no automático.",       icon: "🔗", href: "/services#automacao-crm" },
  { id: "seo",               title: "SEO & Conteúdo",         desc: "Conteúdo estratégico, autoridade orgânica e crescimento sustentável.",     icon: "📈", href: "/services#seo" },
  { id: "bi",                title: "BI & Dashboards",        desc: "Métricas claras, dados confiáveis e decisões mais rápidas.",               icon: "📊", href: "/services#bi" },

  // ——— Itens do catálogo original ———
  { id: "redes-sociais",     title: "Redes Sociais",          desc: "Conteúdo e gestão de redes sociais para engajamento.",                      icon: "📱", href: "/services#redes-sociais" },
  { id: "google-360",        title: "Google 360°",            desc: "Experiências imersivas e presença digital no Google.",                      icon: "📸", href: "/services#google-360" },
  { id: "marketplaces",      title: "Marketplaces",           desc: "Integração e gestão em múltiplos marketplaces.",                            icon: "🛒", href: "/services#marketplaces" },
  { id: "assessoria-digital",title: "Assessoria Digital",     desc: "Consultoria para transformar digitalmente seu negócio.",                    icon: "💼", href: "/services#assessoria-digital" },
  { id: "video-mobile",      title: "Vídeo Mobile",           desc: "Produção de conteúdo em vídeo para redes sociais.",                         icon: "🎥", href: "/services#video-mobile" },
  { id: "treinamentos",      title: "Treinamentos & Palestras",desc:"Capacitação para equipes e líderes.",                                      icon: "🎤", href: "/services#treinamentos" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Serviços</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Do topo ao fundo do funil — soluções completas para crescer com previsibilidade.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.id}
            href={s.href}
            aria-label={`${s.title} — acessar`}
            className={`group block p-6 ${surface} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/50 dark:focus-visible:ring-white/50`}
          >
            <article className="h-full">
              <div className="text-4xl mb-2 transition group-hover:scale-105">{s.icon}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
                Acessar <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
