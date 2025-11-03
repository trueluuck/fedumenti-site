import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "SEO & Conteúdo • Fedumenti Group",
  description: "Conteúdo estratégico e SEO técnico para crescer organicamente.",
};

export default function Page() {
  return (
    <ServiceLPBase
      title="SEO & Conteúdo"
      subtitle="Autoridade orgânica com conteúdo consistente e SEO técnico."
      badges={["On-page", "Conteúdo", "Tech SEO"]}
      hero={{ heroImage: { src: "/assets/posters/seo.jpg", alt: "SEO & Conteúdo" } }}
      benefits={[
        { icon: "🔍", title: "Pesquisa", desc: "Intenção, volume e dificuldade." },
        { icon: "🧱", title: "SEO técnico", desc: "Arquitetura, metadados, performance." },
        { icon: "✍️", title: "Conteúdo", desc: "Calendário, pautas e revisão." },
        { icon: "📊", title: "Mensuração", desc: "Tráfego, posições e conversões." },
      ]}
      ctaLabel="Quero crescer no orgânico"
    />
  );
}
