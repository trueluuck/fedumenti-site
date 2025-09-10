'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-blue-700 dark:text-blue-400">
          Fale Conosco
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg mb-6">
            Entre em contato conosco diretamente pelo WhatsApp.
          </p>

          <a
            href="https://wa.me/5542999217736" // 🔹 substitua pelo número real
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
          >
            <MessageCircle size={20} />
            Conversar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
