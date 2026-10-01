import { Cpu, ShieldCheck, TrendingUp } from 'lucide-react';

export default function FCGOverview() {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: 'Software & Engenharia de IA',
      description:
        'Desenvolvemos tecnologia proprietária e arquiteturas de alta escala voltadas à automação de dados, inteligência de catálogo e comércio digital.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Incubação & Rigor Técnico',
      description:
        'Baseados em Guarapuava/PR, com raízes em ambiente de inovação acadêmico (UTFPR) e suporte de ecossistemas líderes (Google for Startups e Sebrae).',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      title: 'Venture Building & Operação',
      description:
        'Transformamos dores complexas de mercado em produtos independentes e escaláveis, gerindo sua governança, expansão e comercialização.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-black uppercase font-mono tracking-widest text-slate-400">
            Nossos Pilares
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Como a holding FCG atua
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Unimos visão estratégica, capacidade técnica interna e disciplina operacional para construir empresas sólidas de tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <div key={idx} className="card p-8 space-y-4 bg-white border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
