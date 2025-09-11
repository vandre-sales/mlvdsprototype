class TypographyScale extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const tag = this.getAttribute('tag') || 'H1';
    const title = this.getAttribute('title-text') || 'Sample Text';
    const example = this.getAttribute('example-text') || 'The quick brown fox jumps over the lazy dog.';
    
    // Determina qual família de fonte usar com base na tag
    const fontFamily = tag === 'H1' ? 'var(--font-family-heading)' : 'var(--font-family-body)';
    const fontSize = `var(--font-size-${tag.toLowerCase()})`;
    const lineHeight = `var(--line-height-${tag.toLowerCase()})`;
    const fontWeight = tag.startsWith('H') ? 'var(--font-weight-medium)' : 'var(--font-weight-light)';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .grid {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
          gap: 0 1.5rem;
        }
        .tag {
          font-size: 0.875rem;
          font-weight: var(--font-weight-medium);
          color: var(--color-blue-light);
        }
        .content {
          font-family: ${fontFamily};
          font-size: ${fontSize};
          line-height: ${lineHeight};
          font-weight: ${fontWeight};
        }
        .title {
          color: var(--color-white);
        }
        /* O exemplo para o H1 também deve usar a fonte de corpo para o texto longo */
        .example {
          font-family: var(--font-family-body);
          font-size: var(--font-size-body);
          line-height: var(--line-height-body);
          font-weight: var(--font-weight-light);
          color: var(--color-blue-light);
          opacity: 0.7;
          margin-top: 0.5rem;
        }
      </style>
      <div class="grid">
        <span class="tag">${tag}</span>
        <div>
          <p class="content title">${title}</p>
          ${tag === 'Body' ? `<p class="content example">${example}</p>` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('typography-scale', TypographyScale);
