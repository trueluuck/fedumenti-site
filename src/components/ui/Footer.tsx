export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6 mt-16 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Fedumenti Group. Todos os direitos reservados.
        </p>

        <a
          href="/contact"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition"
        >
          Fale Conosco
        </a>
      </div>
    </footer>
  );
}
