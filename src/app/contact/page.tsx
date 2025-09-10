export const metadata = {
  title: 'Contato | Fedumenti Group',
  description: 'Entre em contato com a Fedumenti Group pelo WhatsApp.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
        <p className="text-lg md:text-xl mb-8">
          Estamos disponíveis no WhatsApp para tirar suas dúvidas e atender seu negócio.
        </p>
        <a
          href="https://wa.me/5542999217736"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Falar no WhatsApp
        </a>
      </div>
    </main>
  )
}
