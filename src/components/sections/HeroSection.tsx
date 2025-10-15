'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden transition-colors duration-300">
      {/* Vídeo de fundo */}
      <video
        key="/assets/hero-video.mp4?v=2"            // força re-render/hydration
        className="absolute inset-0 h-full w-full object-cover z-[-1]"
        src="/assets/hero-video.mp4?v=2"            // cache-bust na CDN
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/hero-video.mp4?v=2" type="video/mp4" />
      </video>

      {/* Overlay escuro (melhora contraste) */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/40 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
        >
          Bem-vindo à Fedumenti Group
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}
          className="text-lg md:text-xl max-w-2xl text-gray-100"
        >
          Soluções em tecnologia e inovação para transformar o seu negócio.
        </motion.p>
      </div>
    </section>
  );
}
