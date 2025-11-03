// src/app/lp/google-360/page.tsx
import type { Metadata } from 'next';
import CurvedCarousel, { TourItem } from '@/components/lp/google360/CurvedCarousel';

export const metadata: Metadata = {
  title: 'Google 360° • Tours e Imersão',
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
    title: 'Rattes • Advogados Associados',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761582240728!6m8!1m7!1sCAoSHENJQUJJaENvYXRtQ2c1WVdkV19fQ1RkcnlzWjc.!2m2!1d-25.39082233073904!2d-51.47381699207282!3f309.495!4f0!5f0.7820865974627469',
  },
  // — seus novos (renomeie os títulos para os nomes reais do cliente)
  {
    id: 'proj-p',
    title: 'Empresa P • Tour 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608863610!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0QzLURSZ2dF!2m2!1d-25.3935007618596!2d-51.44994769438757!3f4.2828!4f0!5f0.7820865974627469',
  },
  {
    id: 'proj-q',
    title: 'Empresa Q • Tour 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608918996!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0R4X0NpUWc.!2m2!1d-25.38643921454803!2d-51.45921601958564!3f159.4905268349577!4f-8.195398816482324!5f0.7820865974627469',
  },
  {
    id: 'proj-r',
    title: 'Empresa R • Tour 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608934417!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHAzS1BNTXc.!2m2!1d-25.39714905152094!2d-51.46253186152973!3f310.1402!4f0!5f0.7820865974627469',
  },
  {
    id: 'proj-s',
    title: 'Empresa S • Tour 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761608964955!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHAzT25wR3c.!2m2!1d-25.40022006105083!2d-51.462616492816!3f245.17275043840314!4f-24.545697099653395!5f0.7820865974627469',
  },
  {
    id: 'proj-t',
    title: 'Empresa T • Tour 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761609006071!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHhoOTZGQkE.!2m2!1d-25.39280731535057!2d-51.46576123126012!3f331.8903!4f0!5f0.7820865974627469',
  },
  {
    id: 'proj-u',
    title: 'Empresa U • Tour 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761609025812!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRHg4OWVoYUE.!2m2!1d-25.37310030462659!2d-51.46525310034974!3f165.809!4f0!5f0.7820865974627469',
  },
  {
    id: 'proj-v',
    title: 'Empresa V • Tour 360°',
    subtitle: 'Guarapuava • PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761609044192!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRHh4WnE3MFFF!2m2!1d-25.39579076835521!2d-51.4691347908951!3f0!4f0!5f0.7820865974627469',
  },
];

export default function Google360Page() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Google 360° • Tours e Imersão</h1>
        <p className="mt-2 muted">
          Experiências imersivas para presença local e reforço de marca. Arraste, clique ou use as setas.
        </p>
      </header>

      <CurvedCarousel items={TOURS} autoplayMs={6500} />

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <article className="surface p-6">
          <h3 className="font-semibold">Imersão</h3>
          <p className="mt-2 text-sm muted">
            Street View Profissional: imagens 360° para Google Maps e site, elevando confiança e conversão local.
          </p>
        </article>
        <article className="surface p-6">
          <h3 className="font-semibold">SEO Local</h3>
          <p className="mt-2 text-sm muted">
            Mais destaque em Busca e Mapas com fotos recentes e engajamento dos usuários.
          </p>
        </article>
        <article className="surface p-6">
          <h3 className="font-semibold">Experiência</h3>
          <p className="mt-2 text-sm muted">
            Navegação natural por dentro do seu negócio e integração com a sua página.
          </p>
        </article>
      </section>

      <div className="text-center mt-12">
        <a href="/contact" className="btn-primary">Quero meu Google 360° →</a>
      </div>
    </main>
  );
}
