# Protótipo Estrutural do Design System

> Este documento é uma representação de baixa resolução da estrutura lógica e do conteúdo da página principal do Design System, baseada no `index.html`.

---

### `[Cabeçalho Fixo Global]`

| Logo & Título | Navegação | Ações |
| :--- | :--- | :--- |
| 💠 **Design System** | `Overview` `Components` `Typography` `UX Principles` `UI Guidelines` | `[Ícone: Ajuda]` `[Avatar do Usuário]` |

---

## **Design System**

> A comprehensive design system for our SaaS platform, ensuring consistency and efficiency in design and development.

---

## **Introduction**

This design system provides a unified framework for creating user interfaces for our SaaS platform. It includes guidelines for typography, color palettes, iconography, and component usage, all designed to ensure a consistent and cohesive user experience across all applications.

---

## **Typography**

We use the Montserrat font family for all text elements. This ensures a modern and clean aesthetic, guaranteeing readability and visual appeal. Different weights and sizes are used to create hierarchy and emphasis within the content.

| Tag | Exemplo |
| :-- | :--- |
| **H1** | Montserrat Black 48px |
| **H2** | Montserrat Bold 36px |
| **H3** | Montserrat Bold 30px |
| **H4** | Montserrat Bold 24px |
| **H5** | Montserrat Medium 20px |
| **H6** | Montserrat Medium 18px |
| **Body** | Montserrat Regular 16px |

---

## **Visual Hierarchy & Layout**

This section outlines the principles for organizing elements on the screen to guide the user's eye and create a clear, intuitive interface.

### Layout Principles

- **Whitespace:** Use ample whitespace to reduce clutter and improve readability.
- **Alignment:** Align elements to create a sense of order and connection.
- **Proximity:** Group related elements together to imply a relationship.
- **Repetition:** Repeat design elements to create consistency and rhythm.

### Grid System

(Visualização de um sistema de grid de 12 colunas)

### Layout Example

(Representação visual de um layout de página com header, sidebar e conteúdo principal)

---

## **Color Palette**

Our primary color is blue (#4b9cd6), which represents trust, stability, and innovation.

- `--color-blue-standard` (#4b9cd6)
- `--color-blue-enterprise` (#1a4f75)
- `--color-blue-light` (#dbebf6)
- `--color-blue-dark` (#081521)
- `--color-background` (#112d47)
- `--color-success` (#2eb23c)
- `--color-alert` (#f4ac45)
- `--color-danger` (#eb5757)
- `--color-white` (#ffffff)

---

## **Components**

Our component library includes a wide range of reusable UI elements.

### Buttons

- `[Botão Primário com Ícone]`
- `[Botão de Sucesso com Ícone]`
- `[Botão de Perigo com Ícone]`
- `[Botão de Alerta com Ícone]`
- `[Botão Enterprise com Ícone]`

### Data Tables

| User | Role | Status | Last Login | Actions |
| :--- | :--- | :--- | :--- | :--- |
| John Doe | Admin | `Active` | 2024-05-20 | `[Editar]` `[Excluir]` |
| Jane Smith | Editor | `Active` | 2024-05-19 | `[Editar]` `[Excluir]` |
| Sam Wilson | Viewer | `Inactive` | 2024-04-15 | `[Editar]` `[Excluir]` |

**Paginação:** `[Anterior]` `1` `2` `3` `...` `10` `[Próximo]`

### Modals & Pop-ups

> #### Confirmation Modal
>
> ⚠️ **Delete Item**
>
> Are you sure you want to delete this item? This action cannot be undone.
>
> `[Botão: Cancelar]` `[Botão: Excluir]`

---

## **Footer Patterns**

> © Copyright 2025 – Meliva AI Digital | Crie textos, vídeos e vozes por IA.
