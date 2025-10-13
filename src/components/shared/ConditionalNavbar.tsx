// src/components/shared/ConditionalNavbar.tsx
'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/ui/Navbar'; // importa o Navbar REAL que aparece

export default function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname?.startsWith('/lp')) return null;
  return (
    <>
      <Navbar />
      {/* Remova se o seu Navbar não for fixo */}
      <div className="h-20" />
    </>
  );
}
