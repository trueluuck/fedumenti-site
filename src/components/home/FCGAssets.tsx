import Link from 'next/link';
import { ArrowRight, Layers, Camera, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FCGAssets() {
  return (
    <section id="ativos" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container-xl space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-700">
              Engenharia & Soluções em Operação
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Casos de engenharia e tecnologia desenvolvidos pela FCG.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Como holding operacional, não criamos apenas estratégias teóricas. Desenvolvemos soluções proprietárias de software e presença corporativa para resolver gargalos reais de vendas, dados e autoridade:
          </p>
        </div>

        {/* 2 Main Assets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Linxar */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between space-y-8 hover:border-slate-300 transition-all duration-300 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-white">
                    <Layers size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                      Caso de Engenharia FCG
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                      Ecossistema Linxar
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full font-medium">
                  SaaS de E-commerce
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Plataforma proprietária de automação e dados de e-commerce desenvolvida pela equipe da FCG. Conecta indústrias e marcas a múltiplos canais de venda com <strong>Zero Digitação</strong>, enriquecimento por IA e motor fiscal nativo. Um exemplo prático da nossa capacidade de engenharia de software aplicada ao comércio.
              </p>

              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                  <span>Linxar Hub (Marketplaces)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                  <span>Linxar Pref (Compras B2G)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                  <span>Linxar Workplace (Dropship)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                  <span>Motor Fiscal DIFAL 27 UFs</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/linxar"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-blue-600 transition-colors"
              >
                <span>Conhecer a tecnologia Linxar</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://linxar.com.br/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
              >
                <span>linxar.com.br</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Card Google 360° */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between space-y-8 hover:border-slate-300 transition-all duration-300 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-white">
                    <Camera size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                      Autoridade & Posicionamento
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                      Google 360° HDR
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full font-medium">
                  R$ 499 Taxa Única
                </span>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Captação fotográfica profissional imersiva em alta resolução para posicionar sua sede, fábrica, clínica ou loja física com destaque oficial no Google Maps e Street View. Ideal para transmitir solidez e credibilidade instantânea aos seus clientes e parceiros.
              </p>

              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Sessão esférica HDR profissional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Publicação oficial no Google Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Sem mensalidades ou anuidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                  <span>Ativação rápida em até 72h</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/google-360"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-emerald-700 transition-colors"
              >
                <span>Ver demonstrações em 360°</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
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
