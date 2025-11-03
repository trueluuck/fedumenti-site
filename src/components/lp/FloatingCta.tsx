'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  /** Seção alvo para “ir ao formulário” (id ou seletor CSS). Ex.: "#lead-form" */
  href?: string;
  /** Rótulo do botão principal antes de rolar */
  label?: string;
  /** Rótulo quando o usuário já rolou a página */
  scrolledLabel?: string;

  /** Elemento sentinel para esconder o CTA quando visível (ex.: "#lead-form") */
  targetSelector?: string;

  /** Mostra botão WhatsApp 24h */
  whatsappNumber?: string;             // Ex.: "5542999217736"
  whatsappLabel?: string;              // Ex.: "WhatsApp 24h"
  whatsappText?: string;               // Ex.: "Olá! Quero aumentar minhas vendas com tráfego pago."

  /** Mostra botão “Proposta em 24h” (link para /contact por padrão) */
  proposalHref?: string;               // Ex.: "/contact"
  proposalLabel?: string;              // Ex.: "Proposta em 24h"

  /** (Opcional) Mostra botão para ligar */
  phoneNumber?: string;                // Ex.: "+5542999217736"
  phoneLabel?: string;                 // Ex.: "Ligar"

  /** Quanto de rolagem (%) precisa para exibir o CTA (0–1). Default: 0.25 */
  threshold?: number;

  /** Esconder em desktop (só mobile) */
  mobileOnly?: boolean;
};

export default function FloatingCta({
  href = '#lead-form',
  label = 'Quero vender mais agora',
  scrolledLabel = 'Pronto para escalar?',
  targetSelector = '#lead-form',
  whatsappNumber,
  whatsappLabel = 'WhatsApp 24h',
  whatsappText = 'Olá! Quero aumentar minhas vendas com tráfego pago.',
  proposalHref = '/contact',
  proposalLabel = 'Proposta em 24h',
  phoneNumber,
  phoneLabel = 'Ligar',
  threshold = 0.25,
  mobileOnly = false,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  // Trata “aparecer após rolar X%”
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? y / docH : 0;
      setScrolled(progress > threshold);
      setVisible(progress > threshold);
    }
    onScroll(); // estado inicial
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  // Esconde quando a seção alvo estiver totalmente visível
  useEffect(() => {
    const el = document.querySelector(targetSelector);
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting && e.intersectionRatio > 0.35) {
          setVisible(false);
        } else if (scrolled) {
          setVisible(true);
        }
      },
      { threshold: [0, 0.35, 1] }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [targetSelector, scrolled]);

  // Não renderiza em desktop se mobileOnly = true
  const isDesktop = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(min-width: 768px)').matches;
  }, []);
  if (mobileOnly && isDesktop) return null;

  // Animação simples (respeita reduced motion)
  const wrapperClasses =
    'fixed inset-x-0 bottom-3 z-[60] px-3 sm:px-6 pointer-events-none';
  const railClasses =
    'mx-auto max-w-3xl pointer-events-auto rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur shadow-lg ring-1 ring-black/10 dark:ring-white/10 p-2 sm:p-3 flex flex-col sm:flex-row sm:items-center sm:gap-3';

  return (
    <div
      className={wrapperClasses}
      role="region"
      aria-label="Ações rápidas"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : reducedMotion
          ? 'translateY(0)'
          : 'translateY(12px)',
        transition: reducedMotion ? 'opacity 150ms linear' : 'all 220ms ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className={railClasses}>
        {/* Mensagem/Headline curta */}
        <div className="px-2 pb-2 sm:pb-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {scrolled ? scrolledLabel : label}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Fale com o time e receba um plano de 90 dias.
          </p>
        </div>

        <div className="flex flex-1 flex-wrap items-center gap-2 sm:justify-end">
          {/* Botão principal: vai ao formulário */}
          <a
            href={href}
            className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
            data-cta="primary"
          >
            Ir ao formulário
          </a>

          {/* WhatsApp 24h */}
          {whatsappNumber && (
            <a
              href={`https://wa.me/${normalizePhone(whatsappNumber)}?text=${encodeURIComponent(
                whatsappText
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500/90 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-500 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              data-cta="whatsapp"
            >
              {whatsappLabel}
            </a>
          )}

          {/* Proposta em 24h */}
          {proposalHref && (
            <a
              href={proposalHref}
              className="inline-flex items-center justify-center rounded-full ring-1 ring-gray-300 dark:ring-white/20 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white"
              data-cta="proposal-24h"
            >
              {proposalLabel}
            </a>
          )}

          {/* Ligar agora */}
          {phoneNumber && (
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center rounded-full ring-1 ring-gray-300 dark:ring-white/20 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white"
              data-cta="call"
            >
              {phoneLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------- utils -------- */

function normalizePhone(p?: string) {
  if (!p) return '';
  return p.replace(/[^\d]/g, '');
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  const mq = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    mq.current = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefers(!!mq.current.matches);
    const handler = (e: MediaQueryListEvent) => setPrefers(!!e.matches);
    mq.current.addEventListener?.('change', handler);
    return () => mq.current?.removeEventListener?.('change', handler);
  }, []);

  return prefers;
}
