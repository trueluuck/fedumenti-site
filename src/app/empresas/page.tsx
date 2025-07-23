'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Modal from '@/components/ui/Modal';

const companies = [
  {
    name: 'Pia Films e Produções',
    description: 'Agência de comunicação digital com foco em criatividade visual e conteúdo.',
    details: 'Produção audiovisual, branding, campanhas publicitárias e projetos culturais.',
  },
  {
    name: 'Boost Connect / Comunidade X-Grow',
    description: 'Infoproduto e comunidade de desenvolvimento pessoal e marketing digital.',
    details: 'Mentorias, aulas gravadas, grupo fechado e eventos ao vivo com experts.',
  },
  {
    name: 'Thief Store',
    description: 'Loja de roupas com identidade urbana e streetwear.',
    details: 'Coleções exclusivas, parcerias com artistas locais e e-commerce ativo.',
    link: 'https://thiefstore.com.br',
  },
  {
    name: 'LittleFac3d',
    description: 'Impressões 3D personalizadas e criativas para decoração e uso técnico.',
    details: 'Projetos sob medida, brinquedos, miniaturas e soluções técnicas.',
  },
  {
    name: 'Paraná360',
    description: 'Assessoria especializada para vendas em marketplaces.',
    details: 'Gestão de lojas, SEO de produtos, logística e consultoria de vendas online.',
  },
  {
    name: 'Guarapuava360',
    description: 'Google 360 e presença digital para negócios locais.',
    details: 'Fotografia 360, tour virtual, inclusão em mapas e Google Meu Negócio.',
  },
  {
    name: 'Seven Layers Soluções',
    description: 'Startup incubada na UTFPR com foco em inovação e sistemas.',
    details: 'Projetos em desenvolvimento com base em dados e soluções escaláveis.',
  },
  {
    name: 'Play House',
    description: 'Organização de eventos e experiências únicas.',
    details: 'Festas temáticas, produção de palco, som, luz e ativações culturais.',
  },
  {
    name: 'Gorpa Music',
    description: 'Produção de eventos musicais e festivais autorais.',
    details: 'Festivais, shows, parcerias com DJs e bandas independentes.',
  },
  {
    name: 'Projetos Sociais',
    description: 'Iniciativas de impacto social vinculadas à holding.',
    details: 'Apoio a causas locais, eventos beneficentes, ações de inclusão digital.',
  },
];

export default function CompaniesPage() {
  const [selected, setSelected] = useState<{
  name: string;
  description: string;
  details: string;
  link?: string;
} | null>(null);


  return (
    <>
      <Head>
        <title>Empresas | Fedumenti Group</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
        <main className="flex-grow pt-24 px-6 pb-16 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-10 text-center text-white"
          >
            Empresas & Iniciativas do Grupo
          </motion.h1>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-red-700 transition-shadow focus:outline-none cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                tabIndex={0}
                role="button"
                aria-label={`Mais sobre ${company.name}`}
                onClick={() => setSelected(company)}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(company)}
              >
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-sm text-gray-300">{company.description}</p>
              </motion.div>
            ))}
          </section>
        </main>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <h3 className="text-2xl font-bold mb-2">{selected.name}</h3>
            <p className="text-gray-300 mb-3">{selected.details}</p>
            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 underline hover:text-red-300"
              >
                Visitar site
              </a>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
