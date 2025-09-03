class DesignSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .section-container {
          background-color: var(--color-blue-dark);
          border: 1px solid var(--color-blue-enterprise);
          box-shadow: none;
          padding: 2rem;
          border-radius: 0.5rem;
          margin-bottom: 4rem;
        }
      </style>
      <div class="section-container">
        <slot name="title"></slot>
        <div class="section-content">
          <slot name="content"></slot>
        </div>
      </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

export default DesignSection;
