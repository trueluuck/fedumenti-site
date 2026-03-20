// src/components/lp/google360/CurvedCarousel.tsx
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
          className={`h-1 rounded-full transition-all duration-500 ${
            i === index ? 'w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
          }`}
        />
      )),
    [total, index, beginInteraction]
  );

  return (
    <div className="relative py-12">
      {/* Header with counter and controls */}
      <div className="mb-8 flex items-center justify-between px-4">
        <div className="inline-flex items-center gap-3 rounded-full bg-accent/30 px-4 py-1.5 backdrop-blur-md border border-border/50">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Slide</span>
          <span className="h-4 w-px bg-border/50" />
          <div className="text-sm font-bold text-foreground font-mono">
            {String(index + 1).padStart(2, '0')} <span className="text-muted-foreground">/</span> {String(total).padStart(2, '0')}
          </div>
        </div>
        
        <div className="hidden md:flex gap-3">
          <button
            aria-label="Anterior"
            onClick={() => { beginInteraction(); prev(); }}
            className="group flex h-12 w-12 items-center justify-center rounded-3xl border border-border/50 bg-background/50 text-foreground transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
          </button>
          <button
            aria-label="Próximo"
            onClick={() => { beginInteraction(); next(); }}
            className="group flex h-12 w-12 items-center justify-center rounded-3xl border border-border/50 bg-background/50 text-foreground transition-all hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Main Track with curved effect */}
      <div
        ref={wrapRef}
        className="relative w-full overflow-visible reveal"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto h-[70vw] lg:h-[45vw] md:h-[55vw] max-h-[75vh] min-h-[300px]">
          <SlideFrame item={items[iPrev]} position="left" blurred onClick={() => { beginInteraction(); prev(); }} />
          <SlideFrame item={items[index]} position="center" />
          <SlideFrame item={items[iNext]} position="right" blurred onClick={() => { beginInteraction(); next(); }} />
        </div>

        {/* Mobile Indicators */}
        <div className="mt-8 flex justify-center gap-3 md:hidden">{indicators}</div>
      </div>

      {/* Thumbnails list with premium hover effects */}
      <div className="mt-16 reveal" style={{ animationDelay: '0.3s' }}>
        <div className="mb-6 flex items-center justify-between">
          <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-4">Portfólio 360°</h4>
          <div className="h-px flex-1 bg-gradient-to-r from-border/50 via-border/20 to-transparent mx-6" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
          {items.map((it, i) => (
            <button
              key={it.id}
              onClick={() => { beginInteraction(); setIndex(i); }}
              className={`group relative overflow-hidden rounded-[1.5rem] surface p-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                i === index ? 'ring-2 ring-primary bg-primary/5 border-primary/20 scale-105 z-20 shadow-primary/20 shadow-xl' : 'hover:bg-accent/30'
              }`}
            >
              <div className="aspect-video w-full overflow-hidden rounded-[1rem] bg-black ring-1 ring-white/5">
                <iframe
                  src={it.src}
                  loading="lazy"
                  className="pointer-events-none h-full w-full scale-110 opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer-when-downgrade"
                  allow="accelerometer; gyroscope; fullscreen"
                />
              </div>
              <div className="mt-4 px-1 text-left">
                <div className={`line-clamp-1 text-xs font-bold uppercase tracking-wider transition-colors ${i === index ? 'text-primary' : 'text-foreground'}`}>
                  {it.title}
                </div>
                {it.subtitle && (
                  <div className="line-clamp-1 text-[10px] uppercase font-bold text-muted-foreground mt-1 tracking-tight">
                    {it.subtitle}
                  </div>
                )}
              </div>
              
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="h-6 w-6 rounded-full bg-primary/80 text-white flex items-center justify-center">
                    <Maximize2 size={12} />
                 </div>
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
  const base = 'absolute top-1/2 -translate-y-1/2 w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] aspect-video rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]';
  
  const styles = {
    center: 'left-1/2 -translate-x-1/2 z-30 scale-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/20',
    left: 'left-0 origin-left -rotate-[4deg] scale-[0.85] z-10 translate-x-[4%] blur-[2px] opacity-40 hover:opacity-100 hover:blur-none border border-white/10',
    right: 'right-0 origin-right rotate-[4deg] scale-[0.85] z-10 -translate-x-[4%] blur-[2px] opacity-40 hover:opacity-100 hover:blur-none border border-white/10',
  };

  return (
    <div className={`${base} ${styles[position]} ${onClick ? 'cursor-pointer pointer-events-auto' : 'pointer-events-auto'}`}>
      <button
        onClick={onClick}
        className={`group relative h-full w-full overflow-hidden`}
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
        
        {/* Captions */}
        <div
          className={`
            absolute transition-all duration-500
            ${position === 'center' 
                ? 'bottom-8 left-8 right-8 flex items-center justify-between pointer-events-none' 
                : 'inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100'
            }
          `}
        >
          {position === 'center' ? (
            <div className="flex flex-col gap-1 rounded-2xl bg-black/60 px-6 py-4 text-white backdrop-blur-xl border border-white/10 shadow-2xl">
              <span className="text-xl font-bold tracking-tight">{item.title}</span>
              {item.subtitle && <span className="text-xs font-bold uppercase tracking-widest text-primary/80">{item.subtitle}</span>}
            </div>
          ) : (
             <div className="h-14 w-14 rounded-full bg-primary/80 text-white flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                <ChevronRight size={28} />
             </div>
          )}
        </div>
      </button>
    </div>
  );
}
