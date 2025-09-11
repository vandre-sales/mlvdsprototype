class DesignSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('title-text') || 'Default Title';
    const description = this.getAttribute('description-text') || 'Default description.';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-bottom: 4rem;
        }
        .section-header {
            border-bottom: 1px solid var(--color-blue-dark);
            padding-bottom: 1rem;
            margin-bottom: 2rem;
        }
        h2 {
          font-family: var(--font-family-body);
          font-size: var(--font-size-h2);
          line-height: var(--line-height-h2);
          font-weight: var(--font-weight-medium);
          color: var(--color-white);
          margin: 0;
        }
        p {
          font-family: var(--font-family-body);
          font-size: var(--font-size-body);
          line-height: var(--line-height-body);
          font-weight: var(--font-weight-light);
          margin-top: 1rem;
          color: var(--color-blue-light);
          max-width: 80ch;
        }
      </style>
      <div class="section-header">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      <slot></slot>
    `;
  }
}

customElements.define('design-section', DesignSection);
