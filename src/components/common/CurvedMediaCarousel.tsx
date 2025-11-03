// src/components/common/CurvedMediaCarousel.tsx
'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

export type MediaSource = { src: string; type: string };

export type MediaItem =
  | {
      id: string;
      title: string;
      subtitle?: string;
      kind: 'iframe';
      src: string; // URL do embed (YouTube/Maps, etc.)
    }
  | {
      id: string;
      title: string;
      subtitle?: string;
      kind: 'video';
      poster?: string;
      sources: MediaSource[]; // vídeos locais ou hospedados
    };

export type CurvedMediaCarouselProps = {
  items: MediaItem[];
  /** duração do avanço automático (ms) */
  autoplayMs?: number;
  /** 'landscape' => 16/9 | 'portrait' => 9/16 */
  aspect?: 'landscape' | 'portrait';
};

export default function CurvedMediaCarousel({
  items,
  autoplayMs = 6500,
  aspect = 'landscape',
}: CurvedMediaCarouselProps) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const touchingRef = useRef(false);
  const startXRef = useRef<number | null>(null);

  const isPortrait = aspect === 'portrait';
  const aspectClass = isPortrait ? 'aspect-[9/16]' : 'aspect-[16/9]';

  const count = items.length;

  const dots = useMemo(() => [...Array(count).keys()], [count]);

  // autoplay
  useEffect(() => {
    if (paused || count <= 1) return;
    stop();
    timerRef.current = window.setInterval(() => {
      setIdx((i) => (i + 1) % count);
    }, autoplayMs) as unknown as number;
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count, autoplayMs]);

  function stop() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function prev() {
    setIdx((i) => (i - 1 + count) % count);
  }
  function next() {
    setIdx((i) => (i + 1) % count);
  }

  // Pausa quando usuário interage/rola
  useEffect(() => {
    const onScroll = () => setPaused(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Touch para swipe
  function onTouchStart(e: React.TouchEvent) {
    touchingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    setPaused(true);
  }
  function onTouchEnd(e: React.TouchEvent) {
    const sx = startXRef.current;
    touchingRef.current = false;
    if (sx != null) {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 45) (dx > 0 ? prev() : next());
    }
    startXRef.current = null;
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Pista com perspectiva */}
      <div className="relative isolate mx-auto max-w-6xl">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-b from-black/0 via-black/5 to-black/10 dark:from-white/0 dark:via-white/5 dark:to-white/10 blur-2xl" />
        <div className="flex items-center justify-between px-2 sm:px-3">
          <button
            aria-label="Slide anterior"
            onClick={prev}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/85 text-black shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
          >
            ‹
          </button>
          <span aria-live="polite" className="sr-only">
            {idx + 1} de {count}
          </span>
          <button
            aria-label="Próximo slide"
            onClick={next}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/85 text-black shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
          >
            ›
          </button>
        </div>

        {/* Cartas curvas */}
        <div className="mt-3 grid grid-cols-1">
          <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
            {items.map((card, i) => {
              const offset = ((i - idx + count) % count);
              const isCenter = offset === 0;
              const isLeft = offset === count - 1;
              const isRight = offset === 1;

              const base =
                'transition-all duration-500 will-change-transform rounded-[18px] ring-1 ring-black/10 dark:ring-white/10 bg-black/5 dark:bg-white/5 overflow-hidden';

              const posClass = isCenter
                ? 'z-30 scale-100 opacity-100'
                : (isLeft || isRight)
                ? 'z-20 scale-[0.92] opacity-90 blur-[1.5px]'
                : 'z-10 scale-[0.84] opacity-60 blur-sm hidden md:block';

              return (
                <div key={card.id} className={`${base} ${posClass}`}>
                  <div className={`${aspectClass} w-full`}>
                    {/* media */}
                    {card.kind === 'iframe' ? (
                      <iframe
                        title={card.title}
                        src={(card as any).src}
                        className="h-full w-full"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                      />
                    ) : (
                      <video
                        className="h-full w-full object-cover"
                        poster={(card as any).poster}
                        controls
                        preload="metadata"
                        playsInline
                      >
                        {(card as any).sources?.map((s: MediaSource) => (
                          <source key={s.src} src={s.src} type={s.type} />
                        ))}
                      </video>
                    )}
                  </div>

                  {/* legenda */}
                  <div className="px-4 py-3">
                    <div className="text-sm font-semibold text-default">{card.title}</div>
                    {card.subtitle && <div className="text-xs text-muted">{card.subtitle}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots + botão Pausar */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label={paused ? 'Retomar rotação' : 'Pausar rotação'}
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
            className="rounded-full px-3 py-1 text-xs font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          >
            {paused ? 'Retomar' : 'Pausar'}
          </button>
          <div className="flex gap-2">
            {dots.map((d) => (
              <button
                key={d}
                onClick={() => setIdx(d)}
                aria-label={`Ir ao ${d + 1}º item`}
                className={`h-1.5 rounded-full transition-[width,background] ${
                  d === idx ? 'w-10 bg-gray-900 dark:bg-white' : 'w-6 bg-gray-400/60 dark:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Miniaturas (estilo pack) */}
        <div className="mt-5 flex snap-x gap-2 overflow-x-auto px-1 hide-scrollbar">
          {items.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setIdx(i)}
              className={`snap-center rounded-xl ring-1 ring-black/10 dark:ring-white/10 transition ${
                i === idx ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              }`}
              style={{ width: isPortrait ? 90 : 140 }}
              aria-label={`Selecionar: ${m.title}`}
            >
              <div className={`${aspectClass} w-full overflow-hidden rounded-xl`}>
                {m.kind === 'iframe' ? (
                  <div className="h-full w-full bg-black/20" />
                ) : (
                  <img
                    src={(m as any).poster || '/assets/thumb-fallback.jpg'}
                    alt={m.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
