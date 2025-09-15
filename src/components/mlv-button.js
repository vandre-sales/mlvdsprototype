const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
            --button-bg-color: var(--mlv-color-brand-standard);
            --button-text-color: var(--mlv-color-ui-white);
        }

        .button {
            /* Inherit base styles from wcag-ui, then override */
            font-family: var(--mlv-font-family-body);
            font-weight: var(--mlv-font-weight-medium);
            font-size: var(--mlv-font-size-body);
            color: var(--button-text-color);
            background-color: var(--button-bg-color);
            border: none;
            padding: 0.75em 1.5em;
            border-radius: var(--mlv-border-radius-medium);
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
            text-decoration: none; /* From wcag-ui override */
        }

        :host([status="success"]) {
            --button-bg-color: var(--mlv-color-status-success);
        }

        :host([status="alert"]) {
            --button-bg-color: var(--mlv-color-status-alert);
        }

        :host([status="danger"]) {
            --button-bg-color: var(--mlv-color-status-danger);
        }

        .button:hover {
            filter: brightness(0.9);
        }

        :host([disabled]) .button {
            background-color: var(--mlv-color-brand-dark);
            color: #999;
            cursor: not-allowed;
            filter: none;
        }

        .button:focus-visible {
            outline: 2px solid var(--mlv-color-brand-standard);
            outline-offset: 2px;
        }
    </style>
    
    <link rel="stylesheet" href="https://unpkg.com/wcag-ui@latest/style.css">
    
    <button class="button" part="button">
        <slot></slot>
    </button>
`;

class MLVButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            const button = this.shadowRoot.querySelector('button');
            button.disabled = newValue !== null;
        }
    }
}

customElements.define('mlv-button', MLVButton);
