import Link from 'next/link';
import { ArrowRight, Layers, Camera, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FCGAssets() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white border-b border-slate-800 relative">
      <div className="container-xl space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 font-mono block">
            Portfólio de Ativos Proprietários
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Negócios e tecnologias desenvolvidas pela FCG.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Cada vertical opera de forma estruturada para solucionar gargalos críticos na jornada de dados comerciais e posicionamento digital:
          </p>
        </div>

        {/* 2 Main Assets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Linxar */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl flex flex-col justify-between space-y-8 hover:border-blue-500/40 transition-all duration-300 group shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                    <Layers size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block">
                      Commerce Intelligence
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Ecossistema Linxar
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
                  4 Verticais
                </span>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                A principal infraestrutura de automação e dados de e-commerce do país. Conecta indústrias e marcas consolidadas a mais de 12 marketplaces simultâneos com <strong>Zero Digitação</strong>, enriquecimento por IA e cálculo tributário automático de DIFAL para as 27 UFs.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Linxar Hub (Marketplaces)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Linxar Pref (Compras B2G)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Linxar Workplace (Dropship)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Linxar Middleware (API)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <Link
                href="/linxar"
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors"
              >
                <span>Explorar verticais da Linxar</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://linxar.com.br/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>linxar.com.br</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Card Google 360° */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl flex flex-col justify-between space-y-8 hover:border-cyan-500/40 transition-all duration-300 group shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-600/10 text-cyan-400 border border-cyan-500/20">
                    <Camera size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                      Presença Oficial Google Maps
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Google 360° HDR
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
                  R$ 499 Único
                </span>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Captação fotográfica esférica profissional em alta definição e publicação oficial no perfil da sua empresa no Google Maps e Street View. Aumenta a autoridade, a confiança e as buscas orgânicas locais sem nenhuma taxa de recorrência ou mensalidade.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>Sessão esférica HDR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>Publicação direta no Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>Sem mensalidades</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>Ativação em até 72h</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <Link
                href="/google-360"
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-cyan-400 transition-colors"
              >
                <span>Ver demonstrações reais em 360°</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Agendar no WhatsApp</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
