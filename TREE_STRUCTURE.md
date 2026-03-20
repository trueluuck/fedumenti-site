# 📂 Árvore de Arquivos do Projeto (Filtro)

Este documento apresenta a estrutura de diretórios e arquivos principais, omitindo `node_modules`, `.next` e arquivos de configuração latentes.

```text
/fedumenti-site/
├── public/                 # Assets estáticos (Imagens, Vídeos, Fontes)
│   ├── assets/             # Subdiretórios estruturados (Posters, Heros)
│   └── fonts/              # Fontes locais e otimizadas
├── scripts/                # Scripts de compressão e automação (node scripts)
├── src/
│   ├── app/                # Next.js 15 (App Router)
│   │   ├── api/            # Serverless Routes (Contact)
│   │   ├── lp/             # Landing Pages separadas por nicho
│   │   │   ├── common/     # Componentes base das LPs
│   │   │   └── niche.../   # LPs individuais (CRM, SEO, Ads...)
│   │   ├── services/       # Detalhamento de Serviços
│   │   ├── about/          # Quem Somos e História
│   │   ├── layout.tsx      # Configurações globais e providers
│   │   └── page.tsx        # Homepage (Fedumenti Início)
│   ├── components/
│   │   ├── analytics/      # Gate de rastreio (Google/FB)
│   │   ├── common/         # Componentes transversais (Image, Video, Lazy)
│   │   ├── sections/       # Blocos visuais da homepage e páginas
│   │   │   ├── HeroSection # Banner Dinâmico principal
│   │   │   └── ...Section  # Blocos de conteúdo modular
│   │   ├── shared/         # Componentes compartilhados (Navbar, Footer)
│   │   └── ui/             # Elementos de UI atômicos (Button, ThemeToggle)
│   ├── contexts/           # Provedores de estado (Tema dark/light)
│   ├── hooks/              # Hooks customizados (Scroll, Motion, Analytics)
│   └── lib/                # Funções de ajuda (Tracking, SEO, Metadata)
├── .env.example            # Exemplo de variáveis de ambiente
├── next.config.ts          # Configuração do compilador Next.js
├── package.json            # Dependências e scripts npm
├── postcss.config.js       # Estilização Tailwind
├── tailwind.config.js      # Configurações de cores e design do Tailwind 4
└── tsconfig.json           # Configurações do compilador TypeScript
```

---
💡 *Dica: Use `npm run img:all` para otimizar novas imagens adicionadas em `public/assets/posters`.*
