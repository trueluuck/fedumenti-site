'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Compass, Eye } from 'lucide-react';

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
    pauseTimeout.current = window.setTimeout(() => setPaused(false), 7000) as unknown as number;
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
          aria-label={`Ir ao tour ${i + 1}`}
          onClick={() => {
            beginInteraction();
            setIndex(i);
          }}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
          }`}
        />
      )),
    [total, index, beginInteraction]
  );

  return (
    <div className="relative py-4 space-y-6">
      {/* Header com controles */}
      <div className="flex items-center justify-between px-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-800">
          <span className="text-slate-400 font-mono">TOUR VIRTUAL</span>
          <span className="font-mono text-blue-600">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        <div className="hidden md:flex gap-2">
          <button
            aria-label="Tour Anterior"
            onClick={() => {
              beginInteraction();
              prev();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-300 shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Próximo Tour"
            onClick={() => {
              beginInteraction();
              next();
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-300 shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Track (Facade Pattern: Apenas o ativo monta iframe real) */}
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto h-[60vw] lg:h-[40vw] md:h-[50vw] max-h-[600px] min-h-[320px]">
          <SlideFrame
            item={items[iPrev]}
            position="left"
            onClick={() => {
              beginInteraction();
              prev();
            }}
          />
          <SlideFrame item={items[index]} position="center" isActive />
          <SlideFrame
            item={items[iNext]}
            position="right"
            onClick={() => {
              beginInteraction();
              next();
            }}
          />
        </div>

        {/* Mobile Indicators */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">{indicators}</div>
      </div>

      {/* Thumbnails list com Facade (Sem iframes embutidos) */}
      <div className="pt-4 border-t border-slate-200">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {items.map((it, i) => (
            <button
              key={it.id}
              onClick={() => {
                beginInteraction();
                setIndex(i);
              }}
              className={`group text-left rounded-xl p-3 transition-all border ${
                i === index
                  ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-600/20 shadow-md'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-2.5 flex flex-col justify-between text-white relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] text-blue-400 font-bold">360° HDR</span>
                  <Compass size={14} className="text-slate-400 group-hover:rotate-45 transition-transform" />
                </div>
                <div className="space-y-0.5">
                  <span className="line-clamp-1 text-xs font-bold text-slate-100">{it.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono block">{it.subtitle}</span>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] font-semibold text-slate-700">
                <span className={i === index ? 'text-blue-600 font-bold' : ''}>
                  {i === index ? 'Visualizando' : 'Explorar'}
                </span>
                <Eye size={12} className={i === index ? 'text-blue-600' : 'text-slate-400'} />
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
  isActive,
  onClick,
}: {
  item: TourItem;
  position: 'left' | 'center' | 'right';
  isActive?: boolean;
  onClick?: () => void;
}) {
  const base =
    'absolute top-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[80%] aspect-video rounded-2xl overflow-hidden transition-all duration-500';

  const styles = {
    center: 'left-1/2 -translate-x-1/2 z-30 scale-100 shadow-2xl border border-slate-300 bg-slate-900',
    left: 'left-0 origin-left -translate-x-[15%] scale-[0.85] z-10 opacity-30 hover:opacity-75 blur-[1px] border border-slate-300 bg-slate-900',
    right: 'right-0 origin-right translate-x-[15%] scale-[0.85] z-10 opacity-30 hover:opacity-75 blur-[1px] border border-slate-300 bg-slate-900',
  };

  return (
    <div
      className={`${base} ${styles[position]} ${
        onClick ? 'cursor-pointer pointer-events-auto' : 'pointer-events-auto'
      }`}
    >
      {isActive ? (
        // Iframe montado unicamente no slide ativo
        <div className="relative h-full w-full">
          <iframe
            src={item.src}
            className="h-full w-full"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            allow="accelerometer; gyroscope; fullscreen"
          />

          <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
            <div className="inline-flex flex-col rounded-xl bg-slate-950/85 px-4 py-2.5 text-white backdrop-blur-md border border-slate-800 shadow-lg">
              <span className="text-sm sm:text-base font-bold">{item.title}</span>
              {item.subtitle && <span className="text-[11px] text-slate-300 font-mono">{item.subtitle}</span>}
            </div>
          </div>
        </div>
      ) : (
        // Facade estático para slides secundários (sem custo de iframe)
        <button
          onClick={onClick}
          className="group relative h-full w-full flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-br from-slate-900 to-slate-950"
          aria-label={`Ver tour de ${item.title}`}
        >
          <Compass size={40} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
          <span className="text-lg font-bold">{item.title}</span>
          <span className="text-xs text-slate-400 mt-1 font-mono">Clique para carregar em 360°</span>
        </button>
      )}
    </div>
  );
}
