import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Project } from "../types";

@customElement("media-item")
export class MediaItem extends LitElement {
  @property({ type: Object }) project!: Project;
  @property({ type: String }) itemId!: string;
  @property({ type: Boolean }) isSelected = false;

  static styles = css`
    :host {
      display: block;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      background: #000;
      transition: all 0.3s ease;
    }

    :host(:hover) {
      transform: scale(1.02);
      z-index: 2;
    }

    :host([selected]) {
      outline: 3px solid #6366f1;
      z-index: 3;
    }

    .media-container {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    video,
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    :host(:hover) video,
    :host(:hover) img {
      transform: scale(1.05);
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: white;
      padding: 1rem;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    :host(:hover) .overlay {
      transform: translateY(0);
    }

    .title {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 0.25rem 0;
    }

    .description {
      font-size: 0.875rem;
      opacity: 0.9;
      margin: 0;
      line-height: 1.3;
    }

    /* Show overlay on selected items */
    :host([selected]) .overlay {
      transform: translateY(0);
      background: linear-gradient(transparent, rgba(99, 102, 241, 0.8));
    }
  `;

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent("item-select", {
        detail: { projectId: this.itemId },
        bubbles: true,
      })
    );
  }

  render() {
    const primaryMedia = this.project.media[0];

    return html`
      <div class="media-container" @click=${this._handleClick}>
        ${primaryMedia.type === "video"
          ? html`
              <video
                src=${primaryMedia.src}
                muted
                loop
                autoplay
                playsinline
              ></video>
            `
          : html`
              <img
                src=${primaryMedia.src}
                alt=${primaryMedia.alt || this.project.title}
              />
            `}

        <div class="overlay">
          <h3 class="title">${this.project.title}</h3>
          <p class="description">${this.project.description}</p>
        </div>
      </div>
    `;
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has("isSelected")) {
      this.toggleAttribute("selected", this.isSelected);
    }
  }
}
