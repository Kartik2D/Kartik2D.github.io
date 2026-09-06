import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";
import { sharedStyles, mediaStyles } from "../styles/shared.js";
import { getYouTubeEmbedUrl, getVideoAttributes } from "../utils/media.js";
import { getTagColor } from "../utils/tag-colors.js";
import type { Project } from "../types.js";

@customElement("media-item")
export class MediaItem extends LitElement {
  @property({ type: Object }) project!: Project;
  @property({ type: Boolean }) isSelected = false;
  @state() private _isHovered = false;
  @state() private _isVisible = false;

  @query(".info-pane") private _infoPane?: HTMLElement;

  private _intersectionObserver?: IntersectionObserver;
  private _resizeObserver?: ResizeObserver;
  private _videoElement?: HTMLVideoElement;

  static styles = [
    sharedStyles,
    mediaStyles,
    css`
      :host {
        display: block;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        background: #000;
        transition: all var(--transition-normal);
        aspect-ratio: 4/3;
      }

      .media-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #000;
      }

      .media-element {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border: none;
        transition: transform var(--transition-normal);
        display: block;
      }

      /* Sliding stack: badges sit on top, info pane underneath, both rise together. */
      .info-stack {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        transform: translateY(var(--info-offset, 100%));
        transition: transform var(--transition-normal);
      }

      :host(:hover) .info-stack,
      :host([hovered]) .info-stack,
      :host([selected]) .info-stack {
        transform: translateY(0);
      }

      .badges-row {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm) var(--spacing-md);
        pointer-events: none;
      }

      .info-pane {
        /* Avoid transparent stops so light thumbnails don’t wash out white text. */
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.82) 0%,
          rgba(0, 0, 0, 0.9) 40%,
          rgba(0, 0, 0, 0.96) 100%
        );
        color: white;
        padding: var(--spacing-md);
      }

      :host(:hover) .media-container,
      :host([hovered]) .media-container {
        transform: scale(1.02);
        box-shadow: var(--shadow-lg);
        z-index: 2;
      }

      :host([selected]) .media-container {
        outline: 3px solid var(--color-primary);
        z-index: 3;
      }

      :host(:hover) .media-element,
      :host([hovered]) .media-element {
        transform: scale(1.05);
      }

      :host([selected]) .info-pane {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(67, 56, 202, 0.92) 100%
        );
      }

      .media-title {
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-semibold);
        margin: 0 0 var(--spacing-xs) 0;
      }

      .media-description {
        font-size: var(--font-size-sm);
        opacity: 0.9;
        margin: 0;
        line-height: 1.4;
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-end;
        gap: var(--spacing-xs);
      }

      .more-info {
        display: inline-flex;
        align-items: center;
        gap: 0.2em;
        margin-top: var(--spacing-sm);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: #a5b4fc;
        text-decoration: none;
        border-bottom: 1px solid currentColor;
        padding-bottom: 1px;
      }

      .more-info .arrow {
        transition: transform var(--transition-fast);
      }

      :host(:hover) .more-info,
      :host([hovered]) .more-info {
        color: #c7d2fe;
      }

      :host(:hover) .more-info .arrow,
      :host([hovered]) .more-info .arrow {
        transform: translateX(3px);
      }

      .tag {
        padding: 0.35rem var(--spacing-sm);
        border-radius: 999px;
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-semibold);
        line-height: 1.2;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        pointer-events: none;
      }

      .browser-badge {
        background: #f5c518;
        color: #1a1508;
      }

      @media (max-width: 768px) {
        :host(:hover) .media-container,
        :host([hovered]) .media-container {
          transform: none;
          box-shadow: none;
        }

        :host(:hover) .media-element,
        :host([hovered]) .media-element {
          transform: none;
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this._handleClick);
    this.addEventListener("mouseenter", this._handleMouseEnter);
    this.addEventListener("mouseleave", this._handleMouseLeave);
    this.addEventListener("touchstart", this._handleTouchStart, {
      passive: true,
    });
    this.addEventListener("touchend", this._handleTouchEnd, { passive: true });

    // Set up intersection observer for video autoplay
    this._setupIntersectionObserver();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this._handleClick);
    this.removeEventListener("mouseenter", this._handleMouseEnter);
    this.removeEventListener("mouseleave", this._handleMouseLeave);
    this.removeEventListener("touchstart", this._handleTouchStart);
    this.removeEventListener("touchend", this._handleTouchEnd);

    // Clean up intersection observer
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
  }

  firstUpdated() {
    if (this._infoPane) {
      this._updateInfoOffset();
      this._resizeObserver = new ResizeObserver(() => this._updateInfoOffset());
      this._resizeObserver.observe(this._infoPane);
    }
  }

  private _updateInfoOffset = () => {
    if (this._infoPane) {
      this.style.setProperty(
        "--info-offset",
        `${this._infoPane.offsetHeight}px`
      );
    }
  };

  private _handleTouchStart = () => {
    this._isHovered = true;
    // Try to play video on touch for mobile
    if (this._videoElement && this._videoElement.paused) {
      this._videoElement.play().catch(() => {
        // Play failed, ignore
      });
    }
  };

  private _handleTouchEnd = () => {
    setTimeout(() => {
      this._isHovered = false;
    }, 200);
  };

  private _handleMouseEnter = () => {
    this._isHovered = true;
    // Try to play video on hover as fallback for autoplay restrictions
    if (this._videoElement && this._videoElement.paused) {
      this._videoElement.play().catch(() => {
        // Play failed, ignore
      });
    }
  };

  private _handleMouseLeave = () => {
    this._isHovered = false;
  };

  private _handleClick = () => {
    this.dispatchEvent(
      new CustomEvent("item-select", {
        detail: { projectId: this.project.id },
        bubbles: true,
      })
    );
  };

  private _handleVideoLoaded = (event: Event) => {
    const video = event.target as HTMLVideoElement;
    this._videoElement = video;

    // Dispatch custom event to notify the app that this thumbnail has loaded
    document.dispatchEvent(
      new CustomEvent("thumbnail-loaded", {
        detail: { mediaSrc: video.src },
      })
    );

    // Force play if autoplay failed and element is visible
    if (this._isVisible) {
      video.play().catch(() => {
        // Autoplay failed, which is expected in some browsers
        // The video will play on user interaction
      });
    }
  };

  private _handleVideoError = (event: Event) => {
    const video = event.target as HTMLVideoElement;
    console.warn(`Video failed to load: ${video.src}`);

    // Still dispatch the loaded event so the loading screen doesn't hang
    document.dispatchEvent(
      new CustomEvent("thumbnail-loaded", {
        detail: { mediaSrc: video.src },
      })
    );
  };

  private _handleImageLoaded = (event: Event) => {
    const image = event.target as HTMLImageElement;

    // Dispatch custom event to notify the app that this thumbnail has loaded
    document.dispatchEvent(
      new CustomEvent("thumbnail-loaded", {
        detail: { mediaSrc: image.src },
      })
    );
  };

  private _handleImageError = (event: Event) => {
    const image = event.target as HTMLImageElement;
    console.warn(`Image failed to load: ${image.src}`);

    // Still dispatch the loaded event so the loading screen doesn't hang
    document.dispatchEvent(
      new CustomEvent("thumbnail-loaded", {
        detail: { mediaSrc: image.src },
      })
    );
  };

  private _setupIntersectionObserver = () => {
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this._isVisible = entry.isIntersecting;
          if (entry.isIntersecting && this._videoElement) {
            this._videoElement.play().catch(() => {
              // Autoplay failed - video will play on user interaction
            });
          } else if (!entry.isIntersecting && this._videoElement) {
            this._videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "50px",
      }
    );

    this._intersectionObserver.observe(this);
  };

  private _renderMedia() {
    const thumbnail = this.project.thumbnail;
    if (!thumbnail) return html``;

    const videoAttrs = getVideoAttributes("preview");

    switch (thumbnail.type) {
      case "video":
        return html`
          <video
            class="media-element"
            src=${thumbnail.src}
            muted
            loop
            autoplay
            playsinline
            preload=${videoAttrs.preload}
            aria-label=${`Video preview for ${this.project.title}`}
            @loadeddata=${this._handleVideoLoaded}
            @error=${this._handleVideoError}
          ></video>
        `;
      case "youtube":
        return html`
          <iframe
            class="media-element"
            src=${getYouTubeEmbedUrl(thumbnail.src)}
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowfullscreen
            title=${`YouTube video for ${this.project.title}`}
          ></iframe>
        `;
      case "image":
        return html`
          <img
            class="media-element"
            src=${thumbnail.src}
            alt=${thumbnail.alt || this.project.title}
            decoding="async"
            @load=${this._handleImageLoaded}
            @error=${this._handleImageError}
          />
        `;
      default:
        return html``;
    }
  }

  render() {
    const tags = this.project.tags?.slice(0, 3) ?? [];

    return html`
      <div
        class="media-container"
        role="button"
        tabindex="0"
        aria-label=${`View ${this.project.title} project details`}
      >
        ${this._renderMedia()}
      </div>

      <div class="info-stack">
        ${tags.length || this.project.browserPlayable
          ? html`
              <div class="badges-row">
                ${tags.length
                  ? html`
                      <div class="tag-list">
                        ${tags.map((tag) => {
                          const { background, color } = getTagColor(tag);
                          return html`<span
                            class="tag"
                            style="background: ${background}; color: ${color};"
                            >${tag}</span
                          >`;
                        })}
                      </div>
                    `
                  : ""}
                ${this.project.browserPlayable
                  ? html`<span class="tag browser-badge">Try in browser</span>`
                  : ""}
              </div>
            `
          : ""}

        <div class="info-pane">
          <h3 class="media-title">${this.project.title}</h3>
          <p class="media-description">${this.project.description}</p>

          <span class="more-info"
            >More info <span class="arrow" aria-hidden="true">&rarr;</span></span
          >
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
