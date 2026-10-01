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
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
            Sobre a Empresa
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight">
            FCG — Fedumenti Group
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Holding de tecnologia dedicada a desenvolver, apoiar e expandir produtos de software e dados para o comércio brasileiro.
          </p>
        </div>

        {/* Linxar - O Core */}
        <div className="card p-8 sm:p-10 border-blue-200 bg-blue-50/20 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs font-black uppercase font-mono tracking-widest text-blue-600">
              Marca Principal do Grupo
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
              Commerce Intelligence
            </span>
          </div>

          <h2 className="font-heading font-black text-3xl text-slate-900">
            A Linxar é a nossa grande aposta para o futuro do e-commerce.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Percebendo as dores severas de digitação manual, cadastros mal formulados e atrito na publicação de catálogos entre indústrias, distribuidores e marketplaces, a FCG concentrou seus recursos de engenharia na construção da plataforma <strong>LINXAR</strong>.
          </p>

          <p className="text-slate-600 text-base leading-relaxed">
            A Linxar é hoje uma startup incubada com IA proprietária que conecta produtos em múltiplos canais de venda (Mercado Livre, Shopee, Amazon, Magalu, VTEX e outros), simplificando a operação de grandes empresas com enriquecimento de dados, padronização visual e inteligência fiscal.
          </p>

          <div className="pt-2">
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex items-center gap-2"
            >
              Conhecer a Linxar Hub no site oficial
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Pilares e Ecossistema */}
        <div className="space-y-8">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
            Ecossistema e Reconhecimento
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card p-6 space-y-3">
              <Award className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-base">Google for Startups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parceria no programa global de apoio a startups de tecnologia de alto impacto.
              </p>
            </div>

            <div className="card p-6 space-y-3">
              <Building2 className="w-6 h-6 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base">Sebrae Startups</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integração e participação ativa no ecossistema paranaense de inovação e aceleração.
              </p>
            </div>

            <div className="card p-6 space-y-3">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-base">Sprint UTFPR</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Incubação acadêmica e tecnológica junto à Universidade Tecnológica Federal do Paraná.
              </p>
            </div>
          </div>
        </div>

        {/* Informações Institucionais */}
        <div className="border-t border-slate-200 pt-10 space-y-6">
          <h2 className="font-heading font-black text-2xl text-slate-900">
            Dados Corporativos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">Razão Social</span>
              <strong className="text-slate-900">Fedumenti Group Tecnologia Ltda</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">CNPJ</span>
              <strong className="text-slate-900 font-mono">26.306.303/0001-20</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">Sede</span>
              <strong className="text-slate-900">Guarapuava, Paraná — Brasil</strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="block text-xs uppercase font-mono text-slate-400 mb-1">Contato</span>
              <strong className="text-slate-900">contato@fedumentigroup.com.br</strong>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link href="/contato" className="btn-primary text-sm">
            Falar com a nossa equipe
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
