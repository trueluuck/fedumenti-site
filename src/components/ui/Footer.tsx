// src/components/ui/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-default">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <div className="muted">
          © {new Date().getFullYear()} Fedumenti Group
        </div>
        <div className="mt-2 space-x-2">
          <Link href="/politicas" className="muted underline hover:text-default">Políticas</Link>
          <span className="muted">•</span>
          <Link href="/contact" className="muted underline hover:text-default">Contato</Link>
        </div>
      </div>
    </footer>
  );
}
