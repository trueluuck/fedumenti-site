import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import CookieBanner from '@/components/common/CookieBanner';
import AnalyticsGate from '@/components/analytics/AnalyticsGate';
import { Suspense } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fedumentigroup.com.br'),
  title: { default: 'Fedumenti Group', template: '%s | Fedumenti Group' },
  description: 'Soluções em tecnologia e inovação para transformar o seu negócio.',
  openGraph: {
    title: 'Fedumenti Group',
    description: 'Transformamos tecnologia em inovação.',
    url: 'https://www.fedumentigroup.com.br',
    siteName: 'Fedumenti Group',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fedumenti Group',
    description: 'Soluções em tecnologia e inovação para transformar o seu negócio.',
    creator: '@fedumenti',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/assets/posters/reflorestamento.jpg" />
        <link rel="preload" as="image" href="/assets/posters/financie-startup.jpg" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="preload" as="image" href="/assets/posters/google360.jpg" />
        <link rel="preload" as="image" href="/assets/posters/indicacoes.jpg" />
      </head>

      <body className="bg-bg text-fg transition-colors duration-300">
        <ThemeProvider>
          {/* Qualquer componente que possa usar usePathname/useSearchParams deve ficar dentro de Suspense */}
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          {/* Colocamos o children em Suspense para cobrir páginas que usem esses hooks também */}
          <Suspense fallback={null}>
            <main className="pt-20 min-h-screen">{children}</main>
          </Suspense>

          <Footer />

          <Suspense fallback={null}>
            <CookieBanner />
            <AnalyticsGate />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
  