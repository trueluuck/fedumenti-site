export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Fedumenti Group. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ e Next.js</p>
      </div>
    </footer>
  );
}
