const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }
        .pill {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1.25rem;
            border-radius: 9999px; /* Fully rounded */
            font-family: 'Montserrat', sans-serif;
            font-size: 15px;
            font-weight: 500;
            color: var(--color-light-blue, #dbebf6);
            border: 1px solid var(--color-enterprise-blue, #1a4f75);
            background-color: transparent;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            user-select: none; /* Prevents text selection on click */
        }
        .pill:hover {
            background-color: var(--color-enterprise-blue, #1a4f75);
            box-shadow: 0 0 10px rgba(75, 156, 214, 0.4);
        }
        :host([active]) .pill {
            background-color: var(--color-standard-blue, #4b9cd6);
            border-color: var(--color-standard-blue, #4b9cd6);
            color: var(--color-dark-blue, #081521);
            font-weight: 600;
            box-shadow: 0 0 12px rgba(75, 156, 214, 0.6);
        }
    </style>
    <div class="pill" role="button" tabindex="0">
        <slot></slot>
    </div>
`;

class MlvPill extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._pillElement = this.shadowRoot.querySelector('.pill');
    }

    static get observedAttributes() {
        return ['active'];
    }

    get active() {
        return this.hasAttribute('active');
    }

    set active(value) {
        if (value) {
            this.setAttribute('active', '');
        } else {
            this.removeAttribute('active');
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'active') {
            this._updateActiveState();
        }
    }

    connectedCallback() {
        this.addEventListener('click', this._toggleActive);
        this.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                this._toggleActive();
                e.preventDefault();
            }
        });
        this._updateActiveState();
    }

    disconnectedCallback() {
        this.removeEventListener('click', this._toggleActive);
    }

    _toggleActive() {
        this.active = !this.active;
        this.dispatchEvent(new CustomEvent('change', {
            bubbles: true,
            composed: true,
            detail: { active: this.active }
        }));
    }
    
    _updateActiveState() {
        if (this.active) {
            this._pillElement.setAttribute('aria-pressed', 'true');
        } else {
            this._pillElement.setAttribute('aria-pressed', 'false');
        }
    }
}

customElements.define('mlv-pill', MlvPill);
