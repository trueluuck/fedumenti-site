// src/components/common/VideoPlayer.tsx
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
  // optional callbacks for debugging/analytics
  onPlayAttempt?: () => void;
  onPlaySuccess?: () => void;
  onPlayFail?: (err: unknown) => void;
};

export default function VideoPlayer({
  src,
  poster,
  className,
  loop = true,
  preload = "metadata",
  muted = true,
  playsInline = true,
  onPlayAttempt,
  onPlaySuccess,
  onPlayFail,
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // ensure attributes that increase autoplay success
    video.muted = muted;
    video.playsInline = playsInline;
    video.loop = loop;
    video.preload = preload;

    // Try to play once mounted (use a tiny timeout to allow layout)
    let mounted = true;
    const tryPlay = async () => {
      if (!mounted) return;
      try {
        onPlayAttempt?.();
        setAttempted(true);
        // call play() and handle its promise
        const p = video.play();
        if (p !== undefined) {
          await p;
        }
        onPlaySuccess?.();
      } catch (err) {
        // Autoplay prevented or error — leave controls for user
        onPlayFail?.(err);
      }
    };

    // Small delay helps in some browsers / heavy pages
    const t = window.setTimeout(tryPlay, 120);
    return () => {
      mounted = false;
      clearTimeout(t);
      // cleanup: pause video
      try {
        video.pause();
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, muted, playsInline, loop, preload]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted={muted}
      playsInline={playsInline}
      loop={loop}
      preload={preload}
      // aria role
      aria-label="Vídeo de destaque"
    />
  );
}
