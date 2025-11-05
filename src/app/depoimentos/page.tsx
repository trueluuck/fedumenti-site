import type { Metadata } from "next";
import Card from "@/components/common/Card";
import LiteYouTube from "@/components/common/LiteYouTube";

export const metadata: Metadata = {
  title: "Depoimentos",
  description: "Resultados reais de clientes da Fedumenti Group.",
};

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  poster: string;
  ytId?: string; // se houver, usa YouTube
};

const videos: Testimonial[] = [
  { id: "depo1", name: "Cliente A", role: "Diretor • Setor X", quote: "Crescemos com previsibilidade e clareza de métricas.", poster: "/assets/depo1-poster.jpg", ytId: undefined },
  { id: "depo2", name: "Cliente B", role: "CEO • Setor Y", quote: "ROI acima do esperado já nos primeiros ciclos.", poster: "/assets/depo2-poster.jpg", ytId: undefined },
  { id: "depo3", name: "Cliente C", role: "Head • Setor Z", quote: "Execução incansável e rituais que dão tração.", poster: "/assets/depo3-poster.jpg", ytId: undefined },
  { id: "depo4", name: "Cliente D", role: "CMO • Varejo", quote: "Dados unificados e decisões mais confiantes.", poster: "/assets/depo4-poster.jpg", ytId: undefined },
  { id: "depo5", name: "Cliente E", role: "CEO • Indústria", quote: "Crescimento consistente mês a mês.", poster: "/assets/depo5-poster.jpg", ytId: undefined },
  { id: "depo6", name: "Cliente F", role: "Sócio • Serviços", quote: "Testes A/B e funil com clareza.", poster: "/assets/depo6-poster.jpg", ytId: undefined },
  { id: "depo7", name: "Cliente G", role: "Diretora • Educação", quote: "Aquisição e retenção funcionando juntas.", poster: "/assets/depo7-poster.jpg", ytId: undefined },
  { id: "depo8", name: "Cliente H", role: "Head • SaaS", quote: "KPIs de negócio no centro da operação.", poster: "/assets/depo8-poster.jpg", ytId: undefined },
  { id: "depo9", name: "Cliente I", role: "Founder • Tech", quote: "Melhor governança e previsibilidade.", poster: "/assets/depo9-poster.jpg", ytId: undefined },
  { id: "depo10", name: "Cliente J", role: "COO • Logística", quote: "ROI e escala com consistência.", poster: "/assets/depo10-poster.jpg", ytId: undefined },
];

export default function DepoimentosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videos.map((v, idx) => ({
      "@type": "Review",
      position: idx + 1,
      author: { "@type": "Person", name: v.name },
      reviewBody: v.quote,
      itemReviewed: { "@type": "Organization", name: "Fedumenti Group" },
    })),
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-10 text-center">
        <h1 className="heading text-3xl font-bold">Depoimentos Reais</h1>
        <p className="muted mt-2">
          Resultados compartilhados por clientes que confiaram no nosso trabalho.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        {videos.map((v) => (
          <Card key={v.id} className="overflow-hidden p-0">
            <div className="aspect-video w-full bg-black">
              {v.ytId ? (
                <LiteYouTube videoId={v.ytId} title={`${v.name} — depoimento`} />
              ) : (
                <div className="relative h-full w-full grid place-content-center">
                  <img
                    src={v.poster}
                    alt={`${v.name} — poster`}
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                    loading="lazy"
                  />
                  <div className="relative z-10 text-center">
                    <span className="inline-flex rounded-full bg-white/80 text-black px-3 py-1 text-xs">
                      Em breve
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <blockquote className="text-default">“{v.quote}”</blockquote>
              <div className="mt-3 text-sm muted">
                <span className="font-semibold text-default">{v.name}</span>
                {" • "}
                <span>{v.role}</span>
              </div>
            </div>
          </Card>
        ))}
      </section>

      <div className="mt-12 text-center">
        <a href="/lp/trafego-pago" className="btn-primary">
          Quero resultados assim →
        </a>
      </div>
    </main>
  );
}
