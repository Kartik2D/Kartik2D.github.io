import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { sharedStyles, mediaStyles } from "../styles/shared.js";
import { getYouTubeEmbedUrl, getVideoAttributes } from "../utils/media.js";
import type { Project } from "../types.js";

@customElement("media-item")
export class MediaItem extends LitElement {
  @property({ type: Object }) project!: Project;
  @property({ type: Boolean }) isSelected = false;
  @state() private _isHovered = false;
  @state() private _isVisible = false;

  private _intersectionObserver?: IntersectionObserver;
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

      .media-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, var(--color-overlay));
        color: white;
        padding: var(--spacing-md);
        transform: translateY(100%);
        transition: transform var(--transition-normal);
        z-index: 1;
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

      :host(:hover) .media-overlay,
      :host([hovered]) .media-overlay,
      :host([selected]) .media-overlay {
        transform: translateY(0);
      }

      :host([selected]) .media-overlay {
        background: linear-gradient(transparent, rgba(99, 102, 241, 0.8));
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
        gap: var(--spacing-xs);
        margin-top: var(--spacing-sm);
      }

      .tag {
        padding: var(--spacing-xs) var(--spacing-sm);
        background: rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius-sm);
        font-size: 0.75rem;
        font-weight: var(--font-weight-medium);
        color: white;
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
  }

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
            // Try to play video when it comes into view
            this._videoElement.play().catch(() => {
              // Autoplay failed - video will play on user interaction
            });
          } else if (!entry.isIntersecting && this._videoElement) {
            // Pause video when it goes out of view to save bandwidth
            this._videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% visible
        rootMargin: "50px", // Start loading slightly before entering viewport
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
            preload="none"
            aria-label=${`Video preview for ${this.project.title}`}
            @loadedmetadata=${this._handleVideoLoaded}
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
            loading="lazy"
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
    return html`
      <div
        class="media-container"
        role="button"
        tabindex="0"
        aria-label=${`View ${this.project.title} project details`}
      >
        ${this._renderMedia()}

        <div class="media-overlay">
          <h3 class="media-title">${this.project.title}</h3>
          <p class="media-description">${this.project.description}</p>

          ${this.project.tags?.length
            ? html`
                <div class="tag-list">
                  ${this.project.tags
                    .slice(0, 3)
                    .map((tag) => html`<span class="tag">${tag}</span>`)}
                </div>
              `
            : ""}
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
