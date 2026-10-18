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
    default: 'FCG — Fedumenti Group | Grupo de Tecnologia e Escala Digital',
    template: '%s | FCG — Fedumenti Group',
  },
  description:
    'Holding de tecnologia proprietária focada em estruturar e operar ativos digitais de alta escala para empreendedores e empresas consolidadas.',
  openGraph: {
    title: 'FCG — Fedumenti Group',
    description:
      'Holding de tecnologia proprietária focada em estruturar e operar ativos digitais de alta escala para o empreendedor consolidado.',
    url: 'https://www.fedumentigroup.com.br',
    siteName: 'FCG — Fedumenti Group',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCG — Fedumenti Group',
    description: 'Holding de tecnologia proprietária e inovação para escala no mercado digital.',
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
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen font-sans selection:bg-blue-600 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg"
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