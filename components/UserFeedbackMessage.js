class UserFeedbackMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const messageType = this.getAttribute('message-type') || 'info';
    const titleText = this.getAttribute('title-text') || 'Title';
    const descriptionText = this.getAttribute('description-text') || 'Description';

    const typeMap = {
      success: {
        icon: 'check_circle',
        color: 'var(--color-success)',
      },
      error: {
        icon: 'error',
        color: 'var(--color-danger)',
      },
      warning: {
        icon: 'warning',
        color: 'var(--color-alert)',
      },
      info: {
        icon: 'info',
        color: 'var(--color-blue-standard)',
      },
    };

    const config = typeMap[messageType] || typeMap.info;

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        :host {
          display: block;
          width: 100%;
        }
        .message-box {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid ${config.color};
          background-color: var(--color-blue-dark);
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .icon {
          margin-top: 0.25rem;
          font-size: 1.5rem;
          color: ${config.color};
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        }
        .content {
          flex: 1;
        }
        .title {
          font-weight: 600;
          color: var(--color-white);
          margin: 0;
        }
        .description {
          font-size: 0.875rem;
          color: var(--color-blue-light);
          margin: 0.25rem 0 0 0;
        }
      </style>
      <div class="message-box">
        <span class="material-symbols-rounded icon">${config.icon}</span>
        <div class="content">
          <h4 class="title">${titleText}</h4>
          <p class="description">${descriptionText}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('user-feedback-message', UserFeedbackMessage);
