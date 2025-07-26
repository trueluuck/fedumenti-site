'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-inherit text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700 dark:text-blue-400">
          Fale Conosco
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Mensagem"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="self-center px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
}
