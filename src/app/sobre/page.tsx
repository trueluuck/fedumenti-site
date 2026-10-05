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
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Institucional · Sobre a Holding
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Fedumenti Group (FCG)
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Holding de tecnologia sediada em Guarapuava/PR dedicada a desenvolver, apoiar e expandir produtos de software, inteligência de dados e infraestrutura digital para operações comerciais consolidadas.
          </p>
        </div>

        {/* Linxar - O Core */}
        <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-500">
            <span>Divisão de Software</span>
            <span className="font-semibold text-slate-700">Commerce Intelligence</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-950">
            Linxar: O principal ativo de software do grupo.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Percebendo as dores severas de digitação manual, cadastros mal formulados e atrito na publicação de catálogos entre indústrias, distribuidores e marketplaces, a FCG concentrou seus recursos de engenharia na construção da plataforma <strong>LINXAR</strong>.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A Linxar é hoje uma startup incubada com IA proprietária que conecta produtos em múltiplos canais de venda (Mercado Livre, Shopee, Amazon, Magalu, VTEX e outros), simplificando a operação de grandes empresas com enriquecimento de dados, padronização visual e inteligência fiscal.
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider inline-flex items-center gap-2"
            >
              Acessar site oficial da Linxar
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Pilares e Ecossistema */}
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight border-b border-slate-200 pb-4">
            Ecossistema e Reconhecimento
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
              <Award className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-slate-950 text-base">Google for Startups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parceria no programa global de apoio a startups de tecnologia de alto impacto.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
              <Building2 className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-slate-950 text-base">Sebrae Startups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integração e participação ativa no ecossistema paranaense de inovação e aceleração.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-3">
              <ShieldCheck className="w-5 h-5 text-slate-900" />
              <h3 className="font-bold text-slate-950 text-base">Sprint UTFPR</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Incubação acadêmica e tecnológica junto à Universidade Tecnológica Federal do Paraná.
              </p>
            </div>
          </div>
        </div>

        {/* Informações Institucionais */}
        <div className="border-t border-slate-200 pt-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
            Dados Corporativos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">Razão Social</span>
              <strong className="text-slate-900 font-medium">Fedumenti Group Tecnologia Ltda</strong>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">CNPJ</span>
              <strong className="text-slate-900 font-mono font-medium">26.306.303/0001-20</strong>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">Sede</span>
              <strong className="text-slate-900 font-medium">Guarapuava, Paraná — Brasil</strong>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">Contato</span>
              <strong className="text-slate-900 font-medium">contato@fedumentigroup.com.br</strong>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link href="/contato" className="btn-primary">
            Falar com a nossa equipe
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </div>
  );
}
