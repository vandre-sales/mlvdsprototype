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
        *   Executar todas as modificações de arquivos através do protocolo `Safe Write` para garantir a integridade e a validação.
        *   Manter o `CHANGELOG.md` atualizado e executar os protocolos ("Audit", "Sync") para gerar os artefatos de documentação necessários, como o `docs/roadmap.md`.

### 2. O Protocolo "Audit": Um Passo a Passo Detalhado

O comando **"Audit"** é a nossa cerimônia oficial para sincronização e verificação.

1.  **Sua Solicitação:** Você inicia o processo com o comando "Audit".
2.  **Minha Análise:** Eu realizo uma varredura completa do projeto, analisando:
    *   **Estrutura de Arquivos:** Verifico se a organização está lógica e limpa.
    *   **Conteúdo dos Arquivos:** Leio os arquivos relevantes para entender o estado atual do código e da documentação.
    *   **Documentação Estratégica:** Releio o `blueprint.md`, `roadmap.md`, `design/hierarchical_index.md`, e `design/meliva-ds.md` para realinhar com nossos objetivos, estrutura e especificações visuais.
3.  **Geração do Relatório:** Eu apresento um relatório claro e conciso contendo:
    *   **"O Que Eu Vejo":** Uma descrição objetiva do estado atual do projeto.
    *   **"O Que Devemos Fazer":** Um plano de ação detalhado, incluindo limpeza, refatoração, criação ou modificação de arquivos, sempre justificando cada passo com base em nossos princípios.
4.  **Sua Aprovação:** Você revisa o plano e dá o sinal verde. Nenhuma ação de modificação é tomada sem a sua aprovação explícita.
5.  **Execução:** Após a aprovação, eu executo o plano passo a passo.

Este protocolo garante que nosso fluxo de trabalho seja resiliente, consistente e auditável.

### 3. O Protocolo de Sincronização "Sync"

Para garantir que o plano de execução (`docs/roadmap.md`) nunca se desvie da arquitetura (`design/hierarchical_index.md`), utilizamos o protocolo "Sync".

*   **Gatilho:** O protocolo é iniciado pelo Arquiteto com o comando **"Sync"**. Ele deve ser executado sempre que a arquitetura no `design/hierarchical_index.md` for alterada.
*   **Objetivo:** Garantir que o `docs/roadmap.md` seja sempre um reflexo 1:1 da estrutura de componentes implementáveis da nossa arquitetura.

**Passos de Execução (Minha Responsabilidade):**

1.  **Leitura da Arquitetura:** Eu analiso o `design/hierarchical_index.md` para identificar a ordem exata de todos os componentes implementáveis.
2.  **Preservação de Estado:** Eu leio o `docs/roadmap.md` atual para memorizar o status (`✅`, `🔲`, `💡`) de cada componente já listado.
3.  **Geração do Novo Roadmap:** Eu reescrevo o `docs/roadmap.md` do zero, garantindo que a nova estrutura reflita perfeitamente a arquitetura, preservando os status existentes e adicionando novos componentes como `💡 Backlog`.
4.  **Aprovação:** Eu apresento o conteúdo do novo roadmap para sua validação final antes de salvar o arquivo.

Este protocolo elimina o risco de desalinhamento manual e reforça o `design/hierarchical_index.md` como a fonte única da verdade para a estrutura do projeto.

### 4. O Protocolo de Escrita Segura (`Safe Write`)

Para proteger o showroom de escritas acidentais e garantir um portão de qualidade visual, todas as modificações no `index.html` seguem este protocolo.

*   **Objetivo:** Prevenir a quebra da UI/UX no showroom, versionar cada alteração e garantir que o Arquiteto valide visualmente cada mudança antes de ela se tornar a nova base estável.
*   **Gatilho:** Este protocolo é executado automaticamente por mim sempre que um novo componente é adicionado ou uma alteração no showroom é necessária.

**Componentes do Sistema:**

