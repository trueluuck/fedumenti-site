'use client';

import { useState } from 'react';

export default function LeadFormStub() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: integrar com sua API (/api/contact) ou serviço externo
      await new Promise((r) => setTimeout(r, 800));
      alert('Recebido! Em breve entraremos em contato.');
      (e.currentTarget as HTMLFormElement).reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-slate-900/60 backdrop-blur p-6 ring-1 ring-lime-400/20 shadow-xl"
    >
      <div className="grid gap-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Nome</label>
          <input
            name="name"
            required
            className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/40"
            placeholder="Seu nome"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/40"
              placeholder="voce@empresa.com"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">WhatsApp</label>
            <input
              name="phone"
              className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/40"
              placeholder="(42) 99999-9999"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-300 mb-1">Mensagem</label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400/40"
            placeholder="Conte rapidamente seu objetivo."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-2.5 font-semibold text-black hover:bg-lime-300 transition disabled:opacity-60"
        >
          {loading ? 'Enviando…' : 'Quero vender mais agora'}
        </button>
      </div>
    </form>
  );
}
