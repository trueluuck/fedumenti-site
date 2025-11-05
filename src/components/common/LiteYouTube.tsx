// src/components/common/LiteYouTube.tsx
'use client';

import { useState, useMemo } from 'react';

type Props = {
  videoId: string;
  title: string;
  posterQuality?: 'maxresdefault' | 'hqdefault' | 'mqdefault';
  className?: string;
};

/**
 * Embed leve do YouTube (nocookie) que só carrega o iframe após o clique.
 * Evita LCP ruim e bloqueios de tracking.
 */
export default function LiteYouTube({
  videoId,
  title,
  posterQuality = 'hqdefault',
  className,
}: Props) {
  const [activated, setActivated] = useState(false);

  const poster = useMemo(
    () => `https://i.ytimg.com/vi/${videoId}/${posterQuality}.jpg`,
    [videoId, posterQuality]
  );

  if (activated) {
    return (
      <div className={className}>
        <iframe
          className="h-full w-full aspect-video rounded-xl"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Assistir: ${title}`}
      className={`group relative block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className ?? ''}`}
      style={{ aspectRatio: '16 / 9' }}
    >
      <img
        src={poster}
        alt={`Prévia do vídeo: ${title}`}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      {/* overlay play */}
      <div className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/20 transition-colors">
        <div className="h-16 w-16 rounded-full bg-white/90 grid place-items-center group-hover:scale-105 transition-transform">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M8 5v14l11-7L8 5z" fill="black" />
          </svg>
        </div>
      </div>
      <span className="sr-only">{title}</span>
    </button>
  );
}
