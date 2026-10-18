import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Suspense } from 'react';
import { inter } from './fonts';
import CookieBanner from '@/components/common/CookieBanner';
import AnalyticsGate from '@/components/analytics/AnalyticsGate';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fedumentigroup.com.br'),
  title: {
    default: 'FCG — Fedumenti Group | Tecnologia e Escala para o Empreendedor Consolidado',
    template: '%s | FCG — Fedumenti Group',
  },
  description:
    'Holding de tecnologia e expansão digital. Apoiamos empresários com operações consolidadas que buscam estrutura proprietária de software, inteligência de dados e eficiência.',
  openGraph: {
    title: 'FCG — Fedumenti Group',
    description:
      'Holding de tecnologia proprietária focada no empreendedor consolidado que busca acelerar sua expansão no mercado digital.',
    url: 'https://www.fedumentigroup.com.br',
    siteName: 'FCG — Fedumenti Group',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCG — Fedumenti Group',
    description: 'Tecnologia, governança e escala digital para o empreendedor consolidado.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://linxar.com.br" />
        <link rel="dns-prefetch" href="https://linxar.com.br" />
      </head>
      <body className="bg-white text-slate-900 antialiased min-h-screen font-sans selection:bg-slate-900 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-lg"
        >
          Pular para o conteúdo principal
        </a>

        <Suspense fallback={null}>
          <Navbar />
        </Suspense>

        <main id="main-content" className="relative min-h-screen">
          {children}
        </main>

        <Footer />

        <Suspense fallback={null}>
          <CookieBanner />
          <AnalyticsGate />
        </Suspense>
      </body>
    </html>
  );
}