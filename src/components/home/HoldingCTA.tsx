import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HoldingCTA() {
  return (
    <section className="py-20 bg-white border-t border-slate-100 text-center">
      <div className="container-xl max-w-4xl mx-auto space-y-6">
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
          Pronto para acelerar seu comércio?
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Conecte sua empresa à tecnologia da Linxar ou agende um tour virtual Google 360° com a equipe FCG.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://linxar.com.br/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-primary-lg"
          >
            Acessar Linxar Hub
            <ArrowRight size={18} />
          </a>

          <a
            href="https://wa.me/5542999217736"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-outline-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} className="text-green-600" />
            Falar com a FCG no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
