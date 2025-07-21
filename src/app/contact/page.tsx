'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com uma API externa
    console.log(form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="flex flex-col min-h-screen pt-24 px-6 pb-16 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-700 mb-10 text-center"
      >
        Fale Conosco
      </motion.h1>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-600 font-semibold text-center"
        >
          Mensagem enviada com sucesso! Retornaremos em breve.
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={form.email}
            onChange={handleChange}
            required
            className="border p-3 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            value={form.message}
            onChange={handleChange}
            required
            className="border p-3 rounded-md min-h-[120px]"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </motion.form>
      )}

      <div className="text-center mt-10">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
