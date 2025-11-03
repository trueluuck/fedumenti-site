import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Redes Sociais • Fedumenti Group",
  description: "Conteúdo e gestão de redes para engajar com intenção.",
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Redes Sociais"
      subtitle="Estratégia, calendário e produção para presença que gera negócio."
      badges={["Social", "Conteúdo", "Gestão"]}
      hero={{ heroImage: { src: "/assets/posters/redes.jpg", alt: "Redes Sociais" } }}
      benefits={[
        { icon: "🗓️", title: "Planejamento", desc: "Calendário por objetivo e canal." },
        { icon: "🎬", title: "Produção", desc: "Posts, vídeos e criativos nativos." },
        { icon: "💬", title: "Community", desc: "Atendimento e rotinas de engajamento." },
        { icon: "📈", title: "Métricas", desc: "Análises e otimizações periódicas." },
      ]}
      ctaLabel="Quero crescer nas redes"
    />
  );
}
