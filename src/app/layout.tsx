// src/app/layout.tsx  (único layout ativo do App Router)
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ConditionalNavbar from '@/components/shared/ConditionalNavbar';
import ConditionalFooter from '@/components/shared/ConditionalFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fedumentigroup.com.br'),
  title: { default: 'Fedumenti Group', template: '%s | Fedumenti Group' },
  description: 'Soluções em tecnologia e inovação para transformar o seu negócio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <ConditionalNavbar />
          <main className="min-h-[calc(100vh-120px)]">{children}</main>
          <ConditionalFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
