import { Building2, Award, ShieldCheck, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export default function FCGThesis() {
  return (
    <section id="tese" className="py-20 sm:py-28 bg-slate-50 text-slate-900 border-y border-slate-200/80">
      <div className="container-xl space-y-16">
        
        {/* Header da Seção */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-700">
              Tese FCG de Expansão
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Para quem é a FCG: o empreendedor com operação validada e faturamento real.
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Não apostamos em suposições ou pitches sem tração. Nosso modelo foi desenhado para negócios que já provaram seu valor no mercado físico ou B2B e precisam de infraestrutura técnica de alto nível para expandir e dominar o mercado digital.
          </p>
        </div>

        {/* Comparativo Executivo: Modelo Convencional vs Parceria FCG */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 01: O Cenário Comum de Frustração */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200/60 px-3 py-1 rounded-full">
                  <XCircle size={14} />
                  Onde as Empresas Travam
                </span>
                <span className="text-xs font-mono text-slate-400">Gargalo Tradicional</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                Agências amadoras e processos manuais que sangram margens
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Empresas consolidadas tentam ir para o digital contratando agências de marketing que não compreendem a complexidade de um ERP, cálculo tributário de DIFAL para 27 UFs ou margem de contribuição. O resultado são planilhas infinitas, retrabalho e estoque desincronizado.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Digitação braçal diária e erro humano no cadastro de produtos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Dependência insustentável de anúncios pagos sem infraestrutura</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Falta de software próprio gerando dependência e baixa retenção</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
              Resultado: Custo operacional elevado e estagnação digital.
            </div>
          </div>

          {/* Card 02: A Parceria Estrutural FCG */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-900 bg-slate-950 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                  <CheckCircle2 size={14} />
                  A Abordagem FCG
                </span>
                <span className="text-xs font-mono text-slate-400">Holding & Engenharia</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Tecnologia proprietária, orquestração e escala com governança
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                A FCG atua diretamente com a liderança da empresa. Desenvolvemos e integramos a infraestrutura de software e dados do seu negócio: esteiras de catálogo com inteligência artificial, sincronização fiscal em tempo real e automação multicanal.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Conexão nativa e esteiras "Zero Digitação" direto do estoque</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Blindagem tributária e cálculo fiscal automático em todas as vendas</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Construção de equity e valor patrimonial com tecnologia própria</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs font-medium text-slate-400">
              Resultado: Escala com previsibilidade, margem protegida e governança.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
