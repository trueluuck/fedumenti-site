# PRD — Product Requirements Document
## Fedumenti Group (FCG) Portal · v2.0 · Outubro 2026

---

## 📄 Visão Geral

| Campo | Valor |
|---|---|
| **Produto** | Portal Institucional da Holding Fedumenti Group (FCG) |
| **Visão** | Vitrine institucional de tecnologia proprietária, holding venture builder e orquestração de dados corporativos (Ecossistema Linxar & Google 360°) |
| **Empresa** | Fedumenti Group Tecnologia Ltda · Guarapuava, PR · CNPJ 26.306.303/0001-20 |
| **Ecossistema** | Incubada na Sprint UTFPR, chancelada por Sebrae Startups e Google for Startups |
| **Stakeholders** | Empresas consolidadas, indústrias, atacadistas, grandes sellers, investidores e parceiros B2B/B2G |

---

## 🎯 Objetivos Estratégicos de Negócio

1. **Autoridade de Holding & Deep Tech**: Posicionar a FCG como holding de tecnologia focada em criar infraestrutura de software e inteligência de dados, afastando-se definitivamente do modelo de agência convencional.
2. **Exibição do Ecossistema Linxar**: Apresentar com clareza as 4 verticais estratégicas da Linxar (Hub, Pref, Workplace e Middleware), direcionando tráfego qualificado para contratação e parcerias.
3. **Conversão de Presença no Google Maps (Google 360°)**: Oferecer e converter o serviço profissional de tour esférico em HDR no Google Maps por valor único fixo de R$ 499,00.
4. **Governança & Compliance LGPD**: Garantir transparência de dados corporativos, chancelas acadêmicas/governamentais e consentimento de cookies em total conformidade com a LGPD.

---

## 👤 Público-Alvo e ICP (Ideal Customer Profile)

| Segmento | Perfil | Demanda Atendida |
|---|---|---|
| **CEOs e Diretores de Indústrias/Atacados** | Empresas com faturamento estável e operação sólida | Fim da digitação manual de produtos, automação PIM AI, DIFAL 27 UFs e multicanal |
| **Empresas Locais e Regionais** | Estabelecimentos físicos, clínicas, escritórios | Autoridade local com Tour Virtual 360° oficial no Google Maps |
| **Fundos, Investidores & Governo** | Ecossistemas de inovação e compras públicas (B2G) | Infraestrutura de dados auditável, GovTech (Linxar Pref) e API Headless |

---

## 🧱 Arquitetura e Stack Tecnológico

- **Framework**: Next.js 15+ (App Router)
- **Runtime & UI**: React 19 (Server Components + Client Components otimizados)
- **Estilização**: Tailwind CSS v4 via `@theme` (Design System B2B Enterprise / Dark Slate)
- **Ícones**: Lucide React
- **Performance**: Padrão Facade para iframes de mídia externa; zero carregamento redundante de WebGL no LCP
- **Compliance & Telemetria**: Gate de consentimento reativo LGPD sem quebra de sessão (`fg-consent` + `consentchange` event bus) conectado ao Google Analytics 4

---

## ✅ Requisitos Funcionais (RF)

| ID | Requisito | Escopo | Status |
|---|---|---|---|
| **RF01** | **Floating Glassmorphism Navbar** | Barra suspensa centralizada (`rounded-full`, `backdrop-blur-xl`), logo FCG, links e botão direto para WhatsApp da diretoria | ✅ Implementado |
| **RF02** | **Hero "Show, Don't Tell" com Mockup macOS** | Tipografia contrastante, badge monoespaçado e moldura de janela de terminal/browser com dashboard de orquestração ao vivo | ✅ Implementado |
| **RF03** | **Barra de Prova Social e Chancelas** | Exibição de autoridade institucional: UTFPR Sprint, Google for Startups, Sebrae Startups e CNPJ | ✅ Implementado |
| **RF04** | **Tese FCG (A Fricção vs A Engenharia)** | Estrutura comparativa B2B demonstrando as dores de digitação manual vs a tecnologia proprietária da FCG | ✅ Implementado |
| **RF05** | **Vitrine de Ativos Controlados** | Cards dos negócios da holding: Linxar (Commerce Intelligence) e Google 360° HDR | ✅ Implementado |
| **RF06** | **Google 360° com Padrão Facade** | Carrossel de demonstrações reais em alta resolução montando iframes interativos sob demanda | ✅ Implementado |
| **RF07** | **Apresentação do Ecossistema Linxar (4 Verticais)** | Páginas dedicadas: Linxar Hub (`/linxar/hub`), Linxar Pref (`/linxar/pref`), Linxar Workplace (`/linxar/workplace`), Linxar Middleware (`/linxar/middleware`) | ✅ Implementado |
| **RF08** | **Banner LGPD Reativo** | Consentimento atômico no `localStorage` sem recarregamento forçado de tela | ✅ Implementado |
| **RF09** | **Página Institucional "Sobre a Holding"** | História, incubação tecnológica, dados corporativos e governança | ✅ Implementado |
| **RF10** | **Canais de Contato Corporativo** | WhatsApp oficial, e-mail institucional e endereço de sede operacional | ✅ Implementado |

---

## 🛠️ Requisitos Não-Funcionais (RNF)

| ID | Requisito | Meta | Status |
|---|---|---|---|
| **RNF01** | Performance (LCP) | < 1.8s (Otimização via Facade em iframes e remoção de vídeos pesados no Hero) | ✅ Atingido |
| **RNF02** | Integridade de Build | Checagem de tipos estrita (TypeScript) e ESLint ativos durante o build | ✅ Atingido |
| **RNF03** | SEO & Indexação | Sitemap atualizado com rotas canônicas ativas e `/robots.txt` oficial | ✅ Atingido |
| **RNF04** | Acessibilidade | SkipLink para navegação por teclado, ARIA labels em botões e contraste WCAG AA | ✅ Atingido |
| **RNF05** | Zero Código Morto | Remoção de dependências legadas de IA, pacotes de conversão de vídeo e componentes órfãos | ✅ Atingido |

---

## 🛣️ Roadmap de Evolução

| Fase | Escopo | Status |
|---|---|---|
| **v1.0 - v1.2** | Versão legado (Agência, LPs de marketing digital, protótipo de chatbot) | 📦 Descontinuada / Arquivada |
| **v2.0** | Saneamento profundo, Design System B2B Enterprise, Floating Navbar, Facade no G360, Linxar Hub & Holding FCG | ✅ Concluído |
| **v2.1** | Formulário nativo corporativo com envio via Server Action (Resend / webhook direto de CRM) | 🔜 Próxima |
| **v2.2** | Integração direta da documentação OpenAPI interativa em `/linxar/middleware` | 🔜 Futuro |
| **v2.3** | Área de imprensa e comunicados oficiais da holding (Investor Relations) | 🔜 Futuro |

---

*Fedumenti Group (FCG) — Tecnologia Proprietária para Empresas Consolidadas · 2026*
