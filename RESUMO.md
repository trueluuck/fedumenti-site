# Resumo do Projeto — Fedumenti Group Website

Este projeto é um site institucional moderno focado em **atuação profissional de inovação e tecnologia** para o **Fedumenti Group**. 

## 🎯 Objetivo Principal

O objetivo é fornecer uma visão clara dos serviços oferecidos, projetos em andamento, cultura organizativa e integração com o ecossistema de startups e impacto ambiental.

## 🧱 Arquitetura e Stack

- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS V4 (Moderno, performance, suporte a Dark Mode).
- **Animações**: Framer Motion para transições de seção, carrosséis, e micro-interações.
- **Componentização**: Divisão modular entre `ui` (elementos atômicos), `sections` (seções de página) e `common` (utilidades).

## ✨ Principais Funcionalidades

- **Home**: Banner Dinâmico (Hero) com carrossel de vídeo e imagens.
- **Quem Somos (About)**: Seção de história, propósito e indicadores ESG (Reflorestamento).
- **Serviços**: Grid modular de serviços com link para Landing Pages específicas.
- **Landing Pages (LPs)**: Implementação de várias LPs focadas em automação, CRM, tráfego pago, SEO, etc.
- **Contatos**: Formulário de contato para captação de leads.
- **Consentimento de Cookies**: Gestão de privacidade e consentimento para GA4/FB Pixel.

## 📊 Status Atual

O projeto está quase todo pronto para produção, mas requer:
1.  **Consolidação de componentes redundant**: `HeroSection` vs `HeroCarousel`.
2.  **Configuração de servidor SMPT/API** para envio de emails reais (atualmente `console.log`).
3.  **Refatoração de hooks customizados** para evitar duplicação de lógica (ex: `usePrefersReducedMotion`).
4.  **Otimização de Asset Preloading** para vídeos pesados.

---
📅 *Última Atualização: 18 de Março de 2026*
