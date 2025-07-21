'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/#about', label: 'Sobre' },
  { href: '/#services', label: 'Serviços' },
  { href: '/#contact', label: 'Contato' },
  { href: '/services', label: 'Página Serviços' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-blue-700 font-bold text-xl">Fedumenti</Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} scroll={false} className="text-gray-700 hover:text-blue-700 transition">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={false}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-700 transition"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
