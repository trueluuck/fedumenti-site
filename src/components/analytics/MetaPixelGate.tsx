'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = { pixelId?: string };

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

function hasMarketingConsent(): boolean {
  try {
    const v = localStorage.getItem('fb-consent');
    return v === 'granted';
  } catch {}
  return false;
}

export default function MetaPixelGate({ pixelId }: Props) {
  const PIXEL_ID = pixelId ?? process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const [enabled, setEnabled] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setEnabled(Boolean(PIXEL_ID) && hasMarketingConsent());
  }, [PIXEL_ID]);

  useEffect(() => {
    const onStorage = () => setEnabled(Boolean(PIXEL_ID) && hasMarketingConsent());
    const onConsent = () => setEnabled(Boolean(PIXEL_ID) && hasMarketingConsent());
    window.addEventListener('storage', onStorage);
    window.addEventListener('consentchange', onConsent as any);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('consentchange', onConsent as any);
    };
  }, [PIXEL_ID]);

  // Track pageview on route changes
  useEffect(() => {
    if (!enabled || !PIXEL_ID) return;
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [enabled, PIXEL_ID, pathname, searchParams]);

  if (!enabled || !PIXEL_ID) return null;

  return (
    <>
      <Script id="fbq-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* Pixel fallback (não bloqueante) */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
