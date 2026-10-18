'use client';

import { useEffect, useState } from 'react';

type Props = {
  phone?: string;
  message?: string;
  bubbleTitle?: string;
  bubbleText?: string;
  delayMs?: number;
};

const DISMISS_KEY = 'fcg_whatsapp_bubble_dismissed';

export default function WhatsAppFloat({
  phone = '5542999217736',
  message = 'Olá, gostaria de falar com a equipe da FCG sobre expansão digital.',
  bubbleTitle = 'Atendimento FCG',
  bubbleText = 'Deseja expandir sua empresa no digital? Fale conosco agora pelo WhatsApp!',
  delayMs = 2500,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Exibe o botão e balão após delay sutil
    const timer = setTimeout(() => {
      setVisible(true);
      try {
        const dismissed = sessionStorage.getItem(DISMISS_KEY) === '1';
        if (!dismissed) {
          setBubbleOpen(true);
        }
      } catch {
        setBubbleOpen(true);
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleCloseBubble = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setBubbleOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {}
  };

  if (!mounted || !visible) return null;

  const encMsg = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encMsg}`;

  return (
    <div
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 select-none animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* Balão de Mensagem */}
      {bubbleOpen && (
        <div
          role="dialog"
          aria-live="polite"
          className="relative max-w-[270px] sm:max-w-[300px] rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-[0_12px_35px_rgba(0,0,0,0.12)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 font-mono">
                {bubbleTitle}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCloseBubble}
              aria-label="Fechar balão de WhatsApp"
              className="text-slate-400 hover:text-slate-700 rounded-md p-0.5 hover:bg-slate-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-1.5 text-xs text-slate-600 leading-snug hover:text-slate-950 transition-colors"
          >
            {bubbleText}
          </a>

          {/* Seta discreta apontando para o botão */}
          <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-r border-b border-slate-200 bg-white" />
        </div>
      )}

      {/* Botão Flutuante Circular com Ícone Oficial do WhatsApp */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] active:scale-95"
      >
        {/* Efeito sutil de pulso ao redor */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden" />

        {/* SVG Oficial WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="relative z-10 h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>
  );
}
