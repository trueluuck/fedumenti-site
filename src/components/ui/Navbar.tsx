'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Contato', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-700">
          FCGroup
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white shadow">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
