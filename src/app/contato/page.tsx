import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato | FCG — Fedumenti Group',
  description:
    'Entre em contato com a equipe FCG — Fedumenti Group pelo WhatsApp oficial ou e-mail corporativo.',
};

export default function ContatoPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
            Canais de Atendimento
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
            Fale com a FCG
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Estamos à disposição para tratar sobre a Linxar, serviços de Google 360° ou parcerias institucionais.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <div className="card p-8 border-green-200 bg-green-50/20 space-y-4 text-center sm:text-left flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mx-auto sm:mx-0">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900">
                WhatsApp Oficial
              </h3>
              <p className="text-xs text-slate-600">
                Atendimento rápido para clientes, agendamento de Google 360° ou dúvidas gerais.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/5542999217736"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-green text-sm flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                (42) 9 9921-7736
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="card p-8 border-slate-200 space-y-4 text-center sm:text-left flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mx-auto sm:mx-0">
                <Mail size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900">
                E-mail Corporativo
              </h3>
              <p className="text-xs text-slate-600">
                Para propostas institucionais, fornecedores, imprensa e ecossistema de startups.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="mailto:contato@fedumentigroup.com.br"
                className="w-full btn-outline text-sm flex items-center justify-center gap-2"
              >
                contato@fedumentigroup.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Localização e Sede */}
        <div className="card p-6 sm:p-8 flex items-start gap-4 bg-slate-50 border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <MapPin size={20} />
          </div>
          <div className="space-y-1 text-sm">
            <h4 className="font-bold text-slate-900">Sede Operacional</h4>
            <p className="text-slate-600">
              Guarapuava, Paraná — Brasil
            </p>
            <p className="text-xs text-slate-400 font-mono pt-1">
              CNPJ: 26.306.303/0001-20 · FCG Fedumenti Group
            </p>
          </div>
        </div>

        {/* Linxar Direct Link */}
        <div className="text-center pt-4">
          <p className="text-xs text-slate-500">
            Procura especificamente pela plataforma de catálogo?{' '}
            <a
              href="https://linxar.com.br/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              Acesse linxar.com.br <ExternalLink size={12} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
