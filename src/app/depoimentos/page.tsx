// src/app/depoimentos/page.tsx
import type { Metadata } from 'next';
import CurvedMediaCarousel, { MediaItem } from '@/components/common/CurvedMediaCarousel';

export const metadata: Metadata = {
  title: 'Depoimentos',
  description: 'Resultados reais de clientes da Fedumenti Group.',
};

const ITEMS: MediaItem[] = [
  {
    id: 'depo1',
    kind: 'video',
    title: 'Cliente A',
    subtitle: 'Diretor • Setor X',
    poster: '/assets/depo1-poster.jpg',
    sources: [
      { src: '/assets/depo1.webm', type: 'video/webm' },
      { src: '/assets/depo1.mp4', type: 'video/mp4' },
    ],
  },
  {
    id: 'depo2',
    kind: 'video',
    title: 'Cliente B',
    subtitle: 'CEO • Setor Y',
    poster: '/assets/depo2-poster.jpg',
    sources: [
      { src: '/assets/depo2.webm', type: 'video/webm' },
      { src: '/assets/depo2.mp4', type: 'video/mp4' },
    ],
  },

  // Slots vazios (mostra “em breve” com cartinha vazia)
  ...Array.from({ length: 8 }).map((_, i) => ({
    id: `soon-${i}`,
    kind: 'video' as const,
    title: 'Em breve',
    subtitle: 'Novo depoimento',
    poster: '/assets/soon.jpg', // coloque um placeholder leve
    sources: [], // sem fontes => vídeo não toca
  })),
];

export default function DepoimentosPage() {
  // JSON-LD simples
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: ITEMS.slice(0, 2).map((v, idx) => ({
      '@type': 'Review',
      position: idx + 1,
      author: { '@type': 'Person', name: v.title },
      reviewBody: v.subtitle,
      itemReviewed: { '@type': 'Organization', name: 'Fedumenti Group' },
    })),
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Depoimentos Reais</h1>
        <p className="mt-2 muted">Experiências e resultados compartilhados por clientes.</p>
      </header>

      <CurvedMediaCarousel items={ITEMS} autoplayMs={7000} aspect="landscape" />

      <div className="text-center mt-12">
        <a href="/lp/trafego-pago" className="btn-primary">
          Quero resultados assim →
        </a>
      </div>
    </main>
  );
}
