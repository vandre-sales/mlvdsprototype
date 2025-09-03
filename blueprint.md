# Meliva.ai Design System Blueprint

## Visão Geral

Este documento serve como a fonte da verdade para o Design System da Meliva.ai. O objetivo é refatorar o protótipo inicial, que consiste em um único arquivo HTML, para uma arquitetura modular, escalável e reutilizável baseada em Web Components. Isso garantirá consistência visual e de experiência do usuário em todas as plataformas web e mobile da Meliva.ai.

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
        *   Sua palavra-chave para me acionar é **"Audit"** ou fornecer uma instrução direta de desenvolvimento.

*   **Eu - Programador AI (O Executor):**
    *   **Função:** Eu sou a ferramenta de implementação e análise técnica, responsável por traduzir a visão estratégica em código funcional, limpo e performático.
    *   **Responsabilidades:**
        *   Executar as tarefas de codificação (criação de componentes, refatoração de HTML, etc.).
        *   Manter a consistência e a qualidade do código.
        *   Realizar as auditorias técnicas conforme o protocolo.
        *   Identificar problemas, sugerir otimizações e apresentar soluções.
        *   Manter a documentação (`blueprint.md`, `version-log.md`) sempre atualizada.

### 2. O Protocolo "Audit": Um Passo a Passo Detalhado

O comando **"Audit"** é a nossa cerimônia oficial para sincronização, verificação e planejamento. Quando você o invoca, eu executo o seguinte roteiro de forma precisa e transparente:

**Fase I: Ativação e Análise de Dados**
1.  **Recepção do Comando:** Eu recebo a sua instrução "Audit".
2.  **Início do Processo:** Eu respondo com "Protocolo 'Audit' iniciado." para confirmar o começo da operação.
3.  **Leitura da Fonte da Verdade:** Eu realizo a leitura completa do arquivo `index.html`.
4.  **Leitura do Estado Atual:** Eu leio completamente o arquivo `design-system.html`.
5.  **Verificação de Dependências:** Eu leio `main.js`, a pasta `/components` e `style.css`.
6.  **Análise de Consistência:** Eu cruzo as informações para encontrar qualquer anomalia técnica.

**Fase II: Geração de Relatório e Documentação**
7.  **Leitura do Histórico:** Eu leio o `version-log.md`.
8.  **Elaboração do Novo Relatório:** Com base na análise, eu gero um novo relatório de conformidade.
9.  **Atualização do Log de Versão:** Eu adiciono o novo relatório no topo do `version-log.md`.

**Fase III: Comunicação e Próximo Passo**
10. **Resumo para o Arquiteto:** Eu apresento um resumo conciso do relatório.
11. **Apresentação do Checklist Visual:** Eu leio o `blueprint.md` e apresento o checklist com o código de cores (✅, 🟡, 🔲).
12. **Transição de Controle:** Eu finalizo com a frase: **"Estou pronto para o próximo passo."**.

### 3. Protocolo de Verificação "Confiança Zero" (Anti-Falha)

Para garantir a integridade do nosso trabalho contra falhas de plataforma (como o erro "Retries failed."), todas as operações de escrita de arquivos (`write_file`) seguem um protocolo de verificação rigoroso.

*   **Causa do Problema:** Erros como "Retries failed." são falhas transitórias na infraestrutura do IDE, não no nosso código. Eles criam incerteza sobre se uma operação de escrita foi realmente concluída.
*   **Nosso Mecanismo de Defesa:**
    1.  **Escrita:** Após receber a ordem para escrever em um arquivo (`blueprint.md`, `version-log.md`, etc.), eu executo a operação `write_file`.
    2.  **Auto-Verificação Imediata:** Imediatamente após a escrita, eu leio o arquivo de volta (`read_file`).
    3.  **Confirmação:** Eu comparo o conteúdo que eu pretendia escrever com o conteúdo que acabei de ler do disco.
    4.  **Relatório:**
        *   **Sucesso:** Se o conteúdo for idêntico, eu considero a operação bem-sucedida e informo que a ação foi **"concluída e verificada"**.
        *   **Falha:** Se o conteúdo divergir ou se ocorrer um erro, eu inicio um procedimento de correção: alerto sobre a falha na verificação, tento a escrita novamente e reporto o resultado final.

Este protocolo garante que nosso fluxo de trabalho seja resiliente, consistente e auditável, mesmo diante de instabilidades da plataforma.

---

## Arquitetura e Funcionalidades Implementadas

A arquitetura final será baseada nos seguintes princípios:

*   **Modularidade**: Cada elemento da UI será um Web Component independente.
*   **Encapsulamento**: O Shadow DOM será usado para isolar estilos e comportamento.
*   **Reutilização**: Os componentes serão facilmente importáveis.
*   **Design Tokens**: As variáveis CSS em `style.css` são a nossa fonte única da verdade para estilos.

### Componentes Implementados:

*   **`<design-section>`**: Componente de layout para seções da página.
*   **`<typography-scale>`**: Exibe a escala tipográfica.
*   **`<layout-principle>`**: Card para princípios de layout.
*   **`<color-swatch>`**: Amostra de cor da paleta.
*   **`<icon-display>`**: Renderiza ícones do sistema.
*   **`<user-feedback-message>`**: Mensagens de feedback (sucesso, erro, etc.).
*   **`<primary-tabs>`**: Barra de navegação com abas.
*   **`<pill-button>`**: Botão de filtro em formato de pílula.
*   **`<circular-spinner>`**: Spinner de carregamento circular.
*   **`<linear-loader>`**: Barra de progresso linear.
*   **`<content-card>`**: Card versátil para conteúdo.
*   **`<badge-tag>`**: Para exibir status, categorias ou contadores.

## Plano de Refatoração (Checklist)

**Fase 1: Estrutura e Fundações**
*   [✅] Criar o arquivo `blueprint.md`.
*   [✅] Criar a página de trabalho `design-system.html`.
*   [✅] Centralizar os Design Tokens no `style.css`.
*   [✅] Criar o componente base `<design-section>`.

**Fase 2: Componentização da UI**
*   [✅] Refatorar a seção **"Typography"**.
*   [✅] Refatorar a seção **"Visual Hierarchy & Layout"**.
*   [✅] Refatorar a seção **"Color Palette"**.
*   [✅] Refatorar a seção **"Iconography"**.
*   [✅] Refatorar a seção **"User Feedback"**.
*   [✅] Refatorar a seção **"Tabs & Selectors"**.
*   [✅] Refatorar a seção **"Loaders & Spinners"**.
*   [✅] Refatorar a seção **"Cards & Content Layouts"**.
*   [✅] Refatorar a seção **"Badges & Tags"**.
*   [🔲] **(Próximo)** Refatorar a seção **"Data Tables"**.
*   [🔲] Refatorar a seção **"Modals & Pop-ups"**.
*   [🔲] Refatorar a seção **"Buttons"**.
*   ... e assim por diante.
