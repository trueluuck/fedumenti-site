'use client';

import { useEffect, useState } from 'react';

type Flags = {
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT: Flags = { analytics: false, marketing: false };

function readFlags(): Flags {
  try {
    const analytics = ['granted', 'accepted'].includes(
      localStorage.getItem('fg-consent') || localStorage.getItem('cookie-consent') || ''
    );
    const marketing = localStorage.getItem('fb-consent') === 'granted';
    return { analytics, marketing };
  } catch {
    return DEFAULT;
  }
}

function writeFlags(flags: Flags) {
  try {
    // Compatibilidade com seu banner/GA
    localStorage.setItem('fg-consent', flags.analytics ? 'granted' : 'denied');
    localStorage.setItem('cookie-consent', flags.analytics ? 'accepted' : 'rejected');

    // Pixel
    localStorage.setItem('fb-consent', flags.marketing ? 'granted' : 'denied');

    // Notifica listeners (mesmo tab)
    window.dispatchEvent(new Event('consentchange'));
  } catch {}
}

export default function CookiePrefs() {
  const [open, setOpen] = useState(false);
  const [flags, setFlags] = useState<Flags>(DEFAULT);

  useEffect(() => {
    setFlags(readFlags());
    const onOpen = () => setOpen(true);
    window.addEventListener('open-cookie-prefs', onOpen as any);
    return () => window.removeEventListener('open-cookie-prefs', onOpen as any);
  }, []);

  function acceptAll() {
    const next = { analytics: true, marketing: true };
    setFlags(next);
    writeFlags(next);
    setOpen(false);
  }

  function rejectAll() {
    const next = { analytics: false, marketing: false };
    setFlags(next);
    writeFlags(next);
    setOpen(false);
  }

  function save() {
    writeFlags(flags);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-white/10 dark:bg-gray-900">
        <h3 className="text-lg font-semibold">Preferências de Cookies</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Escolha quais categorias deseja habilitar. Você pode alterar a qualquer momento.
        </p>

        <div className="mt-5 space-y-4">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1"
              checked={flags.analytics}
              onChange={(e) => setFlags((f) => ({ ...f, analytics: e.target.checked }))}
            />
            <div>
              <div className="font-medium">Analytics (GA4)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Ajuda a medir tráfego e performance do site.
              </div>
            </div>
          </label>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1"
              checked={flags.marketing}
              onChange={(e) => setFlags((f) => ({ ...f, marketing: e.target.checked }))}
            />
            <div>
              <div className="font-medium">Marketing (Meta Pixel)</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Personaliza anúncios e mede conversões.
              </div>
            </div>
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => setOpen(false)}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/5"
          >
            Fechar
          </button>
          <div className="flex gap-2">
            <button
              onClick={rejectAll}
              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/5"
            >
              Rejeitar tudo
            </button>
            <button
              onClick={acceptAll}
              className="rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-300 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
            >
              Aceitar tudo
            </button>
            <button
              onClick={save}
              className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-gray-900"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
