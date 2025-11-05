// src/app/lp/trafego-pago/page.tsx
import type { Metadata } from 'next';
import LeadFormStub from '@/components/lp/LeadFormStub';
import FloatingCta from '@/components/lp/FloatingCta';
import LiteYouTube from '@/components/common/LiteYoutube';

export const metadata: Metadata = {
  title: 'Tráfego Pago • Growth Performance',
  description:
    'Planejamento, execução e otimização contínua em Google Ads, Meta Ads e LinkedIn Ads. Foco em CAC, ROAS e LTV.',
};

const YT_HERO = 'aqz-KE-bpKQ';
const YT_CASE1 = 'aqz-KE-bpKQ';
const YT_CASE2 = 'aqz-KE-bpKQ';

const kpis = [
  { label: 'Anos em Growth', value: '14+' },
  { label: 'Clientes Atendidos', value: '120+' },
  { label: 'Faturamento', value: 'R$ 5.5M+' },
  { label: 'Países', value: '6' },
];

const benefits = [
  { icon: '📊', title: 'Estratégia baseada em dados', desc: 'Planejamento, tracking e modelos de atribuição.' },
  { icon: '🚀', title: 'Otimização contínua', desc: 'A/B, criativos, bids, negativações e funil completo.' },
  { icon: '💰', title: 'ROI acima da média', desc: 'Foco em CAC, LTV e margem por canal/campanha.' },
  { icon: '🤝', title: 'Transparência total', desc: 'Relatórios semanais e rituais de performance.' },
];

const steps = [
  { step: '01', title: 'Diagnóstico', desc: 'Levantamos metas, baseline, tracking e gargalos.' },
  { step: '02', title: 'Planejamento', desc: 'Canais, orçamento, metas por etapa, SLA e KPIs.' },
  { step: '03', title: 'Execução', desc: 'Setup, criativos, segmentações e integrações.' },
  { step: '04', title: 'Otimização', desc: 'Rotina de testes e aceleração do que performa.' },
];

const plans = [
  { name: 'Starter', price: 'R$ 1.058/mês', items: ['Até 2 canais', 'Relatório mensal', 'Planejamento básico'] },
  { name: 'Scale', price: 'R$ 1.749/mês', items: ['Até 4 canais', 'Relatório semanal', 'Testes A/B contínuos'] },
  { name: 'Enterprise', price: 'Sob consulta', items: ['Todos os canais', 'Squad dedicado', 'BI e automações'] },
];

const faqs = [
  {
    q: 'Vocês trabalham com contrato de fidelidade?',
    a: 'Preferimos flexibilidade: 04 meses de compromisso para capturar sazonalidade mínima, renovável conforme resultados.',
  },
  { q: 'Quais canais vocês operam?', a: 'Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, YouTube, além de Analytics/Tag Manager.' },
  { q: 'Como medem sucesso?', a: 'KPIs de negócio: CAC, LTV, payback, ROAS e evolução de MQL/SQL por canal.' },
  { q: 'Vocês criam criativos?', a: 'Sim. Produção leve in-house e/ou integração com seu time/design parceiro.' },
];

