class BadgeTag extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const type = this.getAttribute('type') || 'default';
    const size = this.getAttribute('size') || 'medium';
    const shape = this.getAttribute('shape') || 'rounded';
    const icon = this.getAttribute('icon');

    const styles = `
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        font-weight: var(--font-weight-medium);
        border-radius: ${shape === 'pill' ? '9999px' : '0.375rem'};
      }
      .badge-sm {
        padding: 0.125rem 0.5rem;
        font-size: 10px;
      }
      .badge-md {
        padding: 0.25rem 0.625rem;
        font-size: 0.75rem;
      }
      .badge-lg {
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
      }
      
      /* Type styles */
      .badge-default {
        background-color: var(--color-blue-enterprise);
        color: var(--color-blue-light);
      }
      .badge-success {
        background-color: rgba(46, 178, 60, 0.2);
        color: var(--color-success);
      }
      .badge-warning {
        background-color: rgba(244, 172, 69, 0.2);
        color: var(--color-alert);
      }
      .badge-danger {
        background-color: rgba(235, 87, 87, 0.2);
        color: var(--color-danger);
      }
      
      .icon {
        font-size: 1rem; /* Tamanho do ícone movido para CSS */
      }
    `;

    const sizeClassMap = {
      small: 'badge-sm',
      medium: 'badge-md',
      large: 'badge-lg',
    };
    const sizeClass = sizeClassMap[size] || 'badge-md';

    const typeClassMap = {
        default: 'badge-default',
        success: 'badge-success',
        warning: 'badge-warning',
        danger: 'badge-danger',
    };
    const typeClass = typeClassMap[type] || 'badge-default';

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <span class="badge ${sizeClass} ${typeClass}">
        ${icon ? `<span class="material-symbols-rounded icon">${icon}</span>` : ''}
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('badge-tag', BadgeTag);
