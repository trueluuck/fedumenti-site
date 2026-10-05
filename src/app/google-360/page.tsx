import type { Metadata } from 'next';
import CurvedCarousel, { TourItem } from '@/components/google360/CurvedCarousel';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <div className="container-xl space-y-16">
        
        {/* Header Hero Google 360 */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 font-semibold">
            Serviço FCG · Presença Oficial no Google Maps
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
            Tour Virtual Google 360° para Empresas
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Captação fotográfica profissional em HDR e integração direta no perfil da sua empresa no Google Maps e Street View. Aumente o engajamento local, a confiança e a visibilidade nas buscas.
          </p>

          {/* Preço Fixo Limpo */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="border-l-2 border-slate-900 pl-4 py-1">
              <span className="text-xs font-mono text-slate-500 uppercase block">Valor Único</span>
              <span className="text-2xl font-bold text-slate-950">R$ 499,00</span>
              <span className="text-xs text-slate-500 block">Sem mensalidades</span>
            </div>

            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar tour no WhatsApp
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Exemplos Interativos Reais */}
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
              Demonstrações em Estabelecimentos Reais
            </h2>
            <p className="text-sm text-slate-600">
              Navegue pelos tours interativos clicando e arrastando nos modelos abaixo:
            </p>
          </div>

          <CurvedCarousel items={TOURS} autoplayMs={9000} />
        </div>

        {/* O que está incluso */}
        <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 space-y-6 max-w-3xl">
          <h3 className="text-lg font-bold text-slate-950">
            Escopo incluso no pacote:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-slate-900 shrink-0 mt-0.5" />
              <span>Sessão fotográfica esférica HDR profissional</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-slate-900 shrink-0 mt-0.5" />
              <span>Tratamento e costura 360° em alta resolução</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-slate-900 shrink-0 mt-0.5" />
              <span>Publicação direta na ficha oficial no Google Maps</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-slate-900 shrink-0 mt-0.5" />
              <span>Sem custos de renovação anual ou hospedagem</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs uppercase tracking-wider"
            >
              Falar com o fotógrafo no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
