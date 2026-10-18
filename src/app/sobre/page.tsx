import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Award, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a FCG — Fedumenti Group | Holding de Inovação',
  description:
    'Conheça a história e estrutura da FCG — Fedumenti Group, holding proprietária da Linxar e aceleradora de soluções de software.',
};

export default function SobrePage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-slate-800">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 font-semibold">
              Institucional · Sobre a Holding
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Fedumenti Group (FCG)
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
            Holding de tecnologia sediada em Guarapuava/PR dedicada a desenvolver, apoiar e expandir produtos proprietários de software, inteligência de dados e infraestrutura digital para operações comerciais consolidadas.
          </p>
        </div>

        {/* Linxar - O Core */}
        <div className="p-8 sm:p-10 rounded-3xl border border-blue-900/40 bg-gradient-to-b from-blue-950/20 to-slate-900/60 backdrop-blur-xl space-y-6 shadow-2xl">
          <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
            <span className="text-blue-400 font-bold uppercase tracking-widest">Divisão de Software</span>
            <span className="text-slate-300">Commerce Intelligence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Linxar: O principal ativo de software da holding.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Percebendo as dores severas de digitação manual, cadastros mal formulados e atrito na publicação de catálogos entre indústrias, distribuidores e marketplaces, a FCG concentrou seus recursos de engenharia na construção da plataforma <strong>LINXAR</strong>.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A Linxar é hoje uma startup incubada com IA proprietária que conecta produtos em múltiplos canais de venda (Mercado Livre, Shopee, Amazon, Magalu, VTEX e outros), simplificando a operação de grandes empresas com enriquecimento de dados, padronização visual e inteligência fiscal.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
            >
              <span>Acessar site oficial da Linxar</span>
              <ExternalLink size={14} />
            </a>

            <Link
              href="/linxar"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              <span>Ver as 4 Verticais</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Pilares e Ecossistema */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-4">
            Ecossistema e Reconhecimento
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-3">
              <Award className="w-5 h-5 text-cyan-400" />
              <h3 className="font-bold text-white text-base">Google for Startups</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Parceria no programa global de apoio a startups de tecnologia de alto impacto.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-3">
              <Building2 className="w-5 h-5 text-indigo-400" />
              <h3 className="font-bold text-white text-base">Sebrae Startups</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integração e participação ativa no ecossistema paranaense de inovação e aceleração.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-3">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-white text-base">Sprint UTFPR</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Incubação acadêmica e tecnológica junto à Universidade Tecnológica Federal do Paraná.
              </p>
            </div>
          </div>
        </div>

        {/* Informações Institucionais */}
        <div className="border-t border-slate-800 pt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Dados Corporativos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">Razão Social</span>
              <strong className="text-slate-200 font-medium">Fedumenti Group Tecnologia Ltda</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">CNPJ</span>
              <strong className="text-slate-200 font-mono font-medium">26.306.303/0001-20</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">Sede</span>
              <strong className="text-slate-200 font-medium">Guarapuava, Paraná — Brasil</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="block text-xs uppercase font-mono text-slate-500 mb-1">Contato</span>
              <strong className="text-slate-200 font-medium">contato@fedumentigroup.com.br</strong>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
          >
            <span>Falar com a nossa equipe</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
