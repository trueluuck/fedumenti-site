'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Empresas', href: '/empresas' },
  { name: 'Contato', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme) {
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}, []);


 const toggleTheme = () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);

  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};


  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold text-blue-700 dark:text-blue-400">
          Fedumenti Group
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-700 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Toggle Theme */}
          <button
            className="text-gray-700 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 transition"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-700 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 transition"
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
