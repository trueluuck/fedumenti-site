// src/components/common/CookieBanner.tsx
"use client";
import { useEffect, useState } from "react";

type Consent = {
  necessary: true; // sempre true
  analytics: boolean;
  performance: boolean;
};

const STORAGE_KEY = "cookie-consent";

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

function writeConsent(c: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {}
}

/**
 * CookieBanner com botão "Configurar" funcional.
 * - Aceitar: analytics/performance = true
 * - Rejeitar: analytics/performance = false
 * - Configurar: abre modal, salva escolha
 */
export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  const [tmpAnalytics, setTmpAnalytics] = useState(true);
  const [tmpPerformance, setTmpPerformance] = useState(true);

  useEffect(() => {
    const c = readConsent();
    setConsent(c);
  }, []);

  useEffect(() => {
    if (open && consent) {
      setTmpAnalytics(consent.analytics);
      setTmpPerformance(consent.performance);
    }
  }, [open, consent]);

  function acceptAll() {
    const c: Consent = { necessary: true, analytics: true, performance: true };
    writeConsent(c);
    setConsent(c);
    setOpen(false);
    // reload to let AnalyticsGate read new consent on next render if needed
    setTimeout(() => location.reload(), 200);
  }

  function rejectAll() {
    const c: Consent = { necessary: true, analytics: false, performance: false };
    writeConsent(c);
    setConsent(c);
    setOpen(false);
    setTimeout(() => location.reload(), 200);
  }

  function openConfigure() {
    const c = consent ?? { necessary: true, analytics: false, performance: false };
    setTmpAnalytics(c.analytics);
    setTmpPerformance(c.performance);
    setOpen(true);
  }

  function saveConfig() {
    const c: Consent = { necessary: true, analytics: tmpAnalytics, performance: tmpPerformance };
    writeConsent(c);
    setConsent(c);
    setOpen(false);
    setTimeout(() => location.reload(), 200);
  }

  // Se já optou (qualquer escolha), não mostrar banner
  if (consent) return null;

  return (
    <>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,700px)] bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow p-4">
        <div className="flex flex-col md:flex-row md:items-start gap-3">
          <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
            <strong>Utilizamos cookies</strong> para melhorar a experiência e mensurar performance,
            conforme nossa Política de Privacidade.
            <div className="mt-2 text-xs text-gray-500">
              Selecione uma opção: Aceitar, Rejeitar ou{" "}
              <button onClick={openConfigure} className="underline">
                Configurar
              </button>
              .
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={acceptAll}
              className="inline-flex items-center px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold"
            >
              Aceitar
            </button>

            <button
              onClick={rejectAll}
              className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-700 dark:text-gray-200"
            >
              Rejeitar
            </button>

            <button
              onClick={openConfigure}
              className="inline-flex items-center px-3 py-2 rounded-md text-sm text-gray-700 underline"
            >
              Configurar
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-config-title"
          className="fixed inset-0 z-60 flex items-end md:items-center justify-center p-4"
        >
          <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div className="relative z-10 w-full max-w-xl bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
            <h2 id="cookie-config-title" className="text-lg font-semibold">
              Configurar Cookies
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Escolha quais cookies deseja permitir. Você pode alterar isso a qualquer momento.
            </p>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Cookies Necessários</div>
                  <div className="text-sm text-gray-500">Essenciais para o funcionamento do site.</div>
                </div>
                <div className="text-sm text-gray-600">Sempre ativos</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Analytics</div>
                  <div className="text-sm text-gray-500">Usados para mensurar visitas e performance.</div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tmpAnalytics}
                    onChange={() => setTmpAnalytics((v) => !v)}
                    className="sr-only"
                    aria-label="Permitir Analytics"
                  />
                  <span
                    className={`w-11 h-6 inline-block rounded-full transition-colors ${tmpAnalytics ? "bg-emerald-500" : "bg-gray-300"}`}
                    aria-hidden
                  >
                    <span
                      className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tmpAnalytics ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Performance</div>
                  <div className="text-sm text-gray-500">Cookies para otimizar carregamento e recursos.</div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tmpPerformance}
                    onChange={() => setTmpPerformance((v) => !v)}
                    className="sr-only"
                    aria-label="Permitir Performance"
                  />
                  <span
                    className={`w-11 h-6 inline-block rounded-full transition-colors ${tmpPerformance ? "bg-emerald-500" : "bg-gray-300"}`}
                    aria-hidden
                  >
                    <span
                      className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tmpPerformance ? "translate-x-5" : "translate-x-0"}`}
                    />
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-md border text-sm">
                Cancelar
              </button>
              <button onClick={saveConfig} className="px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold">
                Salvar preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
