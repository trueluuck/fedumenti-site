import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function HoldingCTA() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
      <div className="container-xl max-w-4xl mx-auto space-y-6">
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
          Conecte-se à holding FCG
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Seja para integrar sua operação à tecnologia da Linxar, contratar o serviço Google 360° ou explorar parcerias institucionais e investimentos, nossa equipe está pronta para atender.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5542999217736"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-primary-lg flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Falar com a FCG no WhatsApp
          </a>

          <Link
            href="/sobre"
            className="w-full sm:w-auto btn-outline-lg flex items-center justify-center gap-2"
          >
            <span>Sobre a Fedumenti Group</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
