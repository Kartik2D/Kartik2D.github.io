import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./components/media-grid.js";
import "./components/sidebar.js";
import type { Project } from "./types";

@customElement("portfolio-app")
export class PortfolioApp extends LitElement {
  @state() private _selectedProjectId?: string;
  @state() private _isMobile = false;
  @state() private _sidebarOpen = false;

  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      height: 100vh;
      overflow: hidden;
    }

    .app-container {
      display: flex;
      height: 100vh;
    }

    .main-content {
      flex: 1;
      position: relative;
      overflow: hidden;
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

    project-sidebar {
      flex-shrink: 0;
    }

    /* Mobile overlay for sidebar */
    .sidebar-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }

    .sidebar-overlay[open] {
      display: block;
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

      project-sidebar {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
      }
    }
  `;

  private projects: Project[] = [
    {
      title: "Timing Practice",
      description:
        "Motion study exploring staggered keyframes and snappy easing.",
      media: [{ src: "mov/Hello.mp4", type: "video" }],
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
      media: [{ src: "mov/animatic.mp4", type: "video" }],
    },
    {
      title: "LA Hacks Branding",
      description: "Event package – hype video, icons, and social graphics.",
      media: [
        { src: "mov/lahacksHYPE.mp4", type: "video" },
        { src: "mov/lahacks2.png", type: "image" },
      ],
    },
    {
      title: "LA Hacks Minigame",
      description: "One-hour jam project focused on juicy game feel.",
      media: [{ src: "mov/lahacks.mp4", type: "video" }],
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
        { src: "mov/brush.mp4", type: "video" },
        { src: "mov/brush1.jpeg", type: "image" },
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
      media: [{ src: "mov/flower.mp4", type: "video" }],
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
      media: [{ src: "mov/mov3.mp4", type: "video" }],
    },
    {
      title: "Basketball Prototype",
      description: "Physics toy featuring spring-loaded nets and bendy ropes.",
      media: [
        { src: "mov/mov.mp4", type: "video" },
        { src: "mov/basketball3.mp4", type: "video" },
      ],
    },
    {
      title: "Digital Paintings",
      description: "Assorted personal illustrations.",
      media: [
        { src: "mov/painting1.jpeg", type: "image" },
        { src: "mov/painting2.jpeg", type: "image" },
      ],
    },
  ];

  connectedCallback() {
    super.connectedCallback();
    this._checkMobile();
    window.addEventListener("resize", this._checkMobile.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._checkMobile.bind(this));
  }

  private _checkMobile() {
    this._isMobile = window.innerWidth <= 768;
  }

  private _handleItemSelected(event: CustomEvent) {
    const { projectId } = event.detail;
    this._selectedProjectId = projectId;

    if (this._isMobile) {
      this._sidebarOpen = true;
    }
  }

  private _handleSidebarClose() {
    if (this._isMobile) {
      this._sidebarOpen = false;
    }
  }

  private _handleOverlayClick() {
    this._sidebarOpen = false;
  }

  private get _selectedProject(): Project | undefined {
    if (!this._selectedProjectId) return undefined;
    const index = parseInt(this._selectedProjectId.replace("project-", ""));
    return this.projects[index];
  }

  render() {
    return html`
      <div class="app-container">
        <div class="main-content">
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
        </div>

        <div
          class="sidebar-overlay"
          ?open=${this._isMobile && this._sidebarOpen}
          @click=${this._handleOverlayClick}
        ></div>

        <project-sidebar
          .selectedProject=${this._selectedProject}
          .isOpen=${this._sidebarOpen}
          @sidebar-close=${this._handleSidebarClose}
        ></project-sidebar>
      </div>
    `;
  }
}
