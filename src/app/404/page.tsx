// src/app/404/page.tsx
export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Página não encontrada</h1>
      <p className="muted mt-2">Verifique o endereço ou volte para a página inicial.</p>
      <div className="mt-6">
        <a href="/" className="btn-primary">Voltar para Home</a>
      </div>
    </main>
  );
}
