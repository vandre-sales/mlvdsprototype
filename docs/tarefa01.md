# Protótipo Visual do Design System (index-prototype.md)

> **Guia para Designers:** Este documento é uma tradução da visão estética e funcional do `index.html` para uma narrativa descritiva. Use-o como um "briefing" para entender a intenção por trás de cada pixel, cor e interação. Ele é a única fonte da verdade para a reconstrução visual da página.

---

### `[Componente: Cabeçalho Principal]`

> **Visão Geral:** O cabeçalho é a nossa bússola constante. Ele flutua sobre o conteúdo, oferecendo acesso rápido à navegação sem nunca sair do caminho. A sensação é de leveza e modernidade.
>
> **Estética e Comportamento:**
> - **Posicionamento:** É um elemento `sticky`, fixo no topo da página. Ao rolar, ele permanece visível.
> - **Fundo e Efeito:** O fundo não é sólido. Ele usa a cor `var(--color-background)` com 80% de opacidade e um efeito `backdrop-blur`. O resultado é um vidro fosco e translúcido, que permite ver a cor do conteúdo passando por baixo, mas sem perder o foco.
> - **Estrutura:** Uma borda inferior sutil (`--color-blue-enterprise`) ancora o cabeçalho visualmente, separando-o do conteúdo principal.
> - **Interatividade:** Os links de navegação (`<a>`) usam a cor `var(--color-blue-light)`. Ao passar o mouse (`:hover`), eles se iluminam suavemente para `var(--color-white)`, fornecendo um feedback claro e elegante. O botão de ajuda tem um efeito de `hover` sutil, escurecendo seu fundo para `var(--color-blue-enterprise)`.

| Logo & Título | Navegação Principal | Ações do Usuário |
| :--- | :--- | :--- |
| 💠 **Design System** | `Overview` `Components` `Typography` `UX Principles` `UI Guidelines` | `[Ícone: help]` `[Avatar]` |

---

## **`[Seção: Título Principal / Hero]`**

> **Visão Geral:** A primeira impressão. Esta seção é um contêiner que age como um palco para o título principal, dando-lhe peso e importância.
>
> **Estética:**
> - **Contêiner (`.section-container`):** A seção inteira é envolvida por um contêiner com cantos suavemente arredondados (`0.5rem`), uma borda delicada (`1px solid var(--color-blue-enterprise)`) e um fundo `var(--color-blue-dark)`. A sensação é de um "painel de controle".
> - **Título (`<h1>`):** O título "Design System" é o protagonista. Ele usa a cor de destaque `var(--color-blue-standard)` e uma fonte com peso `black` (900), com um `tracking` (espaçamento entre letras) ligeiramente mais apertado para criar um bloco de texto denso e impactante.
> - **Descrição (`<p>`):** O parágrafo de apoio é maior que o texto do corpo (`text-lg`), dando-lhe importância, mas usa a cor padrão `var(--color-blue-light)`.

# **Design System**
A comprehensive design system for our SaaS platform, ensuring consistency and efficiency in design and development.

---

## **`[Seção: Tipografia]`**

> **Visão Geral:** Esta seção não é apenas uma lista, é uma demonstração viva da nossa hierarquia de texto. Cada item deve respirar e mostrar seu propósito.
>
> **Estética:**
> - **Layout de Exibição:** Cada nível de tipografia (H1, H2, etc.) é apresentado em uma grade. À esquerda, uma pequena tag (`<span class="tag">`) identifica o nível. À direita, o texto de exemplo real. Isso cria um ritmo visual claro.
> - **Exemplo vs. Realidade:** O texto do título ("Montserrat Black 48px") é renderizado com a própria fonte que descreve. O texto de exemplo abaixo dele usa a mesma fonte, mas com uma opacidade de 70%, tornando-o visualmente secundário e servindo como um "eco" do estilo.

| Tag | Demonstração Visual |
| :-- | :--- |
| **H1** | **<span style="font-size: 48px; font-weight: 900;">Montserrat Black 48px</span>** |
| **H2** | **<span style="font-size: 36px; font-weight: 700;">Montserrat Bold 36px</span>** |
| ... | *(e assim por diante para H3, H4, H5, H6, e Body)* |

---

## **`[Seção: Visual Hierarchy & Layout]`**

