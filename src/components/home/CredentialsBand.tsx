import { ShieldCheck, Award, Building2 } from 'lucide-react';

export default function CredentialsBand() {
  return (
    <section className="py-8 bg-slate-50 border-b border-slate-100">
      <div className="container-xl">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-slate-500">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Partner <strong>Google for Startups</strong>
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-slate-300" />

          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Ecossistema <strong>Sebrae Startups</strong>
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-slate-300" />

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Incubadora <strong>Sprint UTFPR</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
