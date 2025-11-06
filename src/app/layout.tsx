import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import CookieBanner from '@/components/common/CookieBanner';
import AnalyticsGate from '@/components/analytics/AnalyticsGate';
import { inter, poppins } from './fonts';

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
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`} // WHY: injeta --font-sans / --font-heading sem CLS
    >
      <head>
        {/* WHY: Preload apenas arquivos que existem (usar variações -1280) para evitar 404 e melhorar LCP */}
        <link rel="preload" as="image" href="/assets/posters/reflorestamento-1280.jpg" />
        <link rel="preload" as="image" href="/assets/posters/financie-startup-1280.jpg" />
        <link rel="preload" as="image" href="/assets/posters/google360-1280.jpg" />
        <link rel="preload" as="image" href="/assets/posters/indicacoes-1280.jpg" />

        {/* Otimizações p/ YouTube (nocookie) */}
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>

      {/* As cores vêm dos tokens (bg-bg / text-fg) */}
      <body className="bg-bg text-fg font-sans transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
          <CookieBanner />
          <AnalyticsGate />
        </ThemeProvider>
      </body>
    </html>
  );
}