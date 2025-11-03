import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "BI & Dashboards • Fedumenti Group",
  description:
    "Unificação de dados (Ads, CRM, ERP) e painéis que guiam decisões. KPIs de negócio em tempo real.",
  alternates: { canonical: "https://www.fedumentigroup.com.br/lp/bi-dashboards" },
};

export default function Page() {
  return (
    <ServiceLPBase
      title="BI & Dashboards"
      subtitle="Dados confiáveis, visualizações claras e decisões mais rápidas."
      badges={["ETL", "DataViz", "KPIs"]}
      hero={{ heroImage: { src: "/assets/posters/bi-dashboards.jpg", alt: "BI & Dashboards" } }}
      benefits={[
        { icon: "🧩", title: "Unificação", desc: "Ads, Analytics, CRM, ERP: tudo num só lugar e com consistência." },
        { icon: "📐", title: "Modelagem", desc: "Definição de métricas e dimensões de negócio que importam." },
        { icon: "📊", title: "Dashboards", desc: "Painéis por área: aquisição, funil, receita, churn, cohort." },
        { icon: "🔍", title: "Qualidade de dados", desc: "Auditoria e alertas para manter integridade e confiabilidade." },
      ]}
      faqs={[
        { q: "Ferramentas?", a: "Data Studio/Looker, Power BI, Metabase — e pipelines com BigQuery/ETL quando necessário." },
        { q: "Tempo de entrega?", a: "MVP em 2–4 semanas (dados e layout base), evoluindo continuamente." },
        { q: "Acesso do time?", a: "Perfis por área, trilhas de leitura e automação de relatórios por e-mail." },
      ]}
      ctaLabel="Quero meus KPIs em um só lugar"
    />
  );
}
