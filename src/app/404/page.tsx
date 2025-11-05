// src/app/404/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada (404)",
  description: "A página que você procura não foi localizada.",
  robots: { index: false },
};

export default function Custom404() {
  return (
    <main className="min-h-[70vh] grid place-items-center px-6 py-20 bg-bg text-fg">
      <section className="max-w-xl text-center">
        <p className="text-sm font-semibold tracking-wider text-muted">Erro 404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">
          Ops, essa página não existe
        </h1>
        <p className="mt-3 text-base text-muted">
          Use o menu superior ou os atalhos abaixo para continuar navegando.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            Voltar para a Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Falar com o time
          </Link>
        </div>
      </section>
    </main>
  );
}
