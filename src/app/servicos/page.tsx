import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Camera, 
  TrendingUp, 
  Share2, 
  Cpu, 
  Compass, 
  Smartphone, 
  GraduationCap, 
  Mic2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços & Soluções | FCG — Fedumenti Group',
  description:
    'Portfólio comercial de serviços FCG para empresas consolidadas: Google 360, Tráfego Pago, Redes Sociais, Automação, Assessoria Digital, Vídeo Mobile, Treinamentos e Palestras.',
};

export default function ServicosPage() {
  const services = [
    {
      id: 'google-360',
      title: 'Google 360° HDR',
      tag: 'Autoridade & Presença Local',
      desc: 'Tour virtual esférico em alta definição publicado diretamente no Google Maps e Street View da sua empresa. Sem taxas de mensalidade.',
      price: 'R$ 499,00 (Taxa Única)',
      icon: Camera,
      bullets: [
        'Sessão fotográfica profissional HDR',
        'Publicação oficial no perfil do Google Maps',
        'Aumento comprovado nas buscas locais',
        'Ativação rápida em até 72 horas'
      ],
      ctaText: 'Ver Detalhes do Google 360°',
      ctaHref: '/google-360',
      isExternal: false,
      whatsappMsg: 'Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Tour%20Google%20360'
    },
    {
      id: 'trafego-pago',
      title: 'Tráfego Pago de Performance',
      tag: 'Aquisição & Escala Comercial',
      desc: 'Gestão estratégica de campanhas no Google Ads, Meta Ads (Instagram/Facebook) e LinkedIn Ads focada em retorno financeiro (ROAS) e atração de clientes com alta intenção de compra.',
      price: 'Planos Corporativos',
      icon: TrendingUp,
      bullets: [
        'Campanhas de alta conversão B2B e B2C',
        'Otimização diária orientada a dados e margem',
        'Tracking avançado de conversões e funis',
        'Relatórios executivos quinzenais de ROI'
      ],
      ctaText: 'Contratar Tráfego Pago',
      ctaHref: 'https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Tr%C3%A1fego%20Pago%20para%20minha%20empresa',
      isExternal: true,
      whatsappMsg: 'Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20Tr%C3%A1fego%20Pago'
    },
    {
      id: 'redes-sociais',
      title: 'Gestão Estratégica de Redes Sociais',
      tag: 'Posicionamento & Branding',
      desc: 'Construção de autoridade corporativa no Instagram, LinkedIn e TikTok. Conteúdo visual refinado e comunicação voltada para tomadores de decisão.',
      price: 'Acompanhamento Mensal',
      icon: Share2,
      bullets: [
        'Linha editorial alinhada aos seus objetivos de venda',
        'Design gráfico profissional e identidade visual',
        'Copywriting persuasivo e direcionado ao seu público',
        'Monitoramento de engajamento e métricas de alcance'
      ],
      ctaText: 'Solicitar Gestão de Redes',
      ctaHref: 'https://wa.me/5542999217736?text=Ol%C3%A1%2C%20quero%20estruturar%20as%20Redes%20Sociais%20da%20minha%20empresa%20com%20a%20FCG',
      isExternal: true,
      whatsappMsg: 'Ol%C3%A1%2C%20quero%20estruturar%20as%20Redes%20Sociais'
    },
    {
      id: 'automacao',
      title: 'Automação Comercial & Processos com IA',
      tag: 'Produtividade & Zero Atrito',
      desc: 'Integração de sistemas, chatbots inteligentes para WhatsApp, CRM automatizado e esteiras de dados que eliminam o trabalho braçal e aceleram o fechamento de vendas.',
      price: 'Implantação Customizada',
      icon: Cpu,
      bullets: [
        'Atendimento automático e qualificação de leads no WhatsApp',
        'Sincronização instantânea de cadastros e pedidos',
        'Integração nativa entre CRM, ERP e e-commerce',
        'Redução imediata do tempo de resposta ao cliente'
      ],
      ctaText: 'Automatizar Minha Empresa',
      ctaHref: 'https://wa.me/5542999217736?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20Automa%C3%A7%C3%A3o%20e%20Intelig%C3%AAncia%20Artificial%20para%20minha%20empresa',
      isExternal: true,
      whatsappMsg: 'Ol%C3%A1%2C%20tenho%20interesse%20em%20Automa%C3%A7%C3%A3o'
    },
    {
      id: 'assessoria-digital',
      title: 'Assessoria & Acompanhamento Digital 360°',
      tag: 'Diretoria Estratégica',
      desc: 'Atuação consultiva e executiva contínua ao lado dos fundadores e diretores para planejar, estruturar e auditar toda a presença e expansão digital da companhia.',
      price: 'Contrato Contínuo',
      icon: Compass,
      bullets: [
        'Planejamento trimestral de expansão de canais',
        'Auditoria técnica de sistemas e plataformas de venda',
        'Reuniões de alinhamento estratégico com a diretoria',
        'Validação de novas oportunidades e canais comerciais'
      ],
      ctaText: 'Falar sobre Assessoria',
      ctaHref: 'https://wa.me/5542999217736?text=Ol%C3%A1%2C%20quero%20contratar%20a%20Assessoria%20Digital%20da%20FCG%20para%20minha%20empresa',
      isExternal: true,
      whatsappMsg: 'Ol%C3%A1%2C%20quero%20contratar%20a%20Assessoria%20Digital'
    },
    {
      id: 'video-mobile',
      title: 'Produção de Vídeo Mobile & Reels',
      tag: 'Audiovisual de Alta Conversão',
      desc: 'Captação e edição ágil de vídeos verticais (Reels, Shorts, TikTok) com linguagem moderna e dinâmica, feitos sob medida para reter atenção e acelerar vendas.',
      price: 'Pacotes por Sessão / Mensais',
      icon: Smartphone,
      bullets: [
        'Captação presencial no seu estabelecimento ou fábrica',
        'Roteirização comercial com ganchos de alta retenção',
        'Edição dinâmica com legendas, trilhas e cortes precisos',
        'Material pronto para anúncio e publicação orgânica'
      ],
      ctaText: 'Agendar Produção de Vídeos',
      ctaHref: 'https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20produ%C3%A7%C3%A3o%20de%20V%C3%ADdeo%20Mobile%20para%20minha%20empresa',
      isExternal: true,
      whatsappMsg: 'Ol%C3%A1%2C%20gostaria%20de%20agendar%20V%C3%ADdeos%20Mobile'
    },
    {
      id: 'treinamentos',
      title: 'Treinamentos Corporativos In Company',
      tag: 'Capacitação de Equipes',
      desc: 'Capacitação prática para a sua equipe interna de vendas, atendimento e marketing sobre uso de ferramentas digitais, inteligência artificial e processos de venda ágil.',
      price: 'Workshops Customizados',
      icon: GraduationCap,
      bullets: [
        'Treinamento prático direto na rotina da sua equipe',
        'Uso aplicado de IA para ganho imediato de produtividade',
        'Padronização de roteiros de atendimento e conversão',
        'Material de apoio e certificado de conclusão'
      ],
      ctaText: 'Capacitar Minha Equipe',
      ctaHref: 'https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20um%20Treinamento%20para%20a%20equipe%20da%20minha%20empresa',
      isExternal: true,
      whatsappMsg: 'Ol%C3%A1%2C%20gostaria%20de%20um%20Treinamento'
    },
    {
      id: 'palestras',
      title: 'Palestras & Keynotes de Inovação',
      tag: 'Inspiração & Visão de Mercado',
      desc: 'Apresentações de alto impacto para convenções de vendas, associações comerciais, universidades e eventos corporativos sobre o futuro do mercado digital e IA aplicada aos negócios.',
      price: 'Sob Consulta',
      icon: Mic2,
      bullets: [
        'Temas: Inteligência Artificial no Varejo, Escala Digital e Inovação Real',
        'Linguagem acessível e conectada ao mundo empresarial',
        'Conteúdo atualizado com casos reais do ecossistema FCG',
        'Formato presencial ou online ao vivo'
      ],
      ctaText: 'Contratar Palestra',
      ctaHref: 'https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20convidar%20a%20FCG%20para%20uma%20Palestra%20no%20meu%20evento',
      isExternal: true,
      whatsappMsg: 'Ol%C3%A1%2C%20gostaria%20de%20convidar%20para%20uma%20Palestra'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl space-y-16">
        
        {/* Header Comercial */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-700 font-semibold">
              Catálogo Comercial FCG · Soluções de Alto Impacto
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Serviços para acelerar e profissionalizar a sua empresa no digital.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Seja para dominar as buscas locais no Google, gerar vendas diárias com anúncios e automações, treinar sua equipe ou posicionar sua marca com autoridade executiva, a FCG entrega a solução ideal com foco estrito em resultado financeiro.
          </p>
        </div>

        {/* Grid de 8 Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between space-y-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 scroll-mt-28"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shrink-0 shadow-xs">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    {item.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  {item.isExternal ? (
                    <a
                      href={item.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-xs"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <Link
                      href={item.ctaHref}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors shadow-xs"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  )}

                  <a
                    href={`https://wa.me/5542999217736?text=${item.whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 py-2 transition-colors"
                  >
                    <PhoneCall size={13} className="text-slate-500" />
                    <span>Tirar Dúvidas</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA Final */}
        <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block">
              Proposta Personalizada
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Precisa de um pacote sob medida para a sua operação?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Combinamos diferentes serviços em um contrato único de aceleração (ex.: Tráfego Pago + Automação de WhatsApp + Produção de Vídeos), com desconto e acompanhamento executivo direto.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/5542999217736?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20proposta%20personalizada%20de%20servi%C3%A7os%20FCG%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-colors shadow-md"
              >
                <span>Solicitar Proposta Sob Medida</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
