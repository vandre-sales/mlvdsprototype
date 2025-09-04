class PrimaryTabs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        :host {
          display: block;
          width: 100%;
        }
        .tab-bar {
          border-bottom: 1px solid var(--color-blue-enterprise);
        }
        nav {
          display: flex;
          gap: 1.5rem;
          margin-bottom: -1px; /* Aligns with the container border */
        }
        .tab {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          border-bottom: 2px solid transparent;
          padding: 1rem 0.25rem;
          font-size: 0.875rem; /* Mantido 14px por consistência visual */
          font-weight: var(--font-weight-medium);
          color: var(--color-blue-light);
          background-color: transparent;
          border-radius: 0;
          cursor: pointer;
        }
        .tab:hover {
          border-bottom-color: var(--color-blue-light);
          color: var(--color-white);
        }
        .tab.active {
          border-bottom-color: var(--color-blue-standard);
          color: var(--color-white);
          font-weight: var(--font-weight-semibold);
        }
        .icon {
          font-size: 1rem;
        }
      </style>
      <div class="tab-bar">
        <nav>
          <button class="tab active">Profile</button>
          <button class="tab">Team</button>
          <button class="tab">Projects</button>
          <button class="tab">
            <span class="material-symbols-outlined icon">settings</span>
            Settings
          </button>
        </nav>
      </div>
    `;
  }
}

customElements.define('primary-tabs', PrimaryTabs);
