'use client';

import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';

const KEYS = ['fg-consent', 'cookie-consent'];

function hasConsent(): boolean {
  try {
    for (const k of KEYS) {
      const v = localStorage.getItem(k);
      if (v === 'granted' || v === 'accepted') return true;
      if (v === 'denied' || v === 'rejected') return false;
    }
  } catch {}
  return false;
}

export default function VercelAnalyticsGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasConsent());
    const onStorage = () => setEnabled(hasConsent());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  if (!enabled) return null;
  return <Analytics />;
}
