'use client';

import { useState } from 'react';

/** Apenas visual/local (sem submit real). */
export default function LeadFormStub() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setOk(true);
      setLoading(false);
      setTimeout(() => setOk(false), 3000);
    }, 800);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-black p-6 shadow-xl ring-1 ring-lime-400/30">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-200">Nome</label>
          <input
            className="w-full rounded-lg border border-lime-400/30 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-lime-300 focus:ring-2 focus:ring-lime-300/60"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-200">Empresa</label>
          <input
            className="w-full rounded-lg border border-lime-400/30 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-lime-300 focus:ring-2 focus:ring-lime-300/60"
            placeholder="Nome da empresa"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-200">WhatsApp</label>
          <input
            className="w-full rounded-lg border border-lime-400/30 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-lime-300 focus:ring-2 focus:ring-lime-300/60"
            placeholder="(11) 9 9999-9999"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-200">E-mail</label>
          <input
            type="email"
            className="w-full rounded-lg border border-lime-400/30 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-lime-300 focus:ring-2 focus:ring-lime-300/60"
            placeholder="voce@empresa.com"
          />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-200">Objetivo</label>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-lime-400/30 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-lime-300 focus:ring-2 focus:ring-lime-300/60"
            placeholder="Ex.: aumentar leads qualificados em 30% em 90 dias"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="submit"
          className="inline-flex items-center rounded-full bg-lime-400 px-6 py-3 text-black shadow hover:bg-lime-300 disabled:opacity-60 font-semibold"
          disabled={loading}
        >
          {loading ? 'Enviando…' : 'Enviar'}
        </button>
        <div className="text-sm text-slate-400">Respondemos em até 1 dia útil.</div>
      </div>

      {ok && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300">
          <svg width="18" height="18" viewBox="0 0 24 24" className="fill-emerald-300">
            <path d="M9 16.17l-3.88-3.88L3.71 13.7 9 19l12-12-1.41-1.42z" />
          </svg>
          Recebido! (modo visual)
        </div>
      )}
    </form>
  );
}
