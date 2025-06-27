import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { Project } from "../types";

@customElement("media-item")
export class MediaItem extends LitElement {
  @property({ type: Object }) project!: Project;
  @property({ type: String }) itemId!: string;
  @property({ type: Boolean }) isSelected = false;
  @state() private _isHovered = false;
  @state() private _isDragging = false;

  private _dragStartX = 0;
  private _dragStartY = 0;
  private _dragThreshold = 10; // pixels

  static styles = css`
    :host {
      display: block;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      background: #000;
      transition: all 0.3s ease;
    }

    :host(:hover),
    :host([hovered]) {
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
    img,
    iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
      border: none;
    }

    :host(:hover) video,
    :host(:hover) img,
    :host(:hover) iframe,
    :host([hovered]) video,
    :host([hovered]) img,
    :host([hovered]) iframe {
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

    :host(:hover) .overlay,
    :host([hovered]) .overlay {
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

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("touchstart", this._handleTouchStart, {
      passive: false,
    });
    this.addEventListener("touchmove", this._handleTouchMove, {
      passive: false,
    });
    this.addEventListener("touchend", this._handleTouchEnd);
    this.addEventListener("mouseenter", this._handleMouseEnter);
    this.addEventListener("mouseleave", this._handleMouseLeave);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("touchstart", this._handleTouchStart);
    this.removeEventListener("touchmove", this._handleTouchMove);
    this.removeEventListener("touchend", this._handleTouchEnd);
    this.removeEventListener("mouseenter", this._handleMouseEnter);
    this.removeEventListener("mouseleave", this._handleMouseLeave);
  }

  private _handleTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    this._dragStartX = touch.clientX;
    this._dragStartY = touch.clientY;
    this._isDragging = false;

    // Set hover state on touch start
    this._isHovered = true;
  }

  private _handleTouchMove(event: TouchEvent) {
    const touch = event.touches[0];
    const deltaX = Math.abs(touch.clientX - this._dragStartX);
    const deltaY = Math.abs(touch.clientY - this._dragStartY);

    // If movement exceeds threshold, consider it dragging
    if (deltaX > this._dragThreshold || deltaY > this._dragThreshold) {
      this._isDragging = true;
      // Keep hover state active during drag
      this._isHovered = true;
    }
  }

  private _handleTouchEnd(event: TouchEvent) {
    // Small delay to allow hover effects to be visible
    setTimeout(() => {
      this._isHovered = false;
    }, 300);

    // If it wasn't a drag, treat as a click
    if (!this._isDragging) {
      this._handleClick();
    }

    this._isDragging = false;
  }

  private _handleMouseEnter() {
    this._isHovered = true;
  }

  private _handleMouseLeave() {
    this._isHovered = false;
  }

  private _handleClick() {
    this.dispatchEvent(
      new CustomEvent("item-select", {
        detail: { projectId: this.itemId },
        bubbles: true,
      })
    );
  }

  private _getYouTubeEmbedUrl(url: string): string {
    // Convert YouTube watch URL to privacy-enhanced embed URL
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
      : url;
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
          : primaryMedia.type === "youtube"
          ? html`
              <iframe
                src=${this._getYouTubeEmbedUrl(primaryMedia.src)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
    if (changedProperties.has("_isHovered")) {
      this.toggleAttribute("hovered", this._isHovered);
    }
  }
}
