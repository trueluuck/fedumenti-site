// FILE: src/components/common/VideoPlayer.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  onReady?: () => void;
};

export default function VideoPlayer({
  src,
  poster,
  className,
  loop = true,
  preload = "metadata",
  muted = true,
  playsInline = true,
  controls = false,
  onReady,
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [autoplayAttempted, setAutoplayAttempted] = useState(false);
  const [autoplaySucceeded, setAutoplaySucceeded] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;
    setLoadedSrc(src);
  }, [src]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !loadedSrc) return;
    video.muted = muted;
    video.playsInline = playsInline;
    video.loop = loop;
    video.preload = preload;
    let mounted = true;
    const tryPlay = async () => {
      if (!mounted) return;
      try {
        setAutoplayAttempted(true);
        const p = video.play();
        if (p !== undefined) await p;
        if (mounted) {
          setAutoplaySucceeded(true);
          onReady?.();
        }
      } catch (err) {
        setAutoplaySucceeded(false);
      }
    };
    // slight delay helps in heavy pages
    const t = window.setTimeout(tryPlay, 80);
    return () => {
      mounted = false;
      clearTimeout(t);
      try {
        video.pause();
      } catch {}
    };
  }, [loadedSrc, muted, playsInline, loop, preload, onReady]);

  return (
    <video
      ref={ref}
      className={className}
      src={loadedSrc ?? undefined}
      poster={poster}
      muted={muted}
      playsInline={playsInline}
      loop={loop}
      preload={preload}
      controls={controls || !autoplaySucceeded}
      aria-hidden={false}
    />
  );
}
