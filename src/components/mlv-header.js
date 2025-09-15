const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
        }

        .header {
            background-color: var(--mlv-color-brand-dark);
            border-bottom: 1px solid var(--mlv-color-brand-enterprise);
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo-container {
            display: flex;
            align-items: center;
        }

        .logo-container img {
            height: 40px; /* Adjust as needed */
        }

        nav {
            display: flex;
            gap: 1.5rem;
        }

        /* Basic styling for slotted nav links */
        ::slotted(a) {
            font-family: var(--mlv-font-family-body);
            color: var(--mlv-color-ui-text-primary);
            text-decoration: none;
            font-weight: var(--mlv-font-weight-medium);
            transition: color 0.2s ease-in-out;
        }

        ::slotted(a:hover) {
            color: var(--mlv-color-brand-standard);
        }

    </style>
    
    <header class="header">
        <div class="logo-container">
            <slot name="logo">
                <!-- Default logo -->
                <img src="https://meliva.ai/wp-content/uploads/2025/05/Logo_Horizontal_Meliva_ai_Full_White_FFFFFF.png" alt="Meliva.ai Logo">
            </slot>
        </div>
        <nav>
            <slot name="nav-items"></slot>
        </nav>
    </header>
`;

class MLVHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('mlv-header', MLVHeader);
