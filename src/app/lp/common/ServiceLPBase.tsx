import Image from "next/image";

type HeroImage = {
  src: string;
  alt: string;
  priority?: boolean;
};

type Benefit = {
  icon: string;
  title: string;
  desc: string;
};

type FAQ = {
  q: string;
  a: string;
};

type Props = {
  title: string;
  subtitle: string;
  badges?: string[];
  hero: { heroImage: HeroImage };
  benefits?: Benefit[];
  faqs?: FAQ[];
  ctaLabel: string;
};

export default function ServiceLPBase({
  title,
  subtitle,
  badges = [],
  hero,
  benefits = [],
  faqs = [],
  ctaLabel,
}: Props) {
  return (
    // herda das variáveis CSS globais (bg-bg/text-fg/surface/border/etc.)
    <main className="min-h-screen bg-bg text-fg transition-colors">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          {/* blobs sutis que respeitam claro/escuro via tokens */}
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
               style={{ background: "color-mix(in srgb, rgb(var(--accent)) 12%, transparent)" }} />
          <div className="absolute -bottom-24 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
               style={{ background: "color-mix(in srgb, rgb(var(--primary)) 12%, transparent)" }} />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="surface p-8">
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold ring-1"
                    style={{
                      background: "color-mix(in srgb, rgb(var(--accent)) 10%, transparent)",
                      color: "rgb(var(--accent))",
                      borderColor:
                        "color-mix(in srgb, rgb(var(--accent)) 35%, transparent)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              {title}{" "}
            </h1>

            <p className="mt-4 text-base muted">{subtitle}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#lead-form" className="btn-primary">{ctaLabel}</a>
              <a href="#beneficios" className="btn-outline">Ver diferenciais</a>
            </div>

            <p className="mt-3 text-xs muted">* LP integrada ao tema. Claro/escuro automáticos.</p>
          </div>

          <div className="relative overflow-hidden rounded-2xl ring-1 border-default">
            <Image
              src={hero.heroImage.src}
              alt={hero.heroImage.alt}
              width={1280}
              height={720}
              className="h-auto w-full object-cover"
              priority={hero.heroImage.priority}
            />
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      {benefits.length > 0 && (
        <section id="beneficios" className="mx-auto max-w-7xl px-6 py-12">
          <div className="surface p-10 text-center">
            <h2 className="text-3xl font-bold">
              Por que <span style={{ color: "rgb(var(--accent))" }}>{title}</span> com a gente?
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
                      "linear-gradient(90deg, color-mix(in srgb, rgb(var(--accent)) 70%, transparent), color-mix(in srgb, rgb(var(--primary)) 70%, transparent))",
                  }}
                />
                <div className="text-3xl">{b.icon}</div>
                <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="surface p-8">
            <h2 className="text-2xl font-bold text-center">Perguntas frequentes</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl p-4 ring-1"
                  style={{
                    background:
                      "color-mix(in srgb, rgb(var(--surface)) 70%, transparent)",
                    borderColor: "rgb(var(--border))",
                  }}
                >
                  <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                    {f.q}
                    <span
                      className="ml-3 transition group-open:rotate-45"
                      style={{ color: "rgb(var(--accent))" }}
                    >
                      ＋
                    </span>
                  </summary>
                  <p className="mt-3 text-sm muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final (âncora de formulário padrão) */}
      <section id="lead-form" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="surface p-6">
            <h3 className="text-2xl font-bold">Fale com nosso time</h3>
            <p className="mt-2 muted">
              Preencha os campos e retornamos rapidamente. Sem spam, sem compromisso.
            </p>
            <ul className="mt-4 grid gap-2 text-sm muted">
              <li>• Diagnóstico gratuito</li>
              <li>• Auditoria</li>
              <li>• Roadmap de 90 dias</li>
            </ul>
          </div>

          {/* Substitua por seu form real/cliente quando quiser */}
          <div className="surface p-6">
            <form className="grid grid-cols-1 gap-3">
              <input className="input" placeholder="Nome" />
              <input className="input" placeholder="E-mail" type="email" />
              <input className="input" placeholder="Telefone/WhatsApp" />
              <textarea className="input min-h-28" placeholder="Conte seu objetivo" />
              <button className="btn-primary justify-center">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* Rodapé mínimo da LP */}
      <footer className="border-t px-6 py-8 text-center text-sm muted border-default">
        <div>© {new Date().getFullYear()} Fedumenti Group</div>
        <div className="mt-2 space-x-2">
          <a href="/politicas" className="underline hover:no-underline">Políticas</a>
          <span>•</span>
          <a href="/contact" className="underline hover:no-underline">Contato</a>
        </div>
      </footer>
    </main>
  );
}
