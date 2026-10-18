import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cpu, Database, Activity, Terminal } from 'lucide-react';

export default function FCGHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none"
      />

      <div className="container-xl relative z-10 space-y-16">
        
        {/* Top Text Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-blue-400 font-mono">
              Fedumenti Group · Holding de Tecnologia & Inovação
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] text-balance">
            Tecnologia proprietária e escala para{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              empresas consolidadas.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-normal text-pretty">
            A FCG é a holding de tecnologia que desenvolve e opera ativos de alta relevância mercadológica. Criamos infraestrutura própria de software, dados e inteligência para impulsionar operações comerciais com tração real.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/linxar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 hover:bg-slate-200 transition-all hover:scale-[1.02] shadow-xl"
            >
              <span>Conhecer Ativo Linxar</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href="https://wa.me/5542999217736"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-slate-200 hover:border-slate-500 hover:text-white transition-all"
            >
              <span>Contato com a Diretoria</span>
            </a>
          </div>
        </div>

        {/* macOS Window Mockup: Painel de Orquestração B2B */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/30 overflow-hidden">
            
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/60 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1 text-[11px] font-mono text-slate-400 border border-slate-800">
                <Terminal size={12} className="text-blue-400" />
                <span>fcgroup.com.br/intelligence-hub</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>LIVE ENGINE</span>
              </div>
            </div>

            {/* Window Body: Dashboard de Arquitetura B2B */}
            <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-slate-900/40 to-slate-950/80 font-sans">
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/50 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Ativo Principal</span>
                  <div className="text-lg sm:text-xl font-bold text-white">Linxar HUB</div>
                  <span className="text-[11px] text-emerald-400 font-medium">Commerce AI</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/50 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Canais Conectados</span>
                  <div className="text-lg sm:text-xl font-bold text-white">12+ Marketplaces</div>
                  <span className="text-[11px] text-blue-400 font-medium">Zero Digitação</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/50 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Motor Fiscal</span>
                  <div className="text-lg sm:text-xl font-bold text-white">DIFAL 27 UFs</div>
                  <span className="text-[11px] text-indigo-400 font-medium">Compliance Ativo</span>
                </div>

                <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-950/50 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Validação Científica</span>
                  <div className="text-lg sm:text-xl font-bold text-white">UTFPR Sprint</div>
                  <span className="text-[11px] text-cyan-400 font-medium">Incubação Oficial</span>
                </div>
              </div>

              {/* Data Orchestration Pipeline Preview */}
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/70 p-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800/60 pb-3">
                  <span className="flex items-center gap-2 text-slate-200 font-semibold">
                    <Activity size={14} className="text-blue-400" />
                    Fluxo de Orquestração Tecnológica FCG
                  </span>
                  <span>Pipeline v2.4</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 space-y-1.5">
                    <span className="font-mono text-[10px] text-blue-400 font-bold block">01. INGESTÃO & ERP</span>
                    <p className="text-slate-300 font-medium">Conexão nativa com sistemas ERP de indústrias e grandes sellers.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 space-y-1.5">
                    <span className="font-mono text-[10px] text-cyan-400 font-bold block">02. ENRIQUECIMENTO IA</span>
                    <p className="text-slate-300 font-medium">Padronização de fotos (#FFFFFF) e catalogação sem intervenção manual.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 space-y-1.5">
                    <span className="font-mono text-[10px] text-emerald-400 font-bold block">03. ESCALA OMNICANAL</span>
                    <p className="text-slate-300 font-medium">Distribuição e precificação dinâmica em alta velocidade e escala.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
