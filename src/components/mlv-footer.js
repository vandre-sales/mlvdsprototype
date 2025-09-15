const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
        }

        .footer {
            background-color: var(--mlv-color-brand-dark);
            border-top: 1px solid var(--mlv-color-brand-enterprise);
            padding: 2rem;
            text-align: center;
            font-family: var(--mlv-font-family-body);
            color: var(--mlv-color-brand-light);
            opacity: 0.8;
        }

        .copyright {
            font-size: 0.9em;
            margin: 0;
        }

        .links {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
            gap: 1.5rem;
        }

        ::slotted(a) {
            color: var(--mlv-color-brand-light);
            text-decoration: none;
            transition: color 0.2s ease-in-out;
        }

        ::slotted(a:hover) {
            color: var(--mlv-color-brand-standard);
        }
    </style>
    
    <footer class="footer">
        <div class="links">
            <slot name="footer-links"></slot>
        </div>
        <p class="copyright">
            <slot name="copyright">
                &copy; ${new Date().getFullYear()} Meliva.ai. All rights reserved.
            </slot>
        </p>
    </footer>
`;

class MLVFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('mlv-footer', MLVFooter);
