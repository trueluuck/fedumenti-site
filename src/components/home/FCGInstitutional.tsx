import { ArrowUpRight, Mail, Phone, Building2 } from 'lucide-react';

export default function FCGInstitutional() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container-xl">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-400 text-xs font-mono">
                <Building2 size={13} className="text-blue-400" />
                <span>Holding de Tecnologia & Inovação</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Pronto para estruturar a expansão digital da sua empresa?
              </h3>
              
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-normal">
                Converse diretamente com os fundadores e diretores de tecnologia da FCG. Analisamos sua infraestrutura atual, ERP e desafios operacionais para desenhar um plano de expansão com tecnologia proprietária.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20expans%C3%A3o%20digital%20com%20a%20holding%20FCG."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
              >
                <span>Falar com a Diretoria</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="mailto:contato@fedumentigroup.com.br"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3.5 text-xs font-bold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-slate-400" />
                <span>contato@fedumentigroup.com.br</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