> **Visão Geral:** Esta seção é uma aula visual sobre como organizar a informação. Ela é dividida em três partes: os princípios teóricos, a estrutura de grade e um exemplo prático.
>
> **Estética:**
> - **Layout da Seção:** Cada uma das três sub-seções (`Layout Principles`, `Grid System`, `Layout Example`) segue um padrão de grade de duas colunas em telas maiores. A coluna da esquerda (1/3 da largura) contém o título (`<h3>`) e a descrição. A coluna da direita (2/3 da largura) contém a demonstração visual.

### **Layout Principles**

> **Visão Geral:** Os quatro princípios fundamentais são apresentados como "cards" individuais, dando a cada um seu próprio espaço e importância.
>
> **Estética do Card:**
> - **Estrutura:** Cada card tem uma borda (`--color-blue-enterprise`), um fundo (`--color-blue-dark`) e cantos arredondados.
> - **Conteúdo:** Dentro do card, a hierarquia é clara:
>   1. Um ícone grande (`text-3xl`) e colorido (`--color-blue-standard`) no topo.
>   2. Um título (`<h4>`) em `font-semibold` e `text-white`.
>   3. Um parágrafo descritivo (`<p>`) em `text-sm`.

| Ícone | Princípio | Descrição |
| :-- | :--- | :--- |
| `space_dashboard` | **Whitespace** | Use ample whitespace to reduce clutter and improve readability. |
| `align_horizontal_left` | **Alignment** | Align elements to create a sense of order and connection. |
| `group_work` | **Proximity** | Group related elements together to imply a relationship. |
| `repeat` | **Repetition** | Repeat design elements to create consistency and rhythm. |

### **Grid System**

> **Visão Geral:** Uma demonstração visual e inequívoca do nosso sistema de grid de 12 colunas.
>
> **Estética:**
> - **Visualização:** A grade é representada por uma série de caixas (`<div>`) com cantos arredondados e um fundo semi-transparente (`--color-blue-enterprise` com 50% de opacidade).
> - **Clareza:** Cada caixa contém um texto que descreve sua largura em colunas (ex: "col-12", "col-6"), tornando o sistema auto-explicativo.

```
[ col-12 ]
[ col-6 ][ col-6 ]
[ col-4 ][ col-4 ][ col-4 ]
[ col-3 ][ col-3 ][ col-3 ][ col-3 ]
```

### **Layout Example**

> **Visão Geral:** Um wireframe de baixa fidelidade que mostra como os princípios e a grade se unem para formar um layout de página coeso.
>
> **Estética:**
> - **Estrutura:** O exemplo mostra um layout de duas colunas principais: uma sidebar à esquerda (1/4 da largura) e uma área de conteúdo principal à direita (3/4 da largura).
> - **Wireframe:** Todos os elementos são representados por caixas com cantos arredondados e a cor de fundo `--color-blue-dark`, simulando blocos de conteúdo sem distrair com detalhes.

```
+--------------------------------------------------+
| +----------+ +---------------------------------+ |
| |          | | [Bloco de Conteúdo]             | |
| |          | |                                 | |
| | Sidebar  | | [Bloco de Conteúdo Maior]       | |
| | (1/4)    | |                                 | |
| |          | | +---------------+ +-------------+ | |
| |          | | | Botão 1       | | Botão 2     | | |
| |          | | +---------------+ +-------------+ | |
| +----------+ +---------------------------------+ |
|                                                  |
| +----------+ +----------+ +----------+          |
| | Card 1   | | Card 2   | | Card 3   |          |
| +----------+ +----------+ +----------+          |
+--------------------------------------------------+
```

---

## **`[Seção: Paleta de Cores]`**

> **Visão Geral:** Uma galeria visual das nossas cores. Cada cor é apresentada como uma amostra física, não apenas como um código.
>
> **Estética:**
> - **Cartão de Cor:** Cada cor é exibida em um "cartão". O topo do cartão é um retângulo alto e arredondado (`rounded-lg`) preenchido com a cor real. Abaixo, em um fundo neutro, estão as informações em uma hierarquia clara:
>   1. Nome da Cor (ex: "Blue Standard") - `text-base`, `font-semibold`, `text-white`
>   2. Variável CSS (ex: "--color-blue-standard") - `text-sm`, `text-blue-light`
>   3. Código Hex (ex: "#4b9cd6") - `text-xs`, `text-blue-light` com 70% de opacidade.

- `[Swatch: --color-blue-standard]` **Blue Standard** `#4b9cd6`
- `[Swatch: --color-success]` **Success** `#2eb23c`
- ... *(e assim por diante para todas as 9 cores)* ...

---
> ... (O restante do documento continua a partir daqui, inalterado por enquanto)