*   **`index_temp.html`**: Contém a última versão **estável e aprovada** do showroom.
*   **`index.html`**: É a versão de **"staging"**, contendo as alterações para validação.
*   **Meta Tag de Versão**: Ambos os arquivos contêm uma tag `<meta name="mlvds-version" content="X.X.X">`, onde a versão é sincronizada com o `CHANGELOG.md`.

**Passos de Execução (Minha Responsabilidade):**

1.  **Leitura da Base:** Eu leio o `index_temp.html` para usar como base.
2.  **Escrita em Staging com Versionamento:** Eu gero o novo conteúdo, adiciono a demonstração do novo componente e atualizo a meta tag de versão no `index.html` para refletir a nova versão do `CHANGELOG.md`.
3.  **Solicitação de Validação:** Eu peço a sua validação visual explícita do `index.html`.
4.  **Promoção:** Somente **após a sua aprovação**, eu copio o conteúdo de `index.html` para `index_temp.html`, consolidando a nova versão como estável.


### 5. Gestão de Documentos

Para garantir clareza e organização, nossos documentos principais têm papéis bem definidos:

*   **Documentos "Constitucionais" (Raramente alterados):**
    *   **`blueprint.md`**: É a nossa "Constituição". Define os princípios, papéis e protocolos imutáveis do projeto. Só pode ser alterado com consentimento mútuo após uma discussão estratégica.
    *   **`docs/design-system-best-practices.md`**: É a nossa "Biblioteca de Referência". Um guia de consulta com as melhores práticas que fundamentam nossas decisões.
  
*   **Documento de Especificação Visual (A Fonte da Verdade do Design):**
    *   **`design/meliva-ds.md`**: Contém a especificação visual oficial do Design System da Meliva (cores, tipografia, tokens). **Este documento dita a implementação visual** e é gerenciado pelo Arquiteto de UX.

*   **Documentos "Dinâmicos" (Constantemente atualizados):**
    *   **`docs/roadmap.md`**: É o nosso "Espelho Cronológico". Um artefato gerado através do protocolo **"Sync"** que reflete o estado de implementação da nossa arquitetura (`design/hierarchical_index.md`). Ele não é editado diretamente.

    *   **`CHANGELOG.md`**: O diário de bordo técnico. É atualizado por mim a cada entrega de funcionalidade ou correção.

*   **Mapa Arquitetural do Sistema:**
    *   **`design/hierarchical_index.md`**: Fornece a visão holística e a estrutura hierárquica de todos os componentes e fundamentos. É a nossa fonte da verdade para a nomenclatura e organização do sistema.


### 6. Ambiente de Validação (Fonte da Verdade)

Devido a inconsistências demonstradas pelo renderizador de preview nativo do Firebase Studio, ele **não será considerado uma fonte confiável para validação visual ou funcional.**

*   **A Fonte da Verdade:** A única fonte da verdade para a validação de qualquer implementação é a renderização em um **browser local moderno (ex: Chrome, Firefox, Edge), a ser verificado pelo Arquiteto de UX (Vandré).**
*   **Protocolo de Confirmação:** O Programador AI (Executor) só considerará uma tarefa como "concluída com sucesso" após receber a confirmação explícita do Arquiteto de UX de que a implementação funciona como esperado em seu browser local.

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
2.  **`design/hierarchical_index.md`**: O mapa arquitetural que define a estrutura e nomenclatura do sistema.
3.  **`design/meliva-ds.md`**: A especificação visual oficial. O código deve refletir o que está definido aqui.
4.  **Diretrizes WCAG 2.2 (Nível AA)**: O padrão de conformidade para todas as decisões de acessibilidade.
5.  **Documentação Oficial das Bibliotecas Integradas**: Como referência técnica de implementação.


> Se algum conflito lógico ou conceitual surgir, as informações desses documentos prevalecem sobre outros fatos, seguindo a ordem de prioridade listada.