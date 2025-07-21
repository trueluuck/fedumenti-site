'use client';

import Head from 'next/head';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contato | Fedumenti Group</title>
      </Head>

      <main className="pt-24 px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-8 text-blue-700"
        >
          Fale Conosco
        </motion.h1>

        <form className="grid gap-6">
          {['Nome', 'E-mail', 'Assunto'].map((label, idx) => (
            <div key={idx}>
              <label htmlFor={label.toLowerCase()} className="block font-medium mb-1">
                {label}
              </label>
              <input
                id={label.toLowerCase()}
                type={label === 'E-mail' ? 'email' : 'text'}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label htmlFor="mensagem" className="block font-medium mb-1">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              required
              rows={5}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </main>
    </>
  );
}
