import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Tráfego Pago • Fedumenti Group",
  description:
    "Planejamento, execução e otimização contínua em Google Ads, Meta Ads e LinkedIn Ads. Foco em CAC, ROAS e LTV.",
  alternates: { canonical: "https://www.fedumentigroup.com.br/lp/trafego-pago" },
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Tráfego Pago"
      subtitle="Estratégia baseada em dados, execução incansável e otimização contínua para escalar receita com previsibilidade."
      badges={["Google Ads", "Meta Ads", "LinkedIn Ads"]}
      hero={{
        heroImage: { src: "/assets/posters/trafego-pago.jpg", alt: "Tráfego Pago" },
      }}
      benefits={[
        { icon: "📊", title: "Atribuição correta", desc: "Planejamento, tracking (GTM/GA4) e leitura por funil para decisões assertivas." },
        { icon: "🚀", title: "Otimização contínua", desc: "Rotina de testes A/B, criativos, lances e segmentações com metas por etapa." },
        { icon: "💰", title: "ROI acima da média", desc: "Foco em CAC, LTV e margem por canal/campanha, com reports semanais." },
        { icon: "🤝", title: "Transparência total", desc: "Rituais de performance, metas claras e evolução acompanhada em dashboards." },
      ]}
      faqs={[
        { q: "Quais canais vocês operam?", a: "Google Ads, Meta Ads, LinkedIn Ads e, quando faz sentido, TikTok/YouTube." },
        { q: "Existe fidelidade?", a: "Recomendamos 4 meses para capturar sazonalidade mínima e gerar evolução consistente." },
        { q: "Vocês produzem criativos?", a: "Sim — produção leve in-house e/ou colaboração com seu time/parceiros." },
        { q: "Como medem sucesso?", a: "KPIs de negócio: CAC, LTV, ROAS, payback e evolução de MQL/SQL por canal/etapa." },
      ]}
      ctaLabel="Quero vender mais agora"
    />
  );
}
