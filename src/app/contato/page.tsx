import type { Metadata } from 'next';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato | FCG — Fedumenti Group',
  description:
    'Canais oficiais de atendimento da FCG — Fedumenti Group: WhatsApp institucional e e-mail corporativo.',
};

export default function ContatoPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-3xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Institucional · Atendimento
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Contato Institucional
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Estamos à disposição para tratar sobre parcerias corporativas, serviços do Google 360° ou integração com as soluções da Linxar.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-slate-500 block">Atendimento Rápido</span>
              <h3 className="font-bold text-lg text-slate-950">WhatsApp Oficial</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Para agendamento de Google 360°, contato comercial com a holding ou dúvidas gerais.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5542999217736"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-xs uppercase tracking-wider text-center block"
              >
                (42) 9 9921-7736
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-xl border border-slate-200 bg-white space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase text-slate-500 block">Correspondência Corporativa</span>
              <h3 className="font-bold text-lg text-slate-950">E-mail Institucional</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Para assuntos institucionais, relações com parceiros, imprensa e contratos.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="mailto:contato@fedumentigroup.com.br"
                className="btn-outline w-full text-xs uppercase tracking-wider text-center block"
              >
                contato@fedumentigroup.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Sede */}
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-700">
          <span className="text-xs uppercase font-mono text-slate-500 font-semibold block">Sede Operacional</span>
          <p className="font-medium text-slate-950">Fedumenti Group Tecnologia Ltda</p>
          <p className="text-slate-600">Guarapuava, Paraná — Brasil</p>
          <p className="text-xs text-slate-500 font-mono pt-1">CNPJ: 26.306.303/0001-20</p>
        </div>

      </div>
    </div>
  );
}
