'use client';

import { useState, useMemo } from 'react';

type Props = {
  /** Ex.: "aqz-KE-bpKQ" */
  videoId: string;
  title: string;
  /** Inicia já tocando ao clicar (default: true) */
  autoPlay?: boolean;
  /** Classe extra para o wrapper */
  className?: string;
  /** Miniatura custom; por padrão usa i.ytimg.com */
  posterUrl?: string;
};

export default function LiteYouTube({
  videoId,
  title,
  autoPlay = true,
  className = '',
  posterUrl,
}: Props) {
  const [activated, setActivated] = useState(false);

  // Poster padrão HQ do YouTube
  const thumb = useMemo(
    () => posterUrl ?? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    [posterUrl, videoId]
  );

  // URL do player (nocookie) só quando ativado
  const playerSrc = useMemo(() => {
    const base = `https://www.youtube-nocookie.com/embed/${videoId}`;
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      ...(autoPlay ? { autoplay: '1' } : {}),
    });
    return `${base}?${params.toString()}`;
  }, [videoId, autoPlay]);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-xl bg-black ${className}`}
      aria-label={title}
    >
      {!activated ? (
        <button
          type="button"
          className="group absolute inset-0 w-full h-full"
          onClick={() => setActivated(true)}
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          {/* Poster */}
          <img
            src={thumb}
            alt=""
            className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            loading="lazy"
            decoding="async"
          />
          {/* Gradiente + botão play */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-black shadow-lg transition group-hover:scale-105">
              ▶
            </span>
          </div>
        </button>
      ) : (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={playerSrc}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}
