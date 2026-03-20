// src/components/sections/HeroSection.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import YouTubeHeroPlayer from "@/components/common/YouTubeHeroPlayer";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

const SLIDES = [
  {
    kind: "youtube",
    videoId: "I9RcqnTSehk",
    title: "Inovação que Impulsiona Resultados",
    subtitle: "Mídia, dados e tecnologia para escalar sua receita com precisão digital.",
  },
  {
    kind: "image",
    src: "/assets/posters/google360.jpg",
    href: "/lp/google-360",
    title: "Experiência Google 360°",
    subtitle: "Destaque seu negócio no Google Maps com tours virtuais imersivos de alta qualidade.",
    alt: "Poster Google 360",
  },
  {
    kind: "image",
    src: "/assets/posters/reflorestamento.jpg",
    href: "/lp/reflorestamento",
    title: "Tecnologia com Propósito",
    subtitle: "Cada contrato fechado vira sementes para ações de reflorestamento e impacto real.",
    alt: "Poster Reflorestamento",
  },
  {
    kind: "image",
    src: "/assets/posters/financie-startup.jpg",
    href: "/lp/financie-startup",
    title: "Hub de Aceleração PME",
    subtitle: "Apoie o ecossistema que transforma pequenas e médias empresas através da inovação.",
    alt: "Poster Financie a Startup",
  },
];

const AUTOPLAY_MS = 8000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);
  const touchX = useRef<number | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || paused) return;
    start();
    return stop;
  }, [index, prefersReduced, paused]);

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

  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
    stop();
  }
  function onTouchEnd(e: React.TouchEvent) {
    const startX = touchX.current;
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) (dx > 0 ? prev() : next());
    touchX.current = null;
    if (!paused && !prefersReduced) start();
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Destaques Fedumenti"
      onMouseEnter={stop}
      onMouseLeave={() => !paused && start()}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-8">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] md:h-auto lg:h-[75vh] min-h-[280px] sm:min-h-[420px] overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-black shadow-2xl transition-all duration-700 ring-1 ring-border/20">
          <div className="flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ transform: `translateX(-${index * 100}%)` }}>
            {SLIDES.map((s, i) => (
              <div key={i} className="relative min-w-full h-full overflow-hidden">
                {s.kind === "youtube" ? (
                  <YouTubeSlide index={index} pos={i} slide={s} priority={i === 0} />
                ) : (
                  <div className="absolute inset-0 block">
                    <SafeImage src={s.src || ""} alt={s.alt || ""} fill sizes="100vw" className="object-cover scale-105 transition-transform duration-[10000ms] ease-linear" priority={i === 1} style={{ transform: index === i ? 'scale(1)' : 'scale(1.1)' }} />
                  </div>
                )}

                {/* Overlay more sophisticated */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-black/10 backdrop-brightness-90" />

                <div className="absolute inset-0 z-20 flex items-end sm:items-center justify-center px-4 pb-14 sm:pb-0 sm:p-6 md:p-12">
                  <article className={`w-full max-w-4xl text-center transition-all duration-1000 transform ${index === i ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2 sm:mb-4 [text-wrap:balance] drop-shadow-md">
                      {s.title}
                    </h2>

                    <p className="hidden sm:block mx-auto max-w-xl text-base sm:text-lg text-white/70 leading-snug mb-6 sm:mb-8 [text-wrap:balance]">
                      {s.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {s.kind === "youtube" ? (
                        <>
                          <button onClick={() => setIndex(i)} className="btn-primary group">
                            <PlayCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                            Explorar Tecnologia
                          </button>
                          <Link href="/contact" className="btn-outline border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                            Falar com o Time
                          </Link>
                        </>
                      ) : (
                        <Link href={s.href ?? "#"} className="btn-primary">
                          Saiba Mais
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls — hidden on xs (use swipe), visible sm+ */}
          <div className="hidden sm:flex absolute inset-y-0 left-0 right-0 z-30 pointer-events-none items-center justify-between px-4 sm:px-8">
            <button aria-label="Slide anterior" className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 hover:scale-110 flex items-center justify-center" onClick={prev}>
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Próximo slide" className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-sm transition-all hover:bg-black/40 hover:scale-110 flex items-center justify-center" onClick={next}>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-30 flex justify-center gap-2 sm:gap-3">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${index === i ? "w-8 sm:w-12 bg-primary" : "w-2 sm:w-3 bg-white/30 hover:bg-white/50"}`} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function YouTubeSlide({ index, pos, slide, priority = false }: { index: number; pos: number; slide: any; priority?: boolean }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const isActive = index === pos;
  const shouldPreload = visible && isActive;
  const posterSource = `/assets/posters/sites-1280.jpg`;

  return (
    <div ref={ref} className="absolute inset-0 h-full w-full">
      {shouldPreload ? (
        <YouTubeHeroPlayer videoId={slide.videoId} posterSrc={posterSource} className="absolute inset-0 h-full w-full object-cover" title={slide.title} autoplayWhenVisible={false} priority={priority} />
      ) : (
        <SafeImage src={posterSource} alt="Hero poster" fill sizes="100vw" className="object-cover" priority={true} />
      )}
    </div>
  );
}
