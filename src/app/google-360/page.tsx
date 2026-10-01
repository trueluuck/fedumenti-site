import type { Metadata } from 'next';
import CurvedCarousel, { TourItem } from '@/components/google360/CurvedCarousel';
import { Camera, CheckCircle2, MapPin, Eye, Search, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Google 360° — Tour Virtual por R$ 499 | FCG',
  description:
    'Leve seus clientes para dentro da sua empresa no Google Maps com tour virtual em alta definição. Valor único de R$ 499,00 pela FCG.',
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Camera size={14} className="text-emerald-600" />
              Serviço FCG · Presença Oficial no Google Maps
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-slate-900 tracking-tight leading-tight">
              Tour Virtual <span className="text-blue-600">Google 360°</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Abra as portas do seu estabelecimento 24 horas por dia para quem pesquisa na sua região. Mais visitas, maior credibilidade e autoridade no Google.
            </p>

            {/* Price Badge */}
            <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-2">
              <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500">
                Valor Único e Transparente
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-lg font-bold text-slate-600">R$</span>
                <span className="text-5xl font-black font-heading tracking-tight text-slate-900">499</span>
                <span className="text-sm font-semibold text-slate-500">,00</span>
              </div>
              <span className="text-xs text-slate-500 mt-1">
                Sem mensalidades · Sessão completa com publicação oficial
              </span>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20quero%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green text-base px-8 py-4 shadow-sm hover:shadow"
              >
                Contratar Tour no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos Interativos */}
      <section className="py-16 bg-slate-50/60 border-b border-slate-200/80">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-slate-900">
              Navegue em Trabalhos Reais
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Arraste para girar a visualização e use as setas para trocar de estabelecimento.
            </p>
          </div>

          <CurvedCarousel items={TOURS} autoplayMs={9000} />
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900">
                Experiência Imersiva
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                O cliente conhece a infraestrutura, higiene e conforto da sua empresa antes de sair de casa, aumentando a decisão de compra imediata.
              </p>
            </div>

            <div className="card p-8 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Search size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900">
                SEO Local Superior
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fichas do Perfil da Empresa no Google com fotos em 360 graus geram o dobro de interesse e sobem no ranking de buscas locais da cidade.
              </p>
            </div>

            <div className="card p-8 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-heading font-black text-xl text-slate-900">
                Ativo Permanente
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Você paga apenas R$ 499 uma única vez e o tour permanece ativo na conta oficial do seu negócio sem nenhum custo extra.
              </p>
            </div>
          </div>

          {/* O que está incluso */}
          <div className="mt-16 max-w-2xl mx-auto rounded-2xl border border-slate-200 p-8 bg-slate-50/50">
            <h4 className="font-heading font-bold text-lg text-slate-900 mb-4 text-center">
              O que está incluso no pacote de R$ 499,00:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Captação fotográfica profissional HDR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Tratamento e costura 360° esférica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Interligação dos pontos de navegação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Publicação direta no Google Maps</span>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20quero%20agendar%20um%20Tour%20Google%20360%20por%20R%24%20499"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green text-base px-10 py-4 shadow-sm"
            >
              Falar com o Especialista no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
