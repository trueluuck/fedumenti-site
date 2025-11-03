import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Automação & CRM • Fedumenti Group",
  description:
    "Integrações, fluxos e nutrição de leads. Funil claro (MQL → SQL → Venda) e menos atrito com automações inteligentes.",
  alternates: { canonical: "https://www.fedumentigroup.com.br/lp/automacao-crm" },
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Automação & CRM"
      subtitle="Orquestração de funil, integrações e playbooks de vendas."
      badges={["HubSpot/LeadLovers", "Integrações", "Playbooks"]}
      hero={{ heroImage: { src: "/assets/posters/automacao-crm.jpg", alt: "Automação & CRM" } }}
      benefits={[
        { icon: "🔗", title: "Integrações", desc: "Sites, formulários, apps e mídia conectados ao CRM." },
        { icon: "🤖", title: "Fluxos e Regras", desc: "Nutrição, pontuação (lead scoring) e SLA por etapa." },
        { icon: "📬", title: "Comms eficazes", desc: "Sequências de e-mail/WhatsApp com cadência e personalização." },
        { icon: "📊", title: "Pipeline & BI", desc: "Relatórios de funil, conversões, tempo de ciclo e motivo de perda." },
      ]}
      faqs={[
        { q: "Quais CRMs vocês suportam?", a: "Trabalhamos com HubSpot, RD, Pipedrive e integrações sob demanda." },
        { q: "Vocês configuram tracking?", a: "Sim. Eventos, UTMs e integrações para atribuição e KPIs de aquisição/vendas." },
        { q: "Como começam?", a: "Discovery + desenho de funil → configuração → testes de ponta a ponta → operação assistida." },
      ]}
      ctaLabel="Quero integrar meu funil"
    />
  );
}
