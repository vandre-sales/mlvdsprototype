class ContentCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const cardType = this.getAttribute('card-type') || 'standard';
    const titleText = this.getAttribute('title-text');
    const descriptionText = this.getAttribute('description-text');
    const iconName = this.getAttribute('icon-name');
    const imageUrl = this.getAttribute('image-url');

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
        }
        .card {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: 0.5rem;
          border: 1px solid var(--color-blue-enterprise);
          background-color: var(--color-blue-dark);
          overflow: hidden; /* Ensures image corners are rounded */
        }
        .content {
          padding: 1.5rem;
          flex: 1; /* Allows content to fill space */
        }
        .title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-white);
          margin: 0 0 0.5rem 0;
        }
        .description {
          font-size: 0.875rem;
          color: var(--color-blue-light);
          margin: 0;
        }
        .actions-container {
          border-top: 1px solid var(--color-blue-enterprise);
          padding: 1rem 1.5rem;
        }
        
        /* Informative Card Styles */
        .informative-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .icon-container {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 0.5rem;
          background-color: rgba(75, 156, 214, 0.2); /* var(--color-blue-standard) with 20% opacity */
        }
        .icon {
          font-size: 2rem;
          color: var(--color-blue-standard);
          font-variation-settings: 'FILL' 1;
        }
        .informative-text .title {
           font-size: 1.125rem;
        }
        
        /* Interactive Card Styles */
        .card.interactive .actions-container {
            margin-top: auto; /* Pushes actions to the bottom */
        }

        /* Media Card Styles */
        .media-image {
            width: 100%;
            aspect-ratio: 16 / 9;
            background-size: cover;
            background-position: center;
        }
      </style>
      
      <div class="card ${cardType}">
        ${imageUrl ? `<div class="media-image" style="background-image: url('${imageUrl}')"></div>` : ''}

        ${cardType === 'informative' ? `
          <div class="content informative-content">
            <div class="icon-container">
              <span class="material-symbols-rounded icon">${iconName}</span>
            </div>
            <div class="informative-text">
              <h4 class="title">${titleText}</h4>
              <p class="description">${descriptionText}</p>
            </div>
          </div>
        ` : `
          <div class="content">
            ${titleText ? `<h4 class="title">${titleText}</h4>` : ''}
            ${descriptionText ? `<p class="description">${descriptionText}</p>` : ''}
          </div>
        `}
        
        <div class="actions-container">
            <slot name="actions"></slot>
        </div>
      </div>
    `;

    const slot = this.shadowRoot.querySelector('slot[name="actions"]');
    const actionsContainer = this.shadowRoot.querySelector('.actions-container');
    if (!slot.assignedNodes().length) {
        actionsContainer.style.display = 'none';
    }
  }
}

customElements.define('content-card', ContentCard);
