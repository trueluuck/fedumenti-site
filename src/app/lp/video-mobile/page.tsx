import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Vídeo Mobile • Fedumenti Group",
  description: "Conteúdo em vídeo nativo para social, com foco em CTR e retenção.",
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Vídeo Mobile"
      subtitle="Produção ágil e formatos nativos para performar nas redes."
      badges={["Shorts", "Reels", "TikTok"]}
      hero={{ heroImage: { src: "/assets/posters/video.jpg", alt: "Vídeo Mobile" } }}
      benefits={[
        { icon: "🎥", title: "Captação ágil", desc: "Roteiros leves, setups enxutos." },
        { icon: "✂️", title: "Edição nativa", desc: "Legendas, cortes e hooks." },
        { icon: "🧪", title: "Testes", desc: "Variações por público e canal." },
        { icon: "📊", title: "Aprendizado", desc: "Iteração baseada em métricas." },
      ]}
      ctaLabel="Quero vídeos que performam"
    />
  );
}
