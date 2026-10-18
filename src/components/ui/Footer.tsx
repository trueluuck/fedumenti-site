import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 py-16">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 tracking-tight">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-[10px] font-black text-white">
                FCG
              </span>
              <span>Fedumenti Group</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Holding de tecnologia focada na expansão digital de empresas consolidadas através de software próprio, dados e serviços comerciais de alta performance.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/company/fedumentigroup/?viewAsMember=true"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn FCG"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors shadow-xs"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://www.instagram.com/fcggroup/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram FCG"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors shadow-xs"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://www.youtube.com/@LucasFedumentiCastro"
                target="_blank" rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors shadow-xs"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* A Holding & Linxar */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900">Navegação Principal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-600 hover:text-slate-950 transition-colors font-medium">
                  HOLDING (Início)
                </Link>
              </li>
              <li>
                <Link href="/linxar" className="text-slate-600 hover:text-slate-950 transition-colors font-medium">
                  LINXAR (Commerce AI)
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-600 hover:text-slate-950 transition-colors font-medium">
                  SERVIÇOS (Catálogo)
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços em Destaque */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900">Serviços FCG</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/google-360" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Google 360° HDR
                </Link>
              </li>
              <li>
                <Link href="/servicos#trafego-pago" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Tráfego Pago
                </Link>
              </li>
              <li>
                <Link href="/servicos#automacao" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Automação com IA
                </Link>
              </li>
              <li>
                <Link href="/servicos#video-mobile" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Vídeo Mobile
                </Link>
              </li>
            </ul>
          </div>

          {/* Sede & Contato */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900">Sede & Atendimento</h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-slate-700 shrink-0" />
                <span>contato@fedumentigroup.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-slate-700 shrink-0" />
                <a href="https://wa.me/5542999217736" target="_blank" rel="noopener noreferrer"
                  className="hover:text-slate-950 transition-colors font-medium">
                  (42) 9 9921-7736
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-500 text-xs pt-1">
                <MapPin size={13} className="text-slate-700 shrink-0 mt-0.5" />
                <span>Guarapuava, Paraná — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {year} Fedumenti Group Tecnologia Ltda · CNPJ 26.306.303/0001-20
          </p>
          <div className="flex items-center gap-4">
            <Link href="/politicas" className="hover:text-slate-900 transition-colors">
              Privacidade
            </Link>
            <Link href="/politicas" className="hover:text-slate-900 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
