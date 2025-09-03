class CircularSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const size = this.getAttribute('size') || 'medium'; // small, medium, large
    const color = this.getAttribute('color') || 'var(--color-blue-standard)';

    const sizeMap = {
      small: { dimension: '24px', borderWidth: '2px' },
      medium: { dimension: '40px', borderWidth: '4px' },
      large: { dimension: '64px', borderWidth: '4px' },
    };
    
    const config = sizeMap[size] || sizeMap.medium;

    this.shadowRoot.innerHTML = `
      <style>
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        :host {
          display: inline-block;
        }
        .spinner {
          width: ${config.dimension};
          height: ${config.dimension};
          border-radius: 50%;
          border: ${config.borderWidth} solid ${color};
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }
      </style>
      <div class="spinner"></div>
    `;
  }
}

customElements.define('circular-spinner', CircularSpinner);
