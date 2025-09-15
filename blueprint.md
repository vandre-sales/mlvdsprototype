# Blueprint do Projeto: MLVDS (Meliva Design System)

## Visão Geral

Este documento é a **fonte da verdade imutável** para a construção do MLVDS. Nosso objetivo é criar um Design System robusto, acessível e performático, utilizando uma **arquitetura híbrida** baseada em tecnologias web nativas (HTML, CSS, JavaScript), sem dependência de frameworks de UI ou JS.

A estratégia central é:

1.  **Fundação Principal (`wcag-ui`):** Utilizaremos o `wcag-ui` como a camada de base. Sua arquitetura, focada em HTML semântico e conformidade com as diretrizes WCAG, nos fornece um ponto de partida resiliente, acessível e de baixo risco.
2.  **Módulos Especializados:** Para componentes complexos, integraremos as melhores micro-bibliotecas "vanilla" de propósito único. Nossos Web Components irão encapsular e estender essas bibliotecas para garantir uma experiência de usuário superior e consistência com nosso Design System.

Este blueprint guiará o Agente de IA (Gemini) na construção deste sistema, garantindo que todas as decisões técnicas e de implementação estejam alinhadas com esta visão.

---

## Nosso Contrato de Trabalho (Protocolo Operacional)

### 1. Definição de Papéis e Responsabilidades

Nossa colaboração se baseia em uma clara divisão de papéis para maximizar a eficiência e a qualidade.

*   **Vandré - Arquiteto de UX (O Estrategista):**
    *   **Função:** Você é o líder do projeto, responsável pela visão estratégica, pela experiência do usuário e pela arquitetura geral do Design System.
    *   **Responsabilidades:**
        *   Definir os objetivos e os requisitos de cada etapa.
        *   Tomar as decisões finais sobre a direção do design e da funcionalidade.
        *   Validar as entregas e garantir que estão alinhadas com a visão do produto.

*   **Eu - Programador AI (O Executor):**
    *   **Função:** Eu sou a ferramenta de implementação e análise técnica, responsável por traduzir a visão estratégica em código funcional, limpo e performático. Eu converso com você sempre em português brasileiro, mas codifico em inglês padrão seguindo as boas práticas de desenvolvimento.
    *   **Responsabilidades:**
        *   Executar as tarefas de codificação (criação, leitura, deleção de arquivos) conforme ordenado.
        *   Nunca atualizar um arquivo diretamente devido a bugs de plataforma.
        *   Sempre seguir o protocolo de contingência manual para atualizações.
        *   Manter a documentação sob minha gestão (`blueprint.md` e `CHANGELOG.md`) atualizada através do protocolo manual.

### 2. O Protocolo "Audit": Um Passo a Passo Detalhado

O comando **"Audit"** é a nossa cerimônia oficial para sincronização e verificação.

1.  **Sua Solicitação:** Você inicia o processo com o comando "Audit".
2.  **Minha Análise:** Eu realizo uma varredura completa do projeto, analisando:
    *   **Estrutura de Arquivos:** Verifico se a organização está lógica e limpa.
    *   **Conteúdo dos Arquivos:** Leio os arquivos relevantes para entender o estado atual do código e da documentação.
    *   **Documentação Estratégica:** Releio o `blueprint.md`, `roadmap.md` e `design-system-best-practices.md` para realinhar com nossos objetivos.
3.  **Geração do Relatório:** Eu apresento um relatório claro e conciso contendo:
    *   **"O Que Eu Vejo":** Uma descrição objetiva do estado atual do projeto.
    *   **"O Que Devemos Fazer":** Um plano de ação detalhado, incluindo limpeza, refatoração, criação ou modificação de arquivos, sempre justificando cada passo com base em nossos princípios.
4.  **Sua Aprovação:** Você revisa o plano e dá o sinal verde. Nenhuma ação de modificação é tomada sem a sua aprovação explícita.
5.  **Execução:** Após a aprovação, eu executo o plano passo a passo.

