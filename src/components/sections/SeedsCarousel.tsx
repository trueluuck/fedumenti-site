'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

// ID do vídeo (nocookie)
const YT_ID = 'fJNfL1QP-mI';

type Slide =
  | { kind: 'video'; title: string; caption?: string }
  | { kind: 'image'; src: string; alt: string; title?: string; caption?: string }
  | { kind: 'text'; title: string; caption: string };

const slides: Slide[] = [
  {
    kind: 'video',
    title: 'Reflorestamento em ação',
    caption: 'Parte da sua contratação vira sementes para recuperar áreas verdes.',
  },
  {
    kind: 'image',
    src: '/assets/seeds-01.jpg',
    alt: 'Mudas em plantio',
    title: 'Mudas nativas',
    caption: 'Seleção de espécies adequadas ao bioma local.',
  },
  {
    kind: 'text',
    title: 'Impacto Mensurável',
    caption: 'Acompanhamos métricas ambientais: mudas plantadas, taxa de pegamento e área recuperada.',
  },
];

export default function SeedsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // respeita prefers-reduced-motion: se true, não auto-avança nem toca vídeo
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // auto-avanço
  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion]);

  const go = (dir: 1 | -1) => {
    setIndex((i) => {
      const next = i + dir;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  // URL do YouTube com autoplay silencioso e loop
  const videoSrc = useMemo(() => {
    const base = `https://www.youtube-nocookie.com/embed/${YT_ID}`;
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      controls: '0',
      rel: '0',
      loop: '1',
      playlist: YT_ID, // obrigatório para loop funcionar
      modestbranding: '1',
      playsinline: '1',
    }).toString();
    return `${base}?${params}`;
  }, []);

  // Acessibilidade: setas acessíveis
  const Arrow = ({
    dir,
    label,
  }: {
    dir: 'left' | 'right';
    label: string;
  }) => (
    <button
      aria-label={label}
      onClick={() => go(dir === 'left' ? -1 : 1)}
      className="absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus:outline-none"
      style={dir === 'left' ? { left: 12 } : { right: 12 }}
    >
      {dir === 'left' ? '‹' : '›'}
    </button>
  );

  // Render slide atual
  const current = slides[index];

  return (
    <section
      className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Programa Sementes 🌱
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Cada novo projeto financia mudas para reflorestamento. Acompanhe o impacto.
          </p>
        </header>

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-white/10 bg-white dark:bg-gray-800"
        >
          {/* Slide */}
          <div className="aspect-video w-full">
            {current.kind === 'video' ? (
              prefersReducedMotion ? (
                // fallback estático para usuários que preferem menos movimento
                <div className="h-full w-full flex items-center justify-center bg-black text-white">
                  Vídeo disponível — reprodução automática desativada por acessibilidade.
                </div>
              ) : (
                <iframe
                  className="h-full w-full"
                  src={videoSrc}
                  title="Reflorestamento"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )
            ) : current.kind === 'image' ? (
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
                priority={index === 0}
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center p-6">
                <div className="max-w-2xl text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{current.caption}</p>
                </div>
              </div>
            )}
          </div>

          {/* Legenda (opcional) */}
          {(current as any).title || (current as any).caption ? (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-3 md:p-4">
              {(current as any).title && (
                <div className="text-sm md:text-base font-semibold">{(current as any).title}</div>
              )}
              {(current as any).caption && (
                <div className="text-xs md:text-sm opacity-90">{(current as any).caption}</div>
              )}
            </div>
          ) : null}

          {/* Setas */}
          <Arrow dir="left" label="Slide anterior" />
          <Arrow dir="right" label="Próximo slide" />
        </div>

        {/* Bullets */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir para o slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? 'bg-gray-900 dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
