'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import LiteYouTube from '@/components/common/LiteYouTube';

const SLIDE_INTERVAL = 6500; // ms

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const touch = useRef<{ x: number | null }>({ x: null });

  // auto-advance
  useEffect(() => {
    if (reducedMotion) return;
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, reducedMotion]);

  function startTimer() {
    stopTimer();
    timer.current = window.setTimeout(() => {
      next();
    }, SLIDE_INTERVAL) as unknown as number;
  }
  function stopTimer() {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }

  function prev() {
    setIndex((i) => (i - 1 + 3) % 3);
  }
  function next() {
    setIndex((i) => (i + 1) % 3);
  }

  // touch handlers
  function onTouchStart(e: React.TouchEvent) {
    touch.current.x = e.touches[0].clientX;
    stopTimer();
  }
  function onTouchEnd(e: React.TouchEvent) {
    const start = touch.current.x;
    if (start == null) return;
    const end = e.changedTouches[0].clientX;
    const dx = end - start;
    if (Math.abs(dx) > 40) {
      dx > 0 ? prev() : next();
    }
    touch.current.x = null;
    if (!reducedMotion) startTimer();
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-roledescription="carousel"
      aria-label="Destaques"
      onMouseEnter={stopTimer}
      onMouseLeave={() => !reducedMotion && startTimer()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/* === SLIDE 1 — HERO VIDEO (sem poster) === */}
        <div className="min-w-full h-[70vh] md:h-[80vh] relative">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/assets/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                Tecnologia e crescimento para o seu negócio
              </h1>
              <p className="mt-3 text-white/90 max-w-2xl mx-auto">
                Soluções em mídia, dados e produto para acelerar receita com previsibilidade.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/lp/trafego-pago"
                  className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
                >
                  Tráfego Pago
                </Link>
                <Link
                  href="/services"
                  className="rounded-full ring-1 ring-white/70 text-white px-6 py-3 font-semibold hover:bg-white/10 transition"
                >
                  Nossos serviços
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* === SLIDE 2 — REFLORESTAMENTO (poster via LiteYouTube) === */}
        <div className="min-w-full h-[70vh] md:h-[80vh] relative bg-black">
          <div className="absolute inset-0">
            <LiteYouTube
              videoId="fJNfL1QP-mI"
              title="Ação de Reflorestamento"
              // o LiteYouTube já mostra um poster (thumbnail) otimizado
            />
          </div>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex items-end md:items-center justify-center text-center px-6 pb-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Cada contrato planta sementes para o planeta
              </h2>
              <p className="mt-2 text-white/90 max-w-2xl mx-auto">
                Parte do nosso faturamento é revertida para reflorestamento com transparência e métricas.
              </p>
              <div className="mt-5">
                <Link
                  href="/lp/reflorestamento"
                  className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
                >
                  Conheça a iniciativa
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* === SLIDE 3 — FINANCIE A STARTUP (poster via LiteYouTube) === */}
        <div className="min-w-full h-[70vh] md:h-[80vh] relative bg-black">
          <div className="absolute inset-0">
            <LiteYouTube
              videoId="aqz-KE-bpKQ" // substitua se quiser outro vídeo
              title="Financie a Startup"
            />
          </div>
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex items-end md:items-center justify-center text-center px-6 pb-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Financie a Startup • Hub de inovação para PMEs
              </h2>
              <p className="mt-2 text-white/90 max-w-2xl mx-auto">
                Cada contrato ajuda a desenvolver um ecossistema de aceleração para pequenos e médios negócios.
              </p>
              <div className="mt-5">
                <Link
                  href="/lp/financie-startup"
                  className="rounded-full bg-white text-black px-6 py-3 font-semibold hover:opacity-90 transition"
                >
                  Quero apoiar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white text-black p-2 shadow"
        onClick={prev}
      >
        ‹
      </button>
      <button
        aria-label="Próximo slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white text-black p-2 shadow"
        onClick={next}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            aria-label={`Ir ao slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              index === i ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* === utils === */
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
