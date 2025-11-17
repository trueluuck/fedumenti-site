// src/components/analytics/AnalyticsGate.tsx
"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

type Consent = {
  necessary: true;
  analytics: boolean;
  performance: boolean;
};

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

export default function AnalyticsGate() {
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    const c = readConsent();
    setConsent(c);
  }, []);

  // Não injeta nada até consentimento com analytics=true
  if (!consent || !consent.analytics) return null;

  const GA = process.env.NEXT_PUBLIC_GA_ID;
  const FB = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  return (
    <>
      {GA && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${GA}', { anonymize_ip: true });`}
          </Script>
        </>
      )}
      {FB && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB}'); fbq('track', 'PageView');`}
        </Script>
      )}
    </>
  );
}
