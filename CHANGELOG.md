# Changelog

Todo o histórico de mudanças neste projeto será documentado neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico (SemVer)](https://semver.org/spec/v2.0.0.html).

---

## `[0.1.1]` - 2025-09-04

### Added (para novas funcionalidades)
- N/A

### Changed (para mudanças em funcionalidades existentes)
- **Componente:** O cabeçalho estático foi refatorado para o Web Component `<page-header>`, encapsulando sua estrutura, estilos e comportamento para melhor manutenibilidade.
- **Acessibilidade:** O avatar do usuário no cabeçalho foi alterado de uma `div` para uma tag `<img>` com um atributo `alt` apropriado, melhorando a acessibilidade para leitores de tela.

### Deprecated (para funcionalidades que serão removidas)
- N/A

### Removed (para funcionalidades removidas)
- **HTML:** Removido o código HTML estático do cabeçalho do arquivo `design-system.html`.
- **CSS:** Removido o link para o arquivo `styles/header.css`, que não estava em uso.

### Fixed (para correções de bugs)
- **Layout:** Corrigido o bug de layout no cabeçalho onde os elementos quebravam em múltiplas linhas. Os itens agora se alinham corretamente em uma única linha responsiva.
- **Renderização:** Solucionado o problema onde a página renderizava o HTML estático antigo em vez do Web Component `<page-header>`, garantindo que as lógicas e estilos corretos sejam aplicados.

### Security (em caso de vulnerabilidades)
- N/A

---

## `[0.1.0]` - 2024-07-30

### Added (para novas funcionalidades)
- Estrutura inicial do projeto com arquivos HTML, CSS, e JS.
- Componentes Web fundacionais para o Design System:
    - `DesignSection`
    - `TypographyScale`
    - `LayoutPrinciple`
    - `ColorSwatch`
    - `IconDisplay`
    - `UserFeedbackMessage`
    - `PrimaryTabs`
    - `PillButton`
    - `CircularSpinner`
    - `LinearLoader`
    - `ContentCard`
    - `BadgeTag`
- Arquivos de documentação: `blueprint.md`, `roadmap.md`, `CHANGELOG.md`.

---

## `[0.0.0]` - Template de Versão - YYYY-MM-DD

> Esta seção é o modelo a ser seguido para cada nova versão. Copie esta estrutura e preencha com as informações relevantes. **Sempre adicione a nova versão no topo do arquivo.**

### Added (para novas funcionalidades)
- **Componente:** Adicionado o novo componente `<nome-do-componente>`.
- **Estilo:** Adicionados novos tokens de cor para `success` e `warning`.
- **Documentação:** Adicionada a seção "Como Contribuir" no `README.md`.

### Changed (para mudanças em funcionalidades existentes)
- **Componente:** Alterada a propriedade `size` do componente `<pill-button>` para aceitar valores em `rem`.

### Deprecated (para funcionalidades que serão removidas)
- **Componente:** O componente `<old-component>` foi marcado como obsoleto e será removido na próxima versão major.

### Removed (para funcionalidades removidas)
- **Arquivo:** Removido o arquivo de estilos `legacy-styles.css`.

### Fixed (para correções de bugs)
- **Componente:** Corrigido o bug no `<circular-spinner>` que causava uma animação irregular no Firefox.

### Security (em caso de vulnerabilidades)
- **Dependência:** Atualizada a biblioteca `some-library` para a versão `1.2.4` para corrigir uma vulnerabilidade de segurança.
