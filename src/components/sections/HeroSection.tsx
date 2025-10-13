'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Vídeo de fundo (colocar em public/assets/hero-video.mp4) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src="/assets/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay leve para contraste (herda cor conforme tema) */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 mix-blend-normal z-0" />

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-md"
        >
          Bem-vindo à Fedumenti Group
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 max-w-3xl text-lg md:text-xl text-white/90"
        >
          Soluções em tecnologia e inovação para transformar o seu negócio.
        </motion.p>

        <div className="mt-8 flex gap-3">
          <a
            href="/#services"
            className="inline-block px-6 py-3 bg-white/90 text-blue-700 rounded-md font-medium shadow hover:bg-white transition"
          >
            Nossos Serviços
          </a>
          <a
            href="/empresas"
            className="inline-block px-6 py-3 border border-white/30 text-white rounded-md hover:bg-white/10 transition"
          >
            Empresas do Grupo
          </a>
        </div>
      </div>
    </section>
  );
}
