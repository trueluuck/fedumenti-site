// src/app/fonts.ts
import { Inter, Outfit } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-outfit',
});
