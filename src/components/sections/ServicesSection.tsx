'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Consultoria em TI',
    description: 'Soluções estratégicas de tecnologia para transformar negócios.',
    icon: '💻',
  },
  {
    title: 'Desenvolvimento de Sistemas',
    description: 'Aplicações robustas e escaláveis sob medida.',
    icon: '🧩',
  },
  {
    title: 'Automação de Processos',
    description: 'Automatize fluxos para otimizar tempo e reduzir custos.',
    icon: '⚙️',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 md:px-16 bg-gray-50">
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
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
