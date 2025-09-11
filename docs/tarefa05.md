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
| **H3** | **<span style="font-size: 30px; font-weight: 700;">Montserrat Bold 30px</span>** |
| **H4** | **<span style="font-size: 24px; font-weight: 700;">Montserrat Bold 24px</span>** |
| **H5** | **<span style="font-size: 20px; font-weight: 500;">Montserrat Medium 20px</span>** |
| **H6** | **<span style="font-size: 18px; font-weight: 500;">Montserrat Medium 18px</span>** |
| **Body** | **<span style="font-size: 16px; font-weight: 400;">Montserrat Regular 16px</span>** |

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
- `[Swatch: --color-blue-enterprise]` **Blue Enterprise** `#1a4f75`
- `[Swatch: --color-blue-light]` **Blue Light** `#dbebf6`
- `[Swatch: --color-blue-dark]` **Blue Dark** `#081521`
- `[Swatch: --color-background]` **Background** `#112d47`
- `[Swatch: --color-success]` **Success** `#2eb23c`
- `[Swatch: --color-alert]` **Alert** `#f4ac45`
- `[Swatch: --color-danger]` **Danger** `#eb5757`
- `[Swatch: --color-white]` **White** `#ffffff`

---

## **`[Seção: Iconografia]`**

> **Visão Geral:** Uma especificação clara de como os ícones devem ser usados para comunicação visual, cobrindo os estilos, tamanhos e cores permitidos.

### **Styles**

> **Visão Geral:** Apresenta os dois estilos de ícone permitidos: `Rounded` (preenchido) e `Outline` (contornado), explicando seu uso semântico.
>
> **Estética:**
> - **Contêiner de Exemplo:** Cada estilo é exibido em seu próprio card, com um título (`<h4>`) e uma descrição.
> - **Uso Semântico:**
>   - **Rounded:** Para ações primárias e estados preenchidos/ativos. A aparência é mais "sólida" e chama mais atenção.
>   - **Outline:** Para ações secundárias e estados inativos. A aparência é mais leve.

| Estilo | Exemplo Visual | Uso Recomendado |
| :-- | :--- | :--- |
| **Rounded** | `[Ícone: home (preenchido)]` `[Ícone: check_circle (preenchido)]` | Ações primárias, estados ativos. |
| **Outline** | `[Ícone: home (contornado)]` `[Ícone: favorite (contornado)]` | Ações secundárias, estados inativos. |

### **Sizing**

> **Visão Geral:** Define os tamanhos padronizados para ícones para manter a consistência rítmica na interface.
>
> **Estética:**
> - **Demonstração:** Os tamanhos são exibidos lado a lado para fácil comparação visual, cada um com seu respectivo rótulo (ex: "20px", "24px (Default)").

- `[Ícone: visibility (20px)]` 20px
- `[Ícone: visibility (24px)]` 24px (Default)
- `[Ícone: visibility (48px)]` 48px

### **Color**

> **Visão Geral:** Regras para a aplicação de cores nos ícones, garantindo que eles se alinhem com a paleta de cores e transmitam o significado correto.
>
> **Estética:**
> - **Demonstração:** Cada ícone de exemplo é exibido com sua cor semântica e um rótulo correspondente.

- `[Ícone: info (cor: --color-blue-standard)]` Primary
- `[Ícone: info (cor: --color-blue-light)]` Default
- `[Ícone: check_circle (cor: --color-success)]` Success
- `[Ícone: warning (cor: --color-alert)]` Alert
- `[Ícone: error (cor: --color-danger)]` Danger

---

## **`[Seção: User Feedback Guidelines]`**

> **Visão Geral:** Define o padrão visual para comunicação de feedback ao usuário. Cada tipo de mensagem (sucesso, erro, etc.) é um componente visualmente distinto para ser instantaneamente reconhecível.
>
> **Estética do Componente de Mensagem:**
> - **Estrutura:** É um card com uma borda colorida que corresponde ao seu status (ex: borda verde para sucesso).
> - **Layout Interno:** Um layout de duas colunas:
>   1. **Ícone:** À esquerda, um ícone grande, preenchido (`Rounded`) e colorido com a cor do status.
>   2. **Texto:** À direita, um título (`<h4>`) em `font-semibold` e uma descrição em `text-sm`.
> - **Sombra:** Uma sombra sutil (`shadow-lg`) eleva o componente da página, dando-lhe proeminência.

### **Success Messages**

