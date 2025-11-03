'use client';

import { useState } from 'react';

type Props = {
  videoId: string;
  title?: string;
  className?: string;
  thumbnailQuality?: 'hqdefault' | 'mqdefault' | 'sddefault' | 'maxresdefault';
};

export default function LiteYouTube({
  videoId,
  title = 'YouTube video',
  className = 'aspect-video w-full overflow-hidden rounded-2xl bg-black ring-1 ring-lime-400/30 shadow-2xl',
  thumbnailQuality = 'hqdefault',
}: Props) {
  const [play, setPlay] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  return (
    <div className={className}>
      {play ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group relative block h-full w-full"
          aria-label={`Reproduzir: ${title}`}
        >
          <img
            src={thumb}
            alt={title}
            className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition"
            loading="lazy"
          />
          <div className="absolute inset-0 grid place-items-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/90 text-black px-4 py-2 font-semibold group-hover:scale-105 transition">
              ▶︎ Assistir
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
