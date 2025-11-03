// src/components/sections/EmpresasSection.tsx
import Card from '@/components/common/Card';

const empresas = [
  {
    icon: '🌍',
    name: 'Guarapuava360',
    desc: 'Digitalização regional com foco em inovação local.'
  },
  {
    icon: '🚀',
    name: 'SevenLayers Soluções',
    desc: 'Startup: Hub omnichannel para marketplaces.'
  },
  {
    icon: '🏢',
    name: 'Paraná360',
    desc: 'Atendimento digital para todo o estado do Paraná.'
  },
];

export default function EmpresasSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 text-center">
        <h2 className="heading text-3xl font-bold">Empresas do Grupo</h2>
        <p className="muted mt-2">Iniciativas complementares que potencializam resultados.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {empresas.map((e) => (
          <Card key={e.name} className="p-6">
            <div className="text-3xl">{e.icon}</div>
            <h3 className="heading mt-3 text-lg font-semibold">{e.name}</h3>
            <p className="muted mt-2">{e.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
