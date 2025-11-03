'use client';

import { useEffect, useRef } from 'react';

type Options = {
  /** Velocidade do auto-scroll em pixels por segundo (default 40) */
  pxPerSec?: number;
  /** Por quanto tempo pausar após interação do usuário (default 2000ms) */
  pauseMs?: number;
};

export function useAutoScrollMarquee<T extends HTMLElement>(
  ref: React.RefObject<T>,
  { pxPerSec = 40, pauseMs = 2000 }: Options = {}
) {
  const rafId = useRef<number | null>(null);
  const lastTs = useRef<number>(0);
  const pausedUntil = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const now = () => performance.now();
    const pause = () => (pausedUntil.current = now() + pauseMs);

    // Pausar ao interagir (melhora clique no mobile)
    const onUserInteract = () => pause();
    const onScroll = () => pause();

    el.addEventListener('pointerdown', onUserInteract, { passive: true });
    el.addEventListener('mouseenter', onUserInteract, { passive: true });
    el.addEventListener('touchstart', onUserInteract, { passive: true });
    el.addEventListener('focusin', onUserInteract, { passive: true });
    el.addEventListener('wheel', onUserInteract, { passive: true });
    el.addEventListener('scroll', onScroll, { passive: true });

    // Loop de animação leve
    const tick = (ts: number) => {
      const element = ref.current;
      if (!element) return;

      if (!lastTs.current) lastTs.current = ts;
      const dt = (ts - lastTs.current) / 1000;
      lastTs.current = ts;

      const isPaused = ts < pausedUntil.current;
      if (!isPaused) {
        const max = element.scrollWidth - element.clientWidth;
        if (max > 0) {
          element.scrollLeft += pxPerSec * dt;
          // “loop infinito” simples (reset suave)
          if (element.scrollLeft >= max - 2) {
            element.scrollLeft = 0;
          }
        }
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('pointerdown', onUserInteract);
      el.removeEventListener('mouseenter', onUserInteract);
      el.removeEventListener('touchstart', onUserInteract);
      el.removeEventListener('focusin', onUserInteract);
      el.removeEventListener('wheel', onUserInteract);
      el.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [ref, pxPerSec, pauseMs]);
}
