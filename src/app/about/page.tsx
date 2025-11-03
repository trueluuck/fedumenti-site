// src/app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre nós',
  description:
    'Conheça a Fedumenti Group: nossa história em 10 anos, missão, visão, valores e ações sociais.',
  openGraph: {
    title: 'Sobre nós | Fedumenti Group',
    description:
      'Nossa história (10 anos), missão/visão/valores e ações sociais/ambientais.',
    url: 'https://www.fedumentigroup.com.br/about',
    siteName: 'Fedumenti Group',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* HERO */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Quem Somos</h1>
        <p className="mt-3 max-w-2xl mx-auto muted">
          Há mais de uma década, unimos estratégia, dados e execução para acelerar resultados digitais,
          com responsabilidade social e ambiental como parte do nosso DNA.
        </p>
      </header>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className="surface p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Missão</h3>
            <p className="mt-2 text-sm muted">
              Transformar tecnologia em crescimento previsível para nossos clientes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Visão</h3>
            <p className="mt-2 text-sm muted">
              Ser referência em performance e inovação, com impacto real no negócio.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Valores</h3>
            <p className="mt-2 text-sm muted">
              Transparência, aprendizado contínuo, execução de alta qualidade e responsabilidade socioambiental.
            </p>
          </div>
        </div>
      </section>

      {/* 10 ANOS DE HISTÓRIA (STORYTELLING) */}
      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Nossa história em 10 anos</h2>
          <p className="mt-2 muted">
            Uma jornada de evolução contínua ao lado de clientes, parceiros e comunidades locais.
          </p>
        </div>

        <article className="surface p-6 md:p-8">
          <ol className="relative border-s border-default space-y-6 ps-6">
            <li className="relative">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-900 dark:bg-white" />
              <h3 className="font-semibold">2015–2017 • Primeiros ciclos</h3>
              <p className="mt-1 text-sm muted">
                Fundamos o CNPJ e iniciamos projetos de sites e campanhas locais, estruturando processos de entrega.
              </p>
            </li>
            <li className="relative">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-900 dark:bg-white" />
              <h3 className="font-semibold">2018–2020 • Performance & Dados</h3>
              <p className="mt-1 text-sm muted">
                Consolidação em Tráfego Pago, rotinas de experimentos e integração de dados para orientar decisões.
              </p>
            </li>
            <li className="relative">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-900 dark:bg-white" />
              <h3 className="font-semibold">2021–2023 • Portfólio completo</h3>
              <p className="mt-1 text-sm muted">
                Expandimos para SEO & Conteúdo, BI & Dashboards e Automação & CRM, mantendo foco em ROI.
              </p>
            </li>
            <li className="relative">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-900 dark:bg-white" />
              <h3 className="font-semibold">2024–hoje • Inovação e impacto</h3>
              <p className="mt-1 text-sm muted">
                Projetos com 360°/imersão, aceleração de PMEs e iniciativas como Reflorestamento e programa de Indicações.
              </p>
            </li>
          </ol>
        </article>
      </section>

      {/* IMPACTO SOCIAL / AMBIENTAL */}
      <section className="mt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Compromisso social e ambiental</h2>
          <p className="mt-2 muted">
            Acreditamos que crescimento e responsabilidade caminham juntos — apoiamos ações que geram valor para a comunidade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="surface p-6">
            <h3 className="font-semibold">Reflorestamento</h3>
            <p className="mt-2 text-sm muted">
              Parte de cada contrato é revertida em sementes e ações de reflorestamento com acompanhamento de impacto.
            </p>
            <a href="/lp/reflorestamento" className="btn-outline mt-4 inline-flex">
              Entenda a iniciativa →
            </a>
          </article>

          <article className="surface p-6">
            <h3 className="font-semibold">Apoio a PMEs</h3>
            <p className="mt-2 text-sm muted">
              Programa “Financie a Startup”: cada contrato ajuda a sustentar um hub de aceleração para pequenos e médios negócios.
            </p>
            <a href="/lp/financie-startup" className="btn-outline mt-4 inline-flex">
              Conheça o programa →
            </a>
          </article>

          <article className="surface p-6">
            <h3 className="font-semibold">Capacitação</h3>
            <p className="mt-2 text-sm muted">
              Treinamentos, mentorias e conteúdos abertos para formar talentos e elevar o nível do ecossistema local.
            </p>
            <a href="/services#treinamentos" className="btn-outline mt-4 inline-flex">
              Ver treinamentos →
            </a>
          </article>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <a href="/contact" className="btn-primary">
          Fale com nosso time →
        </a>
      </div>
    </main>
  );
}
