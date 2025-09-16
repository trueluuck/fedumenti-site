import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import ClientsCarousel from '@/components/sections/ClientsCarousel';

export const metadata = {
  title: 'Fedumenti Group | Início',
  description: 'Soluções em tecnologia e inovação para transformar o seu negócio.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
         <ClientsCarousel />
      
    </main>
  );
}
