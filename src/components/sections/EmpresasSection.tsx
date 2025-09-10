'use client'

import { motion } from 'framer-motion'

const empresas = [
  {
    name: 'Guarapuava360',
    description: 'Digitalização regional com foco em inovação local.',
    icon: '🌍',
  },
  {
    name: 'SevenLayers Soluções',
    description: 'Startup: Hub omnichannel para marketplaces.',
    icon: '🚀',
  },
  {
    name: 'Paraná360',
    description: 'Atendimento digital para todo o estado do Paraná.',
    icon: '🏢',
  },
]

export default function EmpresasSection() {
  return (
    <section id="empresas" className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Empresas do Grupo
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {empresas.map((empresa, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{empresa.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{empresa.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{empresa.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
