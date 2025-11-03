// src/app/politicas/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Entenda como coletamos, utilizamos e protegemos seus dados na Fedumenti Group.',
};

export default function PoliticasPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Política de Privacidade</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </header>

      <section className="prose prose-gray dark:prose-invert">
        <h2>1. Quem somos</h2>
        <p>
          A <strong>Fedumenti Group</strong> oferece soluções de tecnologia, marketing e
          crescimento. Este documento explica como tratamos seus dados pessoais, em
          conformidade com a LGPD (Lei nº 13.709/2018).
        </p>

        <h2>2. Dados que coletamos</h2>
        <ul>
          <li><strong>Dados de contato:</strong> nome, e-mail, telefone, empresa (quando informados em formulários).</li>
          <li><strong>Dados técnicos:</strong> IP, dispositivo, navegador, páginas acessadas e eventos (quando autorizado por cookies).</li>
          <li><strong>Dados de uso:</strong> interações com nossas páginas, CTAs e materiais.</li>
        </ul>

        <h2>3. Como utilizamos seus dados</h2>
        <ul>
          <li>Responder solicitações e prestar suporte;</li>
          <li>Melhorar nossos serviços e conteúdos;</li>
          <li>Mensurar performance de campanhas e do site (analytics);</li>
          <li>Comunicações de marketing, quando aplicável e permitido.</li>
        </ul>

        <h2>4. Cookies e tecnologias similares</h2>
        <p>
          Utilizamos cookies para lembrar preferências e medir audiência. Você pode
          gerenciar o consentimento pelo nosso banner de cookies. Sem consentimento,
          desativamos scripts de analytics/marketing.
        </p>

        <h2>5. Compartilhamento</h2>
        <p>
          Podemos compartilhar dados com provedores de hospedagem, analytics e parceiros
          necessários à execução do serviço. Não vendemos dados pessoais.
        </p>

        <h2>6. Segurança</h2>
        <p>
          Adotamos medidas técnicas e administrativas para proteger os dados, porém nenhum
          sistema é 100% seguro. Seguimos boas práticas razoáveis de mercado.
        </p>

        <h2>7. Seus direitos (LGPD)</h2>
        <ul>
          <li>Confirmar a existência de tratamento;</li>
          <li>Acessar, corrigir ou atualizar dados;</li>
          <li>Solicitar anonimização, bloqueio ou eliminação;</li>
          <li>Revogar consentimento a qualquer momento.</li>
        </ul>

        <h2>8. Contato do Encarregado (DPO)</h2>
        <p>
          Para exercer direitos ou tirar dúvidas, fale conosco em:{' '}
          <a className="underline" href="mailto:contato@fedumentigroup.com.br">
            contato@fedumentigroup.com.br
          </a>
        </p>

        <h2>9. Mudanças nesta política</h2>
        <p>
          Podemos atualizar este documento periodicamente. A versão vigente estará sempre
          publicada nesta página.
        </p>
      </section>

      <footer className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Fedumenti Group
      </footer>
    </main>
  );
}
