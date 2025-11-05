// src/app/lp/sites/page.tsx
import type { Metadata } from 'next';
import { Suspense } from 'react';
import ServiceLPBase from '@/app/lp/common/ServiceLPBase';
import ClientView from './ClientView';

export const metadata: Metadata = {
  title: 'Sites & Landing Pages • Fedumenti Group',
  description:
    'Páginas rápidas, responsivas e SEO-ready. Foco em conversão, integração com CRM e mensuração.',
  alternates: { canonical: 'https://www.fedumentigroup.com.br/lp/sites' },
};

export default function Page() {
  return (
    <>
      <ServiceLPBase
        title="Sites & Landing Pages"
        subtitle="Performance, SEO e conversão — do wireframe ao publish."
        badges={['Rápido', 'Responsivo', 'SEO-ready']}
        hero={{ heroImage: { src: '/assets/posters/sites-landing-pages.jpg', alt: 'Sites & Landing Pages' } }}
        benefits={[
          { icon: '⚡', title: 'Velocidade', desc: 'Core Web Vitals e carregamento otimizado.' },
          { icon: '🔎', title: 'SEO técnico', desc: 'Estrutura semântica, schema e indexação.' },
          { icon: '🎯', title: 'Conversão', desc: 'Testes A/B, copy e CTAs claros.' },
          { icon: '🔗', title: 'Integração', desc: 'Formulários → CRM/automação e mensuração de eventos.' },
        ]}
        faqs={[
          { q: 'Entregam design?', a: 'Sim, UI/UX do zero ou sobre seu design system.' },
          { q: 'Prazo médio?', a: 'MVP entre 2–4 semanas (escopo enxuto e evolutivo).' },
          { q: 'Hospedagem?', a: 'Next.js + Vercel, com CDN e SSL automáticos.' },
        ]}
        ctaLabel="Quero meu site de alta performance"
      />

      {/* Lê query-strings/utm no cliente sem afetar SSR nem build */}
      <Suspense fallback={null}>
        <ClientView />
      </Suspense>
    </>
  );
}
