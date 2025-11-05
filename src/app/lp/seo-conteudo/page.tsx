// src/app/lp/seo-conteudo/page.tsx
import type { Metadata } from 'next';
import { Suspense } from 'react';
import ClientView from './ClientView';

export const metadata: Metadata = {
  title: 'SEO & Conteúdo • Fedumenti Group',
  description: 'SEO técnico + conteúdo com foco em autoridade e performance.',
};

export default function Page() {
  return (
    <Suspense fallback={
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="animate-pulse surface p-6">
          <div className="h-6 w-56 rounded bg-gray-200 dark:bg-white/10" />
          <div className="mt-4 h-4 w-80 rounded bg-gray-200 dark:bg-white/10" />
        </div>
      </main>
    }>
        <ClientView />
    </Suspense>
  );
}
