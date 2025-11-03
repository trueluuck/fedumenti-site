'use client';

export default function SkipLink() {
  return (
    <a
      href="#conteudo"
      className="
        sr-only focus:not-sr-only fixed z-[100] top-3 left-3
        bg-black/85 text-white px-4 py-2 rounded-full
      "
    >
      Pular para o conteúdo principal
    </a>
  );
}
