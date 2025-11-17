// FILE: src/components/common/SafeImage.tsx
"use client";
import Image, { ImageProps } from "next/image";
import { useMemo, useState } from "react";

type Props = ImageProps & {
  fallbackSrc?: string;
  trySizes?: number[];
};

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
    if (typeof s !== "string") return [fallbackSrc];
    const arr = [s, ...trySizes.map((sz) => s.replace(/\.(jpg|jpeg|png|webp|avif)$/i, `-${sz}.$1`)), fallbackSrc];
    return Array.from(new Set(arr));
  }, [src, trySizes, fallbackSrc]);

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
