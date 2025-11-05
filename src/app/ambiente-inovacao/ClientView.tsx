// src/app/ambiente-inovacao/ClientView.tsx
'use client';

import { useSearchParams } from 'next/navigation';

type Props = {
  // passe dados estáticos pré-renderizados aqui, se precisar
};

export default function ClientView(_: Props) {
  const sp = useSearchParams();
  // EXEMPLO: ler um filtro ?tab= ou ?ref=
  const tab = sp.get('tab') ?? 'geral';
  const ref = sp.get('ref') ?? '';

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Ambiente de Inovação</h1>
        <p className="muted mt-2">
          Página com parâmetros dinâmicos via URL. <span className="font-semibold">tab:</span> {tab}
          {ref ? <> • <span className="font-semibold">ref:</span> {ref}</> : null}
        </p>
      </header>

      {/* Seu conteúdo real aqui */}
      <div className="surface p-6">
        <p className="text-sm muted">
          Renderizado no cliente para ler <code>useSearchParams()</code> sem quebrar build estático.
        </p>
      </div>
    </section>
  );
}
