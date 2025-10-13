'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormDef = {
  id: string;
  label: string;
  src: string;
  description?: string;
};

/**
 * Formulários com link de embed do Google Forms.
 * Cada formulário é exibido com a estética do site.
 */
const DEFAULT_FORMS: FormDef[] = [
  {
    id: 'inicial',
    label: 'INICIAL',
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSel2sltOOffDMuYnNdj03RobBToruBkOsnms-uN6LUQ2-m_gw/viewform?embedded=true',
    description: 'Formulário inicial para envio de dados básicos e informações gerais.',
  },
  {
    id: 'advanced',
    label: 'ADVANCED',
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSdoMXJueA6ZeuMNthlOwtD6lY8Ve6nOURN1xJri50frNF62iA/viewform?embedded=true',
    description: 'Formulário avançado com campos adicionais e informações detalhadas.',
  },
  {
    id: 'satisfacao',
    label: 'SATISFAÇÃO',
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSe7EAf7eW_RH71NrNfvQX4jMx97U1CANezcN0v1vdGTUBxVrg/viewform?embedded=true',
    description: 'Pesquisa de satisfação e feedback dos nossos clientes.',
  },
  {
    id: 'parceria',
    label: 'BRIEFING',
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSd7VT9MZXYmU6hbN3bT_6KM4FT8cXzk3A8gFkqEMH0c1nqkPQ/viewform?embedded=true',
    description: 'Formulário para empresas e parceiros interessados em colaborar com a Fedumenti Group.',
  },
];

export default function FormsSwitcher({ forms = DEFAULT_FORMS }: { forms?: FormDef[] }) {
  const [selected, setSelected] = useState<FormDef>(forms[0]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(1200);

  // Auto ajuste de altura (fallback + suavização)
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resize = () => {
      try {
        const body = iframe.contentDocument?.body;
        const html = iframe.contentDocument?.documentElement;
        if (body && html) {
          const newHeight = Math.max(body.scrollHeight, html.scrollHeight);
          if (newHeight && newHeight !== iframeHeight) {
            setIframeHeight(newHeight);
          }
        }
      } catch {
        // Google Forms bloqueia acesso cross-domain — usamos fallback seguro
        setIframeHeight(1600);
      }
    };

    const interval = setInterval(resize, 2000);
    return () => clearInterval(interval);
  }, [selected, iframeHeight]);

  return (
    <section className="space-y-10">
      {/* Botões de seleção */}
      <div className="flex flex-wrap justify-center gap-3">
        {forms.map((f) => (
          <motion.button
            key={f.id}
            onClick={() => setSelected(f)}
            whileTap={{ scale: 0.96 }}
            className={[
              'px-6 py-2.5 rounded-full border text-sm font-medium tracking-wide shadow-sm transition-all duration-300',
              selected.id === f.id
                ? 'bg-blue-600 text-white border-blue-700 shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white',
            ].join(' ')}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      {/* Exibição do formulário ativo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden"
        >
          {/* Cabeçalho do formulário */}
          <div className="p-8 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {selected.label}
            </h2>
            {selected.description && (
              <p className="text-gray-600 dark:text-gray-400">{selected.description}</p>
            )}
          </div>

          {/* Formulário incorporado */}
          <div className="relative bg-white dark:bg-gray-900">
            <iframe
              ref={iframeRef}
              src={selected.src}
              className="w-full transition-all duration-500 ease-in-out"
              style={{
                height: iframeHeight,
                filter: 'brightness(1.03)',
                borderRadius: '1.5rem',
              }}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title={`Formulário ${selected.label}`}
            >
              Carregando…
            </iframe>

            {/* Overlay sutil para harmonia visual */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-50/40 dark:from-gray-900/30 to-transparent"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Rodapé informativo */}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        As respostas são enviadas diretamente ao Google Forms. Nenhum dado é armazenado neste site.
      </p>
    </section>
  );
}
