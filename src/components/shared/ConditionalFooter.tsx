// src/components/shared/ConditionalFooter.tsx
'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/ui/Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith('/lp')) return null;
  return <Footer />;
}
