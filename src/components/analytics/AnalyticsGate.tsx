'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  gaId?: string;
};

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

function hasConsent(): boolean {
  try {
    return localStorage.getItem('fg-consent') === 'granted';
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

  // Reage a mudanças de consentimento disparadas pelo CookieBanner
  useEffect(() => {
    const update = () => setEnabled(Boolean(GA_ID) && hasConsent());
    window.addEventListener('storage', update);
    window.addEventListener('consentchange', update);
    return () => {
      window.removeEventListener('storage', update);
      window.removeEventListener('consentchange', update);
    };
  }, [GA_ID]);

  // Pageview a cada navegação
  useEffect(() => {
    if (!enabled || !GA_ID) return;
    const id = window.setTimeout(() => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_location: window.location.href,
          page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
        });
      }
    }, 50);
    return () => window.clearTimeout(id);
  }, [enabled, GA_ID, pathname, searchParams]);

  if (!enabled || !GA_ID) return null;

  return (
    <>
      <Script
        id="ga4-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
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
