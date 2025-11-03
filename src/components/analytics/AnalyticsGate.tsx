'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  gaId?: string; // opcional, pode vir por prop OU via env NEXT_PUBLIC_GA_ID
};

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Consentimento válido para GA:
function hasConsent(): boolean {
  try {
    // Compat com seu CookieBanner atual
    const v1 = localStorage.getItem('fg-consent');         // 'granted' | 'denied'
    const v2 = localStorage.getItem('cookie-consent');     // 'accepted' | 'rejected'
    return v1 === 'granted' || v2 === 'accepted';
  } catch {
    return false;
  }
}

export default function AnalyticsGate({ gaId }: Props) {
  const GA_ID = gaId ?? process.env.NEXT_PUBLIC_GA_ID;
  const [enabled, setEnabled] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Avalia no mount
  useEffect(() => {
    setEnabled(Boolean(GA_ID) && hasConsent());
  }, [GA_ID]);

  // Reage a mudanças de consentimento (mesma aba + outras abas)
  useEffect(() => {
    const onStorage = () => setEnabled(Boolean(GA_ID) && hasConsent());
    const onConsent = () => setEnabled(Boolean(GA_ID) && hasConsent());
    window.addEventListener('storage', onStorage);
    window.addEventListener('consentchange', onConsent as any);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('consentchange', onConsent as any);
    };
  }, [GA_ID]);

  // Pageview a cada navegação (se habilitado)
  useEffect(() => {
    if (!enabled || !GA_ID) return;
    // gtag pode ainda não estar pronto no primeiro tick; pequeno timeout ajuda
    const id = window.setTimeout(() => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_location: window.location.href,
          page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
        });
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [enabled, GA_ID, pathname, searchParams]);

  if (!enabled || !GA_ID) return null;

  return (
    <>
      {/* gtag loader */}
      <Script
        id="ga4-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* gtag init */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
