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
      className="fixed bottom-5 inset-x-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl p-5 shadow-[0_12px_40px_rgb(0,0,0,0.12)] text-slate-800">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-slate-100 text-slate-900 shrink-0 mt-0.5">
            <ShieldCheck size={18} />
          </div>
          <div className="space-y-1 text-xs leading-relaxed">
            <p className="font-bold text-slate-900 text-sm">Privacidade & Cookies</p>
            <p className="text-slate-600">
              Utilizamos cookies essenciais e métricas anônimas para avaliar performance conforme nossa{' '}
              <Link href="/politicas" className="underline hover:text-slate-950 transition-colors">
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
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Apenas essenciais
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-xs"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </aside>
  );
}
