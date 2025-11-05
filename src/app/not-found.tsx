import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center px-6 py-20 bg-bg text-fg">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold tracking-wider text-muted">Erro 404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">
          Página não encontrada
        </h1>
        <p className="mt-3 text-base text-muted">
          A URL pode ter sido movida, renomeada ou nunca existiu.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary">Voltar para a Home</Link>
          <Link href="/services" className="btn-outline">Ver serviços</Link>
        </div>
      </section>
    </main>
  );
}
