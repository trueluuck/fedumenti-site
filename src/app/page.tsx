import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ClientsCarousel from '@/components/sections/ClientsCarousel';
//import SeedsCarousel from '@/components/sections/SeedsCarousel';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Fedumenti Group | Início',
  description: 'Soluções em tecnologia e inovação para transformar o seu negócio.',
};

export default function HomePage() {
  return (
    <main>
      <ClientsCarousel />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
