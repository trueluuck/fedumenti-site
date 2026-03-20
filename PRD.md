# PRD — Product Requirements Document
## Fedumenti Group Website · v1.2 · Março 2026

---

## 📄 Visão Geral

| Campo | Valor |
|---|---|
| **Nome** | Fedumenti Group Website |
| **Visão** | Hub digital de tecnologia e inovação — atrair leads, converter clientes e exibir impacto ESG |
| **Empresa** | FCGROUP / Fedumenti Group · Guarapuava, PR · CNPJ 26.306.303/0001-20 |
| **Stakeholders** | Equipe interna, clientes B2B, parceiros, investidores |

---

## 🎯 Objetivos de Negócio

1. **Autoridade de Marca** — Posicionar-se como referência em tecnologia digital e inovação em Guarapuava e região
2. **Geração de Leads** — Captar contatos qualificados via LPs, formulários e chatbot KATIA
3. **Transparência ESG** — Demonstrar iniciativas reais (Reflorestamento, Financie a Startup)
4. **Escalabilidade Técnica** — Estrutura modular para adição rápida de serviços e LPs

---

## 👤 Público-Alvo

| Segmento | Perfil | Necessidade |
|---|---|---|
| CEOs / Diretores | PMEs de Guarapuava e PR | Aceleração digital, resultados mensuráveis |
| Responsáveis de Marketing | Empresas B2B | Tráfego pago, SEO, Google 360, Redes Sociais |
| Parceiros / Investidores | Ecossistema de inovação | Cases de sucesso, ESG, credibilidade |

---

## ✅ Requisitos Funcionais

| ID | Requisito | Status |
|---|---|---|
| RF01 | Navbar responsiva com tema claro/escuro | ✅ Implementado |
| RF02 | Hero carousel com vídeo + imagens + CTAs | ✅ Implementado |
| RF03 | Carrossel de logos de clientes (marquee) | ✅ Implementado (redesign v1.2) |
| RF04 | Seção de serviços com grid + LPs dedicadas | ✅ Implementado |
| RF05 | Landing Pages: Google 360°, Reflorestamento, Financie a Startup, SEO, Sites | ✅ Implementado |
| RF06 | Chatbot KATIA (OpenAI Assistants API, fluxo front-door) | ✅ Implementado (v0.2) |
| RF07 | Analytics GA4 + Pixel com consentimento LGPD | ✅ Implementado |
| RF08 | Página "Quem Somos" com mapa e incubadora | ✅ Implementado |
| RF09 | Footer com redes sociais (links reais), CNPJ, WhatsApp | ✅ Implementado |
| RF10 | Formulário de lead (stub) com captura de WhatsApp | ✅ Implementado |
| RF11 | Página de Depoimentos / Empresas | ✅ Implementado |
| RF12 | PWA básico | 🔜 Fase 2 |

---

## 🛠️ Requisitos Não-Funcionais

| ID | Requisito | Meta |
|---|---|---|
| RNF01 | Performance (LCP) | < 2s |
| RNF02 | Design System | Tailwind v4 tokens, glassmorphism, Aurora |
| RNF03 | SEO | Meta tags dinâmicas, sitemap, JSON-LD |
| RNF04 | Acessibilidade | ARIA labels, reduced-motion, contraste AA |
| RNF05 | Segurança LGPD | PII apenas com consentimento; chaves em `.env.local` |
| RNF06 | Responsividade | Mobile-first, testado em 320px–1920px |

---

## 🤖 Chatbot KATIA (RF06 — Detalhamento)

- **Modelo**: OpenAI Assistants API v2 · `gpt-4o-mini`
- **ID do Assistente**: `asst_OHTDVTh6L0y03KiXtB9jJzBS`
- **Fluxo**:
  1. Pergunta se é cliente (sim → pede CNPJ / não → menu principal)
  2. Menu numérico: Orçamento, Diagnóstico, Suporte, Arquivo, Humano, FAQ
  3. Handoff para WhatsApp `wa.me/5542999217736` se opção 5 ou 2x fallback
- **UI**: Avatar feminino (KATIA), botão CTA verde WhatsApp, quick replies
- **LGPD**: Coleta nome/empresa/telefone apenas com consentimento explícito

---

## 🛣️ Roadmap

| Fase | Escopo | Status |
|---|---|---|
| **Fase 1** | Homepage, Serviços, LPs, UI completa, KATIA v0.2 | ✅ Concluído |
| **Fase 2** | Envio real de e-mail (API Route + Resend/Brevo), PWA | 🔜 Próxima |
| **Fase 3** | Painel admin para Blog / Notícias (CMS headless) | 🔜 Futuro |
| **Fase 4** | Otimização avançada: cache headers Vercel, CDN de imagens | 🔜 Futuro |
| **Fase 5** | KATIA v1.0 — Function Calling (CRM, agendamento real) | 🔜 Futuro |

---

*Fedumenti Group — Tecnologia com Propósito · 2026*
