// =======================================
// FILE: src/components/shared/ConditionalHeader.tsx
// =======================================
'use client';

import { usePathname } from 'next/navigation';
import Header from './Header'; // ajuste o caminho conforme seu projeto

/** Por quê: esconder o Header em segmentos LP sem refatorar rotas. */
export default function ConditionalHeader() {
  const pathname = usePathname();
  if (pathname?.startsWith('/lp')) return null; // sem navbar nas LPs
  return <Header />;
}

// =======================================
// (Opcional) FILE: src/components/shared/ConditionalFooter.tsx
// =======================================
'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer'; // ajuste o caminho conforme seu projeto

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith('/lp')) return null; // sem footer nas LPs (se quiser)
  return <Footer />;
}

// =======================================
// FILE: src/app/layout.tsx  (SERVER COMPONENT)
// Substitua o uso direto de Header/Footer pelos condicionais.
// =======================================
import type { Metadata } from 'next';
import './globals.css';
// import Header from '@/components/shared/Header';
// import Footer from '@/components/shared/Footer';
import ConditionalHeader from '@/components/shared/ConditionalHeader';
import ConditionalFooter from '@/components/shared/ConditionalFooter'; // opcional

export const metadata: Metadata = {
  title: 'Fedumenti Group',
  description: 'Site oficial Fedumenti Group',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Antes: <Header /> */}
        <ConditionalHeader />
        {children}
        {/* Se quiser manter footer nas LPs, troque por Footer direto */}
        <ConditionalFooter />
      </body>
    </html>
  );
}
