class PageHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        /* styles/header.css - Estilos para o cabeçalho principal */
        :host {
          display: block;
        }
        
        .page-header {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0.75rem 2.5rem;
          border-bottom: 1px solid var(--color-blue-enterprise);
          background-color: rgba(17, 45, 71, 0.8);
          backdrop-filter: blur(4px);
          white-space: nowrap;
        }

        .logo-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-group svg {
          width: 1.5rem;
          height: 1.5rem;
          color: var(--color-blue-standard);
          flex-shrink: 0;
        }

        .logo-group h1 {
          font-size: var(--font-size-h5);
          line-height: var(--line-height-h5);
          font-weight: var(--font-weight-medium);
          color: var(--color-white);
          margin: 0;
        }

        nav {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-grow: 1;
        }

        nav a {
          font-size: 0.875rem; /* 14px, intencionalmente menor que o corpo */
          font-weight: var(--font-weight-medium);
          color: var(--color-blue-light);
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }

        nav a:hover {
          color: var(--color-white);
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-left: auto;
        }

        .help-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 9999px;
            background-color: var(--color-blue-dark);
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
        }

        .help-button:hover {
            background-color: var(--color-blue-enterprise);
        }

        .help-button span {
            color: var(--color-blue-light);
        }

        .user-avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 9999px;
            object-fit: cover;
        }
      </style>
      
      <header class="page-header">
        <div class="logo-group">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fill-rule="evenodd"></path>
          </svg>
          <h1>Design System</h1>
        </div>
        <nav>
          <a href="#">Overview</a>
          <a href="#components">Components</a>
          <a href="#typography">Typography</a>
          <a href="#ux-principles">UX Principles</a>
          <a href="#ui-guidelines">UI Guidelines</a>
          <div class="actions">
            <button class="help-button">
              <span class="material-symbols-outlined">help</span>
            </button>
            <img class="user-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfI1nRr2VrLSyVhkZmjyn_A9Jsziq_Y3JWJGkN_4nhHfGO99mRLQJflVPpIeU2rR957BbkeRAvoeVKcNNtx2b7Tv15OZpUhpIEzTWNrrloQDR5Q4BkIpmoxuRB_x3MsEQptcGA_YIyZCMM_XC-zsFmjFSeTSbOZOUyTu-ib30hK9eUObceRz8BC7h1ANO68g7DdPTQx0vTF4ZDp_SDs58I2TaS9vjtcm3Uat9eIHYLV3ZM9Trpi6gRa-jUIndxP3iKbT-8qT33JW4P" alt="User Avatar">
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('page-header', PageHeader);
