import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function FCGHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-44 sm:pb-28 bg-white text-slate-900 overflow-hidden">
      {/* Background subtle mesh/gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-slate-100/80 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="container-xl relative z-10 space-y-16">
        
        {/* Top Text Content */}
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-4 py-1.5 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 font-mono">
              Fedumenti Group · Holding de Tecnologia
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08] text-balance">
            Tecnologia, governança e escala digital para o{' '}
            <span className="bg-gradient-to-r from-slate-950 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              empreendedor consolidado.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-pretty">
            A FCG é a parceira estratégica de empresas com tração, faturamento real e operação validada que buscam liderar seus mercados no digital através de software proprietário e inteligência de dados.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20expans%C3%A3o%20digital%20com%20a%20holding%20FCG."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all hover:scale-[1.01] shadow-md"
            >
              <span>Falar com a Diretoria</span>
              <ArrowRight size={16} />
            </a>

            <Link
              href="#tese"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-all shadow-xs"
            >
              <span>Conhecer Nossa Tese</span>
            </Link>
          </div>

          {/* Quick Credibility Bullets */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Sem promessas vazias de marketing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Engenharia de software e dados</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Alinhamento de longo prazo</span>
            </div>
          </div>
        </div>

        {/* Clean Hero Feature Card: O Modelo de Parceria FCG */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-10 shadow-[0_12px_40px_rgb(0,0,0,0.04)] backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="space-y-2.5 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 font-bold">
                  01
                </div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Operação Validada
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Não financiamos ideias no papel. Focamos no empresário que já tem fluxo de caixa, equipe, clientes e autoridade no mundo físico ou tradicional.
                </p>
              </div>

              <div className="space-y-2.5 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 font-bold">
                  02
                </div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Infraestrutura Digital
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Construímos a esteira tecnológica do seu negócio: conexão de ERPs, inteligência de catálogo, orquestração de pedidos e presença corporativa.
                </p>
              </div>

              <div className="space-y-2.5 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 font-bold">
                  03
                </div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Escala Sustentável
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transformamos a força física do negócio em dominância digital com governança fiscal, margem protegida e arquitetura escalável.
                </p>
              </div>

            </div>

            {/* Chancelas Institucionais Minimalistas */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-slate-700" />
                <span className="font-semibold text-slate-700">Incubação Tecnológica:</span>
                <span>UTFPR Sprint</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-slate-700" />
                <span className="font-semibold text-slate-700">Parceria Cloud:</span>
                <span>Google for Startups</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-slate-700" />
                <span className="font-semibold text-slate-700">Ecossistema:</span>
                <span>Sebrae Startups</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
