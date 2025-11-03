import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Marketplaces • Fedumenti Group",
  description: "Integração e performance em múltiplos marketplaces.",
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Marketplaces"
      subtitle="Catálogo, preço e mídia para vender bem em diferentes marketplaces."
      badges={["Integração", "Catálogo", "Performance"]}
      hero={{ heroImage: { src: "/assets/posters/marketplaces.jpg", alt: "Marketplaces" } }}
      benefits={[
        { icon: "🔌", title: "Integrações", desc: "ERP, gateways e hubs." },
        { icon: "🏷️", title: "Pricing", desc: "Política por canal e promoções." },
        { icon: "📦", title: "Operação", desc: "SLA, catálogo e logística." },
        { icon: "📣", title: "Ads", desc: "Mídia on-site e off-site." },
      ]}
      ctaLabel="Quero vender mais"
    />
  );
}
