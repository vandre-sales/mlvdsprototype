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
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--color-white);
          margin: 0;
        }
        p {
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
