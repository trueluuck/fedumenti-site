import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Sites & Landing Pages • Fedumenti Group",
  description: "Páginas rápidas, responsivas e SEO-ready, com foco em conversão.",
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Sites & Landing Pages"
      subtitle="Experiências rápidas, responsivas e orientadas à conversão — com SEO técnico e mensuração completa."
      badges={["Next.js", "SEO", "Performance"]}
      hero={{ heroImage: { src: "/assets/posters/sites.jpg", alt: "Sites & LPs" } }}
      benefits={[
        { icon: "⚡", title: "Performance", desc: "Core Web Vitals, cache e imagens otimizadas." },
        { icon: "🔍", title: "SEO técnico", desc: "Metadados, OG, sitemaps e estrutura de conteúdo." },
        { icon: "🎯", title: "Conversão", desc: "Formulários, CRM, pixels, eventos e testes A/B." },
        { icon: "🔗", title: "Integrações", desc: "HubSpot, RD, Pipedrive, Zapier e automações." },
      ]}
      steps={[
        { step: "01", title: "Descoberta", desc: "Objetivos, público, benchmarks e escopo." },
        { step: "02", title: "Design", desc: "Wireframes, UI e assets." },
        { step: "03", title: "Dev", desc: "Implementação, QA e tracking." },
        { step: "04", title: "Go-live", desc: "Deploy, monitores e otimização contínua." },
      ]}
      faqs={[
        { q: "Vocês hospedam?", a: "Deploy em Vercel ou infra do cliente; configuramos DNS/domínios." },
        { q: "Prazo médio?", a: "De 2 a 6 semanas, conforme escopo e integrações." },
      ]}
      ctaLabel="Quero meu site/LP"
    />
  );
}
