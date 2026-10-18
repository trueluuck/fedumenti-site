'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const CONSENT_KEY = 'fg-consent';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem(CONSENT_KEY, 'granted');
      window.dispatchEvent(new Event('consentchange'));
    } catch {}
    setVisible(false);
  }

  function handleDecline() {
    try {
      localStorage.setItem(CONSENT_KEY, 'denied');
      window.dispatchEvent(new Event('consentchange'));
    } catch {}
    setVisible(false);
  }

  if (!mounted || !visible) return null;

  return (
    <aside
      aria-label="Consentimento de Cookies"
      className="fixed bottom-4 inset-x-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-950/90 backdrop-blur-xl p-5 shadow-2xl text-slate-200">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
            <ShieldCheck size={18} />
          </div>
          <div className="space-y-1 text-xs leading-relaxed">
            <p className="font-semibold text-slate-100 text-sm">Privacidade & Cookies</p>
            <p className="text-slate-400">
              Utilizamos cookies essenciais e métricas anônimas para avaliar performance conforme nossa{' '}
              <Link href="/politicas" className="underline hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-2 text-xs">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3.5 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-900 transition-colors"
          >
            Apenas essenciais
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors shadow-sm"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </aside>
  );
}
