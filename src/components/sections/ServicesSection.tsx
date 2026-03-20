// src/components/sections/ServicesSection.tsx
import Link from 'next/link';
import { 
  Rocket, 
  ShoppingCart, 
  Camera, 
  Layout, 
  Palette, 
  Link as LinkIcon, 
  TrendingUp, 
  BarChart3, 
  Briefcase, 
  Video, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href?: string;
};

const ALL_SERVICES: Service[] = [
  { icon: <Rocket size={32} />, title: 'Tráfego Pago', desc: 'Google Ads, Meta Ads e LinkedIn Ads com foco total em ROI e conversão.', href: '/lp/trafego-pago' },
  { icon: <ShoppingCart size={32} />, title: 'Marketplaces', desc: 'Estratégia e gestão para escalar sua presença nos maiores players do mercado.', href: '/services#marketplaces' },
  { icon: <Camera size={32} />, title: 'Google 360°', desc: 'Tours imersivos que aumentam a confiança e o engajamento local do seu negócio.', href: '/lp/google-360' },
  { icon: <Layout size={32} />, title: 'Sites & LPs', desc: 'Interfaces de alta performance projetadas para converter visitantes em clientes.', href: '/services#sites' },
  { icon: <Palette size={32} />, title: 'Branding', desc: 'Identidade visual estratégica para posicionar sua marca no topo.', href: '/services#branding' },
  { icon: <LinkIcon size={32} />, title: 'Automação', desc: 'Fluxos inteligentes e CRM para potencializar seu funil de vendas.', href: '/services#automacao' },
  { icon: <TrendingUp size={32} />, title: 'SEO Orgânico', desc: 'Autoridade e visibilidade a longo prazo com conteúdo estratégico.', href: '/services#seo' },
  { icon: <BarChart3 size={32} />, title: 'BI & Dados', desc: 'Dashboards em tempo real para decisões baseadas em números reais.', href: '/services#bi' },
  { icon: <Briefcase size={32} />, title: 'Assessoria', desc: 'Consultoria executiva para transformar seu modelo de negócio digital.', href: '/services#assessoria' },
  { icon: <Video size={32} />, title: 'Vídeo Mobile', desc: 'Produção ágil de conteúdo em vídeo para as redes sociais modernas.', href: '/services#video' },
  { icon: <Smartphone size={32} />, title: 'Redes Sociais', desc: 'Gestão de comunidade e conteúdo para engajar sua audiência.', href: '/services#redes' },
];

const HIGHLIGHTS = ALL_SERVICES.slice(0, 3);

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16 text-center reveal">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Especialidades</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
            Soluções para <span className="text-primary italic">Acelerar</span>
          </h3>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unimos mídias, dados e tecnologia para criar ecossistemas de crescimento sustentável.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3 reveal" style={{ animationDelay: '0.2s' }}>
          {HIGHLIGHTS.map((s, idx) => (
            <Link
              key={s.title}
              href={s.href ?? '#'}
              className="group relative surface p-10 block transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 bg-primary/5 rounded-full blur-3xl transition-colors group-hover:bg-primary/20" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {s.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {s.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {s.desc}
                </p>

                <div className="mt-8 flex items-center text-sm font-bold text-primary uppercase tracking-widest opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center reveal" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/services"
            className="btn-outline group h-14 px-10"
          >
            Ver catálogo completo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
