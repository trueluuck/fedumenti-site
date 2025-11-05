// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section className="surface p-8 text-center">
        <div className="text-6xl">😕</div>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold">
          Página não encontrada
        </h1>
        <p className="mt-2 muted">
          O recurso que você tentou acessar não existe ou foi movido.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            Voltar para a Home
          </Link>
          <Link href="/services" className="btn-outline">
            Ver nossos serviços
          </Link>
        </div>
      </section>
    </main>
  );
}