> Usado para confirmar que uma ação foi concluída com sucesso.

`[Ícone: check_circle (verde)]` **Action Confirmed**
Your profile has been updated successfully.

### **Error Messages**

> Usado para informar que algo deu errado, sugerindo uma solução.

`[Ícone: error (vermelho)]` **Validation Failed**
Please enter a valid email address to continue.

### **Warning & Informational Messages**

> Usado para alertas ou informações úteis.

`[Ícone: warning (amarelo)]` **Unsaved Changes**
You have unsaved changes. Are you sure you want to leave this page?

`[Ícone: info (azul)]` **System Update**
A new update will be installed automatically tonight.

---

## **`[Seção: Tabs & Selectors]`**

> **Visão Geral:** Componentes essenciais para navegação e filtragem dentro de uma mesma página. O feedback visual claro sobre o estado (ativo, inativo, hover) é a prioridade máxima.

### **Primary Navigation Tabs**

> **Visão Geral:** Usado para a navegação principal de uma seção. O design é minimalista, focado em uma linha inferior que indica o estado ativo.
>
> **Estética:**
> - **Estrutura:** Uma barra horizontal com uma borda inferior (`--color-blue-enterprise`) define a área das tabs.
> - **Tab Ativa:** Se destaca das demais. O texto é mais pesado (`font-semibold`) e branco (`--color-white`). Uma borda inferior de `2px` na cor `--color-blue-standard` ancora a tab, conectando-a visualmente ao conteúdo que ela revela.
> - **Tab Inativa:** É mais sutil. O texto é mais leve (`font-medium`) e usa a cor `--color-blue-light`. A borda inferior é transparente.
> - **Hover (Inativa):** Ao passar o mouse, a borda inferior da tab inativa aparece sutilmente com a cor `--color-blue-light`, e o texto se ilumina para `white`, sinalizando que é um alvo clicável.

`[Tab: Profile (Ativa)]` `[Tab: Team]` `[Tab: Projects]` `[Tab com Ícone: Settings]`

### **Filter Selectors (Pills)**

> **Visão Geral:** Botões em formato de pílula usados para filtrar conjuntos de dados. A sensação é tátil e imediata.
>
> **Estética:**
> - **Formato:** Totalmente arredondado (`rounded-full`).
> - **Estado Ativo:** Fundo sólido com a cor `--color-blue-standard` e texto branco em `font-semibold`. A aparência é "pressionada" e proeminente.
> - **Estado Inativo:** Fundo transparente e texto `--color-blue-light`.
> - **Hover (Inativo):** O fundo se preenche sutilmente com a cor `--color-blue-enterprise`, indicando que pode ser ativado.
> - **Estado Desativado:** Mantém o fundo transparente, mas o texto tem sua opacidade reduzida para 50%, e o cursor muda para `not-allowed`.

`[Pill: All (Ativa)]` `[Pill: Active]` `[Pill: Completed]` `[Pill: Archived (Desativada)]`

---

## **`[Seção: Loaders & Spinners]`**

> **Visão Geral:** Feedback visual essencial para gerenciar a expectativa do usuário durante operações assíncronas. O movimento deve ser suave e contínuo.

### **Circular Spinners**

> **Visão Geral:** Usado para carregamentos de duração indeterminada.
>
> **Estética:**
> - **Animação:** Um anel que gira infinitamente (`animate-spin`). O anel não é completo; um segmento é transparente (`border-t-transparent`), criando a ilusão de movimento.
> - **Cores:** A cor do anel é `var(--color-blue-standard)`.
> - **Tamanhos:** Apresentado em três tamanhos distintos para diferentes contextos:
>   - **Small (24px):** Borda de `2px`. Ideal para dentro de botões.
>   - **Medium (40px):** Borda de `4px`. Padrão para a maioria dos casos.
>   - **Large (64px):** Borda de `4px`. Para carregamento de página inteira ou seções grandes.

`[Spinner: Pequeno]` `[Spinner: Médio]` `[Spinner: Grande]`

### **Linear Loaders**

> **Visão Geral:** Usado para processos com progresso definido (ex: uploads) ou como um indicador de atividade geral no topo de uma seção.
>
> **Estética:**
> - **Contêiner:** Uma barra fina, com cantos totalmente arredondados e um fundo `var(--color-blue-enterprise)`.
> - **Barra de Progresso:** A barra que se preenche usa a cor `var(--color-blue-standard)`.
> - **Indeterminado:** A barra de progresso tem uma largura fixa (ex: 50%) e anima infinitamente da esquerda para a direita, dando uma sensação de atividade contínua.
> - **Determinado:** A barra de progresso tem sua largura definida por uma porcentagem, preenchendo o contêiner de forma estática.

