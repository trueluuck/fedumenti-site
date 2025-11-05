// src/app/lp/seo-conteudo/ClientView.tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function ClientView() {
  const sp = useSearchParams();
  const utmSource = sp.get('utm_source') ?? '';
  const utmCampaign = sp.get('utm_campaign') ?? '';

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">SEO & Conteúdo</h1>
        <p className="muted mt-2">Ajustes dinâmicos por UTM preservados via client.</p>
        {(utmSource || utmCampaign) && (
          <p className="mt-2 text-xs muted">
            UTM: {utmSource || '—'} / {utmCampaign || '—'}
          </p>
        )}
      </header>

      {/* Resto do conteúdo da LP aqui */}
      <article className="surface p-6">
        <p className="text-sm muted">
          Esta seção lê parâmetros da URL com <code>useSearchParams()</code>.
        </p>
      </article>
    </section>
  );
}
