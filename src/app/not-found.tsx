export default function NotFound() {
  return (
    <main className="min-h-[60vh] mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Página não encontrada</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        O link pode ter sido alterado ou removido. Volte para a página inicial.
      </p>
      <div className="mt-8">
        <a href="/" className="btn-primary">Ir para a Home</a>
      </div>
    </main>
  );
}
