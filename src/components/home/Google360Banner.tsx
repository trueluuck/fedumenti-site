import Link from 'next/link';
import { Camera, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Google360Banner() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="container-xl">
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <Camera size={14} className="text-emerald-600" />
                Serviço Presencial Mantido FCG
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
                Google 360° para Empresas: Seu cliente dentro do seu espaço.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Tour virtual imersivo publicado diretamente na ficha da sua empresa no Google Maps e Street View. Aumente o engajamento, credibilidade e relevância local.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Fotografia HDR profissional</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Publicação oficial no Google Maps</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Sem mensalidades ou anuidade</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Selo oficial de agência de confiança</span>
                </div>
              </div>
            </div>

            {/* Right Card / CTA */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 text-white p-8 text-center space-y-6 shadow-xl">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    Preço Único Promocional
                  </span>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className="text-2xl font-bold text-slate-300">R$</span>
                    <span className="text-5xl sm:text-6xl font-black font-heading tracking-tight text-white">
                      499
                    </span>
                    <span className="text-slate-400 text-sm">,00</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Pagamento único · Sem cobrança recorrente
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20tour%20Google%20360%20por%20R%24%20499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-green font-bold text-sm uppercase tracking-wider py-4 block"
                  >
                    Contratar pelo WhatsApp
                  </a>

                  <Link
                    href="/google-360"
                    className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors py-2"
                  >
                    Ver detalhes e exemplos locais
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
