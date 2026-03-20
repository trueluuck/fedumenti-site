"use client";
import { useEffect, useState } from "react";

/**
 * Hook customizado para detectar se o usuário prefere movimentos reduzidos (Acessibilidade).
 */
export function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setPrefers(e.matches);
    
    // Suporte para navegadores mais antigos (Safari 13)
    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    } else {
      // @ts-ignore - legibilidade para navegadores antigos
      mq.addListener(onChange);
      // @ts-ignore
      return () => mq.removeListener(onChange);
    }
  }, []);

  return prefers;
}
