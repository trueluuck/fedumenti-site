export default function FCGInstitutional() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold block">
              Estrutura Institucional
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Fedumenti Group Tecnologia Ltda
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
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
              className="btn-primary text-center text-xs uppercase tracking-wider py-3"
            >
              Falar com a Diretoria
            </a>
            <a
              href="mailto:contato@fedumentigroup.com.br"
              className="btn-outline text-center text-xs uppercase tracking-wider py-3"
            >
              contato@fedumentigroup.com.br
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
