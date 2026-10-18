# FCG — Fedumenti Group | Portal Institucional & Ecossistema de Ativos

Portal oficial da **Fedumenti Group (FCG)**, holding de tecnologia focada em criar infraestrutura de software, inteligência de dados e escala para operações comerciais consolidadas.

---

## 🚀 Stack Tecnológico

| Tecnologia | Versão | Aplicação |
|---|---|---|
| [Next.js](https://nextjs.org) | 15.5+ (App Router) | Framework Core & Server Components |
| [React](https://reactjs.org) | 19 | Camada de Apresentação e Hooks |
| [Tailwind CSS](https://tailwindcss.com) | 4+ via `@theme` | Design System Modern B2B Enterprise |
| [Lucide React](https://lucide.dev) | Latest | Biblioteca de Ícones |
| [Vercel Analytics](https://vercel.com/analytics) | Latest | Telemetria de Core Web Vitals |

---

## 📁 Estrutura do Projeto

```text
src/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage FCG Holding (Hero Mockup, Tese, Ativos)
│   ├── sobre/                  # Dados institucionais, história e parcerias
│   ├── contato/                # Canais corporativos oficiais (WhatsApp / E-mail)
│   ├── google-360/             # Vitrine Google 360° com Padrão Facade
│   ├── linxar/                 # Ecossistema Linxar (Visão Geral das 4 Verticais)
│   │   ├── hub/                # Linxar Hub (Varejo & Marketplaces)
│   │   ├── pref/               # Linxar Pref (Compras Governamentais B2G)
│   │   ├── workplace/          # Linxar Workplace (Dropshipping Descentralizado)
│   │   └── middleware/         # Linxar Middleware (API Headless B2B)
│   ├── politicas/              # Política de Privacidade & LGPD
│   ├── layout.tsx              # Root Layout, Navbar Flutuante e Footer
│   ├── robots.ts               # Geração nativa de /robots.txt
│   └── sitemap.ts              # Sitemap dinâmico oficial com as 10 rotas ativas
├── components/
│   ├── home/                   # FCGHero (Mockup macOS), FCGThesis, FCGAssets, FCGInstitutional
│   ├── google360/              # CurvedCarousel (Otimizado via Facade)
│   ├── analytics/              # AnalyticsGate (GA4 reativo via event bus)
│   ├── common/                 # CookieBanner (LGPD sem recarregamento de página)
│   └── ui/                     # Navbar (Floating Glassmorphism), Footer
└── lib/
    ├── utils.ts                # Função cn() via clsx e tailwind-merge
    ├── seo.ts                  # Helpers de metadados
    └── track.ts                # Utilitários de analytics
```

---

## 🛠️ Executando Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Compilar para produção e validar build
npm run build
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 📬 Contato Corporativo

- **Holding**: Fedumenti Group Tecnologia Ltda
- **CNPJ**: 26.306.303/0001-20
- **Sede**: Guarapuava, Paraná — Brasil
- **WhatsApp**: [(42) 9 9921-7736](https://wa.me/5542999217736)
- **E-mail**: [contato@fedumentigroup.com.br](mailto:contato@fedumentigroup.com.br)
