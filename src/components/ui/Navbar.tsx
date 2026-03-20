// src/components/ui/Navbar.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Empresas', href: '/empresas' },
  { name: 'Depoimentos', href: '/depoimentos' },
  { name: 'Cursos', href: '/cursos' },
  { name: 'Contato', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        bg-background/60 dark:bg-background/50 backdrop-blur-xl
        border-b border-border/50
      "
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
          FEDUMENTI<span className="text-primary italic">.</span>
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[13px] uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 border-l border-border/50 pl-4">
            {/* Toggle Theme */}
            <button
              className="p-2 rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
              onClick={toggleTheme}
              aria-label="Alternar tema"
              type="button"
            >
              {mounted ? (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />) : <div className="h-[18px] w-[18px]" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full text-foreground hover:bg-accent transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl px-6 pb-6 border-t border-border/50 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
