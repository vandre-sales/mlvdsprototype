# Roadmap do Design System

Este documento dinâmico rastreia nosso progresso e define as próximas prioridades. Ele é a nossa fonte da verdade para o planejamento e execução do desenvolvimento do Design System.

-----

## Legenda

  - **Status:**
      - `✅ Concluído`: A tarefa foi finalizada e validada.
      - `▶️ Em Progresso`: A tarefa está sendo ativamente desenvolvida.
      - `⏸️ Em Espera`: A tarefa está pausada, aguardando dependências ou definição.
      - `🔲 Próximo`: Tarefa planejada para a próxima sprint.
      - `💡 Backlog`: Ideia ou tarefa a ser priorizada no futuro.
  - **Prioridade:**
      - `🔥 Altíssima`
      - `🔼 Alta`
      - `⏹️ Média`
      - `🔽 Baixa`

-----

## Fase 1: Fundação e Estrutura do Projeto

*Objetivo: Estabelecer a base arquitetônica do Design System, configurar o ambiente de desenvolvimento e integrar a biblioteca fundamental de acessibilidade.*

| Tarefa | Status | Prioridade | Sprint/ETA |
|---|---|---|---|
| Configurar a estrutura de diretórios do projeto | ▶️ Em Progresso | 🔥 Altíssima | Sprint 1 |
| Integrar a biblioteca `wcag-ui` como base no `/src/core` | 🔲 Próximo | 🔥 Altíssima | Sprint 1 |
| Criar o arquivo de tema `/src/styles/theme.css` com design tokens | 🔲 Próximo | 🔥 Altíssima | Sprint 1 |
| Configurar documentação inicial (`blueprint.md`, `roadmap.md`) | ✅ Concluído | 🔥 Altíssima | Sprint 1 |

-----

## Fase 2: Theming dos Componentes Essenciais (`wcag-ui`)

*Objetivo: Aplicar a identidade visual da marca sobre os componentes base do `wcag-ui`, garantindo consistência visual e aderência aos design tokens.*

| Tarefa | Status | Prioridade | Sprint/ETA |
|---|---|---|---|
| Aplicar estilos para Tipografia (Títulos, Parágrafos, Listas) | 💡 Backlog | 🔥 Altíssima | Sprint 2 |
| Aplicar estilos para Botões e Controles de Formulário | 💡 Backlog | 🔥 Altíssima | Sprint 2 |
| Aplicar estilos para Layout e Contêineres (Cards, Grid System) | 💡 Backlog | 🔼 Alta | Sprint 3 |
| Aplicar estilos para Feedback (Alertas, Banners) | 💡 Backlog | 🔼 Alta | Sprint 3 |

-----

## Fase 3: Integração de Componentes Especializados

*Objetivo: Integrar e estilizar bibliotecas "vanilla" de terceiros para funcionalidades complexas, garantindo que sigam a identidade visual do sistema.*

| Tarefa | Status | Prioridade | Sprint/ETA |
|---|---|---|---|
| Integrar e estilizar biblioteca de Data Grid (ex: Tabulator) | 💡 Backlog | 🔥 Altíssima | Sprint 4 |
| Integrar e estilizar biblioteca de Notificações/Toasts (ex: Toastify.js) | 💡 Backlog | 🔼 Alta | Sprint 4 |
| Integrar e estilizar biblioteca para Selects Avançados (ex: Choices.js) | 💡 Backlog | 🔼 Alta | Sprint 5 |
| Integrar e estilizar biblioteca para Upload de Arquivos (ex: Filepond) | 💡 Backlog | ⏹️ Média | Sprint 5 |

-----

## Fase 4: Documentação e Governança

*Objetivo: Criar um site de documentação público para o Design System e estabelecer processos de governança para sua manutenção e evolução.*

| Tarefa | Status | Prioridade | Sprint/ETA |
|---|---|---|---|
| Configurar ferramenta para site de documentação (ex: Storybook) | 💡 Backlog | ⏹️ Média | Sprint 6 |
| Documentar componentes do Core (`wcag-ui`) | 💡 Backlog | ⏹️ Média | Sprint 7 |
| Documentar componentes especializados integrados | 💡 Backlog | 🔽 Baixa | Sprint 8 |

-----

## Anexo: Estrutura Atual de Arquivos

```
/
├── dist/
│   ├── css/
│   │   └── main.min.css
│   └── js/
│       └── main.min.js
├── docs/
│   ├── blueprint.md
│   ├── CHANGELOG.md
│   ├── roadmap.md
│   └── guidelines/
│       ├── 01-colors.md
│       ├── 02-typography.md
│       ├── 03-spacing.md
│       └── 04-accessibility.md
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/
│   │   ├── custom-button/
│   │   │   ├── custom-button.css
│   │   │   └── custom-button.js
│   │   └── page-header/
│   │       ├── page-header.css
│   │       └── page-header.js
│   ├── core/
│   │   └── (Conteúdo do wcag-ui aqui)
│   ├── js/
│   │   └── main.js
│   ├── styles/
│   │   ├── base.css
│   │   ├── overrides.css
│   │   └── theme.css
│   └── vendor/
│       ├── tabulator/
│       └── toastify-js/
├──.gitignore
├── index.html
├── package.json
└── README.md
```