// src/app/pesquisa/page.tsx
import type { Metadata } from 'next';
import FormsSwitcher from '@/components/sections/FormsSwitcher';

export const metadata: Metadata = {
  title: 'Pesquisa | Fedumenti Group',
  description: 'Selecione o formulário desejado e participe das pesquisas da Fedumenti Group.',
};

export default function PesquisaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-16">
      {/* Header com tokens do tema */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-fg mb-3">
          Pesquisas Fedumenti Group
        </h1>
        <p className="text-lg muted">
          Escolha o tipo de formulário e participe das nossas pesquisas.
        </p>
      </header>

      {/* Card “container” opcional para dar unidade visual */}
      <section className="surface p-4 md:p-6">
        <FormsSwitcher />
      </section>
    </main>
  );
}
