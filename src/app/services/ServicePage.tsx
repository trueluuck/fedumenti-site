'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    title: 'Consultoria Estratégica',
    description: 'Soluções personalizadas para impulsionar o crescimento sustentável.',
  },
  {
    title: 'Tecnologia e Inovação',
    description: 'Transformação digital com tecnologias de ponta.',
  },
  {
    title: 'Gestão Empresarial',
    description: 'Apoio completo em finanças, pessoas e processos.',
  },
];

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>Serviços | Fedumenti Group</title>
        <meta
          name="description"
          content="Veja como a Fedumenti Group pode ajudar seu negócio com soluções inovadoras."
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-24 px-6 pb-16 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-10 text-center text-blue-700"
          >
            Nossos Serviços
          </motion.h1>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-xl font-semibold text-blue-600 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </section>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Voltar à Página Inicial
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