**Indeterminado:** `[ Barra de progresso animada ]`
**Determinado (75%):** `[ Barra de progresso preenchida em 75% ]`

---

## **`[Seção: Cards & Content Layouts]`**

> **Visão Geral:** Cards são os blocos de construção fundamentais para a exibição de conteúdo. Eles são versáteis e devem ser estruturados de forma consistente.

### **Card Structure**

> **Visão Geral:** A anatomia de um card padrão.
>
> **Estética:**
> - **Contêiner:** O card padrão tem fundo `--color-blue-dark`, borda `--color-blue-enterprise`, e cantos arredondados.
> - **Divisões:** O conteúdo principal (`p-6`) é separado da área de ações (`px-6 py-4`) por uma borda superior.
> - **Ações:** A área de ações geralmente contém botões de texto, alinhados à esquerda.

**Exemplo de Card Padrão:**

```
+-----------------------------+
| Título do Card (H4)         |
|                             |
| Parágrafo descritivo...     |
|-----------------------------|
| [Ação do Card]              |
+-----------------------------+
```

### **Card Types**

> **Visão Geral:** Diferentes tipos de cards para diferentes casos de uso, organizados em um grid para comparação.
>
> **Estética:**
> - **Informativo:** Um card de linha única com um ícone grande em um contêiner colorido (`--color-blue-standard` com 20% de opacidade) à esquerda e texto à direita.
> - **Interativo:** Um card padrão, mas a área de ações é empurrada para o final do card e contém botões de ação primários e secundários, alinhados à direita.
> - **Mídia:** Um card onde a parte superior é dominada por uma imagem (`aspect-ratio: 16/9`), com o conteúdo textual logo abaixo.

- `[Card Informativo com Ícone]`
- `[Card Interativo com Botões no Rodapé]`
- `[Card com Imagem no Topo]`

### **Responsive Layouts**

> **Visão Geral:** Demonstra como os cards se comportam em um layout de grid responsivo.
>
> **Estética:**
> - **Grid:** Os cards são organizados em um grid que se adapta, quebrando de 3 colunas em telas grandes para 2 e depois 1 coluna em telas menores.
> - **Card Largo:** O exemplo inclui um card que ocupa duas colunas (`sm:col-span-2`) para demonstrar layouts mais complexos.

`[Card 1]` `[Card 2]` `[Card 3]`
`[  Card 4 (Largo)  ]` `[Card 5]`

---

## **`[Seção: Badges & Tags]`**

> **Visão Geral:** Pequenos elementos de UI para destacar informações de forma concisa, como status, categorias ou contadores.

### **Styles and Colors**

> **Visão Geral:** Os badges usam cores para transmitir significado.
>
> **Estética:**
> - **Default:** Fundo sólido `--color-blue-enterprise`.
> - **Semânticos (Success, Warning, Danger):** Fundo translúcido (cor semântica com 20% de opacidade) e texto na cor semântica correspondente.
> - **Formato:** Podem ser `rounded-md` (padrão) ou `rounded-full` (pill).

- `[Badge: Default]`
- `[Badge: Success]`
- `[Badge: Warning]`
- `[Badge: Danger]`
- `[Badge: Pill]`

### **Sizing**

> **Visão Geral:** Três tamanhos distintos para diferentes contextos.
>
> **Estética:**
> - **Small:** `10px` de texto.
> - **Medium:** `text-xs` (12px).
> - **Large:** `text-sm` (14px).

`[Badge: Pequeno]` `[Badge: Médio]` `[Badge: Grande]`

### **Use Cases**

> **Visão Geral:** Exemplos práticos de como os badges são usados.
>
> **Estética:**
> - **Status:** Usam o formato "pill" com um ícone para clareza visual.
> - **Categorias:** Usam o formato padrão, retangular.
> - **Contadores:** Um badge especial, geralmente redondo e com uma cor chamativa (`--color-danger` ou `--color-blue-standard`), sobreposto a um ícone.

- **Status:** `[Ícone] Active`
- **Categorias:** `Design` `Development`
- **Contadores:** `[Ícone: notifications]` `[Contador: 3]`

---
> ... (O restante do documento continua a partir daqui)
