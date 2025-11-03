// src/components/sections/FormsSwitcher.tsx
'use client';

import { useId, useMemo, useState, KeyboardEvent } from 'react';

type FormDef = {
  id: string;
  label: string;
  src: string;         // use o link de embed (com ?embedded=true)
  description?: string;
};

/**
 * Mantive seus formulários atuais. Você pode adicionar/remover aqui sem mexer no resto.
 * Dica: sempre usar o parâmetro "?embedded=true" no src para embed do Google Forms.
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
    label: 'CADASTRO',
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSftgziSKBdyJCeQvM_fkeBEpXGrwbLHEY0ll3NZ6AdWFKtf8w/viewform?usp=dialog',
    description: 'Formulário para empresas e parceiros interessados em colaborar com a Fedumenti Group.',
  },
  {
    id: 'estagiarios',
    label: 'PUBLICIDADE',
    src: 'https://docs.google.com/forms/d/e/1FAIpQLSd68rXwQzKui9hq2FzvQVBRtG2SNogYCn3ofSIKxKS9ZVNuuw/viewform?usp=dialog',
    description: 'Formulário para empresas e parceiros interessados em colaborar com a Fedumenti Group.',
  },
];

export default function FormsSwitcher({ forms = DEFAULT_FORMS }: { forms?: FormDef[] }) {
  const [activeId, setActiveId] = useState(forms[0]?.id ?? '');
  const tabsId = useId();

  const active = useMemo(
    () => forms.find((f) => f.id === activeId) ?? forms[0],
    [forms, activeId]
  );

  // URL para abrir no Google Forms (sem ?embedded=true)
  const openHref = useMemo(() => {
    try {
      const url = new URL(active.src);
      url.searchParams.delete('embedded');
      return url.toString();
    } catch {
      return active.src.replace('?embedded=true', '').replace('&embedded=true', '');
    }
  }, [active]);

  // Acessibilidade: teclas de seta para navegar entre abas no desktop
  function onTabsKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const idx = forms.findIndex((f) => f.id === active.id);
    if (idx < 0) return;

    if (e.key === 'ArrowRight') {
      const next = (idx + 1) % forms.length;
      setActiveId(forms[next].id);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      const prev = (idx - 1 + forms.length) % forms.length;
      setActiveId(forms[prev].id);
      e.preventDefault();
    }
  }

  return (
    <section className="space-y-6">
      {/* Header: tabs (desktop) + select (mobile) + ação abrir no Forms */}
      <div className="flex items-center gap-3 flex-wrap justify-between">
        {/* Abas (desktop) */}
        <div
          role="tablist"
          aria-label="Selecione um formulário"
          onKeyDown={onTabsKeyDown}
          className="hidden md:flex gap-2 p-1 rounded-full border border-border bg-surface"
        >
          {forms.map((f) => {
            const selected = f.id === active.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={selected}
                aria-controls={`${tabsId}-${f.id}-panel`}
                id={`${tabsId}-${f.id}-tab`}
                onClick={() => setActiveId(f.id)}
                className={[
                  'px-4 py-2 rounded-full text-sm font-medium transition',
                  selected ? 'bg-accent text-white' : 'text-default hover:bg-surface/70',
                ].join(' ')}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Select (mobile) */}
        <div className="md:hidden flex-1 min-w-[60%]">
          <label htmlFor={`${tabsId}-select`} className="sr-only">
            Selecionar formulário
          </label>
          <select
            id={`${tabsId}-select`}
            value={active.id}
            onChange={(e) => setActiveId(e.target.value)}
            className="w-full rounded-full border border-border bg-surface px-4 py-2 text-sm"
          >
            {forms.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
        </div>

        {/* Ação rápida: abrir externamente */}
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline whitespace-nowrap"
        >
          Abrir no Google Forms
        </a>
      </div>

      {/* Descrição do formulário ativo */}
      {active.description && (
        <p className="muted text-sm">{active.description}</p>
      )}

      {/* Card do embed */}
      <article
        id={`${tabsId}-${active.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-${active.id}-tab`}
        className="surface overflow-hidden"
      >
        {/* Cabeçalho do card */}
        <div className="p-4 md:p-6 border-b border-border">
          <h2 className="text-lg md:text-xl font-semibold">{active.label}</h2>
          <p className="mt-1 text-sm muted">
            Se o formulário não carregar abaixo, use “Abrir no Google Forms”.
          </p>
        </div>

        {/* Iframe do Google Forms — altura estável (sem resize cross-domain) */}
        <div className="bg-white dark:bg-gray-900">
          <iframe
            title={active.label}
            src={active.src}
            loading="lazy"
            className="w-full h-[820px] md:h-[920px]"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </article>

      {/* Rodapé informativo */}
      <p className="text-xs muted text-center">
        As respostas são enviadas diretamente ao Google Forms. Nenhum dado é armazenado neste site.
      </p>
    </section>
  );
}
