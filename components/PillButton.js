class PillButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.textContent || 'Button';
    const active = this.hasAttribute('active');
    const disabled = this.hasAttribute('disabled');

    let buttonClasses = 'pill';
    if (active) {
      buttonClasses += ' active';
    }
    if (disabled) {
      buttonClasses += ' disabled';
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        .pill {
          border-radius: 9999px;
          background-color: transparent;
          padding: 0.5rem 1rem;
          font-size: 0.875rem; /* Manteremos 14px por enquanto */
          font-weight: var(--font-weight-medium);
          color: var(--color-blue-light);
          cursor: pointer;
          border: none;
          transition: background-color 0.2s ease-in-out;
        }
        .pill:hover {
          background-color: var(--color-blue-enterprise);
        }
        .pill.active {
          background-color: var(--color-blue-standard);
          color: var(--color-white);
          font-weight: var(--font-weight-semibold);
        }
        .pill.disabled {
          background-color: transparent;
          color: rgba(219, 235, 246, 0.5);
          cursor: not-allowed;
        }
        .pill.disabled:hover {
          background-color: transparent;
        }
      </style>
      <button class="${buttonClasses}" ${disabled ? 'disabled' : ''}>
        ${text}
      </button>
    `;
  }
}

customElements.define('pill-button', PillButton);
