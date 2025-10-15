'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden transition-colors duration-300">
      {/* “Isca” para priorizar o download do poster (beneficia LCP) */}
      <img
        src="/assets/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="sr-only" // usa a classe utilitária se tiver; senão, use style={{position:'absolute',width:0,height:0,overflow:'hidden'}}
      />

      {/* Camada do VÍDEO (fica por baixo, mas dentro do stacking do section) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          className="h-full w-full object-cover block"
          src="/assets/hero-video.mp4"
          poster="/assets/hero-poster.jpg"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Overlay de contraste (claro/escuro) */}
      <div className="absolute inset-0 z-10 bg-black/60 dark:bg-black/40 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Bem-vindo à Fedumenti Group
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Soluções em tecnologia e inovação para transformar o seu negócio.
        </motion.p>
      </div>
    </section>
  );
}