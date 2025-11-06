"use client";

import Image, { ImageProps } from "next/image";
import { useMemo, useState } from "react";

/**
 * WHY: evita quebra visual quando a imagem solicitada não existe ou o sufixo de tamanho difere.
 * Estratégia:
 * 1) tenta src original;
 * 2) se 404, tenta forçar "-1280" antes do ".jpg|.png|.webp";
 * 3) se falhar, usa fallback.
 */
type Props = ImageProps & {
  fallbackSrc?: string;
  trySizes?: Array<640 | 1280 | 1920 | 2560>;
};

function withSizeSuffix(url: string, size: number) {
  // "/assets/posters/foo.jpg" -> "/assets/posters/foo-1280.jpg" (se já tem sufixo, mantém)
  const [base, query = ""] = url.split("?");
  if (/-\d{3,4}\.(jpg|jpeg|png|webp|avif)$/i.test(base)) return url; // já tem sufixo
  return base.replace(/\.(jpg|jpeg|png|webp|avif)$/i, `-${size}$&`) + (query ? `?${query}` : "");
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/assets/posters/sites-1280.jpg",
  trySizes = [1280, 640],
  ...rest
}: Props) {
  const [current, setCurrent] = useState<string | any>(src);
  const candidates = useMemo(() => {
    const s = typeof src === "string" ? src : (src as any);
    if (typeof s !== "string") return [];
    return [s, ...trySizes.map((sz) => withSizeSuffix(s, sz)), fallbackSrc].filter(Boolean);
  }, [src, trySizes, fallbackSrc]);

  const [idx, setIdx] = useState(0);

  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        // WHY: tenta próximo candidato apenas uma vez por erro
        const next = idx + 1;
        if (next < candidates.length) {
          setIdx(next);
          setCurrent(candidates[next]);
        }
      }}
    />
  );
}