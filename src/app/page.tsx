import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsCarousel from "@/components/sections/ClientsCarousel";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Fedumenti Group",
  description: "Soluções em tecnologia e inovação para transformar o seu negócio.",
};

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <HeroSection />
      <ServicesSection />
      <ClientsCarousel />
      <ContactSection />
    </main>
  );
}
