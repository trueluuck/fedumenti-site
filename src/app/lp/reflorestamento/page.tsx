// src/app/lp/reflorestamento/page.tsx
import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Reflorestamento • Fedumenti Group",
  description:
    "Parte de cada contrato é revertida em sementes e ações de reflorestamento. Transparência, métricas e impacto real.",
  alternates: { canonical: "https://www.fedumentigroup.com.br/lp/reflorestamento" },
  openGraph: {
    title: "Reflorestamento • Fedumenti Group",
    description:
      "Impacto ambiental com métricas: cada contrato ajuda a plantar e acompanhar resultados.",
    url: "https://www.fedumentigroup.com.br/lp/reflorestamento",
    siteName: "Fedumenti Group",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Reflorestamento"
      subtitle="Impacto que cresce junto com o seu negócio — transparência, métricas e prestação de contas."
      badges={["ESG", "Métricas", "Impacto real"]}
      hero={{
        heroImage: {
          src: "/assets/posters/reflorestamento.jpg",
          alt: "Programa de Reflorestamento",
        },
      }}
      benefits={[
        { icon: "🌱", title: "Plantio por contrato", desc: "Percentual do faturamento destinado ao plantio de mudas." },
        { icon: "📏", title: "Métricas e prestação", desc: "Relatórios com estimativas de CO₂ e árvores plantadas." },
        { icon: "🔍", title: "Transparência", desc: "Parcerias e monitoramento com registro dos plantios." },
        { icon: "🤝", title: "Integração ESG", desc: "Apoio para comunicar o impacto em canais e materiais da marca." },
      ]}
      faqs={[
        { q: "Como o plantio é calculado?", a: "Aplicamos um percentual do contrato em mudas e insumos, registrando lote, data e local." },
        { q: "Há relatório de impacto?", a: "Sim. Entregamos relatório periódico com mudas, áreas de plantio e estimativas de sequestro de carbono." },
        { q: "Posso divulgar o selo?", a: "Claro. Fornecemos diretrizes de uso e materiais de comunicação para seu site e redes sociais." },
      ]}
      ctaLabel="Quero participar"
    />
  );
}
