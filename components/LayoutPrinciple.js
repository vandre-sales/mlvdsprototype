class LayoutPrinciple extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const icon = this.getAttribute('icon') || 'space_dashboard';
    const title = this.getAttribute('title-text') || 'Principle';
    const description = this.getAttribute('description-text') || 'Description of the principle.';

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        @import url('https://cdn.tailwindcss.com?plugins=forms,container-queries');
        :host {
          display: block;
        }
        .card {
          border-radius: 0.5rem;
          border: 1px solid var(--color-blue-enterprise);
          background-color: var(--color-blue-dark);
          padding: 1.5rem;
        }
        .icon {
          font-size: 2rem;
          color: var(--color-blue-standard);
        }
        .title {
          margin-top: 0.75rem;
          font-weight: 600;
          color: var(--color-white);
        }
        .description {
          margin-top: 0.25rem;
          font-size: 0.875rem;
          color: var(--color-blue-light);
        }
      </style>
      <div class="card">
        <span class="material-symbols-outlined icon">${icon}</span>
        <h4 class="title">${title}</h4>
        <p class="description">${description}</p>
      </div>
    `;
  }
}

customElements.define('layout-principle', LayoutPrinciple);
