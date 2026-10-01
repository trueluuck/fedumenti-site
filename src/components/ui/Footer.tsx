import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react';

const linxarLinks = [
  { name: 'Linxar Hub', href: '/linxar/hub' },
  { name: 'Linxar Pref', href: '/linxar/pref' },
  { name: 'Linxar Workplace', href: '/linxar/workplace' },
  { name: 'Linxar Middleware', href: '/linxar/middleware' },
];

const fcgLinks = [
  { name: 'Sobre a FCG', href: '/sobre' },
  { name: 'Google 360°', href: '/google-360' },
  { name: 'Contato', href: '/contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white py-16">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block font-heading font-black text-xl text-slate-900 tracking-tight">
              FCG<span className="text-blue-600">.</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Holding proprietária da Linxar — infraestrutura de IA para automatizar,
              padronizar e escalar o comércio brasileiro.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/fedumentigroup/?viewAsMember=true"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn FCG"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://www.instagram.com/fcggroup/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram FCG"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.youtube.com/@LucasFedumentiCastro"
                target="_blank" rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Linxar */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Linxar</h4>
            <ul className="space-y-3">
              {linxarLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://linxar.com.br/pt"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  linxar.com.br <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* FCG */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">FCG</h4>
            <ul className="space-y-3">
              {fcgLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-slate-500">
                <Mail size={14} className="text-slate-400 shrink-0" />
                contato@fedumentigroup.com.br
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={14} className="text-slate-400 shrink-0" />
                <a href="https://wa.me/5542999217736" target="_blank" rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors">
                  (42) 9 9921-7736
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin size={14} className="text-slate-400 mt-0.5 shrink-0" />
                Guarapuava, PR — Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {year} FCG — Fedumenti Group · CNPJ 26.306.303/0001-20 · Guarapuava, PR
          </p>
          <div className="flex items-center gap-5">
            <Link href="/politicas" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">
              Privacidade
            </Link>
            <Link href="/politicas" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
