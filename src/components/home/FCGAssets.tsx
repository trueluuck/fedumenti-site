import Link from 'next/link';
import { 
  ArrowRight, 
  Layers, 
  Camera, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Share2, 
  Cpu, 
  Compass, 
  Smartphone, 
  GraduationCap, 
  Mic2,
  Sparkles
} from 'lucide-react';

export default function FCGAssets() {
  const quickServices = [
    { title: 'Google 360° HDR', desc: 'Tour oficial Google Maps por R$ 499 único', icon: Camera, href: '/google-360' },
    { title: 'Tráfego Pago', desc: 'Google, Meta e LinkedIn Ads com foco em ROI', icon: TrendingUp, href: '/servicos#trafego-pago' },
    { title: 'Redes Sociais', desc: 'Gestão visual e posicionamento executivo', icon: Share2, href: '/servicos#redes-sociais' },
    { title: 'Automação Comercial', desc: 'Chatbots com IA e esteiras de vendas', icon: Cpu, href: '/servicos#automacao' },
    { title: 'Assessoria Digital', desc: 'Acompanhamento estratégico com a diretoria', icon: Compass, href: '/servicos#assessoria-digital' },
    { title: 'Vídeo Mobile', desc: 'Captação e edição ágil de Reels e TikTok', icon: Smartphone, href: '/servicos#video-mobile' },
    { title: 'Treinamentos', desc: 'Capacitação prática para a sua equipe', icon: GraduationCap, href: '/servicos#treinamentos' },
    { title: 'Palestras', desc: 'Keynotes de inteligência artificial e negócios', icon: Mic2, href: '/servicos#palestras' },
  ];

  return (
    <section id="solucoes" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container-xl space-y-16">
        
        {/* Ativo Principal Linxar - O Core de Tecnologia */}
        <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1">
                <Layers size={13} className="text-blue-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400">
                  Nosso Ativo Tecnológico Principal
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ecossistema Linxar: A Plataforma de Vendas e Integração da FCG
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Desenvolvida pela engenharia da FCG, a <strong>Linxar</strong> conecta o estoque de indústrias, atacadistas e grandes lojas físicas diretamente a mais de 12 marketplaces simultâneos (Mercado Livre, Amazon, Shopee, Magalu) com <strong>Zero Digitação</strong>, tratamento de fotos com IA e motor fiscal de DIFAL integrado.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Linxar Hub</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Linxar Pref (B2G)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>Linxar Workplace</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>DIFAL 27 UFs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/linxar"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-lg"
              >
                <span>Conhecer o Ecossistema Linxar</span>
                <ArrowRight size={14} />
              </Link>

              <a
                href="https://linxar.com.br/pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-6 py-3.5 text-xs font-bold text-slate-300 hover:border-slate-500 hover:text-white transition-colors"
              >
                <span>Acessar linxar.com.br</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Vitrine Comercial de Serviços FCG */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-600 block">
                Soluções e Serviços Especializados
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Tudo o que sua empresa precisa para vender mais e crescer com autoridade.
              </h2>
            </div>

            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shrink-0 shadow-sm"
            >
              <span>Ver todos os 8 serviços</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Grid dos Serviços */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white group-hover:scale-105 transition-transform shadow-xs">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-950 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-800 group-hover:text-blue-600 transition-colors pt-2 border-t border-slate-200/60">
                    <span>Contratar solução</span>
                    <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
