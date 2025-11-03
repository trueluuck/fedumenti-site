// src/components/sections/ClientsCarousel.tsx
'use client';

import Image from 'next/image';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';

const clients = [
  { name: 'Cliente 1', logo: '/assets/clients/cliente1.png' },
  { name: 'Cliente 2', logo: '/assets/clients/cliente2.png' },
  { name: 'Cliente 3', logo: '/assets/clients/cliente3.png' },
  { name: 'Cliente 4', logo: '/assets/clients/cliente4.png' },
  { name: 'Cliente 5', logo: '/assets/clients/cliente5.png' },
  { name: 'Cliente 6', logo: '/assets/clients/cliente6.png' },
  { name: 'Cliente 7', logo: '/assets/clients/cliente7.png' },
  { name: 'Cliente 8', logo: '/assets/clients/cliente8.png' },
  { name: 'Cliente 9', logo: '/assets/clients/cliente9.png' },
  { name: 'Cliente 10', logo: '/assets/clients/cliente10.png' },
  { name: 'Cliente 11', logo: '/assets/clients/cliente11.png' },
  { name: 'Cliente 12', logo: '/assets/clients/cliente12.png' },
  { name: 'Cliente 13', logo: '/assets/clients/cliente13.png' },
  { name: 'Cliente 14', logo: '/assets/clients/cliente14.png' },
  { name: 'Cliente 15', logo: '/assets/clients/cliente15.png' },
  { name: 'Cliente 16', logo: '/assets/clients/cliente16.png' },
  { name: 'Cliente 17', logo: '/assets/clients/cliente17.png' },
  { name: 'Cliente 18', logo: '/assets/clients/cliente18.png' },
  { name: 'Cliente 19', logo: '/assets/clients/cliente19.png' },
  { name: 'Cliente 20', logo: '/assets/clients/cliente20.png' },
];
export default function ClientsCarousel() {
  const controls = useAnimation();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // velocidade px/s
  const SPEED = 48;

  // triplica a lista para continuidade perfeita
  const items = useMemo(() => [...clients, ...clients, ...clients], []);

  const startLoop = useCallback(async () => {
    if (reducedMotion) return;
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.getBoundingClientRect().width;
    const unitWidth = totalWidth / 3;
    const duration = Math.max(10, unitWidth / SPEED);

    await controls.start({
      x: ['0%', '-100%'],
      transition: { repeat: Infinity, duration, ease: 'linear' },
    });
  }, [controls, reducedMotion]);

  const stopLoop = useCallback(() => controls.stop(), [controls]);

  useEffect(() => {
    startLoop();

    const onResize = () => {
      stopLoop();
      const id = setTimeout(() => startLoop(), 150);
      return () => clearTimeout(id);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      stopLoop();
    };
  }, [startLoop, stopLoop]);

  // interações pausam o loop
  const handlePointerDown = () => stopLoop();
  const handlePointerUp = () => startLoop();
  const handleMouseEnter = () => stopLoop();
  const handleMouseLeave = () => startLoop();
  const handleWheel = () => stopLoop();
  const handleScroll = () => stopLoop();

  return (
    <section className="py-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-sm transition-colors">
      <div className="max-w-6xl mx-auto text-center mb-3">
        <h2
          className="
            text-base md:text-lg font-semibold
            text-gray-800 dark:text-gray-200
            tracking-wide
          "
        >
          Empresas que já confiaram na Fedumenti Group
        </h2>
        <div className="mt-2 h-px w-40 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/20" />
      </div>

      <div
        className="overflow-hidden relative w-full"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        onScroll={handleScroll}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          animate={controls}
        >
          {items.map((client, idx) => (
            <button
              key={`${client.name}-${idx}`}
              onClick={() => router.push('/depoimentos')}
              className="flex items-center justify-center min-w-[64px] px-2 focus:outline-none"
              aria-label={`Ver depoimentos (${client.name})`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={56}
                height={32}
                sizes="(max-width: 768px) 56px, 64px"
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading={idx < clients.length ? 'eager' : 'lazy'}
                draggable={false}
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
