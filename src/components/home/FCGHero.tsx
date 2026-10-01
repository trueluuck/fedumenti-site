import { Building2, Award, ShieldCheck, ArrowDown } from 'lucide-react';

export default function FCGHero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-white border-b border-slate-100">
      <div className="container-xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge Holding */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-700">
            <Building2 size={14} className="text-blue-600" />
            FCG · Fedumenti Group Holding
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-slate-900 tracking-tight leading-[1.08] text-balance">
            Holding de Tecnologia e <span className="text-blue-600">Inovação Aplicada.</span>
          </h1>

          {/* Subtitle Explicativo */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed text-pretty">
            A <strong>FCG (Fedumenti Group)</strong> é a holding proprietária e aceleradora de soluções de software sediada em Guarapuava/PR. Abaixo, conheça as nossas duas linhas de negócio ativas: a plataforma <strong>LINXAR</strong> e o serviço oficial <strong>Google 360°</strong>.
          </p>

          {/* Badges de Ecossistema */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Award size={15} className="text-blue-600" /> Google for Startups Partner
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Building2 size={15} className="text-emerald-600" /> Ecossistema Sebrae Startups
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-indigo-600" /> Incubada Sprint UTFPR
            </span>
          </div>

          {/* Botão de rolagem suave para o portfólio */}
          <div className="pt-4">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-blue-600 transition-colors"
            >
              Conheça nosso portfólio de soluções
              <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
