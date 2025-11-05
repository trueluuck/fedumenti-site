// src/app/not-found.tsx
import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Não encontramos isso…</h1>
      <p className="muted mt-3">
        O recurso que você tentou acessar não existe ou foi movido.
      </p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/" className="btn-primary">Ir para a Home</Link>
        <Link href="/contact" className="btn-outline">Falar com o time</Link>
      </div>
    </main>
  );
}
