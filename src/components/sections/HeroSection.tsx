// src/components/sections/HeroSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoPlayer from "@/components/common/VideoPlayer";

/** Slides (1º = vídeo sem poster) */
const SLIDES: Array<
  | { kind: 'video'; src: string; title: string; subtitle?: string }
  | { kind: 'image'; src: string; href: string; title: string; subtitle?: string; alt: string }
> = [
  {
    kind: 'video',
    src: 'public/assets/hero-video.mp4',
    title: 'Tecnologia e crescimento para o seu negócio',
    subtitle: 'Mídia, dados e produto para escalar receita com previsibilidade.',
  },
  {
    kind: 'image',
    src: '/assets/posters/reflorestamento.jpg',
    href: '/lp/reflorestamento',
    title: 'Reflorestamento',
    subtitle: 'Cada contrato planta sementes. Transparência e impacto real.',
    alt: 'Poster Reflorestamento',
  },
  {
    kind: 'image',
    src: '/assets/posters/financie-startup.jpg',
    href: '/lp/financie-startup',
    title: 'Financie a Startup',
    subtitle: 'Apoie o hub que acelera PMEs com inovação prática.',
    alt: 'Poster Financie a Startup',
  },
  {
    kind: 'image',
    src: '/assets/posters/google360.jpg',
    href: '/lp/google-360',
    title: 'Google 360°',
    subtitle: 'Tours imersivos que elevam a presença local e a confiança.',
    alt: 'Poster Google 360°',
  },
  {
    kind: 'image',
    src: '/assets/posters/indicacoes.jpg',
    href: '/indicacoes',
    title: 'Indicações',
    subtitle: 'Planos de indicação com comissionamento para parceiros.',
    alt: 'Poster Programa de Indicações',
  },
];

const AUTOPLAY_MS = 6500;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);
  const touchX = useRef<number | null>(null);

  const prefersReduced = usePrefersReducedMotion();

  // autoplay control
  useEffect(() => {
    if (prefersReduced || paused) return;
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, prefersReduced, paused]);

  // pausa quando a aba perde foco/visibilidade
  useEffect(() => {
    const onVis = () => setPaused((p) => (document.hidden ? true : p));
    window.addEventListener('visibilitychange', onVis);
    return () => window.removeEventListener('visibilitychange', onVis);
  }, []);

  // setas do teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key.toLowerCase() === ' ') {
        e.preventDefault();
        togglePause();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function start() {
    stop();
    timer.current = window.setTimeout(() => next(), AUTOPLAY_MS) as unknown as number;
  }
  function stop() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function prev() {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }
  function next() {
    setIndex((i) => (i + 1) % SLIDES.length);
  }
  function togglePause() {
    setPaused((p) => {
      const np = !p;
      if (np) stop();
      else start();
      return np;
    });
  }

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
    stop();
  }
  function onTouchEnd(e: React.TouchEvent) {
    const startX = touchX.current;
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 45) (dx > 0 ? prev() : next());
    touchX.current = null;
    if (!paused && !prefersReduced) start();
  }

  return (
    <section
      className="relative w-full"
      aria-roledescription="carousel"
      aria-label="Destaques"
      onMouseEnter={stop}
      onMouseLeave={() => !paused && start()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative mx-auto max-w-7xl px-4">
        <div
          className="relative aspect-[16/9] md:aspect-[16/7] overflow-hidden rounded-3xl ring-1 ring-black/10 dark:ring-white/10 shadow-2xl bg-black"
          role="group"
        >
          <div
            className="flex h-full w-full transition-transform duration-500 will-change-transform"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((s, i) => (
              <div key={i} className="relative min-w-full h-full">
                {s.kind === 'video' ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={s.src}
                    autoPlay={!prefersReduced}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Vídeo de destaque Fedumenti"
                  />
                ) : (
                  <Link
                    href={s.href}
                    className="absolute inset-0 block focus:outline-none"
                    aria-label={`Abrir: ${s.title}`}
                    prefetch
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      // prioridade leve somente para o PRIMEIRO poster estático (slide 2)
                      priority={i === 1}
                    />
                  </Link>
                )}

                {/* vinhetas/gradientes para contraste AAA */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* texto rodapé */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-6 md:p-8">
                  <div className="max-w-3xl text-white">
                    <h2
                      className={`font-extrabold leading-tight drop-shadow ${
                        s.kind === 'video'
                          ? 'text-2xl sm:text-3xl md:text-4xl'
                          : 'text-xl sm:text-2xl md:text-3xl'
                      }`}
                    >
                      {s.title}
                    </h2>

                    {s.subtitle && (
                      <p
                        className={`mt-2 text-white/90 ${
                          s.kind === 'video' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                        }`}
                      >
                        {s.subtitle}
                      </p>
                    )}

                    {s.kind === 'video' && (
                      <div className="pointer-events-auto mt-4 flex gap-3">
                        <Link
                          href="#services"
                          className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 font-semibold shadow hover:opacity-95"
                        >
                          Ver serviços
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center rounded-full ring-1 ring-white/70 px-5 py-2.5 font-semibold text-white hover:bg-white/10"
                        >
                          Falar com o time
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* setas */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3">
            <button
              aria-label="Slide anterior"
              className="pointer-events-auto grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-white/85 text-black shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
              onClick={prev}
            >
              ‹
            </button>
            <button
              aria-label="Próximo slide"
              className="pointer-events-auto grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-white/85 text-black shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
              onClick={next}
            >
              ›
            </button>
          </div>
        </div>

        {/* indicadores + botão Pausar/Retomar */}
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label={paused ? 'Retomar rotação do carrossel' : 'Pausar rotação do carrossel'}
            aria-pressed={paused}
            onClick={togglePause}
            className="rounded-full px-3 py-1 text-xs font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          >
            {paused ? 'Retomar' : 'Pausar'}
          </button>

          <div className="flex justify-center gap-2" role="tablist" aria-label="Indicadores do carrossel">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={index === i}
                aria-label={`Ir ao slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-[width,background] ${
                  index === i ? 'w-10 bg-gray-900 dark:bg-white' : 'w-6 bg-gray-400/60 dark:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Util ===== */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefers(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefers(e.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return prefers;
}
