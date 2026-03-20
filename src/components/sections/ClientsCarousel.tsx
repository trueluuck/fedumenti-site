'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const clients = [
  { name: 'Cliente 1',  logo: '/assets/clients/cliente1.png' },
  { name: 'Cliente 2',  logo: '/assets/clients/cliente2.png' },
  { name: 'Cliente 3',  logo: '/assets/clients/cliente3.png' },
  { name: 'Cliente 4',  logo: '/assets/clients/cliente4.png' },
  { name: 'Cliente 5',  logo: '/assets/clients/cliente5.png' },
  { name: 'Cliente 6',  logo: '/assets/clients/cliente6.png' },
  { name: 'Cliente 7',  logo: '/assets/clients/cliente7.png' },
  { name: 'Cliente 8',  logo: '/assets/clients/cliente8.png' },
  { name: 'Cliente 9',  logo: '/assets/clients/cliente9.png' },
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

// Duplicate for seamless infinite loop
const loopTrack = [...clients, ...clients];

export default function ClientsCarousel() {
  const animRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = animRef.current;
    if (!el) return;
    const pause = () => { el.style.animationPlayState = 'paused'; };
    const play  = () => { el.style.animationPlayState = 'running'; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', play);
    return () => {
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', play);
    };
  }, []);

  return (
    <section className="relative w-full">
      {/* Top separator line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      {/* Main band */}
      <div className="relative py-7 bg-card/30 dark:bg-background/60 backdrop-blur-sm">

        {/* Label row */}
        <div className="flex items-center gap-4 px-10 mb-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/40" />
          <p className="shrink-0 text-[10px] font-extrabold uppercase tracking-[0.3em] text-muted-foreground/60 whitespace-nowrap select-none">
            Empresas que já confiaram na Fedumenti
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/40" />
        </div>

        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none
                        bg-gradient-to-r from-card/80 dark:from-background/80 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none
                        bg-gradient-to-l from-card/80 dark:from-background/80 to-transparent" />

        {/* Scrolling strip */}
        <div className="overflow-hidden w-full">
          <div
            ref={animRef}
            className="flex items-center clients-marquee"
            style={{ width: 'max-content', gap: '2rem' }}
          >
            {loopTrack.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="
                  group flex-shrink-0 flex items-center justify-center
                  h-14 w-[110px] px-3 rounded-xl
                  border border-transparent
                  hover:border-border/50 hover:bg-accent/20 hover:shadow-sm
                  transition-all duration-300 cursor-default
                "
                title={client.name}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={96}
                  height={40}
                  sizes="96px"
                  className="
                    h-9 w-auto max-w-[96px] object-contain select-none
                    grayscale opacity-35
                    group-hover:grayscale-0 group-hover:opacity-100
                    transition-all duration-500
                  "
                  draggable={false}
                  loading={idx < clients.length ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />

    </section>
  );
}
