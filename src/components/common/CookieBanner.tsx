'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const LS_KEY = 'cookie-consent'; // 'accepted' | 'rejected'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const current = localStorage.getItem(LS_KEY);
      if (!current) setVisible(true);
    } catch {}
  }, []);

  function broadcast() {
    try {
      window.dispatchEvent(new Event('consentchange'));
    } catch {}
  }

  function accept() {
    try {
      localStorage.setItem(LS_KEY, 'accepted');     // compat
      localStorage.setItem('fg-consent', 'granted'); // GA4
    } catch {}
    broadcast();
    setVisible(false);
  }

  function reject() {
    try {
      localStorage.setItem(LS_KEY, 'rejected');     // compat
      localStorage.setItem('fg-consent', 'denied');  // GA4
      localStorage.setItem('fb-consent', 'denied');  // Pixel
    } catch {}
    broadcast();
    setVisible(false);
  }

  function openPrefs() {
    try {
      window.dispatchEvent(new Event('open-cookie-prefs'));
    } catch {}
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-gray-900">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Utilizamos cookies para melhorar a experiência e mensurar performance, conforme nossa{' '}
          <Link href="/politicas" className="underline font-medium">
            Política de Privacidade
          </Link>
          . Selecione uma opção:
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={accept}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-gray-900"
          >
            Aceitar
          </button>
          <button
            onClick={reject}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/5"
          >
            Rejeitar
          </button>
          <button
            onClick={openPrefs}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/5"
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
}
