export function trackGA(event: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event, params || {});
  }
}

export function trackFB(event: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', event, params || {});
  }
}
