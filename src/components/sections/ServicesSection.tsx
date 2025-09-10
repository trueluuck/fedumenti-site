'use client'

import { motion } from 'framer-motion'

const services = [
  { title: 'Sites', description: 'Criação de sites profissionais e otimizados.', icon: '🌐' },
  { title: 'Tráfego Pago', description: 'Gestão estratégica de anúncios para resultados rápidos.', icon: '💰' },
  { title: 'Redes Sociais', description: 'Conteúdo e gestão de redes sociais para engajamento.', icon: '📱' },
  { title: 'Google 360°', description: 'Experiências imersivas e presença digital no Google.', icon: '📸' },
  { title: 'Marketplaces', description: 'Integração e gestão em múltiplos marketplaces.', icon: '🛒' },
  { title: 'Automação', description: 'Automatize processos e aumente sua produtividade.', icon: '⚙️' },
  { title: 'Assessoria Digital', description: 'Consultoria para transformar digitalmente seu negócio.', icon: '💼' },
  { title: 'Vídeo Mobile', description: 'Produção de conteúdo em vídeo para redes sociais.', icon: '🎥' },
  { title: 'Treinamentos & Palestras', description: 'Capacitação para equipes e líderes.', icon: '🎤' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
