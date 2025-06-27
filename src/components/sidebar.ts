import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Project, MediaItem, LinkItem } from "../types";

@customElement("project-sidebar")
export class Sidebar extends LitElement {
  @property({ type: Object }) selectedProject?: Project;
  @property({ type: Boolean }) isOpen = false;

  static styles = css`
    :host {
      display: block;
      width: 400px;
      height: 100vh;
      background: #ffffff;
      border-left: 1px solid #e5e7eb;
      overflow-y: auto;
      transition: transform 0.3s ease;
      position: relative;
    }

    :host([hidden]) {
      transform: translateX(100%);
    }

    .content {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      color: #6b7280;
    }

    .empty-state h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      color: #374151;
    }

    .empty-state p {
      margin: 0;
      font-size: 0.875rem;
    }

    .project-details h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: #111827;
    }

    .project-details p {
      margin: 0 0 1.5rem 0;
      line-height: 1.6;
      color: #374151;
    }

    .media-section {
      margin-bottom: 2rem;
    }

    .media-section h3 {
      margin: 0 0 1rem 0;
      font-size: 1.125rem;
      color: #111827;
    }

    .media-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;
    }

    .media-item {
      border-radius: 8px;
      overflow: hidden;
      background: #f9fafb;
    }

    video,
    img {
      width: 100%;
      height: auto;
      display: block;
    }

    .links-section {
      margin-top: auto;
      padding-top: 2rem;
    }

    .links-section h3 {
      margin: 0 0 1rem 0;
      font-size: 1.125rem;
      color: #111827;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .link {
      display: inline-flex;
      align-items: center;
      padding: 0.75rem 1rem;
      background: #6366f1;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background-color 0.2s ease;
    }

    .link:hover {
      background: #4f46e5;
    }

    .close-btn {
      display: none;
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #6b7280;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn:hover {
      background: #f3f4f6;
    }

    @media (max-width: 768px) {
      :host {
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
      }

      :host([open]) {
        transform: translateX(0);
      }

      .close-btn {
        display: flex;
      }
    }
  `;

  private _handleClose() {
    this.dispatchEvent(
      new CustomEvent("sidebar-close", {
        bubbles: true,
      })
    );
  }

  render() {
    if (!this.selectedProject) {
      return html`
        <div class="content">
          <div class="empty-state">
            <h3>Select a project</h3>
            <p>Click on any media item to view details</p>
          </div>
        </div>
      `;
    }

    return html`
      <div class="content">
        <button
          class="close-btn"
          @click=${this._handleClose}
          aria-label="Close sidebar"
        >
          ×
        </button>

        <div class="project-details">
          <h2>${this.selectedProject.title}</h2>
          <p>${this.selectedProject.description}</p>
        </div>

        ${this.selectedProject.media.length > 1
          ? html`
              <div class="media-section">
                <h3>Media (${this.selectedProject.media.length})</h3>
                <div class="media-grid">
                  ${this.selectedProject.media.map((media: MediaItem) =>
                    media.type === "video"
                      ? html`
                          <div class="media-item">
                            <video
                              src=${media.src}
                              controls
                              playsinline
                            ></video>
                          </div>
                        `
                      : html`
                          <div class="media-item">
                            <img
                              src=${media.src}
                              alt=${media.alt || this.selectedProject!.title}
                            />
                          </div>
                        `
                  )}
                </div>
              </div>
            `
          : ""}
        ${this.selectedProject.links?.length
          ? html`
              <div class="links-section">
                <h3>Links</h3>
                <div class="links">
                  ${this.selectedProject.links.map(
                    (link: LinkItem) => html`
                      <a
                        href=${link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link"
                      >
                        ${link.label}
                      </a>
                    `
                  )}
                </div>
              </div>
            `
          : ""}
      </div>
    `;
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("isOpen")) {
      this.toggleAttribute("open", this.isOpen);
    }
    if (changedProperties.has("selectedProject")) {
      this.toggleAttribute("hidden", !this.selectedProject);
    }
  }
}
