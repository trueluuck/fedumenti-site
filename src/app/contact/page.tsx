'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section className="py-20 px-4 bg-zinc-900 text-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center text-white">Fale Conosco</h1>

        <form className="bg-zinc-800 p-10 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-700 text-white rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-700 text-white rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              placeholder="Digite sua mensagem"
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-700 text-white rounded-md border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-md"
          >
            Enviar Mensagem
          </button>
        </form>

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
