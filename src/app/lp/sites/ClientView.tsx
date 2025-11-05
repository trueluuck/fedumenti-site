// src/app/lp/sites/ClientView.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Lê UTM / query-string no cliente (sem SSR) para tracking, cookies, etc.
 * Não renderiza nada — só efeitos colaterais seguros em client-side.
 */
export default function ClientView() {
  const params = useSearchParams();

  useEffect(() => {
    if (!params) return;

    const utm = {
      source: params.get('utm_source') ?? '',
      medium: params.get('utm_medium') ?? '',
      campaign: params.get('utm_campaign') ?? '',
      content: params.get('utm_content') ?? '',
      term: params.get('utm_term') ?? '',
    };

    // exemplo: persistir em sessionStorage (ou disparar analytics)
    try {
      sessionStorage.setItem('utm_lp_sites', JSON.stringify(utm));
    } catch {
      /* noop */
    }
  }, [params]);

  return null;
}
