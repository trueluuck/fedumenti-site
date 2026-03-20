# 🔍 Análise de Redundâncias e Erros

Este documento lista pontos de otimização identificados na fase de auditoria da base de código (**Fedumenti Site — Março 2026**).

## 🛠️ Redundâncias Identificadas

1.  **Componentes Hero Duplicados**:
    -   `src/components/sections/HeroSection.tsx`
    -   `src/components/sections/HeroCarousel.tsx`
    -   *Problema*: Ambos implementam a mesma lógica de banner principal. `HeroSection` usa YouTubeHeroPlayer, enquanto `HeroCarousel` usa o tag `<video>` nativo e LiteYouTube.
    -   *Sugestão*: Unificar em um único `HeroSection` mais robusto que suporte múltiplos tipos de mídia (Video MP4, YouTube, Image) e unifique CTAs.

2.  **Lógica de Acessibilidade Fragmentada**:
    -   O hook `usePrefersReducedMotion` está definido localmente em múltiplos arquivos (`HeroSection.tsx`, `HeroCarousel.tsx`).
    -   *Sugestão*: Extrair para `src/hooks/usePrefersReducedMotion.ts` e exportar globalmente.

3.  **Componentes Compartilhados não Utilizados**:
    -   `src/components/shared/ConditionalNavbar.tsx`, `ConditionalFooter.tsx`, e `ConditionalHeader.tsx`.
    -   *Problema*: Parecem ser esqueletos de um refactoring anterior, mas as páginas atuais importam diretamente de `src/components/ui/Navbar.tsx`.
    -   *Sugestão*: Remover se não houver intenção de usá-los em landing pages específicas ou consolidar a lógica de "Header Oculto" nos componentes principais via `usePathname`.

4.  **Consenso e Keys de Consentimento**:
    -   `AnalyticsGate.tsx` verifica `fg-consent` e `cookie-consent`.
    -   *Problema*: O app deve usar uma única key para evitar inconsistências no rastreio.
    -   *Sugestão*: Mover para uma única constante no `src/lib/constants.ts` e padronizar.

5.  **Componentes de Vídeo Redundantes**:
    -   `LiteYouTube.tsx`, `YouTubeHeroPlayer.tsx`, e `VideoPlayer.tsx`.
    -   *Sugestão*: Unificar as bibliotecas de vídeo em um componente `MediaHost` ou configurar o `YouTubeHeroPlayer` para ser o componente padrão de mídia externa.

## ⚠️ Erros e Avisos (Configuração)

1.  **Configuração do Next.js**: No `next.config.ts`, `modularizeImports` para `lucide-react` é redundante, pois o Next.js 14+ já faz isso via `experimental.optimizePackageImports` (que você também já habilitou).
2.  **Dependências Fantasmas**: `lodash-es` é referenciado no config mas não consta no `package.json`. *Ação*: Remova a referência se não for usar ou instale a dependência.
3.  **Documentação de Árvore (`tree.txt`)**: O arquivo gerado com o comando `tree` do Windows contém `node_modules` (1MB de texto redundante). Isso prejudica a leitura e performance da IDE/Agent. *Ação*: Ele foi substituído por `TREE_STRUCTURE.md`.

## 📈 Sugestões de Melhorias

-   **Otimização de Assets**: Integrar o `next-video` ou configurar o `Cloudinary/Vercel Blob` para o hosting do `hero-video.mp4`, pois vídeos de 11MB no repositório podem tornar o clone/build lento.
-   **Validação de Formulário**: Adicionar `Zod` + `React Hook Form` no `ContactSection` para garantir validação forte de leads, em vez de validações simples em JS.
-   **Cache de Assets**: Aproveitar os `rewrites` no `next.config.ts` para servir resoluções específicas de imagens de forma ainda mais automatizada.

---
📅 *Auditoria concluída em 18/03/2026*
