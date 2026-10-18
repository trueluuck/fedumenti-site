import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | FCG — Fedumenti Group',
  description:
    'Entenda como coletamos, utilizamos e protegemos seus dados na Fedumenti Group conforme a LGPD.',
};

export default function PoliticasPage() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-xl max-w-3xl mx-auto space-y-10">
        
        <header className="space-y-3 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-mono text-slate-600">
            <span>LGPD · Conformidade Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Política de Privacidade & Termos
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: {new Date().toLocaleDateString('pt-BR')} · Fedumenti Group Tecnologia Ltda
          </p>
        </header>

        <article className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950">1. Quem somos</h2>
            <p>
              A <strong>Fedumenti Group Tecnologia Ltda</strong> (CNPJ 26.306.303/0001-20), sediada em Guarapuava, Paraná, é uma holding de tecnologia proprietária e aceleradora de soluções digitais. Este documento estabelece nossas diretrizes de privacidade em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950">2. Dados que coletamos</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Dados de contato:</strong> nome, e-mail corporativo, telefone de WhatsApp e nome da empresa quando fornecidos espontaneamente em nossos canais de atendimento.</li>
              <li><strong>Dados técnicos essenciais:</strong> tipo de navegador, sistema operacional e horário de acesso para garantir a estabilidade técnica e segurança da aplicação.</li>
              <li><strong>Dados de métricas agregadas:</strong> estatísticas anônimas de navegação quando previamente consentidas pelo usuário através de cookies.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950">3. Finalidade do tratamento</h2>
            <p>
              Os dados coletados destinam-se exclusivamente a:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prestar atendimento executivo e direcionamento a soluções solicitadas (Google 360°, Linxar ou Serviços FCG);</li>
              <li>Formalizar propostas comerciais e contratos corporativos;</li>
              <li>Cumprir obrigações regulatórias, fiscais e legais vigentes.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950">4. Gestão de Cookies</h2>
            <p>
              Nosso portal utiliza cookies técnicos indispensáveis para o funcionamento e cookies analíticos opcionais. Você pode revogar ou aceitar o rastreamento a qualquer instante através do nosso banner de consentimento. Nenhuma métrica invasiva é executada sem autorização prévia.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950">5. Compartilhamento e Segurança</h2>
            <p>
              A Fedumenti Group não comercializa, licencia ou compartilha dados pessoais com terceiros para fins publicitários externos. Os dados são armazenados sob servidores seguros com criptografia SSL/TLS e rígidos controles de acesso.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950">6. Seus Direitos e Contato com o DPO</h2>
            <p>
              Você possui direito de confirmar a existência, acessar, corrigir, anonimizar ou solicitar a exclusão de seus dados a qualquer momento. Para requisições legais, contate nosso canal de privacidade:
            </p>
            <p className="font-medium text-slate-900">
              E-mail: <a href="mailto:contato@fedumentigroup.com.br" className="text-blue-600 hover:underline">contato@fedumentigroup.com.br</a>
              <br />
              Atendimento: Guarapuava, Paraná — Brasil
            </p>
          </section>
        </article>

        <footer className="pt-6 border-t border-slate-200 text-xs text-slate-500">
          © {new Date().getFullYear()} Fedumenti Group Tecnologia Ltda · Todos os direitos reservados.
        </footer>

      </div>
    </div>
  );
}
