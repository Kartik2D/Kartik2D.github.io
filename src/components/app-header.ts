import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import { sharedStyles, buttonStyles, layoutStyles } from "../styles/shared.js";

@customElement("app-header")
export class AppHeader extends LitElement {
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

  render() {
    return html`
      <header>
        <div class="header-content">
          <div class="brand">
            <h1 class="brand-title">Kartik Vinayak</h1>
            <p class="brand-subtitle">Motion & Interactive Design</p>
          </div>
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
