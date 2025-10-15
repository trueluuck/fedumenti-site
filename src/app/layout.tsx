import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

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
        {/* LCP: poster do vídeo */}
        <link rel="preload" as="image" href="/assets/hero-poster.jpg" />

        {/* Otimizações de conexão para embeds do YouTube (nocookie) */}
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />

        {/*
          Se usar Google Fonts (não vi no projeto, mas caso ative no futuro):
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        */}
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}