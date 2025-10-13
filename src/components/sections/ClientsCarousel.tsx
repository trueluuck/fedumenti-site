'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const clients = [
  { name: 'Cliente 1', logo: '/assets/clients/cliente1.png' },
  { name: 'Cliente 2', logo: '/assets/clients/cliente2.png' },
  { name: 'Cliente 3', logo: '/assets/clients/cliente3.png' },
  { name: 'Cliente 4', logo: '/assets/clients/cliente4.png' },
  { name: 'Cliente 5', logo: '/assets/clients/cliente5.png' },
  // basta adicionar mais aqui sem limite
];

export default function ClientsCarousel() {
  const controls = useAnimation();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // inicia a animação infinita
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        repeat: Infinity,
        duration: 40, // mais lento e suave
        ease: 'linear',
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop(); // pausa
  };

  const handleMouseLeave = () => {
    // retoma animação
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: 'linear',
      },
    });
  };

  return (
    <section className="py-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Empresas que já confiaram na Fedumenti Group
        </h2>
      </div>

      <div
        className="overflow-hidden relative w-full"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-16"
          animate={controls}
        >
          
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <button
              key={idx}
              onClick={() => router.push('/depoimentos')}
              className="flex items-center justify-center min-w-[140px] px-6 focus:outline-none"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={70}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}