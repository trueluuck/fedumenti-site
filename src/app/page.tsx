'use client';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section id="sobre" className="scroll-mt-20">
        <AboutSection />
      </section>

      <section id="servicos" className="scroll-mt-20">
        <ServicesSection />
      </section>

      <section id="contato" className="scroll-mt-20">
        <ContactSection />
      </section>
    </main>
  );
}
