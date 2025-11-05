// src/app/404/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Página não encontrada",
  description: "O recurso solicitado não foi encontrado.",
};

export default function NotFound404() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Página não encontrada</h1>
      <p className="muted mt-3">
        O link pode estar incorreto ou o conteúdo foi movido.
      </p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/" className="btn-primary">Voltar para a Home</Link>
        <Link href="/services" className="btn-outline">Ver serviços</Link>
      </div>
    </main>
  );
}
