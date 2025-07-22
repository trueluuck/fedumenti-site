// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fedumentigroup.com.br'),
  title: {
    default: 'Fedumenti Group',
    template: '%s | Fedumenti Group',
  },
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
    <html lang="pt-BR">
      <body className="bg-white text-gray-800 scroll-smooth">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
