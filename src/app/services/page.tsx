'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ServicesSection from '@/components/sections/ServicesSection';

const services = [
  {
    title: 'Consultoria Estratégica',
    description: 'Soluções personalizadas para impulsionar o crescimento sustentável.',
    details: 'Análise de mercado, planejamento estratégico e execução orientada a resultados.',
  },
  {
    title: 'Tecnologia e Inovação',
    description: 'Transformação digital com tecnologias de ponta.',
    details: 'Automação, sistemas sob medida, inteligência artificial e inovação contínua.',
  },
  {
    title: 'Gestão Empresarial',
    description: 'Apoio completo em finanças, pessoas e processos.',
    details: 'Consultoria de processos, RH estratégico, controladoria e BI.',
  },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="py-20 px-4 bg-zinc-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-white">Nossos Serviços</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-blue-700 transition-shadow focus:outline-none"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              tabIndex={0}
              role="button"
              aria-label={`Mais sobre ${service.title}`}
              onClick={() => setSelected(service)}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(service)}
            >
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white text-black rounded-lg p-6 w-full max-w-md shadow-lg relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-3 text-zinc-600 hover:text-zinc-900 text-xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="text-gray-700">{selected.details}</p>
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Voltar à Página Inicial
          </Link>
        </div>
      </div>
    </section>
  );
}
