import { ArrowUpRight, Mail } from 'lucide-react';

export default function FCGInstitutional() {
  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-3">
            <span className="text-[11px] uppercase font-mono tracking-[0.3em] text-blue-400 font-bold block">
              Estrutura Institucional & Governança
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Fedumenti Group Tecnologia Ltda
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl font-normal">
              CNPJ: 26.306.303/0001-20 · Sede em Guarapuava, Paraná — Brasil.
              <br />
              Integrada ao ecossistema acadêmico da Universidade Tecnológica Federal do Paraná (Sprint UTFPR), com apoio de programas do Sebrae e Google for Startups.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
            <a
              href="https://wa.me/5542999217736"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
            >
              <span>Falar com a Diretoria</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href="mailto:contato@fedumentigroup.com.br"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/40 px-5 py-3 text-xs font-bold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
            >
              <Mail size={14} className="text-slate-400" />
              <span>contato@fedumentigroup.com.br</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
