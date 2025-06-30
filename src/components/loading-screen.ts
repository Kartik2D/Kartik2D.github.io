import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles } from "../styles/shared.js";

@customElement("loading-screen")
export class LoadingScreen extends LitElement {
  @property({ type: Boolean }) visible = false;

  static styles = [
    sharedStyles,
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--color-background);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        visibility: visible;
        transition: opacity var(--transition-slow),
          visibility var(--transition-slow);
      }

      :host(:not([visible])) {
        opacity: 0;
        visibility: hidden;
      }

      .loading-content {
        text-align: center;
        max-width: 300px;
      }

      .spinner {
        width: 40px;
        height: 40px;
        margin: 0 auto var(--spacing-lg);
        border: 3px solid var(--color-border);
        border-top-color: var(--color-primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      .loading-title {
        margin: 0 0 var(--spacing-sm) 0;
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }

      .loading-subtitle {
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .spinner {
          animation: none;
          border-top-color: var(--color-border);
        }

        .spinner::after {
          content: "⏳";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="loading-content">
        <div class="spinner" aria-hidden="true"></div>
        <h2 class="loading-title">Kartik Vinayak</h2>
        <p class="loading-subtitle">Loading portfolio...</p>
      </div>
    `;
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("visible")) {
      this.toggleAttribute("visible", this.visible);
    }
  }
}
