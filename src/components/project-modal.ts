import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles, buttonStyles, mediaStyles } from "../styles/shared.js";
import { getYouTubeEmbedUrl, getVideoAttributes } from "../utils/media.js";
import type { Project } from "../types.js";

@customElement("project-modal")
export class ProjectModal extends LitElement {
  @property({ type: Object }) project?: Project;
  @property({ type: Boolean }) open = false;

  static styles = [
    sharedStyles,
    buttonStyles,
    mediaStyles,
    css`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--transition-normal),
          visibility var(--transition-normal);
      }

      :host([open]) {
        opacity: 1;
        visibility: visible;
      }

      .modal-content {
        background: var(--color-background);
        border-radius: var(--border-radius-lg);
        max-width: 90vw;
        max-height: 90vh;
        width: 800px;
        overflow-y: auto;
        position: relative;
        box-shadow: var(--shadow-lg);
      }

      .modal-header {
        padding: var(--spacing-xl) var(--spacing-xl) var(--spacing-md);
        border-bottom: 1px solid var(--color-border);
        position: sticky;
        top: 0;
        background: var(--color-background);
        z-index: 10;
      }

      .close-btn {
        position: absolute;
        top: var(--spacing-md);
        right: var(--spacing-md);
        z-index: 1;
      }

      .modal-title {
        margin: 0 0 var(--spacing-sm) 0;
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-bold);
        color: var(--color-text-primary);
        padding-right: var(--spacing-2xl);
      }

      .modal-description {
        margin: 0;
        line-height: 1.6;
        color: var(--color-text-secondary);
        font-size: var(--font-size-base);
      }

      .modal-body {
        padding: var(--spacing-xl);
      }

      .media-section {
        margin-bottom: var(--spacing-xl);
      }

      .section-title {
        margin: 0 0 var(--spacing-md) 0;
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }

      .media-grid {
        display: grid;
        gap: var(--spacing-md);
        grid-template-columns: 1fr;
      }

      .media-item {
        border-radius: var(--border-radius-md);
        overflow: hidden;
        background: #000;
        aspect-ratio: 16/9;
      }

      .media-element {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: #000;
      }

      .links-section {
        margin-top: var(--spacing-md);
      }

      .links-grid {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
      }

      .link {
        padding: var(--spacing-sm) var(--spacing-md);
        font-size: var(--font-size-sm);
        border-radius: var(--border-radius-sm);
        text-decoration: none;
        font-weight: var(--font-weight-medium);
        transition: all var(--transition-fast);
      }

      .link-primary {
        background: var(--color-primary);
        color: white;
      }

      .link-primary:hover {
        background: var(--color-primary-hover);
      }

      .link-secondary {
        background: transparent;
        color: var(--color-text-secondary);
        border: 1px solid var(--color-border);
      }

      .link-secondary:hover {
        background: var(--color-border);
        color: var(--color-text-primary);
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        margin-top: var(--spacing-md);
      }

      .tag {
        padding: var(--spacing-xs) var(--spacing-sm);
        background: var(--color-border);
        color: var(--color-text-secondary);
        border-radius: var(--border-radius-sm);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
      }

      @media (max-width: 768px) {
        .modal-content {
          max-width: 95vw;
          max-height: 95vh;
          border-radius: var(--border-radius-md);
        }

        .modal-header {
          padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-md);
        }

        .modal-title {
          font-size: var(--font-size-2xl);
        }

        .modal-body {
          padding: var(--spacing-lg);
        }

        .close-btn {
          top: var(--spacing-sm);
          right: var(--spacing-sm);
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("keydown", this._handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("keydown", this._handleKeydown);
  }

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this.open) {
      this._handleClose();
    }
  };

  private _handleClose = () => {
    this.dispatchEvent(new CustomEvent("close", { bubbles: true }));
  };

  private _handleOverlayClick = (event: Event) => {
    if (event.target === event.currentTarget) {
      this._handleClose();
    }
  };

  private _handleVideoLoaded = (event: Event) => {
    const video = event.target as HTMLVideoElement;
    // Videos in modal don't autoplay - user controls playback with controls
    // This just handles the loadeddata event for any setup if needed
  };

  private _renderMedia() {
    if (!this.project?.media.length) return html``;

    const videoAttrs = getVideoAttributes("detail");

    return html`
      <div class="media-section">
        <h3 class="section-title">
          ${this.project.media.length > 1
            ? `Media (${this.project.media.length})`
            : "Media"}
        </h3>
        <div class="media-grid">
          ${this.project.media.map((media) => {
            switch (media.type) {
              case "video":
                return html`
                  <div class="media-item">
                    <video
                      class="media-element"
                      src=${media.src}
                      loop
                      playsinline
                      controls
                      preload="auto"
                      @loadeddata=${this._handleVideoLoaded}
                    ></video>
                  </div>
                `;
              case "youtube":
                return html`
                  <div class="media-item">
                    <iframe
                      class="media-element"
                      src=${getYouTubeEmbedUrl(media.src)}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                `;
              case "image":
                return html`
                  <div class="media-item">
                    <img
                      class="media-element"
                      src=${media.src}
                      alt=${media.alt || this.project!.title}
                    />
                  </div>
                `;
              default:
                return html``;
            }
          })}
        </div>
      </div>
    `;
  }

  private _renderLinks() {
    if (!this.project?.links?.length) return html``;

    return html`
      <div class="links-section">
        <h3 class="section-title">Links</h3>
        <div class="links-grid">
          ${this.project.links.map(
            (link) => html`
              <a
                href=${link.href}
                class="link ${link.type === "secondary"
                  ? "link-secondary"
                  : "link-primary"}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${link.label}
              </a>
            `
          )}
        </div>
      </div>
    `;
  }

  render() {
    if (!this.project) return html``;

    return html`
      <div @click=${this._handleOverlayClick}>
        <div class="modal-content">
          <div class="modal-header">
            <button
              class="btn btn-icon close-btn"
              @click=${this._handleClose}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 class="modal-title">${this.project.title}</h2>
            <p class="modal-description">${this.project.description}</p>

            ${this._renderLinks()}
            ${this.project.tags?.length
              ? html`
                  <div class="tag-list">
                    ${this.project.tags.map(
                      (tag) => html`<span class="tag">${tag}</span>`
                    )}
                  </div>
                `
              : ""}
          </div>

          <div class="modal-body">${this._renderMedia()}</div>
        </div>
      </div>
    `;
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("open")) {
      this.toggleAttribute("open", this.open);
    }
  }
}
