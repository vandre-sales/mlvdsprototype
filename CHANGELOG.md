# Changelog

All notable changes to this project will be documented in this file.

## [0.6.0] - 2024-08-02

### Added
- **`<mlv-tabs>` Web Component:** Created a WCAG-compliant tabs component (`src/components/mlv-tabs.js`) for organizing content into selectable panels.

### Changed
- **Showroom Evolution:** Added the "Navegação" category to `index.html` and integrated the `<mlv-tabs>` component for live demonstration.

## [0.5.0] - 2024-08-02

### Added
- **`<mlv-footer>` Web Component:** Created the main site footer component (`src/components/mlv-footer.js`). It includes slots for copyright text and footer links.

### Changed
- **Showroom Evolution:** Integrated the `<mlv-footer>` component into the `index.html` for live demonstration and added its corresponding documentation card.

## [0.4.0] - 2024-08-02

### Added
- **`<mlv-header>` Web Component:** Created the main site header component (`src/components/mlv-header.js`). It includes slots for a logo and navigation items, and is displayed in the showroom.

### Changed
- **Showroom Structure:** Refactored `index.html` to mirror the chronological and hierarchical structure of `design/hierarchical_index.md`. Added category sections and titles.
- **`style.css`:** Added styles for the new category sections in the showroom.

## [0.3.0] - 2024-08-02

### Added
- **`mlv-button` Web Component:** Created the first official component of the design system. It is built as a Web Component, extends `wcag-ui`, uses the official design tokens, and supports `status` and `disabled` attributes.

## [0.2.0] - 2024-08-02

### Added
- **`wcag-ui` Foundation:** Integrated the `wcag-ui` stylesheet via CDN as the base layer for accessible styling.
- **Official Design Tokens:** Created the initial `src/tokens.css` file and defined the Meliva official visual identity (colors, typography, spacing) as CSS Custom Properties.
- **`design/meliva-ds.md`:** Added the official design specification document as a source of truth.

### Changed
- **`blueprint.md`:** Updated to formalize the hybrid architecture, making `wcag-ui` and `design/meliva-ds.md` official sources of truth for the project.
- **`index.html`:** Added test elements to visually confirm the integration of the `wcag-ui` foundation.

## [0.1.0] - 2024-08-02

### Added
- **Initial Project Setup:** Established a clean, organized, and scalable file structure.
- **Architecture Definition:** Formalized the project's principles, governance, and hybrid architecture in the `blueprint.md`.
- **Git Repository Initialization:** Created the initial commit, establishing a stable baseline for development.
