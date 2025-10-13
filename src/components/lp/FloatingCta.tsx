'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type FloatingCtaProps = {
  href?: string;
  label?: string;
  scrolledLabel?: string;
  targetSelector?: string;
  whatsappNumber?: string;        // '5511999999999'
  whatsappLabel?: string;
  whatsappText?: string;          // texto base (antes de anexar UTM)
  threshold?: number;             // 0..1
  idleMs?: number;                // inatividade até pulsar
  pulseMs?: number;               // duração do pulso
  debounceMs?: number;            // debounce de scroll
  returningBadgeText?: string;    // fallback quando <24h
  returningKey?: string;          // chave no localStorage
  badgeHideAfterMs?: number;      // tempo até esconder badge
  cookieName?: string;            // nome do cookie
  cookieMaxDays?: number;         // validade do cookie
};

/** Helpers de cookie (client-only). */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; SameSite=Lax`;
}

export default function FloatingCta({
  href = '#lead-form',
  label = 'Quero vender mais agora',
  scrolledLabel = 'Pronto para escalar?',
  targetSelector = '#lead-form',
  whatsappNumber = '5511999999999',
  whatsappLabel = 'Falar no WhatsApp',
  whatsappText = 'Olá! Quero aumentar minhas vendas com tráfego pago.',
  threshold = 0.25,
  idleMs = 10000,
  pulseMs = 3500,
  debounceMs = 150,
  returningBadgeText = '24h',
  returningKey = 'lp_seen_at',
  badgeHideAfterMs = 6000,
  cookieName = 'lp_seen_at',
  cookieMaxDays = 365,
}: FloatingCtaProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolledHalf, setScrolledHalf] = useState(false);
  const [utmSuffix, setUtmSuffix] = useState<string>('');
  const [attention, setAttention] = useState(false);

  // Badge retornante
  const [isReturning, setIsReturning] = useState(false);
  const [badgeText, setBadgeText] = useState<string>(returningBadgeText);
  const [showBadge, setShowBadge] = useState(false);

  const idleTimerRef = useRef<number | null>(null);
  const pulseTimerRef = useRef<number | null>(null);
  const debTimerRef = useRef<number | null>(null);
  const badgeTimerRef = useRef<number | null>(null);

  // ------- debounce -------
  const debounced = (fn: () => void) => {
    if (debTimerRef.current) window.clearTimeout(debTimerRef.current);
    debTimerRef.current = window.setTimeout(fn, debounceMs);
  };

  // ------- idle / attention pulse -------
  const clearIdleTimers = () => {
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    if (pulseTimerRef.current) window.clearTimeout(pulseTimerRef.current);
    idleTimerRef.current = null;
    pulseTimerRef.current = null;
  };

  const startIdle = () => {
    clearIdleTimers();
    idleTimerRef.current = window.setTimeout(() => {
      setAttention(true);
      pulseTimerRef.current = window.setTimeout(() => setAttention(false), pulseMs);
    }, idleMs);
  };

  const userActivity = () => {
    setAttention(false);
    startIdle();
  };

  // ------- badge retornante: localStorage + cookie -------
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const now = Date.now();
      const lsRaw = window.localStorage.getItem(returningKey);
      const ckRaw = getCookie(cookieName);
      const lsTs = lsRaw ? parseInt(lsRaw, 10) : NaN;
      const ckTs = ckRaw ? parseInt(ckRaw, 10) : NaN;

      const hasPrev = !Number.isNaN(lsTs) || !Number.isNaN(ckTs);
      if (hasPrev) {
        setIsReturning(true);
        const prev = Math.min(
          Number.isNaN(lsTs) ? Infinity : lsTs,
          Number.isNaN(ckTs) ? Infinity : ckTs
        );
        const diffMs = now - prev;
        const days = Math.floor(diffMs / 86400000);
        setBadgeText(days >= 1 ? `Retornou há ${days} dia${days > 1 ? 's' : ''}` : returningBadgeText);
        setShowBadge(true);
        if (badgeTimerRef.current) window.clearTimeout(badgeTimerRef.current);
        badgeTimerRef.current = window.setTimeout(() => setShowBadge(false), badgeHideAfterMs);
      }

      // Atualiza persistência para o retorno futuro
      window.localStorage.setItem(returningKey, String(now));
      setCookie(cookieName, String(now), cookieMaxDays);
    } catch {
      // ignore storage errors
    }
    return () => {
      if (badgeTimerRef.current) window.clearTimeout(badgeTimerRef.current);
    };
  }, [returningKey, returningBadgeText, badgeHideAfterMs, cookieName, cookieMaxDays]);

  // ------- visibilidade por IntersectionObserver + fallback -------
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = document.querySelector(targetSelector);
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { root: null, threshold }
    );
    obs.observe(el);

    const onScrollShowHide = () => {
      debounced(() => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const visible = rect.top < vh * (1 - threshold) && rect.bottom > vh * threshold;
        setHidden(visible);
      });
    };

    window.addEventListener('scroll', onScrollShowHide, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScrollShowHide);
    };
  }, [targetSelector, threshold, debounceMs]);

  // ------- troca de label após 50% do scroll -------
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScrollHalf = () => {
      debounced(() => {
        const doc = document.documentElement;
        const max = (doc.scrollHeight - doc.clientHeight) || 1;
        const pct = window.scrollY / max;
        setScrolledHalf(pct >= 0.5);
      });
    };
    onScrollHalf();
    window.addEventListener('scroll', onScrollHalf, { passive: true });
    return () => window.removeEventListener('scroll', onScrollHalf);
  }, [debounceMs]);

  // ------- UTM dinâmica na mensagem do WhatsApp -------
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const buildSuffix = () => {
      const { origin, pathname, search } = window.location;
      const urlWithUtm = `${origin}${pathname}${search}`;
      setUtmSuffix(`\n\nFonte: ${urlWithUtm}`);
    };
    buildSuffix();
    const onNavChange = () => buildSuffix();
    window.addEventListener('popstate', onNavChange);
    window.addEventListener('hashchange', onNavChange);
    return () => {
      window.removeEventListener('popstate', onNavChange);
      window.removeEventListener('hashchange', onNavChange);
    };
  }, []);

  // ------- atenção/pulso após inatividade -------
  useEffect(() => {
    if (typeof window === 'undefined') return;
    startIdle();
    const resetEvents: Array<keyof WindowEventMap> = ['mousemove', 'keydown', 'touchstart', 'scroll'];
    resetEvents.forEach((evt) => window.addEventListener(evt, userActivity, { passive: true }));
    return () => {
      clearIdleTimers();
      resetEvents.forEach((evt) => window.removeEventListener(evt, userActivity as any));
      if (debTimerRef.current) window.clearTimeout(debTimerRef.current);
    };
  }, [idleMs, pulseMs, debounceMs]);

  const waHref = useMemo(() => {
    const fullMsg = `${whatsappText}${utmSuffix}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  }, [whatsappNumber, whatsappText, utmSuffix]);

  const currentLabel = scrolledHalf ? scrolledLabel : label;

  return (
    <div
      className={[
        'fixed bottom-6 right-6 z-[150]',
        'transition-all duration-300',
        hidden ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100 translate-y-0',
      ].join(' ')}
    >
      <div className="flex items-center gap-2 max-sm:flex-col">
        {/* CTA principal com badge invertida neon */}
        <div className="relative">
          <a
            href={href}
            aria-label={currentLabel}
            className={[
              "inline-flex items-center justify-center rounded-full px-5 py-3",
              "bg-lime-400 text-black font-semibold shadow-xl ring-1 ring-lime-300",
              "hover:bg-lime-300 hover:ring-lime-200",
              "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black whitespace-nowrap",
              attention ? "motion-safe:animate-pulse" : "",
            ].join(' ')}
          >
            <span className="mr-2">⚡</span>{currentLabel}
          </a>

          {isReturning && showBadge && (
            <span
              className="
                absolute -top-2 -right-2
                inline-flex items-center justify-center
                h-6 min-w-6 px-2
                rounded-full bg-lime-300 text-black text-[11px] font-bold
                ring-1 ring-black/10 shadow-md
              "
              aria-label="Tempo de resposta estimado"
              title="Tempo de resposta estimado"
            >
              {badgeText}
            </span>
          )}
        </div>

        {/* WhatsApp */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={whatsappLabel}
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-3",
            "bg-black text-lime-300 font-semibold shadow-xl ring-1 ring-lime-400/40",
            "hover:bg-slate-900 hover:text-lime-200",
            "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 whitespace-nowrap",
            attention ? "motion-safe:animate-pulse" : "",
          ].join(' ')}
        >
          <span className="mr-2">💬</span>{whatsappLabel}
        </a>
      </div>
    </div>
  );
}