// src/app/depoimentos/page.tsx
import type { Metadata } from 'next';
import ClientsCarousel from '@/components/sections/ClientsCarousel';
import AboutSection from '@/components/sections/AboutSection'; // já existente

export const metadata: Metadata = {
  title: 'Depoimentos | Fedumenti Group',
  description: 'Veja depoimentos e experiências de clientes que já confiaram na Fedumenti Group.',
};

export default function DepoimentosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Título e descrição */}
      <section>
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Depoimentos
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Em breve você poderá assistir aqui os vídeos e relatos de empresas que já confiaram na Fedumenti Group.
        </p>

        {/* Placeholder para vídeos futuros */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
            Espaço reservado para vídeo do cliente
          </div>
          <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
            Espaço reservado para vídeo do cliente
          </div>
        </div>
      </section>

      {/* Carrossel de logos integrado */}
      <section>
        <ClientsCarousel />
      </section>

      {/* Seção "Quem Somos" ao final da página */}
      <section>
        <AboutSection />
      </section>
    </main>
  );
}
