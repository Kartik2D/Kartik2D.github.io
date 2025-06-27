import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./components/media-grid.js";
import type { Project, MediaItem, LinkItem } from "./types";

@customElement("portfolio-app")
export class PortfolioApp extends LitElement {
  @state() private _selectedProjectId?: string;
  @state() private _isMobile = false;

  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      height: 100vh;
      overflow: hidden;
    }

    .app-container {
      position: relative;
      height: 100vh;
    }

    .header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header h1 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
    }

    .header p {
      margin: 0;
      font-size: 0.875rem;
      color: #6b7280;
    }

    .contact-btn {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem;
      background: #6366f1;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background-color 0.2s ease;
    }

    .contact-btn:hover {
      background: #4f46e5;
    }

    media-grid {
      margin-top: 4rem; /* Account for header */
    }

    /* Full-screen project panel */
    .project-panel {
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
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .project-panel[open] {
      opacity: 1;
      visibility: visible;
    }

    .panel-content {
      background: white;
      border-radius: 12px;
      max-width: 90vw;
      max-height: 90vh;
      width: 800px;
      overflow-y: auto;
      position: relative;
    }

    .panel-header {
      padding: 2rem 2rem 1rem 2rem;
      border-bottom: 1px solid #e5e7eb;
      position: sticky;
      top: 0;
      background: white;
      z-index: 10;
    }

    .close-btn {
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
      transition: background-color 0.2s ease;
    }

    .close-btn:hover {
      background: #f3f4f6;
    }

    .panel-header h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.75rem;
      color: #111827;
    }

    .panel-header p {
      margin: 0;
      line-height: 1.6;
      color: #374151;
      font-size: 1rem;
    }

    .panel-body {
      padding: 2rem;
    }

    .media-section {
      margin-bottom: 2rem;
    }

    .media-section h3 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
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
    img,
    iframe {
      width: 100%;
      height: auto;
      display: block;
      border: none;
    }

    .links-section h3 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
      color: #111827;
    }

    .links {
      display: flex;
      flex-wrap: wrap;
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

    @media (max-width: 768px) {
      .header {
        padding: 1rem;
      }

      .header h1 {
        font-size: 1.125rem;
      }

      .contact-btn {
        padding: 0.375rem 0.75rem;
        font-size: 0.8125rem;
      }

      media-grid {
        margin-top: 3.5rem;
      }

      .panel-content {
        max-width: 95vw;
        max-height: 95vh;
        border-radius: 8px;
      }

      .panel-header {
        padding: 1.5rem 1.5rem 1rem 1.5rem;
      }

      .panel-header h2 {
        font-size: 1.5rem;
      }

      .panel-body {
        padding: 1.5rem;
      }

      .close-btn {
        top: 0.75rem;
        right: 0.75rem;
      }
    }
  `;

  private projects: Project[] = [
    {
      title: "Timing Practice",
      description:
        "Motion study exploring staggered keyframes and snappy easing.",
      media: [{ src: "public/mov/Hello.mp4", type: "video" }],
      links: [
        {
          href: "https://youtu.be/is6Ochvkjx8",
          label: "YouTube",
        },
      ],
    },
    {
      title: "AmuseLabs Promo",
      description: "30-second social spot introducing a new crossword feature.",
      media: [
        { src: "public/mov/animatic.mov", type: "video" },
        { src: "https://www.youtube.com/watch?v=hyWDx1RaeU0", type: "youtube" },
      ],
      links: [
        {
          href: "https://youtu.be/hyWDx1RaeU0",
          label: "Watch on YouTube",
        },
      ],
    },
    {
      title: "LA Hacks Branding",
      description: "Event package – hype video, icons, and social graphics.",
      media: [
        { src: "public/mov/lahacksHYPE.mp4", type: "video" },
        { src: "public/mov/lahacks2.png", type: "image" },
      ],
    },
    {
      title: "LA Hacks Minigame",
      description: "One-hour jam project focused on juicy game feel.",
      media: [{ src: "public/mov/lahacks.mp4", type: "video" }],
      links: [
        {
          href: "LaHacksMinigame/index.html",
          label: "Play online",
        },
      ],
    },
    {
      title: "Zen Painter",
      description:
        "Generative brush toy that reacts to stroke speed and angle.",
      media: [
        { src: "public/mov/brush.mp4", type: "video" },
        { src: "public/mov/brush1.jpeg", type: "image" },
      ],
      links: [
        {
          href: "https://kartik2d.itch.io/zen-painter",
          label: "Itch.io",
        },
      ],
    },
    {
      title: "Flower (p5.js)",
      description: "Interactive doodle inspired by early WebGL experiments.",
      media: [{ src: "public/mov/flower.mp4", type: "video" }],
      links: [
        {
          href: "flower/index.html",
          label: "Try it",
        },
      ],
    },
    {
      title: "Space Shooter",
      description:
        "Arcade prototype with heavy screen shake and chromatic aberration.",
      media: [{ src: "public/mov/mov3.mp4", type: "video" }],
    },
    {
      title: "Basketball Prototype",
      description: "Physics toy featuring spring-loaded nets and bendy ropes.",
      media: [
        { src: "public/mov/mov.mp4", type: "video" },
        { src: "public/mov/basketball3.mp4", type: "video" },
      ],
    },
    {
      title: "Digital Paintings",
      description: "Assorted personal illustrations.",
      media: [
        { src: "public/mov/painting1.jpeg", type: "image" },
        { src: "public/mov/painting2.jpeg", type: "image" },
      ],
    },
  ];

  connectedCallback() {
    super.connectedCallback();
    this._checkMobile();
    window.addEventListener("resize", this._checkMobile.bind(this));
    document.addEventListener("keydown", this._handleKeydown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._checkMobile.bind(this));
    document.removeEventListener("keydown", this._handleKeydown.bind(this));
  }

  private _checkMobile() {
    this._isMobile = window.innerWidth <= 768;
  }

  private _handleItemSelected(event: CustomEvent) {
    const { projectId } = event.detail;
    this._selectedProjectId = projectId;
  }

  private _handlePanelClose() {
    this._selectedProjectId = undefined;
  }

  private _handleOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this._handlePanelClose();
    }
  }

  private _handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && this._selectedProjectId) {
      this._handlePanelClose();
    }
  }

  private get _selectedProject(): Project | undefined {
    if (!this._selectedProjectId) return undefined;
    const index = parseInt(this._selectedProjectId.replace("project-", ""));
    return this.projects[index];
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
    return html`
      <div class="app-container">
        <header class="header">
          <div>
            <h1>Kartik Vinayak</h1>
            <p>Motion & Interactive Design</p>
          </div>
          <a class="contact-btn" href="mailto:kartikvinayak3@gmail.com">
            Get in touch
          </a>
        </header>

        <media-grid
          .projects=${this.projects}
          .selectedId=${this._selectedProjectId}
          @item-selected=${this._handleItemSelected}
        ></media-grid>

        <!-- Full-screen project panel -->
        <div
          class="project-panel"
          ?open=${!!this._selectedProject}
          @click=${this._handleOverlayClick}
        >
          ${this._selectedProject
            ? html`
                <div class="panel-content">
                  <div class="panel-header">
                    <button
                      class="close-btn"
                      @click=${this._handlePanelClose}
                      aria-label="Close panel"
                    >
                      ×
                    </button>
                    <h2>${this._selectedProject.title}</h2>
                    <p>${this._selectedProject.description}</p>
                  </div>

                  <div class="panel-body">
                    ${this._selectedProject.media.length > 0
                      ? html`
                          <div class="media-section">
                            <h3>
                              ${this._selectedProject.media.length > 1
                                ? `Media (${this._selectedProject.media.length})`
                                : "Media"}
                            </h3>
                            <div class="media-grid">
                              ${this._selectedProject.media.map(
                                (media: MediaItem) =>
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
                                    : media.type === "youtube"
                                    ? html`
                                        <div class="media-item">
                                          <iframe
                                            src=${this._getYouTubeEmbedUrl(
                                              media.src
                                            )}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                            style="aspect-ratio: 16/9;"
                                          ></iframe>
                                        </div>
                                      `
                                    : html`
                                        <div class="media-item">
                                          <img
                                            src=${media.src}
                                            alt=${media.alt ||
                                            this._selectedProject!.title}
                                          />
                                        </div>
                                      `
                              )}
                            </div>
                          </div>
                        `
                      : ""}
                    ${this._selectedProject.links?.length
                      ? html`
                          <div class="links-section">
                            <h3>Links</h3>
                            <div class="links">
                              ${this._selectedProject.links.map(
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
                </div>
              `
            : ""}
        </div>
      </div>
    `;
  }
}
