// src/components/sections/ClientsCarousel.tsx
'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const clients = [
  { name: 'Cliente 1', logo: '/assets/clients/cliente1.png' },
  { name: 'Cliente 2', logo: '/assets/clients/cliente2.png' },
  { name: 'Cliente 3', logo: '/assets/clients/cliente3.png' },
  { name: 'Cliente 4', logo: '/assets/clients/cliente4.png' },
  { name: 'Cliente 5', logo: '/assets/clients/cliente5.png' },
  { name: 'Cliente 6', logo: '/assets/clients/cliente6.png' },
  { name: 'Cliente 7', logo: '/assets/clients/cliente7.png' },
];

export default function ClientsCarousel() {
  const controls = useAnimation();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemWidth = typeof window !== 'undefined' && window.innerWidth < 640 ? 140 : 160;
  const logosPerSlide = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 5;
  const totalSlides = Math.ceil(clients.length / logosPerSlide);

  const startInfiniteScroll = () => {
    controls.start({
      x: ['0%', '-100%'],
      transition: { repeat: Infinity, duration: 40, ease: 'linear' },
    });
  };

  useEffect(() => {
    startInfiniteScroll();
  }, []);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => startInfiniteScroll();

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = async (_: any, info: { offset: { x: number } }) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const snapDistance = Math.round(offset / itemWidth) * itemWidth;
    await controls.start({
      x: snapDistance,
      transition: { type: 'spring', stiffness: 200, damping: 25 },
    });
    const index = Math.abs(Math.round(offset / (itemWidth * logosPerSlide))) % totalSlides;
    setActiveIndex(index);
    setTimeout(() => startInfiniteScroll(), 800);
  };

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Empresas que já confiaram em nossos serviços:
        </h2>
      </div>

      {/* Carrossel responsivo */}
      <div
        ref={containerRef}
        className="overflow-hidden relative w-full touch-pan-x select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-8 sm:gap-12 md:gap-16 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -600, right: 600 }}
          dragElastic={0.2}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <button
              key={idx}
              onClick={() => router.push('/depoimentos')}
              aria-label={`Ver depoimentos de ${client.name}`}
              className="flex items-center justify-center min-w-[140px] sm:min-w-[160px] px-6 focus:outline-none"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={70}
                loading="lazy"
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </button>
          ))}
        </motion.div>
      </div>

      {/* Indicadores (dots) no mobile */}
      <div className="flex justify-center mt-6 gap-2 md:hidden">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === activeIndex ? 'bg-gray-800 dark:bg-gray-200' : 'bg-gray-400 dark:bg-gray-600'
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </section>
  );
}
