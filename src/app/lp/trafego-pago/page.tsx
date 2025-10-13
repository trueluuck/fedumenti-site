import type { Metadata } from 'next';
import LeadFormStub from '@/components/lp/LeadFormStub';
import FloatingCta from '@/components/lp/FloatingCta';

export const metadata: Metadata = {
  title: 'Tráfego Pago • Growth Performance (LP Visual)',
  description: 'Landing completa, estética tech (preto + verde-limão), do topo ao fundo do funil.',
};

const YT_HERO = 'aqz-KE-bpKQ'; // troque pelo seu ID
const YT_CASE1 = 'aqz-KE-bpKQ'; // troque
const YT_CASE2 = 'aqz-KE-bpKQ'; // troque

const surface = 'rounded-2xl bg-slate-900/60 backdrop-blur shadow-xl ring-1 ring-lime-400/20 hover:ring-lime-400/40 transition';
const surfaceSolid = 'rounded-2xl bg-black shadow-xl ring-1 ring-lime-400/30 hover:ring-lime-400/50 transition';

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
  { q: 'Vocês trabalham com contrato de fidelidade?', a: 'Preferimos flexibilidade: 04 meses de compromisso para capturar sazonalidade mínima, renovável conforme resultados.' },
  { q: 'Quais canais vocês operam?', a: 'Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, YouTube, além de Analytics/Tag Manager.' },
  { q: 'Como medem sucesso?', a: 'KPIs de negócio: CAC, LTV, payback, ROAS e evolução de MQL/SQL por canal.' },
  { q: 'Vocês criam criativos?', a: 'Sim. Produção leve in-house e/ou integração com seu time/design parceiro.' },
];

