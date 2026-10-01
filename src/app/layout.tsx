import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Suspense } from 'react';
import { inter, outfit } from './fonts';
import CookieBanner from '@/components/common/CookieBanner';
import AnalyticsGate from '@/components/analytics/AnalyticsGate';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fedumentigroup.com.br'),
  title: {
    default: 'FCG — Fedumenti Group | Tecnologia e Inovação',
    template: '%s | FCG Fedumenti Group',
  },
  description:
    'FCG é a holding proprietária da Linxar — infraestrutura de IA para automatizar catálogos e escalar vendas no comércio brasileiro.',
  openGraph: {
    title: 'FCG — Fedumenti Group',
    description:
      'Holding proprietária da Linxar, plataforma de Commerce Intelligence com IA para o comércio brasileiro.',
    url: 'https://www.fedumentigroup.com.br',
    siteName: 'FCG — Fedumenti Group',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCG — Fedumenti Group',
    description: 'Holding proprietária da Linxar — Commerce Intelligence para o Brasil.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://linxar.com.br" />
        <link rel="dns-prefetch" href="https://linxar.com.br" />
      </head>
      <body className="bg-white text-slate-900 antialiased min-h-screen font-sans">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>

        <main className="relative min-h-screen pt-16">
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