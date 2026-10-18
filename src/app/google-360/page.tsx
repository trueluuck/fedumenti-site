import type { Metadata } from 'next';
import CurvedCarousel, { TourItem } from '@/components/google360/CurvedCarousel';
import { CheckCircle2, ArrowRight, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google 360° — Presença Oficial no Google Maps | FCG',
  description:
    'Tour virtual em alta definição publicado diretamente no Google Maps e Street View da sua empresa por R$ 499,00 valor único.',
};

const TOURS: TourItem[] = [
  {
    id: 'agrobar',
    title: 'Agrobar Guarapuava',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761581967198!6m8!1m7!1sCAoSHENJQUJJaEQ4aUx3U0JPc0FUcUExMHlvd2Rmelo.!2m2!1d-25.37654767480765!2d-51.47763666091304!3f190.5240313479078!4f-12.521884911617562!5f0.7820865974627469',
  },
  {
    id: 'trend',
    title: 'Academia Usina Trend',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761582219077!6m8!1m7!1sCAoSHENJQUJJaEJPdTV5bXMzaGw3TW1PM25fZUVnX0w.!2m2!1d-25.39357088859568!2d-51.4671792097232!3f62.6469!4f0!5f0.7820865974627469',
  },
  {
    id: 'rattes',
    title: 'Rattes • Advogados',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761582240728!6m8!1m7!1sCAoSHENJQUJJaENvYXRtQ2c1WVdkV19fQ1RkcnlzWjc.!2m2!1d-25.39082233073904!2d-51.47381699207282!3f309.495!4f0!5f0.7820865974627469',
  },
  {
    id: 'proj-q',
    title: 'Restaurante Garden',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608918996!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0R4X0NpUWc.!2m2!1d-25.38643921454803!2d-51.45921601958564!3f159.4905268349577!4f-8.195398816482324!5f0.7820865974627469',
  },
  {
    id: 'proj-r',
    title: 'Clínica Life Care',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608934417!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHAzS1BNTXc.!2m2!1d-25.39714905152094!2d-51.46253186152973!3f310.1402!4f0!5f0.7820865974627469',
  },
];

export default function Google360Page() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-slate-800">
      <div className="container-xl space-y-16">
        
        {/* Header Hero Google 360 */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1">
            <Camera size={14} className="text-cyan-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              Serviço FCG · Presença Oficial no Google Maps
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Tour Virtual Google 360° para Empresas
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Captação fotográfica profissional em HDR e integração direta no perfil da sua empresa no Google Maps e Street View. Aumente o engajamento local, a confiança e a visibilidade nas buscas.
          </p>

          {/* Preço Fixo Limpo */}
          <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="border-l-2 border-cyan-500 pl-4 py-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Valor Único</span>
              <span className="text-3xl font-black text-white">R$ 499,00</span>
              <span className="text-xs text-slate-400 block">Sem mensalidades ou anuidades</span>
            </div>

            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
            >
              <span>Agendar tour no WhatsApp</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Exemplos Interativos Reais com Padrão Facade Otimizado */}
        <div className="space-y-6 pt-4 border-t border-slate-800">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Demonstrações em Estabelecimentos Reais
            </h2>
            <p className="text-sm text-slate-400 font-normal">
              Navegue pelos tours interativos clicando e arrastando nos modelos abaixo:
            </p>
          </div>

          <CurvedCarousel items={TOURS} autoplayMs={9000} />
        </div>

        {/* O que está incluso */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl space-y-6 max-w-3xl shadow-xl">
          <h3 className="text-lg font-bold text-white">
            Escopo incluso no pacote:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>Sessão fotográfica esférica HDR profissional</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>Tratamento e costura 360° em alta resolução</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>Publicação direta na ficha oficial no Google Maps</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>Sem custos de renovação anual ou hospedagem</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-md"
            >
              <span>Falar com o fotógrafo no WhatsApp</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
