// src/components/sections/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import Section from '@/components/common/Section';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Quem Somos
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mx-auto max-w-3xl muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          A <strong>Fedumenti Group</strong> é especializada em soluções tecnológicas de alto impacto,
          promovendo inovação, eficiência e transformação digital em diversos setores. Nossa equipe une
          expertise técnica com visão estratégica para entregar resultados concretos e escaláveis.
        </motion.p>

        <div className="mt-8">
          <Link href="/about" className="btn-outline">
            Conheça nossa história →
          </Link>
        </div>
      </div>
    </Section>
  );
}
