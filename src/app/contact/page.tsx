export const metadata = {
  title: 'Contato | Fedumenti Group',
  description: 'Entre em contato com a equipe da Fedumenti Group.',
};

export default function ContactPage() {
  return (
    <main className="pt-24 px-6 pb-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Fale Conosco</h1>
      <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            rows={5}
            placeholder="Digite sua mensagem"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar Mensagem
        </button>
      </form>
    </main>
  );
}
