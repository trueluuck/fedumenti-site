import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain, Zap, ShieldCheck, BarChart3, ArrowRight,
  CheckCircle2, Layers, Globe, Sparkles, ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LINXAR — IA para E-commerce | Fedumenti Group',
  description:
    'LINXAR é o motor de inteligência que padroniza e enriquece dados de produtos automaticamente para marketplaces. Criada pela Fedumenti Group.',
  openGraph: {
    title: 'LINXAR — O motor de IA para E-commerce',
    description: 'Padronize, enriqueça e publique produtos em marketplaces com IA proprietária.',
    url: 'https://www.fedumentigroup.com.br/lp/financie-startup',
  },
};

const LINXAR_URL = 'https://www.linxar.com.br';
const LINXAR_DEMO = 'https://www.linxar.com.br/demo';

const features = [
  {
    icon: Brain,
    title: 'Padronização com IA',
    desc: 'Transforma dados brutos em catálogos consistentes, seguindo as regras específicas de cada marketplace automaticamente.',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    icon: Sparkles,
    title: 'Enriquecimento Automático',
    desc: 'A IA preenche lacunas de dados, gera atributos técnicos e descrições de SEO a partir de uma simples foto ou barcode.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança & LGPD',
    desc: 'Infraestrutura robusta com proteção em todas as camadas — sua operação e dados de clientes sempre seguros.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Globe,
    title: 'Inteligência Omnicanal',
    desc: 'Algoritmos treinados para maximizar conversão em múltiplos canais simultaneamente: Mercado Livre, Amazon, Shopee e mais.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Zap,
    title: 'Velocidade de Escala',
    desc: 'De dados crus à publicação nos marketplaces em segundos. Processe milhares de SKUs sem esforço manual.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: BarChart3,
    title: 'Vantagem Competitiva',
    desc: 'Otimização contínua baseada em padrões globais de alta performance. Seus anúncios sempre à frente da concorrência.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
];

const steps = [
  {
    num: '01',
    icon: Layers,
    title: 'Leitura & Identificação',
    desc: 'A IA identifica o produto via GS1/EAN e inicia a normalização dos dados brutos automaticamente.',
  },
  {
    num: '02',
    icon: Brain,
    title: 'Enriquecimento & Regras',
    desc: 'O motor processa atributos, gera SEO otimizado e ajusta o conteúdo às regras de cada canal de venda.',
  },
  {
    num: '03',
    icon: Globe,
    title: 'Distribuição Inteligente',
    desc: 'Publicação fluida em múltiplos marketplaces com monitoramento de integridade e performance dos dados.',
  },
];

const checkpoints = [
  'Sem configuração manual de atributos',
  'Integração com os maiores marketplaces do Brasil',
  'SEO automático por canal',
  'Suporte técnico especializado',
  'Dashboard com métricas em tempo real',
  'Criado e mantido pela Fedumenti Group',
];

export default function LinxarPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative pt-10 pb-24 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl">


          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6">
              O motor de{' '}
              <span className="bg-gradient-to-r from-primary via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                INTELIGÊNCIA
              </span>
              {' '}que transforma seu e-commerce
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A <strong className="text-foreground">LINXAR</strong> combina tecnologia proprietária com IA especializada para padronizar e enriquecer dados de produtos automaticamente — garantindo consistência absoluta nos marketplaces.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={LINXAR_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group text-base px-8 py-4 rounded-2xl shadow-xl shadow-primary/30"
            >
              Testar Grátis Agora
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={LINXAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base px-8 py-4 rounded-2xl"
            >
              Conhecer o produto
              <ChevronRight size={18} className="ml-1 opacity-60" />
            </a>
          </div>

          {/* Hero visual */}
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-border/30 shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
            <Image
              src="/assets/linxar-hero.png"
              alt="LINXAR — Motor de IA para E-commerce"
              width={1200}
              height={675}
              className="w-full object-cover"
              priority
            />
            {/* Overlay gradient fade bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ──────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70 mb-3">Tecnologia proprietária</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Fluxar AI — a inteligência por trás da LINXAR
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Seis pilares que tornam a operação de e-commerce mais eficiente, escalonável e competitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <article
                key={f.title}
                className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center h-11 w-11 rounded-xl ${f.bg} mb-5`}>
                  <f.icon size={22} className={f.color} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70 mb-3">Como funciona</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Dos dados crus à venda em segundos
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Três etapas inteligentes para dominar os marketplaces sem trabalho manual.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-[10px] font-black flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST + CTA SIDE ───────────────────────── */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: checklist */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/70 mb-4">Por que a LINXAR?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 [text-wrap:balance]">
                Tudo que você precisa para escalar sem complicação
              </h2>
              <ul className="space-y-4">
                {checkpoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="shrink-0 mt-0.5 text-emerald-500" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA card */}
            <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl p-8 sm:p-10 shadow-2xl overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-4">Comece gratuitamente</p>
                <h3 className="text-2xl font-extrabold text-foreground mb-3">
                  Pronto para alavancar suas vendas com IA?
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Acesse a plataforma LINXAR, faça o tour guiado e veja em minutos como sua operação de e-commerce vai escalar.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={LINXAR_DEMO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center text-center py-4 rounded-2xl text-base shadow-lg shadow-primary/30 group"
                  >
                    Começar Agora — É Grátis
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={LINXAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline justify-center text-center py-4 rounded-2xl text-base"
                  >
                    Ver todos os detalhes
                  </a>
                </div>
                <p className="text-center text-xs text-muted-foreground/60 mt-5">
                  Sem cartão de crédito · Criado pela Fedumenti Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ───────────────────────────── */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-violet-500/10 to-cyan-500/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 [text-wrap:balance]">
            Sua operação de e-commerce merece{' '}
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              inteligência real
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            A LINXAR é o produto que a Fedumenti Group construiu para resolver os maiores gargalos do e-commerce com IA proprietária e escalabilidade sem limites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LINXAR_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group text-base px-10 py-4 rounded-2xl shadow-2xl shadow-primary/30"
            >
              Acessar a LINXAR
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/contact"
              className="btn-outline text-base px-10 py-4 rounded-2xl"
            >
              Falar com a Fedumenti
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
