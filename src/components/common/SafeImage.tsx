// src/components/common/SafeImage.tsx
"use client";
import Image, { ImageProps } from "next/image";
import { useMemo, useState } from "react";

/**
 * SafeImage: wrapper robusto para next/image que:
 * - tenta múltiplos candidatos (original, -1280, -640, sem sufixo)
 * - evita duplicar sufixos quando já presente
 * - tenta variantes em /assets/ e /assets/posters/
 * - faz fallback final para um placeholder interno
 */
type Props = ImageProps & {
  fallbackSrc?: string;
  trySizes?: number[];
};

function hasSizeSuffix(src: string) {
  return /-\d{2,4}(?=\.(jpg|jpeg|png|webp|avif)$)/i.test(src);
}

function addSuffix(src: string, size: number) {
  return src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, `-${size}.$1`);
}

function withoutSuffix(src: string) {
  return src.replace(/-\d{2,4}(?=\.(jpg|jpeg|png|webp|avif)$)/i, "");
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/assets/posters/sites-1280.jpg",
  trySizes = [1280, 640],
  ...rest
}: Props) {
  const orig = typeof src === "string" ? src : (src as any);
  const [current, setCurrent] = useState<string | any>(orig);
  const candidates = useMemo(() => {
    const base = typeof orig === "string" ? orig : "";
    const list: string[] = [];

    if (!base) {
      list.push(fallbackSrc);
      return Array.from(new Set(list));
    }

    // original exact
    list.push(base);

    // if already has suffix like -1280.jpg, add a no-suffix version too
    if (hasSizeSuffix(base)) {
      list.push(withoutSuffix(base));
    } else {
      // try common size suffixes
      for (const s of trySizes) list.push(addSuffix(base, s));
      // also try no-suffix again (redundant but safe)
      list.push(base);
    }

    // cross-check candidates in posters folder if not already under posters
    if (!base.includes("/posters/")) {
      const nameOnly = base.replace(/^\/assets\//, "");
      list.push(`/assets/posters/${nameOnly}`);
      // try sized variants in posters
      if (!hasSizeSuffix(base)) {
        for (const s of trySizes) list.push(`/assets/posters/${nameOnly.replace(/\.(jpg|jpeg|png|webp|avif)$/i, `-${s}.$1`)}`);
      }
    }

    // final fallback
    list.push(fallbackSrc);

    // remove duplicates and invalid empties
    return Array.from(new Set(list.filter(Boolean)));
  }, [orig, fallbackSrc, trySizes]);

  const [idx, setIdx] = useState(0);

  return (
    <Image
      {...(rest as ImageProps)}
      src={current}
      alt={alt as string}
      onError={() => {
        const next = idx + 1;
        if (next < candidates.length) {
          setIdx(next);
          setCurrent(candidates[next]);
        }
      }}
    />
  );
}
