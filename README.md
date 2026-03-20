# Fedumenti Group — Site Institucional

Site oficial do **Fedumenti Group**, empresa de tecnologia, inovação e performance digital sediada em Guarapuava, PR.

## 🚀 Stack Tecnológico

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 15+ (App Router) | Framework principal |
| [React](https://reactjs.org) | 19 | UI |
| [Tailwind CSS](https://tailwindcss.com) | 4+ | Estilização (Aurora, Glassmorphism) |
| [Lucide React](https://lucide.dev) | Latest | Ícones |
| [OpenAI](https://platform.openai.com) | Assistants API v2 | Chatbot KATIA |
| [Framer Motion](https://framer.com/motion) | Latest | Animações (componentes selecionados) |

## 📁 Estrutura Principal

```
src/
├── app/                    # Roteamento App Router
│   ├── page.tsx            # Homepage
│   ├── about/              # Quem Somos
│   ├── services/           # Serviços
│   ├── contact/            # Contato
│   ├── lp/                 # Landing Pages (Google 360, Reflorestamento, etc.)
│   └── api/chat/           # API Route — KATIA (OpenAI Assistants)
├── components/
│   ├── ui/                 # Navbar, Footer
│   ├── sections/           # HeroSection, ClientsCarousel, etc.
│   ├── chat/               # FloatingChatbot (KATIA), ChatbotWrapper
│   ├── common/             # CookieBanner, SafeImage, AnalyticsGate
│   └── lp/                 # Componentes exclusivos de LPs
├── contexts/               # ThemeContext
├── hooks/                  # usePrefersReducedMotion, useScrollY
└── lib/                    # utils (cn), helpers SEO
```

## 🤖 Chatbot KATIA

Assistente virtual front-door integrada via **OpenAI Assistants API v2** (ID: `asst_OHTDVTh6L0y03KiXtB9jJzBS`).

- Treinada como secretária virtual da Fedumenti Group (pt-BR)
- Fluxo: cliente vs. novo lead → Menu numérico → Handoff WhatsApp
- LGPD compliant: coleta mínima com consentimento explícito
- Configurável via `.env.local`:
  ```
  OPENAI_API_KEY=sk-...
  OPENAI_ASSISTANT_ID=asst_OHTDVTh6L0y03KiXtB9jJzBS
  ```

## 🛠️ Rodando Localmente

```bash
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📬 Contato

- **WhatsApp**: [(42) 9 9921-7736](https://wa.me/5542999217736)
- **E-mail**: contato@fedumentigroup.com.br
- **CNPJ**: 26.306.303/0001-20

---
*Fedumenti Group — Tecnologia com Propósito*
