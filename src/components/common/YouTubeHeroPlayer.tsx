// src/components/common/YouTubeHeroPlayer.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import SafeImage from "./SafeImage";

type Props = {
  videoId: string;
  posterSrc?: string;
  className?: string;
  title?: string;
  autoplayWhenVisible?: boolean;
  priority?: boolean;
};

export default function YouTubeHeroPlayer({
  videoId,
  posterSrc,
  className,
  title = "Vídeo de destaque",
  autoplayWhenVisible = false,
  priority = false,
}: Props) {
  const [playing, setPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mounted = useRef(true);

  const ytPoster = posterSrc ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const ytPosterHQ = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!autoplayWhenVisible) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playing) {
            setIframeLoaded(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoplayWhenVisible, playing]);

  const iframeSrc = playing
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
    : iframeLoaded
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`
    : "";

  function handlePlay() {
    setIframeLoaded(true);
    setTimeout(() => {
      if (mounted.current) setPlaying(true);
    }, 80);
  }

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className ?? ""}`}>
      {!playing && (
        <button
          aria-label={`Reproduzir ${title}`}
          onClick={handlePlay}
          className="absolute inset-0 z-10 grid place-items-center bg-black/20 focus:outline-none"
          style={{ cursor: "pointer" }}
        >
          <div className="relative w-full h-full">
            <SafeImage src={ytPoster} fallbackSrc={ytPosterHQ} alt={title} fill sizes="100vw" className="object-cover" priority={priority} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full bg-black/60 w-16 h-16 sm:w-20 sm:h-20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      )}

      <div className="absolute inset-0">
        {iframeLoaded ? (
          <iframe
            title={title}
            src={iframeSrc}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            frameBorder="0"
          />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
