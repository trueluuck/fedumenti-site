// src/components/lp/google360/PageClient.tsx
'use client';

import CurvedCarousel from './CurvedCarousel';
import GlassCard from '@/components/common/GlassCard';

const TOURS = [
  // ——— Seus 7 projetos (os três primeiros já existentes + 4 novos) ———
  {
    id: 't1',
    title: 'Projeto A • Tour 360°',
    subtitle: 'Guarapuava/PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761581967198!6m8!1m7!1sCAoSHENJQUJJaEQ4aUx3U0JPc0FUcUExMHlvd2Rmelo.!2m2!1d-25.37654767480765!2d-51.47763666091304!3f190.5240313479078!4f-12.521884911617562!5f0.7820865974627469',
  },
  {
    id: 't2',
    title: 'Projeto B • Tour 360°',
    subtitle: 'Guarapuava/PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761582219077!6m8!1m7!1sCAoSHENJQUJJaEJPdTV5bXMzaGw3TW1PM25fZUVnX0w.!2m2!1d-25.39357088859568!2d-51.4671792097232!3f62.6469!4f0!5f0.7820865974627469',
  },
  {
    id: 't3',
    title: 'Projeto C • Tour 360°',
    subtitle: 'Guarapuava/PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761582240728!6m8!1m7!1sCAoSHENJQUJJaENvYXRtQ2c1WVdkV19fQ1RkcnlzWjc.!2m2!1d-25.39082233073904!2d-51.47381699207282!3f309.495!4f0!5f0.7820865974627469',
  },
  {
    id: 't4',
    title: 'Projeto D • Tour 360°',
    subtitle: 'Guarapuava/PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761588865054!6m8!1m7!1sCAoSHENJQUJJaEE5NjFOaEQ1b3JHSVgtcy1GSFBIWUI.!2m2!1d-25.39313176916482!2d-51.45189979919488!3f198.788!4f0!5f0.7820865974627469',
  },
  {
    id: 't5',
    title: 'Projeto E • Tour 360°',
    subtitle: 'Guarapuava/PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761588887151!6m8!1m7!1sCAoSHENJQUJJaEJqRmR2bHZCN21VOTZPc0VPeXV5QzE.!2m2!1d-25.39174279174763!2d-51.46248505791053!3f228.461!4f0!5f0.7820865974627469',
  },
  {
    id: 't6',
    title: 'Projeto F • Tour 360°',
    subtitle: 'Guarapuava/PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761588906744!6m8!1m7!1sCAoSHENJQUJJaEFBM2lsV2FpUWg3MmdTUXRZQUE1ZlY.!2m2!1d-25.39339247420438!2d-51.47443011533392!3f0!4f0!5f0.7820865974627469',
  },
  {
    id: 't7',
    title: 'Projeto G • Tour 360°',
    subtitle: 'Guarapuava/PR',
    src: 'https://www.google.com/maps/embed?pb=!4v1761588926451!6m8!1m7!1sCAoSHENJQUJJaEFEeWNQTDdDLTNlMmdTUUhVQURDRXQ.!2m2!1d-25.38896030808213!2d-51.46144961648402!3f0!4f0!5f0.7820865974627469',
  },
];

export default function Google360PageClient() {
  return (
    <main className="relative isolate z-0 mx-auto max-w-7xl px-6 py-10">
      {/* Cabeçalho simples */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Google 360° • Tours e Imersão</h1>
        <p className="mt-3 muted">
          Experiências imersivas para presença local e reforço de marca. Arraste, clique ou use as setas.
        </p>
      </div>

      {/* Carrossel curvo (isola camadas) */}
      <section className="relative mt-8 isolate z-0">
        <CurvedCarousel tours={TOURS} />
      </section>

      {/* Grid de infos (opcional, estética glass) */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <GlassCard>
          <div className="text-sm muted">Imersão</div>
          <div className="mt-1 font-semibold">Street View Profissional</div>
          <p className="mt-2 text-sm muted">
            Imagens 360° para Google Maps e site, elevando confiança e conversão local.
          </p>
        </GlassCard>
        <GlassCard>
          <div className="text-sm muted">SEO Local</div>
          <div className="mt-1 font-semibold">Mais Destaque em Busca</div>
          <p className="mt-2 text-sm muted">
            Sinalizações de qualidade e presença aprimorada no ecossistema Google.
          </p>
        </GlassCard>
        <GlassCard>
          <div className="text-sm muted">Experiência</div>
          <div className="mt-1 font-semibold">Navegação Natural</div>
          <p className="mt-2 text-sm muted">
            Compatível com desktop e mobile. Carrossel fluido com autoplay inteligente.
          </p>
        </GlassCard>
      </section>
    </main>
  );
}
  