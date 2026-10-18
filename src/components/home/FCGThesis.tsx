import { Building2, Award, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function FCGThesis() {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="container-xl space-y-20">
        
        {/* Strip de Chancelamento Institucional / Prova Social */}
        <div className="space-y-4">
          <p className="text-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-slate-400 font-semibold">
            Ecossistema de Validação & Parcerias Estratégicas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 flex items-center justify-center gap-2.5 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
              <ShieldCheck size={18} className="text-blue-500 shrink-0" />
              <div className="text-left leading-tight">
                <span className="font-bold text-xs block text-slate-200">UTFPR SPRINT</span>
                <span className="text-[10px] text-slate-400 font-mono">Incubação Tecnológica</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 flex items-center justify-center gap-2.5 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
              <Award size={18} className="text-cyan-500 shrink-0" />
              <div className="text-left leading-tight">
                <span className="font-bold text-xs block text-slate-200">Google Startups</span>
                <span className="text-[10px] text-slate-400 font-mono">Cloud Partner</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 flex items-center justify-center gap-2.5 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
              <Building2 size={18} className="text-indigo-400 shrink-0" />
              <div className="text-left leading-tight">
                <span className="font-bold text-xs block text-slate-200">Sebrae Startups</span>
                <span className="text-[10px] text-slate-400 font-mono">Validação Regional</span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 flex items-center justify-center gap-2.5 text-slate-400 hover:text-white hover:border-slate-700 transition-colors">
              <span className="font-mono text-xs font-bold text-slate-200">26.306.303</span>
              <div className="text-left leading-tight">
                <span className="font-bold text-xs block text-slate-200">CNPJ Oficial</span>
                <span className="text-[10px] text-slate-400 font-mono">Sede Guarapuava/PR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Arquitetura Dor vs Solução */}
        <div className="space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 font-mono block">
              Tese de Atuação FCG
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Desenvolvido para operações com tração real.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              O mercado tradicional já validou seu modelo com faturamento sólido e clientes recorrentes. O próximo salto não depende de agências convencionais, mas de <strong>arquitetura proprietária de software</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 01: A Dor do Mercado */}
            <div className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-rose-950/60 bg-gradient-to-b from-rose-950/10 to-slate-950/80 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-rose-900/50 transition-colors">
              <span className="absolute top-6 right-8 font-mono text-5xl sm:text-6xl font-black text-rose-500/10 select-none">
                01
              </span>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <AlertTriangle size={15} />
                  <span>A Fricção Operacional</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Digitação manual trava o crescimento e drena margens.
                </h3>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Indústrias, atacadistas e grandes sellers perdem dias limpando planilhas, formatando fotos e cadastrando produtos individualmente para cada canal de venda. O processo lento gera erros fiscais de NCM, estoque desincronizado e multas em marketplaces.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-rose-950/60 space-y-2 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span>Retrabalho braçal diário de equipes de cadastro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  <span>Inconsistência tributária em vendas interestaduais</span>
                </div>
              </div>
            </div>

            {/* Card 02: A Solução da FCG */}
            <div className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-blue-900/50 bg-gradient-to-b from-blue-950/20 to-slate-950/80 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-blue-700/60 transition-colors">
              <span className="absolute top-6 right-8 font-mono text-5xl sm:text-6xl font-black text-blue-500/10 select-none">
                02
              </span>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <CheckCircle2 size={15} />
                  <span>A Engenharia FCG</span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Infraestrutura de dados autônoma com "Zero Digitação".
                </h3>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  Não vendemos consultorias vazias. Desenvolvemos o ecossistema <strong>Linxar</strong> para transformar o fluxo de dados comerciais: ingestão direta via ERP, enriquecimento instantâneo de SKUs com IA, tratamento visual de fotos e publicação simultânea com cálculo automático de DIFAL.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-blue-900/50 space-y-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Redução do tempo de lançamento de dias para frações de segundo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Arquitetura de dados homologada para escala corporativa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
