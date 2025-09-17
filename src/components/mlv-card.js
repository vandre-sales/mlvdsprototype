const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: block;
            background-color: var(--color-dark-blue, #081521);
            border: 1px solid var(--color-enterprise-blue, #1a4f75);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            transition: all 0.2s ease-in-out;
        }
        :host(:hover) {
            box-shadow: 0 6px 16px rgba(75, 156, 214, 0.3);
            transform: translateY(-2px);
        }
        .card-container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .header, .body, .footer {
            padding: 1.5rem;
        }
        .header {
            border-bottom: 1px solid var(--color-enterprise-blue, #1a4f75);
        }
        .body {
            flex-grow: 1; /* Ensures body takes up available space */
        }
        .footer {
            border-top: 1px solid var(--color-enterprise-blue, #1a4f75);
        }
        /* Hide slots that have no content */
        ::slotted(*) {
            margin: 0;
        }
        slot:not([name]) { /* default slot (body) */
            display: block;
        }
        slot[name="header"], slot[name="footer"] {
            display: block;
        }
    </style>
    <div class="card-container">
        <div class="header" part="header">
            <slot name="header"></slot>
        </div>
        <div class="body" part="body">
            <slot></slot> <!-- Default slot for main content -->
        </div>
        <div class="footer" part="footer">
            <slot name="footer"></slot>
        </div>
    </div>
`;

class MlvCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Hide sections if slots are empty
        this._headerSlot = this.shadowRoot.querySelector('slot[name="header"]');
        this._footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
    }

    connectedCallback() {
        this._headerSlot.parentNode.style.display = this.hasSlottedChildren(this._headerSlot) ? 'block' : 'none';
        this._footerSlot.parentNode.style.display = this.hasSlottedChildren(this._footerSlot) ? 'block' : 'none';

        this._headerSlot.addEventListener('slotchange', this.onSlotChange.bind(this));
        this._footerSlot.addEventListener('slotchange', this.onSlotChange.bind(this));
    }

    disconnectedCallback() {
        this._headerSlot.removeEventListener('slotchange', this.onSlotChange.bind(this));
        this._footerSlot.removeEventListener('slotchange', this.onSlotChange.bind(this));
    }

    hasSlottedChildren(slot) {
        return slot.assignedNodes().length > 0;
    }

    onSlotChange(e) {
        const slot = e.target;
        const container = slot.parentNode;
        container.style.display = this.hasSlottedChildren(slot) ? 'block' : 'none';
    }
}

customElements.define('mlv-card', MlvCard);
