// src/app/indicacoes/page.tsx
import type { Metadata } from "next";
import ServiceLPBase from "@/app/lp/common/ServiceLPBase";

export const metadata: Metadata = {
  title: "Programa de Indicações • Fedumenti Group",
  description:
    "Indique nossos serviços e receba comissionamento. Parcerias simples, transparentes e com repasse rápido.",
};

export default function Page() {
  return (
    <ServiceLPBase
      title="Programa de Indicações"
      subtitle="Traga empresas, nós fechamos e entregamos — você recebe comissão."
      badges={["Parcerias", "Comissão", "Afiliados"]}
      hero={{
        heroImage: {
          src: "/assets/posters/indicacoes.jpg", // adicione essa imagem em /public/assets/posters/
          alt: "Programa de Indicações",
        },
      }}
      benefits={[
        { icon: "💸", title: "Comissão clara", desc: "Percentual competitivo no 1º contrato e bônus em renovações." },
        { icon: "⚡",  title: "Sem burocracia", desc: "Você indica, a gente aborda, propõe e acompanha a operação." },
        { icon: "📊", title: "Transparência",  desc: "Relatórios de status da oportunidade e repasses em dia." },
        { icon: "📣", title: "Materiais & suporte", desc: "Pitches, one-pagers, cases e suporte do time comercial." },
      ]}
      ctaLabel="Quero indicar agora"
    />
  );
}
