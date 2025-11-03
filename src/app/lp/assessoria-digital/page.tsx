import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Assessoria Digital • Fedumenti Group",
  description:
    "Consultoria hands-on para acelerar transformação e receita. Planejamento, rituais e coexecução com foco em métricas de negócio.",
  alternates: { canonical: "https://www.fedumentigroup.com.br/lp/assessoria-digital" },
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Assessoria Digital"
      subtitle="Roadmap priorizado, rituais e coexecução para tracionar resultado."
      badges={["Consultoria", "Growth", "Operação"]}
      hero={{ heroImage: { src: "/assets/posters/assessoria.jpg", alt: "Assessoria Digital" } }}
      benefits={[
        { icon: "🧭", title: "Diagnóstico", desc: "Levantamento de metas, baseline, tracking e gargalos prioritários." },
        { icon: "🗺️", title: "Plano 90 dias", desc: "Backlog com donos, prazos e critérios de sucesso." },
        { icon: "🤝", title: "Coexecução", desc: "Mão na massa com seu time: mídia, conteúdo, integrações e dados." },
        { icon: "📈", title: "Governança", desc: "Rituais semanais, dashboards e decisões orientadas a KPIs." },
      ]}
      faqs={[
        { q: "Qual escopo típico?", a: "Média de 8–12 iniciativas/trim (mídia, SEO, conteúdo, CRM e BI), ajustadas ao seu ciclo." },
        { q: "Como medem sucesso?", a: "KPIs de negócio: CAC, LTV, margem, geração MQL/SQL e evolução do funil." },
        { q: "Precisa de fidelidade?", a: "Recomendamos no mínimo 3–4 meses para capturar sazonalidade e maturidade de testes." },
      ]}
      ctaLabel="Quero começar"
    />
  );
}
