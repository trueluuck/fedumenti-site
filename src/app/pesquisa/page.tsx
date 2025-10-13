// src/app/pesquisa/page.tsx
import type { Metadata } from 'next';
import FormsSwitcher from '@/components/sections/FormsSwitcher';

export const metadata: Metadata = {
  title: 'Pesquisa | Fedumenti Group',
  description: 'Selecione o formulário desejado e participe das pesquisas da Fedumenti Group.',
};

export default function PesquisaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Pesquisas Fedumenti Group
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Escolha o tipo de formulário e participe das nossas pesquisas.
        </p>
      </header>

      <FormsSwitcher />
    </main>
  );
}
