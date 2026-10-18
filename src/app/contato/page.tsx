import type { Metadata } from 'next';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato | FCG — Fedumenti Group',
  description:
    'Canais oficiais de atendimento da FCG — Fedumenti Group: Diretoria executiva, parcerias corporativas e expansão digital.',
};

export default function ContatoPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-700 font-semibold">
              Institucional · Atendimento Executivo
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Contato com a Holding
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Estamos à disposição para avaliar parcerias de expansão digital com empresários consolidados, projetos corporativos e investimentos em tecnologia.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/70 space-y-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Atendimento Direto à Diretoria
              </span>
              <h2 className="font-bold text-xl text-slate-950">WhatsApp Executivo</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Canal ágil para falar diretamente com a diretoria da holding sobre expansão de operações ou serviços do portfólio.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20diretoria%20da%20holding%20FCG."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>(42) 9 9921-7736</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-8 rounded-3xl border border-slate-200 bg-slate-50/70 space-y-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-xs">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Correspondência Formal
              </span>
              <h2 className="font-bold text-xl text-slate-950">E-mail Corporativo</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Para propostas institucionais, parcerias societárias, contratos e relações com o ecossistema.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="mailto:contato@fedumentigroup.com.br"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
              >
                <Mail size={14} />
                <span>contato@fedumentigroup.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sede */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-600">
          <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block tracking-wider">
            Sede Operacional
          </span>
          <p className="font-semibold text-slate-900">Fedumenti Group Tecnologia Ltda</p>
          <p className="text-slate-600">Guarapuava, Paraná — Brasil</p>
          <p className="text-xs text-slate-500 font-mono pt-1">CNPJ: 26.306.303/0001-20</p>
        </div>

      </div>
    </div>
  );
}