export default function TrafegoPagoLP() {
  return (
    // herda do tema global
    <main className="min-h-screen bg-bg text-fg transition-colors">
      {/* HERO (com blobs que respeitam claro/escuro) */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {/* blob esquerdo */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15" />
          {/* blob direito */}
          <div className="absolute -bottom-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="surface p-8">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold ring-1"
              style={{ backgroundColor: 'color-mix(in srgb, rgb(var(--accent)) 10%, transparent)', color: 'rgb(var(--accent))', borderColor: 'color-mix(in srgb, rgb(var(--accent)) 35%, transparent)' }}>
              Growth • Google Ads • Meta Ads • LinkedIn Ads
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Tráfego pago <span style={{ color: 'rgb(var(--accent))' }}>estratégico</span> que acelera receita.
            </h1>

            <p className="mt-4 text-base muted">
              Atribuição correta, criatividade testada e execução incansável. Vamos crescer com previsibilidade.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#lead-form" className="btn-primary">Quero vender mais agora</a>
              <a href="#beneficios" className="btn-outline">Ver diferenciais</a>
            </div>

            <p className="mt-3 text-xs muted">* LP integrada ao tema. Claro/escuro automáticos.</p>
          </div>

          <div className="relative">
            <LiteYouTube videoId={YT_HERO} title="Apresentação de tráfego pago" />
            <p className="mt-2 text-xs muted">
              Fonte: <a className="underline" href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
            </p>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="grid gap-4 md:grid-cols-4 surface p-6">
          {kpis.map((k) => (
            <div key={k.label} className="text-center">
              <div className="text-3xl font-extrabold" style={{ color: 'rgb(var(--accent))' }}>
                {k.value}
              </div>
              <div className="text-xs muted mt-1">{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-12">
        <div className="surface p-10 text-center">
          <h2 className="text-3xl font-bold">
            Mais que mídia — <span style={{ color: 'rgb(var(--accent))' }}>crescimento</span> mensurável.
          </h2>
          <p className="mt-2 muted">Processo, dados e execução para maximizar sua receita.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="relative surface p-6">
              <div
                className="absolute inset-x-0 -top-px h-1 rounded-t-2xl"
                style={{
                  background:
                    'linear-gradient(90deg, color-mix(in srgb, rgb(var(--accent)) 70%, transparent), color-mix(in srgb, rgb(var(--primary)) 70%, transparent))',
                }}
              />
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm muted">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="surface p-10">
          <h2 className="text-3xl font-bold text-center">Como trabalhamos</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="surface p-6">
                <div className="text-xs" style={{ color: 'rgb(var(--accent))' }}>{s.step}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div
          className="rounded-2xl p-1 shadow-2xl"
          style={{
            background:
              'linear-gradient(90deg, color-mix(in srgb, rgb(var(--accent)) 65%, transparent), color-mix(in srgb, rgb(var(--primary)) 65%, transparent))',
          }}
        >
          <div className="rounded-2xl surface p-10 text-center">
            <h2 className="text-2xl font-bold">Seu negócio pode ser o próximo caso de sucesso.</h2>
            <p className="mt-2 muted">Diagnóstico gratuito e um plano prático de 90 dias.</p>
            <div className="mt-6">
              <a href="#lead-form" className="btn-primary">Agendar diagnóstico</a>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="surface p-10 text-center">
          <h2 className="text-3xl font-bold">Resultados reais</h2>
          <p className="mt-2 muted">Exemplos ilustrativos de métricas e crescimento.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <figure className="surface overflow-hidden">
            <LiteYouTube videoId={YT_CASE1} title="Case em Ads 1" />
            <figcaption className="px-4 py-3 text-xs muted">
              Fonte: <a className="underline" target="_blank" rel="noreferrer" href="https://www.youtube.com/">YouTube</a>
            </figcaption>
          </figure>

          <figure className="surface overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop"
              alt="Dashboard"
              className="h-64 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs muted">
              Foto: <a className="underline" target="_blank" rel="noreferrer" href="https://unsplash.com/photos/GWe0dlVD9e0">Unsplash</a>
            </figcaption>
          </figure>

          <figure className="surface overflow-hidden">
            <LiteYouTube videoId={YT_CASE2} title="Case em Ads 2" />
            <figcaption className="px-4 py-3 text-xs muted">
              Fonte: <a className="underline" target="_blank" rel="noreferrer" href="https://www.youtube.com/">YouTube</a>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PLANOS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="surface p-6">
              <div className="text-sm" style={{ color: 'rgb(var(--accent))' }}>{p.name}</div>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm muted">
                {p.items.map((it) => <li key={it}>• {it}</li>)}
              </ul>
              <a href="#lead-form" className="btn-primary mt-6 w-full justify-center">Começar agora</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="surface p-8">
          <h2 className="text-2xl font-bold text-center">Perguntas frequentes</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl p-4 ring-1"
                style={{ backgroundColor: 'color-mix(in srgb, rgb(var(--surface)) 70%, transparent)', borderColor: 'rgb(var(--border))' }}>
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  {f.q}
                  <span className="ml-3 transition group-open:rotate-45" style={{ color: 'rgb(var(--accent))' }}>＋</span>
                </summary>
                <p className="mt-3 text-sm muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="lead-form" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="surface p-6">
            <h3 className="text-2xl font-bold">Fale com nosso time</h3>
            <p className="mt-2 muted">
              Preencha os campos e retornamos rapidamente. Sem spam, sem compromisso.
            </p>
            <ul className="mt-4 grid gap-2 text-sm muted">
              <li>• Diagnóstico gratuito</li>
              <li>• Auditoria de campanhas</li>
              <li>• Roadmap de 90 dias</li>
            </ul>
          </div>
          <LeadFormStub />
        </div>
      </section>

      {/* FOOTER DA LP */}
      <footer className="border-t px-6 py-8 text-center text-sm muted border-default">
        <div>© {new Date().getFullYear()} Fedumenti Group</div>
        <div className="mt-2 space-x-2">
          <a href="/politicas" className="underline hover:no-underline">Políticas</a>
          <span>•</span>
          <a href="/contact" className="underline hover:no-underline">Contato</a>
        </div>
      </footer>

      <FloatingCta
        href="#lead-form"
        label="Quero vender mais agora"
        scrolledLabel="Pronto para escalar?"
        targetSelector="#lead-form"
        whatsappNumber="5542999217736"
        whatsappLabel="Falar no WhatsApp"
        whatsappText="Olá! Quero aumentar minhas vendas com tráfego pago."
        threshold={0.25}
      />
    </main>
  );
}
