// src/app/lp/google-360/page.tsx
import type { Metadata } from 'next';
import CurvedCarousel, { TourItem } from '@/components/lp/google360/CurvedCarousel';
import { Target, Search, Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google 360° • Tours e Imersão Digital',
  description:
    'Exiba seu espaço com fotos e tours 360° no Google. Presença local, experiência imersiva e reforço de marca.',
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
    id: 'proj-p',
    title: 'Espaço Alpha • 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608863610!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0QzLURSZ2dF!2m2!1d-25.3935007618596!2d-51.44994769438757!3f4.2828!4f0!5f0.7820865974627469',
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
  {
    id: 'proj-s',
    title: 'Showroom Prime',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608964955!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHAzT25wR3c.!2m2!1d-25.40022006105083!2d-51.462616492816!3f245.17275043840314!4f-24.545697099653395!5f0.7820865974627469',
  },
];

export default function Google360Page() {
  return (
    <main className="relative min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center reveal">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Solução Exclusiva</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground lg:text-7xl mb-6">
            Google <span className="text-primary italic">360°</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sua empresa aberta 24h para o mundo. Experiências imersivas que convertem curiosidade em confiança.
          </p>
        </header>

        <CurvedCarousel items={TOURS} autoplayMs={8000} />

        <section className="mt-32 grid gap-8 md:grid-cols-3 reveal" style={{ animationDelay: '0.4s' }}>
          <article className="surface p-8 group transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tighter">Imersão Total</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Street View Profissional: imagens em alta definição que permitem ao cliente caminhar pelo seu estabelecimento antes mesmo de sair de casa.
            </p>
          </article>
          
          <article className="surface p-8 group transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tighter">SEO Local Master</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Ganhe destaque nos resultados de Busca e Mapas. Estabelecimentos com tours têm 2x mais probabilidade de gerar interesse local.
            </p>
          </article>
          
          <article className="surface p-8 group transition-all duration-500 hover:-translate-y-1">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tighter">Conversão Direta</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Integre o tour ao seu site e landing pages. Reduza a fricção na jornada de compra e gere leads mais qualificados e decididos.
            </p>
          </article>
        </section>

        <div className="mt-24 text-center reveal" style={{ animationDelay: '0.6s' }}>
          <Link href="/contact" className="btn-primary group h-14 px-12">
            Solicitar Orçamento Agora
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            Vagas limitadas para cronograma de fotos mensal.
          </p>
        </div>
      </div>
    </main>
  );
}
