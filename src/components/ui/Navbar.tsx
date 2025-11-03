// src/components/ui/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },         // garante que vai para a página /about
  { name: 'Serviços', href: '/services' },
  { name: 'Empresas', href: '/empresas' },
  { name: 'Depoimentos', href: '/depoimentos' },
  { name: 'Cursos', href: '/cursos' },       // ⬅️ novo item
  { name: 'Contato', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 transition-colors
        bg-white/75 dark:bg-gray-900/65 backdrop-blur-md
        border-b border-gray-200/70 dark:border-white/10
      "
    >
      <nav className="flex items-center justify-between px-6 py-3 md:py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Fedumenti Group
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-800 dark:text-gray-100/90 hover:text-gray-900 dark:hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Toggle Theme */}
          <button
            className="text-gray-800 dark:text-gray-100 hover:opacity-80 transition"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            type="button"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            type="button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 pb-4 border-t border-gray-200/70 dark:border-white/10">
          <ul className="flex flex-col gap-4 py-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition"
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
