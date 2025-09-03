class ColorSwatch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const colorName = this.getAttribute('color-name') || 'Color Name';
    const colorVar = this.getAttribute('color-var') || '--color-white';
    const colorHex = this.getAttribute('color-hex') || '#FFFFFF';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .swatch-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .color-block {
          height: 6rem;
          width: 100%;
          border-radius: 0.5rem;
          background-color: var(${colorVar});
          border: 1px solid var(--color-blue-enterprise);
        }
        .info {
          padding: 0 0.5rem;
        }
        .name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-white);
        }
        .variable, .hex {
          font-size: 0.875rem;
          color: var(--color-blue-light);
        }
        .hex {
          opacity: 0.7;
          font-size: 0.75rem;
        }
      </style>
      <div class="swatch-card">
        <div class="color-block"></div>
        <div class="info">
          <p class="name">${colorName}</p>
          <p class="variable">${colorVar}</p>
          <p class="hex">${colorHex}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('color-swatch', ColorSwatch);
