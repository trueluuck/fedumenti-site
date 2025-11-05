// src/app/ambiente-inovacao/page.tsx
import type { Metadata } from 'next';
import { Suspense } from 'react';
import ClientView from './ClientView';

export const metadata: Metadata = {
  title: 'Ambiente de Inovação',
  description: 'Detalhes do ambiente de inovação e seus recursos.',
};

export default function Page() {
  // Tudo aqui continua sendo Server Component.
  // O hook fica isolado em ClientView e protegido por <Suspense>.
  return (
    <Suspense fallback={
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="animate-pulse surface p-6">
          <div className="h-6 w-48 rounded bg-gray-200 dark:bg-white/10" />
          <div className="mt-4 h-4 w-80 rounded bg-gray-200 dark:bg-white/10" />
        </div>
      </main>
    }>
      <ClientView />
    </Suspense>
  );
}
