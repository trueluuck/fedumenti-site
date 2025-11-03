// src/components/lp/google360/CurvedCarousel.tsx
'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type TourItem = {
  id: string;
  title: string;
  subtitle?: string;
  src: string; // URL do <iframe> do Google Maps 360
};

type Props = {
  items: TourItem[];
  autoplayMs?: number; // default 6500
};

export default function CurvedCarousel({ items, autoplayMs = 6500 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const pauseTimeout = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const total = items.length;
  const iPrev = (index - 1 + total) % total;
  const iNext = (index + 1) % total;

  const beginInteraction = useCallback(() => {
    setPaused(true);
    // retoma sozinho após 3s sem interação
    if (pauseTimeout.current) window.clearTimeout(pauseTimeout.current);
    pauseTimeout.current = window.setTimeout(() => setPaused(false), 3000) as unknown as number;
  }, []);

  // autoplay
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => next(), autoplayMs) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, next, autoplayMs]);

  // pausa ao rolar a página
  useEffect(() => {
    const onScroll = () => beginInteraction();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [beginInteraction]);

  // teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.matches(':hover,:focus-within')) return;
      if (e.key === 'ArrowRight') {
        beginInteraction();
        next();
      } else if (e.key === 'ArrowLeft') {
        beginInteraction();
        prev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [beginInteraction, next, prev]);

  // toque (swipe)
  const startX = useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    beginInteraction();
    startX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const s = startX.current;
    if (s == null) return;
    const dx = e.changedTouches[0].clientX - s;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    startX.current = null;
  }

  const indicators = useMemo(
    () =>
      Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          aria-label={`Ir ao item ${i + 1}`}
          onClick={() => {
            beginInteraction();
            setIndex(i);
          }}
          className={`h-2 w-2 rounded-full transition ${
            i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
          }`}
        />
      )),
    [total, index, beginInteraction]
  );

  return (
    <section className="relative">
      {/* Cabeçalho do carrossel: contador + setas */}
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm muted">
          <span className="font-semibold text-default">{index + 1}</span> / {total}
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Anterior"
            onClick={() => {
              beginInteraction();
              prev();
            }}
            className="rounded-full border border-default px-3 py-1.5 text-sm hover:bg-white/10 transition"
          >
            ‹
          </button>
          <button
            aria-label="Próximo"
            onClick={() => {
              beginInteraction();
              next();
            }}
            className="rounded-full border border-default px-3 py-1.5 text-sm hover:bg-white/10 transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Pista principal (3 cartões visíveis: anterior / atual / próximo) */}
      <div
        ref={wrapRef}
        className="relative w-full overflow-visible"
        onMouseEnter={beginInteraction}
        onMouseLeave={beginInteraction}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative mx-auto h-[56.25vw] max-h-[70vh] min-h-[260px]">
          {/* Cartão anterior (à esquerda) */}
          <SlideFrame
            item={items[iPrev]}
            position="left"
            blurred
            onClick={() => {
              beginInteraction();
              prev();
            }}
          />
          {/* Cartão atual (centro) */}
          <SlideFrame item={items[index]} position="center" />
          {/* Cartão próximo (à direita) */}
          <SlideFrame
            item={items[iNext]}
            position="right"
            blurred
            onClick={() => {
              beginInteraction();
              next();
            }}
          />
        </div>

        {/* Pontinhos (mobile-first) */}
        <div className="mt-3 flex justify-center gap-2 md:hidden">{indicators}</div>
      </div>

      {/* Miniaturas (TCG vibe) */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((it, i) => (
          <button
            key={it.id}
            onClick={() => {
              beginInteraction();
              setIndex(i);
            }}
            className={`group relative overflow-hidden rounded-xl border border-default bg-white/5 p-2 transition hover:shadow-lg dark:bg-black/20 ${
              i === index ? 'ring-2 ring-indigo-400/60' : ''
            }`}
            title={`${it.title}${it.subtitle ? ` — ${it.subtitle}` : ''}`}
          >
            <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
              {/* mini-iframe em modo “preview” */}
              <iframe
                src={it.src}
                loading="lazy"
                className="pointer-events-none h-full w-full scale-105"
                referrerPolicy="no-referrer-when-downgrade"
                allow="accelerometer; gyroscope; fullscreen"
              />
            </div>
            <div className="mt-2 text-left">
              <div className="line-clamp-1 text-sm font-semibold text-default">{it.title}</div>
              {it.subtitle && (
                <div className="line-clamp-1 text-xs muted">{it.subtitle}</div>
              )}
            </div>
            {/* brilho ao hover (TCG opening vibe) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent blur-md" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function SlideFrame({
  item,
  position,
  blurred,
  onClick,
}: {
  item: TourItem;
  position: 'left' | 'center' | 'right';
  blurred?: boolean;
  onClick?: () => void;
}) {
  // posicionamento e estilo curvo “suave”
  const base =
    'absolute top-1/2 -translate-y-1/2 w-[86%] sm:w-[82%] md:w-[78%] lg:w-[74%] xl:w-[70%] aspect-video rounded-2xl overflow-hidden';
  const pos =
    position === 'center'
      ? 'left-1/2 -translate-x-1/2 z-20'
      : position === 'left'
      ? 'left-[3%] -rotate-[1.5deg] z-10'
      : 'right-[3%] rotate-[1.5deg] z-10';

  const fx =
    position === 'center'
      ? 'scale-100 shadow-2xl'
      : 'scale-90 shadow-lg';

  const blur = blurred ? 'opacity-70 backdrop-blur-[1px]' : 'opacity-100';

  return (
    <div className={`${base} ${pos} ${fx} transition-all duration-500`}>
      {/* Vidro/curvatura sutil */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/8 via-white/2 to-white/8 dark:from-black/20 dark:via-black/10 dark:to-black/20 pointer-events-none" />
      <button
        onClick={onClick}
        className={`group relative h-full w-full ${blur}`}
        aria-label={position === 'center' ? item.title : `Ir para ${item.title}`}
      >
        <iframe
          src={item.src}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="accelerometer; gyroscope; fullscreen"
        />
        {/* legenda compacta (fora da imagem no desktop, dentro no mobile) */}
        <div
          className={
            position === 'center'
              ? 'absolute -bottom-12 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur'
              : 'absolute bottom-2 left-2 hidden md:inline-flex rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur'
          }
        >
          <span className="font-semibold">{item.title}</span>
          {item.subtitle && <span className="opacity-80">• {item.subtitle}</span>}
        </div>
      </button>
    </div>
  );
}
