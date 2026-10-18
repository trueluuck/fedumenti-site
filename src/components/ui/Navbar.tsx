'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 mx-auto w-[min(94%,1040px)] z-50 transition-all duration-300">
      <nav
        aria-label="Navegação Principal"
        className="flex items-center justify-between rounded-full border border-slate-200/90 bg-white/85 px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl"
      >
        {/* Brand FCG */}
        <Link
          href="/"
          className="flex items-center gap-2.5 tracking-tight hover:opacity-85 transition-opacity"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-xs font-black text-white shadow-sm">
            FCG
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm text-slate-900 tracking-tight">Fedumenti Group</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 font-medium">
              Tech Holding
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/sobre"
            className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            A Holding
          </Link>
          <Link
            href="/#tese"
            className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            Tese de Expansão
          </Link>
          <Link
            href="/#ativos"
            className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            Portfólio de Ativos
          </Link>
          <Link
            href="/contato"
            className="text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            Contato
          </Link>
        </div>

        {/* CTA Direct Contact */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/5542999217736"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-sm"
          >
            <span>Falar com a Diretoria</span>
            <ArrowUpRight size={13} className="text-slate-300" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-2 md:hidden rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <Link
              href="/sobre"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-700 hover:text-slate-950 transition-colors"
            >
              A Holding
            </Link>
            <Link
              href="/#tese"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-700 hover:text-slate-950 transition-colors"
            >
              Tese de Expansão
            </Link>
            <Link
              href="/#ativos"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-700 hover:text-slate-950 transition-colors"
            >
              Portfólio de Ativos
            </Link>
            <Link
              href="/contato"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-700 hover:text-slate-950 transition-colors"
            >
              Contato
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="https://wa.me/5542999217736"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
