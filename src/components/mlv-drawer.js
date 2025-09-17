class MlvDrawer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    --drawer-width: 300px;
                }
                .scrim {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                    z-index: 999;
                }
                .drawer {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: var(--drawer-width);
                    height: 100%;
                    background-color: var(--color-background, #112d47);
                    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    padding: var(--spacing-md, 16px);
                    border-right: 1px solid var(--color-enterprise-blue, #1a4f75);
                }
                :host([open]) .scrim {
                    opacity: 1;
                    visibility: visible;
                }
                :host([open]) .drawer {
                    transform: translateX(0);
                }
                .drawer-header {
                    display: flex;
                    justify-content: flex-end;
                    padding-bottom: var(--spacing-md, 16px);
                }
                .close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--color-text-body, #dbebf6);
                    font-size: 24px;
                }
            </style>
            <div class="scrim"></div>
            <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
                <div class="drawer-header">
                    <button class="close-btn" aria-label="Close drawer">&times;</button>
                </div>
                <div class="drawer-content">
                    <slot></slot>
                </div>
            </aside>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => this.close());
        this.shadowRoot.querySelector('.scrim').addEventListener('click', () => this.close());

        this.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.hasAttribute('open')) {
                this.close();
            }
        });
    }

    open() {
        this.setAttribute('open', '');
        this.focus();
    }

    close() {
        this.removeAttribute('open');
    }
}

customElements.define('mlv-drawer', MlvDrawer);
