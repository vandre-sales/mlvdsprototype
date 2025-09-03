class TypographyScale extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const tag = this.getAttribute('tag') || 'H1';
    const sizeClass = this.getAttribute('size') || 'text-5xl';
    const weightClass = this.getAttribute('weight') || 'font-black';
    const title = this.getAttribute('title-text') || 'Montserrat Black 48px';
    const example = this.getAttribute('example-text') || 'The quick brown fox jumps over the lazy dog.';

    // Map Tailwind classes to CSS variables
    const styles = this.getStyles(sizeClass, weightClass);

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
          font-weight: 500;
          color: var(--color-blue-light);
        }
        .content {
            font-size: ${styles.size};
            font-weight: ${styles.weight};
        }
        .title {
          color: var(--color-white);
        }
        .example {
          color: var(--color-blue-light);
          opacity: 0.7;
        }
      </style>
      <div class="grid">
        <span class="tag">${tag}</span>
        <div class="flex flex-col">
          <p class="content title">${title}</p>
          <p class="content example">${example}</p>
        </div>
      </div>
    `;
  }

  getStyles(sizeClass, weightClass) {
    const sizeMap = {
      'text-5xl': '3rem',
      'text-4xl': '2.25rem',
      'text-3xl': '1.875rem',
      'text-2xl': '1.5rem',
      'text-xl': '1.25rem',
      'text-lg': '1.125rem',
      'text-base': '1rem',
    };

    const weightMap = {
      'font-black': '900',
      'font-bold': '700',
      'font-medium': '500',
      'font-normal': '400',
    };

    return {
      size: sizeMap[sizeClass] || '3rem',
      weight: weightMap[weightClass] || '900',
    };
  }
}

customElements.define('typography-scale', TypographyScale);
