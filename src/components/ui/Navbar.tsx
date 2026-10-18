'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ChevronDown, 
  Camera, 
  TrendingUp, 
  Share2, 
  Cpu, 
  Compass, 
  Smartphone, 
  GraduationCap, 
  Mic2,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lista dos 8 serviços solicitados
  const servicesList = [
    { name: 'Google 360° HDR', href: '/google-360', desc: 'Presença no Google Maps', icon: Camera },
    { name: 'Tráfego Pago', href: '/servicos#trafego-pago', desc: 'Google, Meta e LinkedIn Ads', icon: TrendingUp },
    { name: 'Redes Sociais', href: '/servicos#redes-sociais', desc: 'Gestão e autoridade de marca', icon: Share2 },
    { name: 'Automação Comercial', href: '/servicos#automacao', desc: 'WhatsApp & processos com IA', icon: Cpu },
    { name: 'Assessoria Digital', href: '/servicos#assessoria-digital', desc: 'Acompanhamento estratégico', icon: Compass },
    { name: 'Vídeo Mobile', href: '/servicos#video-mobile', desc: 'Reels e vídeos verticais', icon: Smartphone },
    { name: 'Treinamentos', href: '/servicos#treinamentos', desc: 'Capacitação in company', icon: GraduationCap },
    { name: 'Palestras', href: '/servicos#palestras', desc: 'Inovação e IA para eventos', icon: Mic2 },
  ];

  // Fechar dropdown caso clique fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 mx-auto w-[min(94%,1080px)] z-50 transition-all duration-300">
      <nav
        aria-label="Navegação Principal"
        className="flex items-center justify-between rounded-full border border-slate-200/90 bg-white/90 px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl"
      >
        {/* Brand FCG */}
        <Link
          href="/"
          className="flex items-center gap-2.5 tracking-tight hover:opacity-85 transition-opacity"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#881337] to-[#701a75] text-xs font-black text-white shadow-xs">
            FCG
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm text-slate-900 tracking-tight">Fedumenti Group</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#9d174d] font-semibold">
              Tech Holding
            </span>
          </div>
        </Link>

        {/* Desktop Links: HOLDING, LINXAR, SERVIÇOS (com cascata) */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* 1. HOLDING */}
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 transition-colors"
          >
            HOLDING
          </Link>

          {/* 2. LINXAR */}
          <Link
            href="/linxar"
            className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 transition-colors flex items-center gap-1"
          >
            <span>LINXAR</span>
            <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[9px] font-mono text-blue-700 font-bold border border-blue-200">
              SaaS
            </span>
          </Link>

          {/* 3. SERVIÇOS (Menu Cascata com Hover e Clique) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/servicos"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 transition-colors py-1"
            >
              <span>SERVIÇOS</span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-slate-950' : 'text-slate-400'}`}
              />
            </Link>

            {/* Menu Dropdown Cascata */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-20 pt-2 w-[480px] animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_15px_40px_rgb(0,0,0,0.1)] backdrop-blur-xl">
                  
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      Soluções Comerciais FCG
                    </span>
                    <Link
                      href="/servicos"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-[11px] font-bold text-slate-900 hover:text-blue-600 inline-flex items-center gap-0.5"
                    >
                      <span>Ver catálogo completo</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="p-1.5 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <Icon size={14} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-slate-950 leading-tight">
                              {service.name}
                            </span>
                            <span className="text-[10px] text-slate-500 leading-tight mt-0.5">
                              {service.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>

        {/* CTA Direct Contact: "Entrar em Contato" */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20holding%20FCG."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-sm"
          >
            <span>Entrar em Contato</span>
            <ArrowUpRight size={13} className="text-slate-300" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex h-8 w-8 items-center justify-center rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-2 md:hidden rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-900 font-bold hover:bg-slate-50 rounded-lg transition-colors"
            >
              HOLDING (Início)
            </Link>
            
            <Link
              href="/linxar"
              onClick={() => setMobileOpen(false)}
              className="px-2 py-1.5 text-slate-900 font-bold hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>LINXAR (Commerce AI)</span>
              <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">Ativo</span>
            </Link>

            <div className="pt-2 border-t border-slate-100">
              <span className="px-2 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                SERVIÇOS FCG
              </span>
              <div className="grid grid-cols-1 gap-1 text-xs">
                {servicesList.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-2 py-1.5 text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-md transition-colors flex items-center justify-between"
                  >
                    <span>{service.name}</span>
                    <span className="text-[10px] text-slate-400">{service.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-2">
              <Link
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="text-xs text-slate-600 hover:text-slate-900 font-semibold"
              >
                Fale Conosco
              </Link>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20holding%20FCG."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>Entrar em Contato no WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
