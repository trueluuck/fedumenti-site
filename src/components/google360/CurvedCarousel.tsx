'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export type TourItem = {
  id: string;
  title: string;
  subtitle?: string;
  src: string;
};

type Props = {
  items: TourItem[];
  autoplayMs?: number;
};

export default function CurvedCarousel({ items, autoplayMs = 8000 }: Props) {
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
    if (pauseTimeout.current) window.clearTimeout(pauseTimeout.current);
    pauseTimeout.current = window.setTimeout(() => setPaused(false), 5000) as unknown as number;
  }, []);

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
    timerRef.current = window.setInterval(() => next(), autoplayMs) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, next, autoplayMs]);

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
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
          }`}
        />
      )),
    [total, index, beginInteraction]
  );

  return (
    <div className="relative py-6">
      {/* Header com controles */}
      <div className="mb-6 flex items-center justify-between px-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
          <span className="text-slate-400">TOUR</span>
          <span className="font-mono text-slate-900">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        <div className="hidden md:flex gap-2">
          <button
            aria-label="Anterior"
            onClick={() => { beginInteraction(); prev(); }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Próximo"
            onClick={() => { beginInteraction(); next(); }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Track */}
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto h-[60vw] lg:h-[40vw] md:h-[50vw] max-h-[600px] min-h-[300px]">
          <SlideFrame item={items[iPrev]} position="left" blurred onClick={() => { beginInteraction(); prev(); }} />
          <SlideFrame item={items[index]} position="center" />
          <SlideFrame item={items[iNext]} position="right" blurred onClick={() => { beginInteraction(); next(); }} />
        </div>

        {/* Mobile Indicators */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">{indicators}</div>
      </div>

      {/* Thumbnails list */}
      <div className="mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {items.map((it, i) => (
            <button
              key={it.id}
              onClick={() => { beginInteraction(); setIndex(i); }}
              className={`group text-left rounded-xl p-2.5 transition-all border ${
                i === index
                  ? 'border-blue-600 bg-blue-50/30 ring-1 ring-blue-600/30'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <iframe
                  src={it.src}
                  loading="lazy"
                  className="pointer-events-none h-full w-full scale-105 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer-when-downgrade"
                  allow="accelerometer; gyroscope; fullscreen"
                />
              </div>
              <div className="mt-2.5 px-0.5">
                <div className={`line-clamp-1 text-xs font-bold ${i === index ? 'text-blue-600' : 'text-slate-900'}`}>
                  {it.title}
                </div>
                {it.subtitle && (
                  <div className="line-clamp-1 text-[10px] text-slate-500 mt-0.5">
                    {it.subtitle}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
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
  const base = 'absolute top-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[80%] aspect-video rounded-2xl overflow-hidden transition-all duration-500';

  const styles = {
    center: 'left-1/2 -translate-x-1/2 z-30 scale-100 shadow-xl border border-slate-200 bg-white',
    left: 'left-0 origin-left -translate-x-[15%] scale-[0.85] z-10 opacity-30 hover:opacity-70 blur-[1px] border border-slate-200',
    right: 'right-0 origin-right translate-x-[15%] scale-[0.85] z-10 opacity-30 hover:opacity-70 blur-[1px] border border-slate-200',
  };

  return (
    <div className={`${base} ${styles[position]} ${onClick ? 'cursor-pointer pointer-events-auto' : 'pointer-events-auto'}`}>
      <button
        onClick={onClick}
        className="group relative h-full w-full overflow-hidden"
        aria-label={position === 'center' ? item.title : `Ir para ${item.title}`}
        disabled={position === 'center'}
      >
        <iframe
          src={item.src}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="accelerometer; gyroscope; fullscreen"
        />

        {position === 'center' && (
          <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
            <div className="inline-flex flex-col rounded-xl bg-slate-900/80 px-4 py-2.5 text-white backdrop-blur-md">
              <span className="text-sm sm:text-base font-bold">{item.title}</span>
              {item.subtitle && <span className="text-[11px] text-slate-300">{item.subtitle}</span>}
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