export default function TrafegoPagoLP() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-lime-300 selection:text-black">
      {/* ================= HERO (NEON) ================= */}
      <section className="relative overflow-hidden">
        {/* Glow/gradiente de fundo tech */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-32 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className={`p-8 ${surfaceSolid}`}>
            <span className="inline-flex items-center rounded-full bg-lime-400/10 px-4 py-1 text-xs font-semibold text-lime-300 ring-1 ring-lime-400/30">
              Growth • Google Ads • Meta Ads • LinkedIn Ads
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Tráfego pago <span className="text-lime-400">estratégico</span> que acelera receita.
            </h1>
            <p className="mt-4 text-base text-slate-300">
              Atribuição correta, criatividade testada e execução incansável. Vamos crescer com previsibilidade.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#lead-form"
                className="inline-flex items-center rounded-full bg-lime-400 px-6 py-3 text-black transition hover:bg-lime-300 font-semibold"
              >
                Quero vender mais agora
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center rounded-full ring-1 ring-lime-400/40 px-6 py-3 text-slate-100 transition hover:bg-white/5"
              >
                Ver diferenciais
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">* Sem navbar. LP isolada para conversão.</p>
          </div>

          {/* Vídeo hero — YouTube embed simples */}
          <div className="relative">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black ring-1 ring-lime-400/30 shadow-2xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YT_HERO}?rel=0`}
                title="Apresentação de tráfego pago"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Fonte: <a className="underline" href="https://www.youtube.com/" target="_blank">YouTube</a>
            </p>
          </div>
        </div>
      </section>

      {/* ================= AUTORIDADE (KPIs) ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className={`grid gap-4 md:grid-cols-4 ${surface} p-6`}>
          {kpis.map((k) => (
            <div key={k.label} className="text-center">
              <div className="text-3xl font-extrabold text-lime-400">{k.value}</div>
              <div className="text-xs text-slate-400 mt-1">{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFÍCIOS ================= */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-12">
        <div className={`p-10 text-center ${surface}`}>
          <h2 className="text-3xl font-bold">Mais que mídia — <span className="text-lime-400">crescimento</span> mensurável.</h2>
          <p className="mt-2 text-slate-300">Processo, dados e execução para maximizar sua receita.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className={`p-6 relative ${surface}`}>
              <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 rounded-t-2xl" />
              <div className="text-3xl">{b.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESSO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className={`p-10 ${surface}`}>
          <h2 className="text-3xl font-bold text-center">Como trabalhamos</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className={`p-6 ${surfaceSolid}`}>
                <div className="text-xs text-lime-300">{s.step}</div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPOSTA/OFERTA ================= */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl p-1 bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 shadow-2xl">
          <div className="rounded-2xl bg-slate-950 p-10 text-center">
            <h2 className="text-2xl font-bold">Seu negócio pode ser o próximo caso de sucesso.</h2>
            <p className="mt-2 text-slate-300">Diagnóstico gratuito e um plano prático de 90 dias.</p>
            <div className="mt-6">
              <a
                href="#lead-form"
                className="inline-flex items-center rounded-full bg-lime-400 px-7 py-3 text-black shadow-md transition hover:bg-lime-300 font-semibold"
              >
                Agendar diagnóstico
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CASOS / RESULTADOS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className={`p-10 text-center ${surface}`}>
          <h2 className="text-3xl font-bold">Resultados reais</h2>
          <p className="mt-2 text-slate-300">Exemplos ilustrativos de métricas e crescimento.</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <figure className={`${surface} overflow-hidden`}>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YT_CASE1}?rel=0`}
                title="Case em Ads 1"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figcaption className="px-4 py-3 text-xs text-slate-400">
              Fonte: <a className="underline" target="_blank" href="https://www.youtube.com/">YouTube</a>
            </figcaption>
          </figure>

          <figure className={`${surface} overflow-hidden`}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080&auto=format&fit=crop"
              alt="Dashboard"
              className="h-64 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs text-slate-400">
              Foto: <a className="underline" target="_blank" href="https://unsplash.com/photos/GWe0dlVD9e0">Unsplash</a>
            </figcaption>
          </figure>

          <figure className={`${surface} overflow-hidden`}>
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YT_CASE2}?rel=0`}
                title="Case em Ads 2"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <figcaption className="px-4 py-3 text-xs text-slate-400">
              Fonte: <a className="underline" target="_blank" href="https://www.youtube.com/">YouTube</a>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================= PLANOS (OPCIONAL/ESTÉTICO) ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`p-6 ${surfaceSolid}`}>
              <div className="text-sm text-lime-300">{p.name}</div>
              <div className="mt-2 text-3xl font-extrabold text-white">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {p.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
              <a
                href="#lead-form"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lime-400 px-5 py-2.5 text-black font-semibold hover:bg-lime-300 transition"
              >
                Começar agora
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ (SEM CLIENT) ================= */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className={`p-8 ${surface}`}>
          <h2 className="text-2xl font-bold text-center">Perguntas frequentes</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-black/50 ring-1 ring-lime-400/10 p-4">
                <summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between">
                  {f.q}
                  <span className="ml-3 text-lime-300 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORMULÁRIO ================= */}
      <section id="lead-form" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className={`p-6 ${surface}`}>
            <h3 className="text-2xl font-bold">Fale com nosso time</h3>
            <p className="mt-2 text-slate-300">
              Preencha os campos e retornamos rapidamente. Sem spam, sem compromisso.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              <li>• Diagnóstico gratuito</li>
              <li>• Auditoria de campanhas</li>
              <li>• Roadmap de 90 dias</li>
            </ul>
          </div>
          <LeadFormStub />
        </div>
      </section>

      {/* ================= RODAPÉ ================= */}
      <footer className="border-t border-lime-400/20 px-6 py-8 text-center text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Fedumenti Group</div>
        <div className="mt-2 space-x-2">
          <a href="/politicas" className="underline hover:no-underline">Políticas</a>
          <span>•</span>
          <a href="/contato" className="underline hover:no-underline">Contato</a>
        </div>
        <div className="mt-4 text-xs">
          Mídias: <a className="underline" target="_blank" href="https://www.youtube.com">YouTube</a> • Imagens <a className="underline" target="_blank" href="https://unsplash.com">Unsplash</a>.
        </div>
      </footer>

      {/* ================= CTA FLUTUANTE ================= */}
      <FloatingCta
        href="#lead-form"
        label="Quero vender mais agora"
        scrolledLabel="Pronto para escalar?"
        targetSelector="#lead-form"
        whatsappNumber="5542999217736" // ajuste seu número
        whatsappLabel="Falar no WhatsApp"
        whatsappText="Olá! Quero aumentar minhas vendas com tráfego pago."
        threshold={0.25}
      />
    </main>
  );
}