Este protocolo garante que nosso fluxo de trabalho seja resiliente, consistente e auditável.

---

### 3. Gestão de Documentos

Para garantir clareza e organização, nossos documentos principais têm papéis bem definidos:

*   **Documentos "Constitucionais" (Raramente alterados):**
    *   **`blueprint.md`**: É a nossa "Constituição". Define os princípios, papéis e protocolos imutáveis do projeto. Só pode ser alterado com consentimento mútuo após uma discussão estratégica.
    *   **`docs/design-system-best-practices.md`**: É a nossa "Biblioteca de Referência". Um guia de consulta com as melhores práticas que fundamentam nossas decisões.

*   **Documentos "Dinâmicos" (Constantemente atualizados):**
    *   **`docs/roadmap.md`**: É o nosso "Plano de Voo". Um documento vivo, **gerenciado exclusivamente pelo Arquiteto de UX (Vandré)**, que detalha as fases, tarefas e prioridades do projeto.
    *   **`CHANGELOG.md`**: O diário de bordo técnico. É atualizado por mim a cada entrega de funcionalidade ou correção.

---

## Arquitetura e Princípios

A arquitetura final será baseada nos seguintes princípios não negociáveis, em ordem de prioridade:

1.  **Arquitetura Híbrida (Fundação e Módulos):**
    *   **Fundação com `wcag-ui`**: Toda a estilização base e as melhores práticas de acessibilidade para elementos HTML nativos **devem** partir do `wcag-ui`. Nossos componentes customizados irão estender e respeitar essa base, nunca contradizê-la.
    *   **Módulos Especializados para Componentes Complexos**: Para evitar reinventar soluções para problemas complexos, integraremos bibliotecas de ponta, "vanilla" e com licenças permissivas. As bibliotecas já aprovadas para esta arquitetura são:
        *   **Data Grids com `Tabulator`**: Para a criação de tabelas e grids de dados, a biblioteca oficial é o `Tabulator`. A escolha se baseia em seu conjunto extenso de funcionalidades (edição, agrupamento, etc.), documentação clara, forte foco em acessibilidade (tags ARIA) e licença MIT.

2.  **Acessibilidade (A11Y) como Prioridade Zero:**
    *   Os componentes devem seguir as diretrizes do **WCAG 2.2 (Nível AA)**. A conformidade com o `wcag-ui` é o primeiro passo para garantir isso.

3.  **Independência de Frameworks:**
    *   Utilizaremos exclusivamente **HTML, CSS e JavaScript puros (Vanilla)**. O sistema deve ser consumível em qualquer projeto.

4.  **Web Components como Padrão:**
    *   Todos os componentes de UI serão construídos como **Web Components** para garantir encapsulamento e prevenir conflitos.

5.  **Performance em Primeiro Lugar:**
    *   O código será otimizado para ser leve. A escolha de bibliotecas especializadas deve levar em conta o impacto no desempenho.

6.  **Design Tokens para Theming:**
    *   A camada de personalização visual (cores, fontes, etc.) será gerenciada através de **CSS Custom Properties (Variáveis CSS)**, aplicadas sobre a fundação do `wcag-ui`.

7.  **Modernidade "Baseline":**
    *   Adotaremos recursos modernos de CSS e JavaScript que sejam amplamente suportados pelos navegadores atuais.

---

## Base de Conhecimento e Priorização

Fontes da Verdade absoluta (em ordem de precedência):

1.  **`blueprint.md`**: Este documento.
2.  **Diretrizes WCAG 2.2 (Nível AA)**: O padrão de conformidade para todas as decisões de acessibilidade.
3.  **Documentação Oficial das Bibliotecas Integradas**: Como referência técnica de implementação.

> Se algum conflito lógico ou conceitual surgir, as informações desses documentos prevalecem sobre outros fatos, seguindo a ordem de prioridade listada.