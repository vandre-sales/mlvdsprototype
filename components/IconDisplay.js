class IconDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const iconName = this.getAttribute('icon-name') || 'home';
    const iconStyle = this.getAttribute('icon-style') || 'Rounded'; // Rounded or Outlined
    const size = this.getAttribute('size') || '24px';
    const color = this.getAttribute('color') || 'var(--color-blue-light)';

    const className = iconStyle === 'Rounded' ? 'material-symbols-rounded' : 'material-symbols-outlined';

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .icon {
          font-size: ${size};
          color: ${color};
          font-variation-settings: 'FILL' ${iconStyle === 'Rounded' ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        }
      </style>
      <span class="${className} icon">${iconName}</span>
    `;
  }
}

customElements.define('icon-display', IconDisplay);
