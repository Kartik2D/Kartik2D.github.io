import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles, buttonStyles, layoutStyles } from "../styles/shared.js";

@customElement("app-header")
export class AppHeader extends LitElement {
  @property({ type: Boolean }) showBack = false;

  static styles = [
    sharedStyles,
    buttonStyles,
    layoutStyles,
    css`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: var(--color-background);
        border-bottom: 1px solid var(--color-border);
        backdrop-filter: blur(8px);
      }

      .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: var(--header-height);
        padding: 0 var(--spacing-xl);
      }

      .brand {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .brand-title {
        margin: 0;
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }

      .brand-subtitle {
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
      }

      .contact-btn {
        padding: var(--spacing-sm) var(--spacing-md);
        font-size: var(--font-size-sm);
      }

      .back-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm) var(--spacing-md);
        background: transparent;
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-sm);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        cursor: pointer;
        transition: all var(--transition-fast);
      }

      .back-btn:hover {
        background: var(--color-border);
        color: var(--color-text-primary);
      }

      @media (max-width: 768px) {
        .header-content {
          height: var(--header-height-mobile);
          padding: 0 var(--spacing-md);
        }

        .brand-title {
          font-size: var(--font-size-lg);
        }

        .contact-btn {
          padding: var(--spacing-xs) var(--spacing-sm);
          font-size: 0.8125rem;
        }
      }
    `,
  ];

  private _handleBack = () => {
    this.dispatchEvent(new CustomEvent("back", { bubbles: true }));
  };

  render() {
    return html`
      <header>
        <div class="header-content">
          ${this.showBack
            ? html`
                <button
                  class="back-btn"
                  @click=${this._handleBack}
                  aria-label="Back to projects"
                >
                  &larr; Back to projects
                </button>
              `
            : html`
                <div class="brand">
                  <h1 class="brand-title">Kartik Vinayak</h1>
                  <p class="brand-subtitle">Motion & Interactive Design</p>
                </div>
              `}
          <a
            class="btn btn-primary contact-btn"
            href="mailto:kartikvinayak3@gmail.com"
            aria-label="Send email to Kartik Vinayak"
          >
            Get in touch
          </a>
        </div>
      </header>
    `;
  }
}
