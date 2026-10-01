'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const linxarProducts = [
  {
    name: 'Linxar Hub',
    desc: 'Catálogo omnicanal para marketplaces',
    href: '/linxar/hub',
    badge: null,
  },
  {
    name: 'Linxar Pref',
    desc: 'Compras públicas e licitações',
    href: '/linxar/pref',
    badge: 'Em breve',
  },
  {
    name: 'Linxar Workplace',
    desc: 'Sellers e afiliados dropshipping',
    href: '/linxar/workplace',
    badge: 'Em breve',
  },
  {
    name: 'Linxar Middleware',
    desc: 'API de produtos para sistemas',
    href: '/linxar/middleware',
    badge: 'Em breve',
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <nav className="container-xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-heading font-black text-xl text-slate-900 tracking-tight hover:opacity-80 transition-opacity"
        >
          FCG<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Linxar dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              aria-expanded={dropdownOpen}
            >
              Linxar <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl border border-slate-200 bg-white shadow-lg p-2">
                {linxarProducts.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="flex items-start justify-between gap-3 rounded-xl px-4 py-3 hover:bg-slate-50 transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-bold text-slate-900">{p.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                    </div>
                    {p.badge ? (
                      <span className="shrink-0 mt-0.5 px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold border border-amber-200">
                        {p.badge}
                      </span>
                    ) : (
                      <ExternalLink size={12} className="shrink-0 mt-1 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    )}
                  </Link>
                ))}
                <div className="border-t border-slate-100 mt-1 pt-1">
                  <a
                    href="https://linxar.com.br/pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Acessar linxar.com.br <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            )}
          </div>

          <Link href="/google-360" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Google 360°
          </Link>

          <Link href="/sobre" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            Sobre
          </Link>

          <a
            href="https://wa.me/5542999217736"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5"
          >
            Contato
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-1">
          <p className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400">Linxar</p>
          {linxarProducts.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-slate-50 transition-colors"
            >
              <div>
                <p className="text-sm font-bold text-slate-900">{p.name}</p>
                <p className="text-xs text-slate-500">{p.desc}</p>
              </div>
              {p.badge && (
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold border border-amber-200">
                  {p.badge}
                </span>
              )}
            </Link>
          ))}

          <div className="border-t border-slate-100 pt-3 mt-3 space-y-1">
            <Link href="/google-360" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              Google 360°
            </Link>
            <Link href="/sobre" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
              Sobre
            </Link>
            <a
              href="https://wa.me/5542999217736"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-primary text-sm text-center mt-2"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
