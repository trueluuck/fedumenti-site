'use client';

import LiteYouTube from '@/components/common/LiteYouTube';
import Image from 'next/image';

type CourseItem = {
  id: string;
  title: string;
  poster: string;
  ytId?: string; // se existir, usa YouTube
};

const COURSES: CourseItem[] = [
  // preencha com IDs do YouTube quando tiver (não listado)
  { id: 'short1', title: 'Tema 1', poster: '/assets/cursos/SHORT1.jpg', ytId: undefined },
  { id: 'short2', title: 'Tema 2', poster: '/assets/cursos/SHORT2.jpg', ytId: undefined },
  { id: 'short3', title: 'Tema 3', poster: '/assets/cursos/SHORT3.jpg', ytId: undefined },
];

export default function CoursesClient() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Cursos & Aulas</h1>
        <p className="muted mt-2">Conteúdos no formato vertical (shorts).</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <article key={c.id} className="surface p-3 overflow-hidden">
            <div className="aspect-[9/16] w-full bg-black rounded-xl overflow-hidden">
              {c.ytId ? (
                <LiteYouTube videoId={c.ytId} title={c.title} />
              ) : (
                <div className="relative h-full w-full grid place-content-center">
                  <Image
                    src={c.poster}
                    alt={c.title}
                    fill
                    className="object-cover opacity-70"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="relative z-10 text-center">
                    <span className="inline-flex rounded-full bg-black/70 text-white px-3 py-1 text-xs">
                      Em breve
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-3">
              <h3 className="font-semibold">{c.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
