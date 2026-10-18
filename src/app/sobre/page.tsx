import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Award, ShieldCheck, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a FCG — Fedumenti Group | Holding de Inovação e Tecnologia',
  description:
    'Conheça a história, tese e estrutura da FCG — Fedumenti Group, holding focada no empreendedor consolidado que quer expandir no mercado digital.',
};

export default function SobrePage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-700 font-semibold">
              Institucional · Sobre a Holding
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Fedumenti Group (FCG)
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-normal">
            Holding de tecnologia dedicada a apoiar, estruturar e expandir empresas tradicionais e consolidadas no mercado digital através de engenharia proprietária, orquestração de dados e governança corporativa.
          </p>
        </div>

        {/* Tese FCG */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 space-y-6 shadow-xs">
          <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-500 border-b border-slate-200 pb-3">
            <span className="text-slate-900 font-bold uppercase tracking-widest">Nossa Tese de Investimento & Operação</span>
            <span className="text-slate-500">Scale-up B2B</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            O salto digital do empreendedor com chão de fábrica.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Acreditamos que o verdadeiro potencial de escala do Brasil reside nas empresas que já possuem faturamento sólido, estoque real, produtos validados e carteira de clientes fiéis, mas que enfrentam atritos operacionais ao tentar dominar o comércio digital e os canais de alta velocidade.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A FCG não entrega promessas rasas de marketing. Construímos e operamos infraestrutura tecnológica — conectores de ERPs, esteiras automatizadas de catalogação, IA de precificação dinâmica e conformidade tributária em tempo real.
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-slate-900 shrink-0" />
              <span>Foco em negócios com operação validada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-slate-900 shrink-0" />
              <span>Engenharia de software e inteligência de dados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-slate-900 shrink-0" />
              <span>Eliminação completa de digitação braçal</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-slate-900 shrink-0" />
              <span>Alinhamento societário e visão de longo prazo</span>
            </div>
          </div>
        </div>

        {/* Portfólio de Ativos e Engenharia */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight border-b border-slate-200 pb-4">
            Ativos Desenvolvidos no Ecossistema FCG
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-600">SaaS / Commerce AI</span>
              <h3 className="font-bold text-slate-950 text-lg">Ecossistema Linxar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plataforma proprietária de automação para indústrias e grandes sellers que conecta estoques a mais de 12 marketplaces simultâneos com zero digitação.
              </p>
              <div className="pt-2">
                <Link href="/linxar" className="text-xs font-bold text-slate-900 hover:text-blue-600 inline-flex items-center gap-1">
                  Saiba mais <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Presença & Autoridade</span>
              <h3 className="font-bold text-slate-950 text-lg">Google 360° HDR</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Captação fotográfica profissional imersiva para posicionar a sede e as instalações da sua empresa com destaque no Google Maps e Street View.
              </p>
              <div className="pt-2">
                <Link href="/google-360" className="text-xs font-bold text-slate-900 hover:text-emerald-700 inline-flex items-center gap-1">
                  Saiba mais <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pilares e Ecossistema */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-950 tracking-tight border-b border-slate-200 pb-4">
            Chancela Institucional & Parcerias
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <ShieldCheck className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-slate-950 text-base">Sprint UTFPR</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Incubação acadêmica e tecnológica junto à Universidade Tecnológica Federal do Paraná.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <Award className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-slate-950 text-base">Google for Startups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parceria no programa global de apoio a startups de tecnologia e computação em nuvem.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <Building2 className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-slate-950 text-base">Sebrae Startups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integração e participação ativa no ecossistema paranaense de inovação e aceleração.
              </p>
            </div>
          </div>
        </div>

        {/* Informações Corporativas */}
        <div className="border-t border-slate-200 pt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
            Dados Corporativos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">Razão Social</span>
              <strong className="text-slate-900 font-medium">Fedumenti Group Tecnologia Ltda</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">CNPJ</span>
              <strong className="text-slate-900 font-mono font-medium">26.306.303/0001-20</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">Sede</span>
              <strong className="text-slate-900 font-medium">Guarapuava, Paraná — Brasil</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">Contato</span>
              <strong className="text-slate-900 font-medium">contato@fedumentigroup.com.br</strong>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 flex items-center gap-4">
          <a
            href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20holding%20FCG."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            <span>Entrar em Contato</span>
            <ArrowRight size={15} />
          </a>

          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <span>Canal Institucional</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
