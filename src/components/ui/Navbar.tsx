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
        className="flex items-center justify-between rounded-full border border-slate-800/80 bg-slate-950/85 px-5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      >
        {/* Brand FCG */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white tracking-tight hover:opacity-90 transition-opacity"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            FCG
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm text-slate-100 tracking-tight">Fedumenti Group</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
              Tech Holding
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/linxar"
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Ecossistema Linxar
          </Link>
          <Link
            href="/google-360"
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Google 360°
          </Link>
          <Link
            href="/sobre"
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Sobre a Holding
          </Link>
          <Link
            href="/contato"
            className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
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
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-all hover:scale-[1.02] shadow-sm"
          >
            <span>Falar com Diretoria</span>
            <ArrowUpRight size={13} className="text-slate-900" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex h-8 w-8 items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-2 md:hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <Link
              href="/linxar"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-300 hover:text-white transition-colors"
            >
              Ecossistema Linxar
            </Link>
            <Link
              href="/google-360"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-300 hover:text-white transition-colors"
            >
              Google 360°
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-300 hover:text-white transition-colors"
            >
              Sobre a Holding
            </Link>
            <Link
              href="/contato"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-300 hover:text-white transition-colors"
            >
              Contato
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <a
              href="https://wa.me/5542999217736"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-white py-2.5 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors"
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
