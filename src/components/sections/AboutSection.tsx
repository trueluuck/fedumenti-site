'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-inherit text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Quem Somos
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          A <strong>Fedumenti Group</strong> é especializada em soluções tecnológicas de alto impacto,
          promovendo inovação, eficiência e transformação digital em diversos setores. Nossa equipe une
          expertise técnica com visão estratégica para entregar resultados concretos e escaláveis.
        </motion.p>
      </div>
    </section>
  );
}
