class LinearLoader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const type = this.getAttribute('type') || 'determinate'; // indeterminate, determinate
    const progress = this.getAttribute('progress') || '75%'; // e.g., '50%'

    this.shadowRoot.innerHTML = `
      <style>
        @keyframes indeterminate-progress {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        :host {
          display: block;
          width: 100%;
        }
        .container {
          height: 0.5rem;
          width: 100%;
          overflow: hidden;
          border-radius: 9999px;
          background-color: var(--color-blue-enterprise);
        }
        .bar {
          height: 100%;
          border-radius: 9999px;
          background-color: var(--color-blue-standard);
        }
        .determinate {
          width: ${progress};
        }
        .indeterminate {
          width: 50%;
          animation: indeterminate-progress 1.5s infinite;
        }
      </style>
      <div class="container">
        <div class="bar ${type}"></div>
      </div>
    `;
  }
}

customElements.define('linear-loader', LinearLoader);
