import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Treinamentos & Palestras • Fedumenti Group",
  description: "Capacitação prática para times de marketing, vendas e produto.",
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Treinamentos & Palestras"
      subtitle="Workshops de mídia, atribuição, funil e cultura orientada a dados."
      badges={["Workshops", "Growth", "Dados"]}
      hero={{ heroImage: { src: "/assets/posters/treinamentos.jpg", alt: "Treinamentos & Palestras" } }}
      benefits={[
        { icon: "🎯", title: "Conteúdo prático", desc: "Hands-on com seus dados/processos." },
        { icon: "👥", title: "Para squads", desc: "Marketing, vendas e produto." },
        { icon: "🛠️", title: "Ferramentas", desc: "Exercícios com seu stack." },
        { icon: "📈", title: "Resultados", desc: "Planos de ação ao final." },
      ]}
      ctaLabel="Quero treinar meu time"
    />
  );
}
