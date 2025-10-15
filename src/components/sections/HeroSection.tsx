'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden transition-colors duration-300"
    >
      {/* Camada do VÍDEO (fica por baixo, dentro do stacking do section) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          // cache-bust simples para forçar o asset novo em prod (remova quando não precisar mais)
          className="h-full w-full object-cover block"
          src="/assets/hero-video.mp4?v=3"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/hero-video.mp4?v=3" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/55 md:bg-black/50" />

      {/* Conteúdo */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 text-white"
        >
          Bem-vindo à Fedumenti Group
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl max-w-2xl text-gray-100"
        >
          Soluções em tecnologia e inovação para transformar o seu negócio.
        </motion.p>
      </div>
    </section>
  );
}
