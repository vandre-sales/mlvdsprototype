class MLVTabs extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: var(--mlv-font-family-body);
                }
                .tabs-header {
                    display: flex;
                    border-bottom: 2px solid var(--mlv-color-brand-enterprise);
                }
                .tab-panels {
                    border: 1px solid var(--mlv-color-brand-enterprise);
                    border-top: none;
                    padding: 1.5rem;
                }
                ::slotted(h3[slot^="tab-title"]) {
                    padding: 0.75rem 1.5rem;
                    margin: 0;
                    cursor: pointer;
                    font-weight: var(--mlv-font-weight-medium);
                    color: var(--mlv-color-brand-light);
                    opacity: 0.7;
                    border-bottom: 2px solid transparent;
                    margin-bottom: -2px; /* Align with parent border */
                    transition: all 0.2s ease-in-out;
                }
                ::slotted(h3[slot^="tab-title"].active) {
                    opacity: 1;
                    color: var(--mlv-color-brand-standard);
                    border-bottom-color: var(--mlv-color-brand-standard);
                }
                ::slotted(div[slot^="tab-panel"]) {
                    display: none;
                }
                ::slotted(div[slot^="tab-panel"].active) {
                    display: block;
                }
            </style>
            <div class="tabs-container">
                <div class="tabs-header" role="tablist">
                    <slot name="tab-title-1"></slot>
                    <slot name="tab-title-2"></slot>
                    <slot name="tab-title-3"></slot>
                    <slot name="tab-title-4"></slot>
                </div>
                <div class="tab-panels">
                    <slot name="tab-panel-1"></slot>
                    <slot name="tab-panel-2"></slot>
                    <slot name="tab-panel-3"></slot>
                    <slot name="tab-panel-4"></slot>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.tabs = this.querySelectorAll('[slot^="tab-title"]');
        this.panels = this.querySelectorAll('[slot^="tab-panel"]');
        
        this.tabs.forEach((tab, index) => {
            tab.setAttribute('role', 'tab');
            tab.setAttribute('aria-controls', `panel-${index + 1}`);
            tab.setAttribute('tabindex', '0'); // Make focusable

            tab.addEventListener('click', () => this.selectTab(index));
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.selectTab(index);
                }
            });
        });

        this.panels.forEach((panel, index) => {
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('id', `panel-${index + 1}`);
        });

        // Activate the first tab by default
        this.selectTab(0);
    }

    selectTab(index) {
        this.tabs.forEach((tab, i) => {
            const isActive = i === index;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
            tab.setAttribute('tabindex', isActive ? '0' : '-1');
        });

        this.panels.forEach((panel, i) => {
            panel.classList.toggle('active', i === index);
        });
    }
}

customElements.define('mlv-tabs', MLVTabs);
