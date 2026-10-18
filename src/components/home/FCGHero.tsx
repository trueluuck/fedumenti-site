import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, Building2, CheckCircle2, TrendingUp, PhoneCall } from 'lucide-react';

export default function FCGHero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-white text-slate-900 overflow-hidden">
      {/* Background sutil */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-slate-100/70 via-blue-50/25 to-transparent blur-3xl pointer-events-none -z-10"
      />

      <div className="container-xl relative z-10 space-y-12">
        
        {/* Top Text Content - Comercial e Direto */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Badge Comercial */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 font-mono">
              Fedumenti Group (FCG) · Holding & Venture Builder
            </span>
          </div>

          {/* Main Headline Comercial */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08] text-balance">
            Sua empresa já fatura no mercado tradicional.{' '}
            <span className="bg-gradient-to-r from-slate-950 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Nós lideramos sua expansão no digital.
            </span>
          </h1>

          {/* Subtitle Comercial */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-pretty">
            A FCG é a holding estratégica focada no empresário consolidado que quer ampliar suas vendas, modernizar processos e construir canais digitais lucrativos sem perder tempo com agências amadoras.
          </p>

          {/* CTAs Comerciais */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20sou%20empres%C3%A1rio%20e%20quero%20conversar%20sobre%20a%20expans%C3%A3o%20digital%20da%20minha%20empresa%20com%20a%20holding%20FCG."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition-all hover:scale-[1.01] shadow-md"
            >
              <PhoneCall size={16} />
              <span>Falar Diretamente com a Diretoria</span>
            </a>

            <Link
              href="/servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-slate-950 transition-all shadow-xs"
            >
              <span>Ver Serviços e Soluções</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Selos de Credibilidade Rápidos */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-600 font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Foco em negócios consolidados</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Software próprio e esteiras com IA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600" />
              <span>Retorno sobre investimento (ROI)</span>
            </div>
          </div>
        </div>

        {/* 3 Pilares Comerciais da Parceria FCG */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 shadow-[0_12px_40px_rgb(0,0,0,0.04)] backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div className="space-y-2 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600 tracking-wider">
                  01. OPERAÇÃO VALIDADA
                </span>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Para Quem Já Venceu no Físico
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Não investimos em ideias no papel. Trabalhamos com quem já tem clientes, estoque, equipe e caixa, e quer transformar essa solidez em dominância digital.
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 tracking-wider">
                  02. INFRAESTRUTURA COMPLETA
                </span>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Tecnologia e Vendas Integradas
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conectamos seu ERP aos maiores canais de venda com a Linxar, criamos automações inteligentes de WhatsApp e geramos demanda qualificada com tráfego pago.
                </p>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 tracking-wider">
                  03. ESCALA COM LUCRO
                </span>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Margem Protegida e Governança
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cálculo automático de impostos interestaduais (DIFAL), zero retrabalho de cadastro e uma presença institucional forte que atrai os melhores clientes.
                </p>
              </div>

            </div>

            {/* Chancelas Institucionais */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-slate-800" />
                <span className="font-semibold text-slate-700">Incubação Tecnológica:</span>
                <span>UTFPR Sprint</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-slate-800" />
                <span className="font-semibold text-slate-700">Parceiro Cloud:</span>
                <span>Google for Startups</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-slate-800" />
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
