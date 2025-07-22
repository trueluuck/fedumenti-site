export const metadata = {
  title: 'Sobre Nós | Fedumenti Group',
  description: 'Conheça mais sobre a missão, visão e valores da Fedumenti Group.',
};

export default function AboutPage() {
  return (
    <main className="pt-24 px-6 pb-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Sobre Nós</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        A <strong>Fedumenti Group</strong> é especializada em impulsionar a transformação digital com soluções inovadoras e personalizadas para empresas que desejam crescer de forma sustentável.
        Nosso time combina tecnologia, estratégia e experiência para entregar resultados reais.
      </p>
    </main>
  );
}
