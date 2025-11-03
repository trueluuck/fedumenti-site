// src/components/cursos/CoursesClient.tsx
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type CourseVideo = {
  id: string;
  title: string;
  poster: string; // caminho do poster local (jpg/png)
  src: string;    // caminho do vídeo local (mp4/webm)
  duration?: string; // opcional (ex.: "1:12")
};

const DEFAULT_VIDEOS: CourseVideo[] = [
  {
    id: 'short1',
    title: 'Onboarding de Tráfego • Parte 1',
    poster: '/assets/cursos/short1.jpg',
    src: '/assets/cursos/short1.mp4',
    duration: '1:04',
  },
  {
    id: 'short2',
    title: 'UTM & Métricas • Guia Rápido',
    poster: '/assets/cursos/short2.jpg',
    src: '/assets/cursos/short2.mp4',
    duration: '0:52',
  },
  {
    id: 'short3',
    title: 'CRM • Campos Essenciais',
    poster: '/assets/cursos/short3.jpg',
    src: '/assets/cursos/short3.mp4',
    duration: '1:21',
  },
  // adicione até onde quiser…
];

export default function CoursesClient({ videos = DEFAULT_VIDEOS }: { videos?: CourseVideo[] }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isTouching, setIsTouching] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = videos.length;
  const active = useMemo(() => videos[activeIndex], [videos, activeIndex]);

  // Bloqueia scroll da página quando o modal abre
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.style.overflow = 'hidden';
    } else {
      root.style.overflow = '';
    }
    return () => {
      root.style.overflow = '';
    };
  }, [open]);

  // Acessibilidade: teclas Esc / ← / →
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    // pausa o vídeo ao fechar
    try {
      videoRef.current?.pause();
    } catch {}
  };

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  // Ao trocar de vídeo, inicia do começo
  useEffect(() => {
    if (!open) return;
    const v = videoRef.current;
    if (!v) return;
    try {
      v.currentTime = 0;
      // não forçamos autoplay por UX: o usuário dá play
    } catch {}
  }, [activeIndex, open]);

  // Clique fora para fechar (overlay)
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Gestos de swipe (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    setIsTouching(false);
    const start = touchStartX.current;
    if (start == null) return;
    const end = e.changedTouches[0].clientX;
    const dx = end - start;
    if (Math.abs(dx) > 50) {
      dx > 0 ? goPrev() : goNext();
    }
    touchStartX.current = null;
  };

  return (
    <section className="space-y-6">
      {/* Cabeçalho simples */}
      <header className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Cursos & Aulas (formato vertical)
          </h2>
          <p className="muted mt-1">
            Conteúdos curtos para clientes — estilo “shorts”. Clique para assistir.
          </p>
        </div>
        <span className="text-xs rounded-full px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          {count} vídeo{count === 1 ? '' : 's'}
        </span>
      </header>

      {/* Grade estilo “Netflix” para shorts (9:16) */}
      <div
        className="
          grid gap-4
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
        "
      >
        {videos.map((v, i) => (
          <button
            key={v.id}
            onClick={() => openModal(i)}
            className="
              group relative overflow-hidden rounded-2xl
              bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10
              shadow-sm
              aspect-[9/16] w-full
              focus:outline-none focus:ring-2 focus:ring-blue-500/60
            "
            aria-label={`Assistir ${v.title}`}
          >
            {/* Poster */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v.poster}
              alt={v.title}
              className="
                absolute inset-0 h-full w-full object-cover
                transition-transform duration-300 group-hover:scale-[1.03]
              "
              loading="lazy"
            />

            {/* Vignette + título */}
            <div
              className="
                absolute inset-0 pointer-events-none
                bg-gradient-to-t from-black/70 via-black/10 to-transparent
              "
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
              <div className="text-white/95 text-sm font-semibold line-clamp-2 drop-shadow">
                {v.title}
              </div>
              {!!v.duration && (
                <div className="mt-1 text-[11px] text-white/80">{v.duration}</div>
              )}
            </div>

            {/* Hover border glow (desktop) */}
            <div
              className="
                absolute inset-0 rounded-2xl ring-0 ring-blue-400/0
                group-hover:ring-2 group-hover:ring-blue-400/40 transition
              "
            />
          </button>
        ))}
      </div>

      {/* Modal Player */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Player: ${active?.title ?? ''}`}
          className="
            fixed inset-0 z-[60] flex items-center justify-center
            bg-black/70 backdrop-blur-sm
            p-4
          "
          onMouseDown={onBackdropClick}
        >
          <div
            ref={modalRef}
            className="
              relative w-full max-w-sm sm:max-w-md md:max-w-lg
              aspect-[9/16]
              rounded-2xl overflow-hidden
              border border-white/10 bg-black
              shadow-2xl
            "
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Vídeo vertical */}
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={active?.src}
              poster={active?.poster}
              controls
              playsInline
              preload="metadata"
            />

            {/* Título */}
            <div
              className="
                absolute top-0 left-0 right-0
                p-3 text-sm text-white/90
                bg-gradient-to-b from-black/60 to-transparent
              "
            >
              <div className="font-semibold line-clamp-2">{active?.title}</div>
            </div>

            {/* Fechar */}
            <button
              onClick={closeModal}
              aria-label="Fechar"
              className="
                absolute -top-3 -right-3
                h-10 w-10 rounded-full
                bg-white/95 text-black shadow
                hover:bg-white focus:outline-none
              "
            >
              ✕
            </button>

            {/* Navegação */}
            {count > 1 && (
              <>
                <button
                  onClick={goPrev}
                  aria-label="Anterior"
                  className="
                    absolute left-2 top-1/2 -translate-y-1/2
                    h-9 w-9 rounded-full
                    bg-white/90 text-black shadow
                    hover:bg-white focus:outline-none
                  "
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  aria-label="Próximo"
                  className="
                    absolute right-2 top-1/2 -translate-y-1/2
                    h-9 w-9 rounded-full
                    bg-white/90 text-black shadow
                    hover:bg-white focus:outline-none
                  "
                >
                  ›
                </button>
              </>
            )}

            {/* Contador */}
            {count > 0 && (
              <div
                className="
                  absolute bottom-2 left-1/2 -translate-x-1/2
                  text-[11px] px-2 py-1 rounded-full
                  bg-white/90 text-black
                "
              >
                {activeIndex + 1} / {count}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
