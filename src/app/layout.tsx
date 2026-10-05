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
    'Grupo de tecnologia focado em estruturar e escalar operações no mercado digital para empreendedores e empresas já consolidadas.',
  openGraph: {
    title: 'FCG — Fedumenti Group',
    description:
      'Holding de tecnologia focada no empreendedor consolidado que busca escala no mercado digital.',
    url: 'https://www.fedumentigroup.com.br',
    siteName: 'FCG — Fedumenti Group',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCG — Fedumenti Group',
    description: 'Grupo de tecnologia e inovação para escala no mercado digital.',
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
      <body className="bg-white text-slate-900 antialiased min-h-screen font-sans selection:bg-slate-200 selection:text-slate-900">
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