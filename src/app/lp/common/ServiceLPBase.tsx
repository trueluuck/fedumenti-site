// src/app/lp/common/ServiceLPBase.tsx
'use client';

import Image from 'next/image';
import { useMemo } from 'react';

type Hero =
  | { heroImage: { src: string; alt: string } }
  | { heroVideoId: string; title?: string };

type Benefit = { icon: string; title: string; desc: string };
type FAQ = { q: string; a: string };

export default function ServiceLPBase({
  title,
  subtitle,
  badges = [],
  hero,
  benefits = [],
  faqs = [],
  ctaLabel = 'Falar com o time',
  ctaHref = '/contact',
}: {
  title: string;
  subtitle?: string;
  badges?: string[];
  hero?: Hero;
  benefits?: Benefit[];
  faqs?: FAQ[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const hasImage = 'heroImage' in (hero ?? {});
  const hasVideo = 'heroVideoId' in (hero ?? {});

  const heroNode = useMemo(() => {
    if (!hero) return null;

    if (hasImage) {
      const { src, alt } = (hero as any).heroImage;
      return (
        <div className="relative overflow-hidden rounded-2xl border border-default">
          {/* imagem responsiva sem prender tema */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="w-full h-[46vh] md:h-[60vh] object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        </div>
      );
    }

    if (hasVideo) {
      const id = (hero as any).heroVideoId as string;
      const title = (hero as any).title ?? 'Vídeo';
      return (
        <div className="relative overflow-hidden rounded-2xl border border-default">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }

    return null;
  }, [hero, hasImage, hasVideo]);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* HERO */}
      <header className="mb-10 text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border border-default"
            >
              {b}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-3 muted max-w-2xl mx-auto">{subtitle}</p>}
      </header>

      {heroNode}

      {/* BENEFÍCIOS */}
      {benefits.length > 0 && (
        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <article key={b.title} className="surface p-6">
                <div className="text-2xl">{b.icon}</div>
                <h3 className="mt-3 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm muted">{b.desc}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-12 text-center">
        <a href={ctaHref} className="btn-primary">
          {ctaLabel} →
        </a>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="mt-12">
          <div className="surface p-6 md:p-8">
            <h2 className="text-xl font-bold text-center">Perguntas frequentes</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-default p-4 bg-transparent"
                >
                  <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                    {f.q}
                    <span className="ml-3 text-default transition group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 text-sm muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RODAPÉ LOCAL (opcional) */}
      <footer className="mt-12 text-center text-sm muted">
        © {new Date().getFullYear()} Fedumenti Group
      </footer>
    </main>
  );
}
