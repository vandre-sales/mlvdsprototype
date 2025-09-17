# Roadmap Cronológico do MLVDS

Este documento é a representação sequencial do nosso plano de construção, espelhando **exatamente** a estrutura definida em `design/hierarchical_index.md`. A ordem dos itens nesta lista **é** a ordem de implementação.

O `index.html` (nosso showroom) evoluirá a cada item concluído, tornando-se uma renderização ao vivo e fiel da nossa arquitetura de componentes.

---

## Legenda

-   `✅ Concluído`
-   `🔲 Próximo`
-   `💡 Backlog`

---

## Fase 1: Fundação

*Objetivo: Estabelecer a base arquitetônica, tokens e estilos globais.*

| Tarefa | Status |
| :--- | :--- |
| Definir arquitetura e governança (`blueprint.md`) | ✅ Concluído |
| Configurar a estrutura de diretórios do projeto | ✅ Concluído |
| Integrar a fundação `wcag-ui` | ✅ Concluído |
| Definir Design Tokens (`src/tokens.css`) | ✅ Concluído |
| Aplicar estilos globais (`style.css`) | ✅ Concluído |
| Refatorar `index.html` para a estrutura do showroom | ✅ Concluído |

---

## Fase 2: Evolução do Showroom via Implementação de Componentes

*Objetivo: Construir e exibir cada componente no showroom, seguindo a ordem hierárquica.*

### 2.1. Estrutura e Layout

| Tarefa | Status |
| :--- | :--- |
| **2.1.2.** Criar Web Component: `<mlv-header>` | ✅ Concluído |
| **2.1.3.** Criar Web Component: `<mlv-footer>` | ✅ Concluído |

### 2.2. Navegação

| Tarefa | Status |
| :--- | :--- |
| **2.2.1.** Criar Web Component: `<mlv-tabs>` | ✅ Concluído |
| **2.2.2.** Criar Web Component: `<mlv-drawer>` | ✅ Concluído |

### 2.3. Ações e Interações

| Tarefa | Status |
| :--- | :--- |
| **2.3.1.** Criar Web Component: `<mlv-button>` | ✅ Concluído |
| **2.3.2.** Criar Web Component: `<mlv-pill>` | ✅ Concluído |

### 2.4. Exibição de Conteúdo

| Tarefa | Status |
| :--- | :--- |
| **2.4.1.** Criar Web Component: `<mlv-card>` | ✅ Concluído |
| **2.4.2.** Criar Web Component: `<mlv-badge>` & `<mlv-tag>` | 🔲 Próximo |
| **2.4.3.** Integração: Tabela de Dados (`Tabulator`) | 💡 Backlog |

### 2.5. Feedback de Usuário

| Tarefa | Status |
| :--- | :--- |
| **2.5.1.** Criar Web Component: `<mlv-alert>` | 💡 Backlog |
| **2.5.2.** Criar Web Component: `<mlv-toast>` | 💡 Backlog |
| **2.5.3.** Criar Web Component: `<mlv-spinner>` | 💡 Backlog |
| **2.5.4.** Criar Web Component: `<mlv-modal>` | 💡 Backlog |

### 2.6. Formulários

| Tarefa | Status |
| :--- | :--- |
| **2.6.1.** Criar Web Component: `<mlv-input>` | 💡 Backlog |
| **2.6.2.** Criar Web Component: `<mlv-checkbox>` & `<mlv-radio>` | 💡 Backlog |
| **2.6.3.** Criar Web Component: `<mlv-select>` | 💡 Backlog |

### 2.7. Visualização de Dados

| Tarefa | Status |
| :--- | :--- |
| **2.7.1.** Integração: Gráficos (`Charts`) | 💡 Backlog |
