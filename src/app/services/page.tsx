import ServicesSection from '@/components/sections/ServicesSection'

export const metadata = {
  title: 'Serviços | Fedumenti Group',
  description: 'Conheça os serviços oferecidos pela Fedumenti Group para impulsionar seu negócio.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesSection />
    </main>
  )
}
