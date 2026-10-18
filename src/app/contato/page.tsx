import type { Metadata } from 'next';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato | FCG — Fedumenti Group',
  description:
    'Canais oficiais de atendimento da FCG — Fedumenti Group: WhatsApp institucional e e-mail corporativo.',
};

export default function ContatoPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-slate-800">
      <div className="container-xl max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400 font-semibold">
              Institucional · Atendimento Direto
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Contato Institucional
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Estamos à disposição para tratar sobre parcerias corporativas, serviços do Google 360° ou integração com as soluções da Linxar.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors shadow-xl">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 block">
                Atendimento Rápido
              </span>
              <h3 className="font-bold text-xl text-white">WhatsApp Oficial</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Para agendamento de Google 360°, contato comercial com a holding ou dúvidas gerais.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5542999217736"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
              >
                <span>(42) 9 9921-7736</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Correspondência Corporativa
              </span>
              <h3 className="font-bold text-xl text-white">E-mail Institucional</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Para assuntos institucionais, relações com parceiros, imprensa e contratos.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="mailto:contato@fedumentigroup.com.br"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-5 py-3 text-xs font-bold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                <Mail size={14} />
                <span>contato@fedumentigroup.com.br</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sede */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2 text-sm text-slate-400">
          <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block tracking-wider">
            Sede Operacional
          </span>
          <p className="font-medium text-slate-200">Fedumenti Group Tecnologia Ltda</p>
          <p className="text-slate-400">Guarapuava, Paraná — Brasil</p>
          <p className="text-xs text-slate-500 font-mono pt-1">CNPJ: 26.306.303/0001-20</p>
        </div>

      </div>
    </div>
  );
}
