// src/app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Soluções completas de growth e tecnologia.",
};

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
  // Destaques (com LP no Tráfego)
  { id: "trafego-pago",      title: "Tráfego Pago",           desc: "Google Ads, Meta Ads, LinkedIn Ads e otimização contínua de performance.", icon: "🚀", href: "/lp/trafego-pago" },
  { id: "sites-lps",         title: "Sites & Landing Pages",  desc: "Experiências rápidas, responsivas e orientadas à conversão.",               icon: "🛠️", href: "#sites-lps" },
  { id: "branding",          title: "Branding & Design",      desc: "Identidade visual, diretrizes e materiais para fortalecer sua marca.",     icon: "🎨", href: "#branding" },
  { id: "automacao-crm",     title: "Automação & CRM",        desc: "Integrações, fluxos e nutrição de leads para vender no automático.",       icon: "🔗", href: "#automacao-crm" },
  { id: "seo",               title: "SEO & Conteúdo",         desc: "Conteúdo estratégico, autoridade orgânica e crescimento sustentável.",     icon: "📈", href: "#seo" },
  { id: "bi",                title: "BI & Dashboards",        desc: "Métricas claras, dados confiáveis e decisões mais rápidas.",               icon: "📊", href: "#bi" },

  // Catálogo original
  { id: "redes-sociais",     title: "Redes Sociais",          desc: "Conteúdo e gestão de redes sociais para engajamento.",                      icon: "📱", href: "#redes-sociais" },
  { id: "google-360",        title: "Google 360°",            desc: "Experiências imersivas e presença digital no Google.",                      icon: "📸", href: "#google-360" },
  { id: "marketplaces",      title: "Marketplaces",           desc: "Integração e gestão em múltiplos marketplaces.",                            icon: "🛒", href: "#marketplaces" },
  { id: "assessoria-digital",title: "Assessoria Digital",     desc: "Consultoria para transformar digitalmente seu negócio.",                    icon: "💼", href: "#assessoria-digital" },
  { id: "video-mobile",      title: "Vídeo Mobile",           desc: "Produção de conteúdo em vídeo para redes sociais.",                         icon: "🎥", href: "#video-mobile" },
  { id: "treinamentos",      title: "Treinamentos & Palestras",desc:"Capacitação para equipes e líderes.",                                      icon: "🎤", href: "#treinamentos" },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Nossos serviços</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Clique em qualquer card para saber mais (Tráfego Pago já tem LP dedicada).
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
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-100">
                Acessar <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* ——— Seções âncora rápidas (conteúdo breve por enquanto) ——— */}
      <section id="sites-lps" className="mt-16 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Sites & Landing Pages</h3>
        <p className="text-gray-600 dark:text-gray-300">Experiências rápidas, responsivas e orientadas à conversão.</p>
      </section>

      <section id="branding" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Branding & Design</h3>
        <p className="text-gray-600 dark:text-gray-300">Identidade visual, diretrizes e materiais para fortalecer sua marca.</p>
      </section>

      <section id="automacao-crm" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Automação & CRM</h3>
        <p className="text-gray-600 dark:text-gray-300">Integrações, fluxos e nutrição de leads para vender no automático.</p>
      </section>

      <section id="seo" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">SEO & Conteúdo</h3>
        <p className="text-gray-600 dark:text-gray-300">Conteúdo estratégico, autoridade orgânica e crescimento sustentável.</p>
      </section>

      <section id="bi" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">BI & Dashboards</h3>
        <p className="text-gray-600 dark:text-gray-300">Métricas claras, dados confiáveis e decisões mais rápidas.</p>
      </section>

      {/* Originais */}
      <section id="redes-sociais" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Redes Sociais</h3>
        <p className="text-gray-600 dark:text-gray-300">Conteúdo e gestão de redes sociais para engajamento.</p>
      </section>

      <section id="google-360" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Google 360°</h3>
        <p className="text-gray-600 dark:text-gray-300">Experiências imersivas e presença digital no Google.</p>
      </section>

      <section id="marketplaces" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Marketplaces</h3>
        <p className="text-gray-600 dark:text-gray-300">Integração e gestão em múltiplos marketplaces.</p>
      </section>

      <section id="assessoria-digital" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Assessoria Digital</h3>
        <p className="text-gray-600 dark:text-gray-300">Consultoria para transformar digitalmente seu negócio.</p>
      </section>

      <section id="video-mobile" className="mt-12 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Vídeo Mobile</h3>
        <p className="text-gray-600 dark:text-gray-300">Produção de conteúdo em vídeo para redes sociais.</p>
      </section>

      <section id="treinamentos" className="mt-12 mb-6 scroll-mt-24">
        <h3 className="text-2xl font-bold mb-2">Treinamentos & Palestras</h3>
        <p className="text-gray-600 dark:text-gray-300">Capacitação para equipes e líderes.</p>
      </section>
    </main>
  );
}
