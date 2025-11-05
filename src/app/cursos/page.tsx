// src/app/cursos/page.tsx
import type { Metadata } from 'next';
import CurvedMediaCarousel, { MediaItem } from '@/components/common/CurvedMediaCarousel';

export const metadata: Metadata = {
  title: 'Cursos & Aulas',
  description: 'Aulas em formato vertical (shorts) para clientes e comunidade.',
};

/**
 * Agora cada item pode usar:
 * - ytId: string            → vídeo no YouTube (não listado recomendado)
 * - stream: {provider,id}   → Cloudflare Stream, Mux etc.
 * - sources: []             → fallback local (evite MP4s pesados no Vercel)
 *
 * Dica: prefira ytId ou stream para não estourar o limite de 100MB do Vercel.
 */
const ITEMS: MediaItem[] = [
  // YouTube (substitua pelo ID real do vídeo não listado)
  {
    id: 'short1',
    kind: 'video',
    title: 'Short #1',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT1.jpg',
    ytId: 'COLOQUE_AQUI_ID_DO_YOUTUBE_1',
    sources: [], // evita mp4 local
  },
  {
    id: 'short2',
    kind: 'video',
    title: 'Short #2',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT2.jpg',
    ytId: 'COLOQUE_AQUI_ID_DO_YOUTUBE_2',
    sources: [],
  },

  // Cloudflare Stream / Mux (troque provider e id conforme sua plataforma)
  {
    id: 'short3',
    kind: 'video',
    title: 'Short #3',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT3.jpg',
    stream: { provider: 'cloudflare', id: 'COLOQUE_AQUI_ID_DO_STREAM_1' },
    sources: [],
  },
  {
    id: 'short4',
    kind: 'video',
    title: 'Short #4',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT4.jpg',
    stream: { provider: 'cloudflare', id: 'COLOQUE_AQUI_ID_DO_STREAM_2' },
    sources: [],
  },

  // Se quiser manter alguns locais durante o DEV, ok — mas evite no deploy
  // {
  //   id: 'short5',
  //   kind: 'video',
  //   title: 'Short #5',
  //   subtitle: 'Conteúdo vertical',
  //   poster: '/assets/cursos/SHORT5.jpg',
  //   sources: [{ src: '/assets/cursos/SHORT5.mp4', type: 'video/mp4' }],
  // },

  // Slots “Em breve” para preencher a grade
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `soon-${i + 1}`,
    kind: 'video' as const,
    title: 'Em breve',
    subtitle: 'Novo módulo',
    poster: '/assets/soon-portrait.jpg',
    sources: [],
  })),
];

export default function CoursesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Cursos & Vídeos</h1>
        <p className="mt-2 muted">Conteúdos objetivos no formato vertical (shorts) — mobile first.</p>
      </header>

      {/* Carrossel com aspecto retrato (9:16) e autoplay com pausa na interação */}
      <CurvedMediaCarousel items={ITEMS} autoplayMs={7000} aspect="portrait" />

      <div className="text-center mt-12">
        <a href="/contact" className="btn-primary">Quero treinar meu time →</a>
      </div>
    </main>
  );
}
