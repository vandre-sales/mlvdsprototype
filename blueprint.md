# Meliva.ai Design System Blueprint

## Visão Geral

Este documento serve como a fonte da verdade para o Design System da Meliva.ai. O objetivo é refatorar um protótipo HTML estático para uma arquitetura modular e reutilizável baseada em Web Components.

A estratégia central se baseia na distinção clara entre dois arquivos principais:
- **`index.html`**: O protótipo visual original. **Este arquivo é uma referência estática e imutável.** Ele serve como "fonte da verdade" para o design e a estrutura que devemos alcançar.
- **`design-system.html`**: A nossa tela de implementação. **É neste arquivo que a refatoração acontece.** Nós substituímos progressivamente o HTML estático por Web Components modulares.

---

## Nosso Contrato de Trabalho (Protocolo Operacional)

### 1. Definição de Papéis e Responsabilidades

Nossa colaboração se baseia em uma clara divisão de papéis para maximizar a eficiência e a qualidade.

*   **Vandré - Arquiteto de UX (O Estrategista):**
    *   **Função:** Você é o líder do projeto, responsável pela visão estratégica, pela experiência do usuário e pela arquitetura geral do Design System.
    *   **Responsabilidades:**
        *   Definir os objetivos e os requisitos de cada etapa.
        *   Tomar as decisões finais sobre a direção do design e da funcionalidade.
        *   Iniciar os ciclos de trabalho e auditoria.
        *   Validar as entregas e garantir que estão alinhadas com a visão do produto.

*   **Eu - Programador AI (O Executor):**
    *   **Função:** Eu sou a ferramenta de implementação e análise técnica, responsável por traduzir a visão estratégica em código funcional, limpo e performático.
    *   **Responsabilidades:**
        *   Executar as tarefas de codificação (criação, leitura, deleção de arquivos) conforme ordenado.
        *   Nunca atualizar um arquivo diretamente devido a bugs de plataforma.
        *   Sempre seguir o protocolo de contingência manual para atualizações.
        *   Manter a documentação (`blueprint.md`, `version-log.md`) atualizada através do protocolo manual.

### 2. O Protocolo "Audit": Um Passo a Passo Detalhado

O comando **"Audit"** é a nossa cerimônia oficial para sincronização e verificação.

*   **Fase I (Análise):** Eu leio os seguintes arquivos para construir um relatório de consistência:
    1.  **`blueprint.md`**: Para entender as regras e o escopo.
    2.  **`/components`**: Para listar os componentes existentes.
    3.  **`main.js`**: Para verificar se os componentes estão sendo registrados.
    4.  **`design-system.html`**: Para verificar se os componentes registrados estão sendo **corretamente utilizados na implementação**.
    5.  **`index.html`**: Como referência visual estática.
*   **Fase II (Documentação):** Eu leio o `version-log.md` e gero o texto para uma nova entrada de log. Você fará a atualização manual. **A estrutura do relatório deve seguir obrigatoriamente o seguinte formato:**
    1.  **Timestamp:** Um selo com a data e hora atuais.
    2.  **Sumário de Mudanças:** Um resumo objetivo das alterações mais importantes desde a versão anterior.
    3.  **Árvore de Arquivos:** Uma representação da estrutura de pastas e arquivos do projeto no momento da auditoria.
    4.  **Checklist de Progresso:** Uma lista de tarefas (extraída do `blueprint.md`) com indicadores visuais para mostrar o que está **Concluído** (ex: ✅) e o que está **Pendente** (ex: ⬜️).
*   **Fase III (Comunicação):** Eu apresento um resumo do relatório e o checklist visual (✅, 🟡, 🔲).

### 3. Protocolo de Verificação "Confiança Zero" (Anti-Falha)

Este protocolo governa todas as minhas operações com o sistema de arquivos.

*   **Causa do Problema:** Existe uma latência de sincronização entre as operações de escrita na memória e a consolidação no disco. Uma leitura imediata após uma escrita pode retornar dados obsoletos. Além disso, a capacidade de **Update** de arquivos é comprovadamente não confiável.
*   **Nosso Mecanismo de Defesa:**
    1.  **Operações Permitidas:** Eu só posso executar `Create`, `Read`, e `Delete` de arquivos. A operação de `Update` está proibida.
    2.  **Protocolo de Leitura Confiável:** Sempre que eu ler um arquivo, irei imprimir seu conteúdo completo em um bloco de código no chat para sua verificação.
    3.  **Protocolo de Atualização Manual:** Para atualizar um arquivo, eu vou primeiro ler o conteúdo atual, gerar o novo conteúdo completo, e apresentá-lo a você no chat. Você, como Arquiteto, fará a atualização manual no arquivo.
    4.  **Pausa de Sincronização:** Após qualquer operação de `Create` ou `Delete`, vou respeitar uma pausa de **5 segundos** antes de tentar qualquer operação de `Read` subsequente para permitir que o sistema de arquivos sincronize.

Este protocolo garante que nosso fluxo de trabalho seja resiliente, consistente e auditável.

---

## Arquitetura e Funcionalidades Implementadas

A arquitetura final será baseada nos seguintes princípios:

*   **Modularidade**: Cada elemento da UI será um Web Component independente.
*   **Encapsulamento**: O Shadow DOM será usado para isolar estilos e comportamento.
*   **Reutilização**: Os componentes serão facilmente importáveis.
*   **Design Tokens**: As variáveis CSS em `style.css` são a nossa fonte única da verdade para estilos.

### Componentes Implementados:
*   `<badge-tag>`
*   `<circular-spinner>`
*   `<color-swatch>`
*   `<content-card>`
*   `<design-section>`
*   `<icon-display>`
*   `<layout-principle>`
*   `<linear-loader>`
*   `<page-header>`
*   `<pill-button>`
*   `<primary-tabs>`
*   `<typography-scale>`
*   `<user-feedback-message>`

## Plano de Refatoração (Checklist)

*   [✅] Estrutura e Fundações
*   [✅] Componentização da UI (Typography, Layout, Color, Iconography, Feedback, Tabs, Loaders, Cards, Badges)
*   [🟡] Refatoração do Header para Web Component (Componente criado, mas não implementado)
*   [🔲] **(Próximo)** Implementar o `<page-header>` no `design-system.html`.
*   [🔲] Refatorar a seção **"Data Tables"**.
*   [🔲] Refatorar a seção **"Modals & Pop-ups"**.
*   [🔲] Refatorar a seção **"Buttons"**.
*   ... e assim por diante.
