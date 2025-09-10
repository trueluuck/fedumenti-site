import EmpresasSection from '@/components/sections/EmpresasSection'

export const metadata = {
  title: 'Empresas | Fedumenti Group',
  description: 'Conheça as empresas que fazem parte do Fedumenti Group.',
}

export default function EmpresasPage() {
  return (
    <main className="min-h-screen">
      <EmpresasSection />
    </main>
  )
}
