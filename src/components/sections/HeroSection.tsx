'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-inherit"
    >
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/assets/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay adaptável para modo claro/escuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/60 dark:bg-black/60 z-0" />

      {/* Conteúdo com animação */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black dark:text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Bem-vindo à Fedumenti Group
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Soluções em tecnologia e inovação para transformar o seu negócio.
        </motion.p>
      </div>
    </section>
  );
}
