import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Branding & Design • Fedumenti Group",
  description:
    "Identidade visual, guia de marca e materiais para fortalecer comunicação e percepção de valor.",
  alternates: { canonical: "https://www.fedumentigroup.com.br/lp/branding-design" },
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Branding & Design"
      subtitle="Clareza visual, consistência e materiais que convertem."
      badges={["Identidade", "Guia de Marca", "Materiais"]}
      hero={{ heroImage: { src: "/assets/posters/branding-design.jpg", alt: "Branding & Design" } }}
      benefits={[
        { icon: "🎨", title: "Identidade", desc: "Logo, tipografia, paleta e assets prontos para uso." },
        { icon: "📘", title: "Guia de marca", desc: "Uso de marca, tom de voz, grid de componentes e exemplos." },
        { icon: "🧰", title: "Materiais", desc: "Kits para mídia-performance, social e sales enablement." },
        { icon: "⚡", title: "Perf + UX", desc: "Design pensando em conversão e velocidade de entrega." },
      ]}
      faqs={[
        { q: "Rebranding ou do zero?", a: "Ambos. Fazemos discovery/benchmark e definimos escopo junto com o time." },
        { q: "Entregáveis?", a: "Pacote de arquivos organizados + guia de marca + templates editáveis." },
        { q: "Integra com LPs?", a: "Sim. Entregamos já preparado para sites/LPs e campanhas." },
      ]}
      ctaLabel="Quero fortalecer minha marca"
    />
  );
}
  