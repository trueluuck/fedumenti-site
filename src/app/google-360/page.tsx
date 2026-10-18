import type { Metadata } from 'next';
import CurvedCarousel, { TourItem } from '@/components/google360/CurvedCarousel';
import { CheckCircle2, ArrowRight, Camera, PhoneCall, ShieldCheck, MapPin } from 'lucide-react';

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
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl space-y-16">
        
        {/* Header Hero Google 360 */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1">
            <Camera size={14} className="text-blue-700" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-800 font-bold">
              Serviço Comercial FCG · Presença Oficial no Google Maps
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Tour Virtual Google 360° para Empresas
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Captação fotográfica profissional esférica em HDR e publicação direta na ficha da sua empresa no Google Maps e Street View. Aumente o engajamento local, a autoridade imediata e a visibilidade nas buscas.
          </p>

          {/* Card de Preço Fixo Limpo (Linxar Style) */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold block">Valor Único Sem Mensalidade</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-3xl font-extrabold text-slate-950">R$ 499,00</span>
                <span className="text-xs text-slate-500 font-medium">taxa única</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-semibold block mt-1">✓ Sem custos anuais ou de renovação</span>
            </div>

            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-md hover:scale-[1.01]"
            >
              <PhoneCall size={14} />
              <span>Agendar Tour pelo WhatsApp</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Exemplos Interativos Reais com Padrão Facade Otimizado */}
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-950 tracking-tight">
              Demonstrações em Estabelecimentos Reais
            </h2>
            <p className="text-sm text-slate-500 font-normal">
              Navegue pelos tours interativos clicando e arrastando nos modelos abaixo:
            </p>
          </div>

          <CurvedCarousel items={TOURS} autoplayMs={9000} />
        </div>

        {/* O que está incluso (Painel Soft Linxar) */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200/90 bg-white shadow-xs space-y-6 max-w-3xl">
          <h3 className="text-lg font-bold text-slate-950">
            Escopo incluso no pacote de R$ 499:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Sessão fotográfica esférica HDR profissional</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Tratamento e costura 360° em alta resolução</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Publicação direta na ficha oficial no Google Maps</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Sem custos de renovação anual ou hospedagem</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Ativação em até 72 horas após a sessão
            </span>

            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              <span>Falar com o fotógrafo credenciado</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
