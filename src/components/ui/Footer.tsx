import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300 py-16">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white tracking-tight">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-[10px] font-black text-white">
                FCG
              </span>
              <span>Fedumenti Group</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Holding de tecnologia focada em estruturar e operar ativos de software e dados para operações comerciais consolidadas.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/company/fedumentigroup/?viewAsMember=true"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn FCG"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://www.instagram.com/fcggroup/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram FCG"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white transition-colors"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.youtube.com/@LucasFedumentiCastro"
                target="_blank" rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white transition-colors"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Linxar */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">Ativo Linxar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/linxar" className="text-slate-400 hover:text-white transition-colors">
                  Visão Geral do Ecossistema
                </Link>
              </li>
              <li>
                <Link href="/linxar/hub" className="text-slate-400 hover:text-white transition-colors">
                  Linxar Hub (Marketplaces)
                </Link>
              </li>
              <li>
                <a
                  href="https://linxar.com.br/pt"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  linxar.com.br <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* FCG */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Holding</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/google-360" className="text-slate-400 hover:text-white transition-colors">
                  Google 360°
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-slate-400 hover:text-white transition-colors">
                  Sobre a Holding
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-400 hover:text-white transition-colors">
                  Contato Oficial
                </Link>
              </li>
            </ul>
          </div>

          {/* Sede & Contato */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Sede Operacional</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-blue-400 shrink-0" />
                <span>contato@fedumentigroup.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-blue-400 shrink-0" />
                <a href="https://wa.me/5542999217736" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">
                  (42) 9 9921-7736
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-xs pt-1">
                <MapPin size={13} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Guarapuava, Paraná — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {year} Fedumenti Group Tecnologia Ltda · CNPJ 26.306.303/0001-20
          </p>
          <div className="flex items-center gap-4">
            <Link href="/politicas" className="hover:text-slate-200 transition-colors">
              Privacidade
            </Link>
            <Link href="/politicas" className="hover:text-slate-200 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
