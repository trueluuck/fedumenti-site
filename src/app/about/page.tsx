'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 px-6 pb-16 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-700 mb-6 text-center"
      >
        Sobre a Fedumenti Group
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-700 leading-relaxed text-lg text-center"
      >
        A Fedumenti é líder em soluções estratégicas e tecnológicas, comprometida com a excelência e inovação contínua em todos os projetos.
      </motion.p>

      <div className="text-center mt-10">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
