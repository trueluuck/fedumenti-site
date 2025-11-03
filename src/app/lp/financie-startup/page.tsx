// src/app/lp/financie-startup/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financie a Startup • Hub para PMEs e inovação',
  description:
    'Cada contrato ajuda a financiar um hub de inovação para PMEs. Mentorias, infraestrutura e aceleração prática.',
};

const surface =
  'rounded-2xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200/70 dark:ring-white/10 transition';

export default function FinancieStartupPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Financie a Startup • Hub para PMEs e inovação real
        </h1>
        <p className="mt-4 muted">
          Cada contrato ajuda a financiar o desenvolvimento do nosso hub voltado ao pequeno e médio
          empreendedor. Mentorias, infraestrutura e aceleração prática.
        </p>

        <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl bg-black ring-1 ring-gray-200/70 dark:ring-white/10 shadow-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ?rel=0"
            title="Apoio a Startups"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="mt-10">
          <a href="/contact" className="btn-primary">Quero apoiar →</a>
        </div>
      </section>

      {/* AMBIENTE DE INOVAÇÃO (SPRINT – UTFPR) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Ambiente de Inovação (Sprint – UTFPR)</h2>
          <p className="mt-2 muted">
            Estamos inseridos no ecossistema da <span className="font-semibold">Sprint Incubadora (UTFPR/Guarapuava)</span>,
            um mecanismo do PROEM que apoia empresas inovadoras de base tecnológica e fomenta a criação de negócios orientados por tecnologia.
          </p>
        </div>

        <article className={`p-6 md:p-8 ${surface}`}>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              A incubadora oferece infraestrutura completa para o desenvolvimento de projetos e acesso a laboratórios da instituição.
              Há também mentorias e cursos de capacitação voltados ao crescimento das empresas, alinhados ao ecossistema de inovação regional
              e à rede UTFPR, com mais de 1000 laboratórios de pesquisa distribuídos em 13 campi no Paraná.
            </p>

            <h3>Infraestrutura em destaque</h3>
            <ul>
              <li>Modelagem 3D: 4print Fablab</li>
              <li>Laboratório de Materiais</li>
              <li>Metrologia</li>
              <li>Hidráulica pneumática</li>
              <li>Processos de fabricação</li>
            </ul>

            <p className="text-sm muted">
              Fonte institucional:{' '}
              <a
                className="underline"
                href="https://incubadora.gp.utfpr.edu.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                incubadora.gp.utfpr.edu.br
              </a>
            </p>
          </div>
        </article>

        {/* ENDEREÇO + MAPA */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className={`p-6 md:p-8 ${surface}`}>
            <h3 className="text-lg font-semibold">Onde estamos</h3>
            <p className="mt-2 text-sm muted">
              Avenida Professora Laura Pacheco Bastos, 800 — Bloco R, 1º Andar, CEP 85053-525 — Guarapuava/PR
            </p>

            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-gray-200/70 dark:ring-white/10">
              <img
                src="/assets/sprint-ambiente.jpg"
                alt="Ambiente de inovação - Sprint (UTFPR) — Bloco R"
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Avenida+Professora+Laura+Pacheco+Bastos,+800,+Guarapuava"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Ver rota no mapa
              </a>
              <a href="/contact" className="btn-outline">Falar com a equipe</a>
            </div>
          </article>

          <div className={`p-2 ${surface}`}>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                title="Mapa • UTFPR Guarapuava - Bloco R"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Avenida%20Professora%20Laura%20Pacheco%20Bastos%2C%20800%2C%20Guarapuava%20-%20PR%2C%20Bloco%20R&output=embed"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="text-center mt-12 px-6">
        <a href="/contact" className="btn-primary">Quero apoiar o hub →</a>
      </div>
    </main>
  );
}
