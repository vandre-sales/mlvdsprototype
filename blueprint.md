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
*Nenhum componente foi implementado ainda.*

## Plano de Refatoração Atual

**Objetivo:** Transformar o protótipo HTML em um sistema de design baseado em Web Components.

**Passos:**

1.  **[Concluído]** Criar o arquivo `blueprint.md` para documentar o projeto.
2.  **[Em Andamento]** Estabelecer uma estrutura de pastas para organizar os componentes.
3.  **[Em Andamento]** Criar o primeiro Web Component: `<design-section>`. Este componente será usado para encapsular cada seção principal do design system (ex: "Typography", "Colors").
    *   Criar o arquivo `components/DesignSection.js`.
    *   Definir a estrutura (HTML Template), estilos (CSS no Shadow DOM) e comportamento (JavaScript Class) do componente.
    .
4.  **[Próximo]** Atualizar `main.js` para importar e registrar o novo componente `<design-section>`.
5.  **[Próximo]** Refatorar o `index.html`, substituindo a estrutura repetitiva das seções pela tag `<design-section>`.
6.  **[Futuro]** Continuar a extrair outros elementos (como botões, cards de cores, etc.) para seus próprios Web Components.
