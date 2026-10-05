'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="container-xl flex items-center justify-between h-16">
        {/* Logo FCG */}
        <Link
          href="/"
          className="flex items-baseline gap-2 text-slate-900 tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="font-bold text-lg text-slate-900 tracking-tight">FCG</span>
          <span className="text-xs text-slate-500 hidden sm:inline font-normal">
            Fedumenti Group
          </span>
        </Link>

        {/* Desktop Navigation: Linxar, Google 360°, Sobre, Contato */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/linxar"
            className="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
          >
            Linxar
          </Link>

          <Link
            href="/google-360"
            className="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
          >
            Google 360°
          </Link>

          <Link
            href="/sobre"
            className="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            className="text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
          >
            Contato
          </Link>

          <a
            href="https://wa.me/5542999217736"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 ml-2"
          >
            Falar com a FCG
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-3">
          <Link
            href="/linxar"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-black"
          >
            Linxar
          </Link>
          <Link
            href="/google-360"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-black"
          >
            Google 360°
          </Link>
          <Link
            href="/sobre"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-black"
          >
            Sobre a FCG
          </Link>
          <Link
            href="/contato"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-800 hover:text-black"
          >
            Contato
          </Link>
          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-primary text-xs text-center py-2.5 w-full"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
