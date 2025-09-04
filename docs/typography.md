# Padrões de Tipografia - Meliva.ai Design System

Este documento define a base tipográfica para todas as interfaces da Meliva.ai. A consistência na tipografia é fundamental para criar uma experiência de usuário coesa, legível e profissional.

Nossos padrões são construídos sobre uma grade de **4px**, garantindo um ritmo vertical perfeito e um alinhamento consistente em todos os componentes.

## 1\. Famílias de Fonte (Font Families)

Utilizamos duas famílias de fontes para criar uma hierarquia clara e uma identidade visual distinta.

| Token (Variável CSS) | Fonte | Aplicação Principal |
| :--- | :--- | :--- |
| `--font-family-heading` | `Varela Round` | Títulos de grande destaque (apenas H1). |
| `--font-family-body` | `Montserrat` | Corpo de texto e todos os subtítulos (H2, H3, H4, H5, H6). |

## 2\. Escala Tipográfica e Estilos

A escala de fontes foi cuidadosamente definida para garantir clareza e hierarquia, sendo otimizada para a legibilidade em plataformas SaaS. Todos os valores de `line-height` e espaçamentos verticais são múltiplos de 4px.

### 2.1. Cabeçalhos (Headings)

| Elemento | Token (Font-Size) | Tamanho (px/rem) | Token (Line-Height) | Altura da Linha (px) | Peso (Weight) | Fonte (Family) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | `--font-size-h1` | `36px` / `2.25rem` | `--line-height-h1` | `44px` | `500` (Medium) | `Varela Round` |
| **H2** | `--font-size-h2` | `32px` / `2rem` | `--line-height-h2` | `40px` | `500` (Medium) | `Montserrat` |
| **H3** | `--font-size-h3` | `28px` / `1.75rem` | `--line-height-h3` | `36px` | `500` (Medium) | `Montserrat` |
| **H4** | `--font-size-h4` | `24px` / `1.5rem` | `--line-height-h4` | `32px` | `500` (Medium) | `Montserrat` |
| **H5** | `--font-size-h5` | `20px` / `1.25rem` | `--line-height-h5` | `28px` | `500` (Medium) | `Montserrat` |
| **H6** | `--font-size-h6` | `16px` / `1rem` | `--line-height-h6` | `24px` | `500` (Medium) | `Montserrat` |

*Observação: Os valores em `rem` são baseados na raiz padrão do navegador de `16px`.*

### 2.2. Corpo de Texto (Body)

O corpo de texto é a base da nossa tipografia, otimizado para longos períodos de leitura.

| Elemento | Token (Font-Size) | Tamanho (px/rem) | Token (Line-Height) | Altura da Linha (px) | Peso (Weight) | Fonte (Family) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Parágrafo (p)** | `--font-size-body` | `16px` / `1rem` | `--line-height-body` | `24px` | `300` (Light) | `Montserrat` |
| **Destaque (strong, b)** | `--font-size-body` | `16px` / `1rem` | `--line-height-body` | `24px` | `600` (Semibold) | `Montserrat` |

## 3\. Pesos de Fonte (Font Weights)

O uso correto dos pesos é crucial para a hierarquia e legibilidade.

| Token (Variável CSS) | Valor | Aplicação |
| :--- | :--- | :--- |
| `--font-weight-light` | `300` | **Padrão:** Corpo de texto principal. |
| `--font-weight-medium` | `500` | **Cabeçalhos:** Todos os títulos de H1 a H6. |
| `--font-weight-semibold` | `600` | **Destaque:** Para ênfase em palavras (`<strong>`). |

## 4\. Espaçamento Vertical

Para manter o ritmo vertical e a aderência à grade de 4px, utilizamos as seguintes regras para margens verticais.

| Contexto | Token (Variável CSS) | Valor | Descrição |
| :--- | :--- | :--- | :--- |
| Espaço entre parágrafos (`p + p`) | `--space-paragraph` | `4px` | Garante uma separação sutil entre parágrafos consecutivos. |
| Espaço acima de um título principal | `--space-section-heading` | `32px` | Usado para `margin-top` em títulos como `<h2>` que iniciam novas seções. |

## 5\. Implementação (Guia para Desenvolvedores)

A implementação deve ser feita utilizando as variáveis CSS (tokens) definidas. Isso garante que qualquer atualização no Design System seja refletida globalmente.

### Exemplo de CSS:

```css
/* Definição dos Tokens no :root */
:root {
  /* Famílias */
  --font-family-heading: 'Varela Round', sans-serif;
  --font-family-body: 'Montserrat', sans-serif;

  /* Pesos */
  --font-weight-light: 300;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Tamanhos e Alturas de Linha */
  --font-size-h1: 2.25rem;
  --line-height-h1: 44px;
  /* ...outros tamanhos... */
  --font-size-body: 1rem;
  --line-height-body: 24px;

  /* Espaçamentos */
  --space-paragraph: 4px;
}

/* Aplicação nos Elementos */
body {
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-light);
  line-height: var(--line-height-body);
}

h1 {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h1);
  line-height: var(--line-height-h1);
  font-weight: var(--font-weight-medium);
}

h2, h3, h4, h5, h6 {
  font-family: var(--font-family-body); /* Invertido para consistência */
}

p + p {
  margin-top: var(--space-paragraph);
}
```