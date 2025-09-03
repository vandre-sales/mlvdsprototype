# Meliva.ai Design System Blueprint

## Visão Geral

Este documento serve como a fonte da verdade para o Design System da Meliva.ai. O objetivo é refatorar o protótipo inicial, que consiste em um único arquivo HTML, para uma arquitetura modular, escalável e reutilizável baseada em Web Components. Isso garantirá consistência visual e de experiência do usuário em todas as plataformas web e mobile da Meliva.ai.

## Arquitetura e Funcionalidades Implementadas

A arquitetura final será baseada nos seguintes princípios:

*   **Modularidade**: Cada elemento da UI (botões, cards, inputs, etc.) será um Web Component independente.
*   **Encapsulamento**: O Shadow DOM será usado para encapsular os estilos e o comportamento de cada componente, prevenindo conflitos com o restante da aplicação.
*   **Reutilização**: Os componentes serão facilmente importáveis e utilizáveis em qualquer projeto web.
*   **Design Tokens**: As variáveis CSS (cores, fontes, espaçamentos) definidas em `style.css` servirão como "design tokens", a base para todos os estilos dos componentes.

### Componentes Implementados:

*   **`<design-section>`**: Um componente de layout para encapsular cada seção principal da página, com um cabeçalho padronizado.
*   **`<typography-scale>`**: Exibe uma linha da escala tipográfica, incluindo o nome da tag, a descrição do estilo e uma frase de exemplo.
*   **`<layout-principle>`**: Renderiza um card para exibir um princípio de layout, contendo um ícone, título e descrição.
*   **`<color-swatch>`**: Apresenta uma amostra de cor da paleta do sistema, exibindo o bloco de cor, o nome, a variável CSS e o código hexadecimal.
*   **`<icon-display>`**: Renderiza um ícone do sistema, permitindo configurar o nome, estilo (Rounded/Outlined), tamanho e cor.
*   **`<user-feedback-message>`**: Exibe uma mensagem de feedback ao usuário (success, error, warning, info) com ícone e cor correspondentes.
*   **`<primary-tabs>`**: Renderiza uma barra de navegação com abas para seções principais.
*   **`<pill-button>`**: Exibe um botão de filtro em formato de pílula com estados de `active` e `disabled`.

## Plano de Refatoração (Checklist)

**Fase 1: Estrutura e Fundações**
*   [✅] Criar o arquivo `blueprint.md`.
*   [✅] Criar a página de trabalho `design-system.html`.
*   [✅] Centralizar os Design Tokens no `style.css`.
*   [✅] Criar o componente base `<design-section>`.

**Fase 2: Componentização da UI**
*   [✅] Refatorar a seção **"Typography"** com `<typography-scale>`.
*   [✅] Refatorar a seção **"Visual Hierarchy & Layout"** com `<layout-principle>`.
*   [✅] Refatorar a seção **"Color Palette"** com `<color-swatch>`.
*   [✅] Refatorar a seção **"Iconography"** com `<icon-display>`.
*   [✅] Refatorar a seção **"User Feedback"** com `<user-feedback-message>`.
*   [✅] Refatorar a seção **"Tabs & Selectors"** com `<primary-tabs>` e `<pill-button>`.
*   [🔲] **(Próximo)** Refatorar a seção **"Loaders & Spinners"**.
*   [🔲] Refatorar a seção **"Cards & Content Layouts"**.
*   [🔲] Refatorar a seção **"Badges & Tags"**.
*   [🔲] Refatorar a seção **"Buttons"** (agrupada dentro de "Components").
*   ... e assim por diante.
