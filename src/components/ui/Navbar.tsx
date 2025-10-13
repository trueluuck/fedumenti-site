// src/components/ui/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Serviços', href: '/services' },
  { name: 'Empresas', href: '/empresas' },
  { name: 'Depoimentos', href: '/depoimentos' },
  { name: 'Contato', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow transition-colors">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700 dark:text-blue-300">
          Fedumenti Group
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {navLinks.map((l) => (
              <li key={l.name}>
                <Link href={l.href} className="text-gray-700 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-300 transition">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Abrir menu" className="text-gray-700 dark:text-gray-100">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.name}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block text-gray-700 dark:text-gray-100 hover:text-blue-700 transition">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
