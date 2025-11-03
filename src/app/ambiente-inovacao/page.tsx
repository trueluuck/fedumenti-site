import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ambiente de Inovação',
  description: 'Estamos inseridos em um ecossistema de inovação (incubadora).',
};

export default function AmbienteInovacaoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Ambiente de Inovação</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Convivemos com startups, universidades e parceiros estratégicos.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <figure className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
          <img
            src="/assets/sprint-ambiente.jpg"
            alt="Área colaborativa do ambiente de inovação"
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-gray-900 shadow">
          <h2 className="text-xl font-semibold">Por que isso importa</h2>
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Acesso a talentos e mentores.</li>
            <li>• Parcerias para P&D e testes rápidos.</li>
            <li>• Cultura de experimentação e dados.</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-5 py-2.5 font-semibold hover:opacity-90 transition"
              href="https://maps.google.com/?q=Fedumenti Group, Rua Exemplo 123"
              target="_blank" rel="noreferrer"
            >
              Visitar nosso endereço →
            </a>
            <a
              className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/20 px-5 py-2.5 font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition"
              href="/contato"
            >
              Fale com a gente
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
