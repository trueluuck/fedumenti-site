export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Fedumenti Group. Todos os direitos reservados.
        </p>

        <a
          href="/contact"
          className="text-sm text-blue-600 hover:underline transition"
        >
          Fale Conosco
        </a>
      </div>
    </footer>
  );
}
