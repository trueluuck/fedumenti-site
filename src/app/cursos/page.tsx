// src/app/cursos/page.tsx
import type { Metadata } from 'next';
import CurvedMediaCarousel, { MediaItem } from '@/components/common/CurvedMediaCarousel';

export const metadata: Metadata = {
  title: 'Cursos & Aulas',
  description: 'Aulas em formato vertical (shorts) para clientes e comunidade.',
};

const ITEMS: MediaItem[] = [
  {
    id: 'short1',
    kind: 'video',
    title: 'Short #1',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT1.jpg',
    sources: [{ src: '/assets/cursos/SHORT1.mp4', type: 'video/mp4' }],
  },
  {
    id: 'short2',
    kind: 'video',
    title: 'Short #2',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT2.jpg',
    sources: [{ src: '/assets/cursos/SHORT2.mp4', type: 'video/mp4' }],
  },
  {
    id: 'short3',
    kind: 'video',
    title: 'Short #3',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT3.jpg',
    sources: [{ src: '/assets/cursos/SHORT3.mp4', type: 'video/mp4' }],
  },
  {
    id: 'short4',
    kind: 'video',
    title: 'Short #4',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT4.jpg',
    sources: [{ src: '/assets/cursos/SHORT4.mp4', type: 'video/mp4' }],
  },
  {
    id: 'short5',
    kind: 'video',
    title: 'Short #5',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT5.jpg',
    sources: [{ src: '/assets/cursos/SHORT5.mp4', type: 'video/mp4' }],
  },
  {
    id: 'short6',
    kind: 'video',
    title: 'Short #6',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT6.jpg',
    sources: [{ src: '/assets/cursos/SHORT6.mp4', type: 'video/mp4' }],
  },
  {
    id: 'short7',
    kind: 'video',
    title: 'Short #7',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT7.jpg',
    sources: [{ src: '/assets/cursos/SHORT7.mp4', type: 'video/mp4' }],
  },
  {
    id: 'short8',
    kind: 'video',
    title: 'Short #8',
    subtitle: 'Conteúdo vertical',
    poster: '/assets/cursos/SHORT8.jpg',
    sources: [{ src: '/assets/cursos/SHORT8.mp4', type: 'video/mp4' }],
  },
  // slots “Em breve” (mantêm a grade cheia se faltar arquivo)
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `soon-${i}`,
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
