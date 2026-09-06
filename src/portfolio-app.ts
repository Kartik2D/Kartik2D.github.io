import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { sharedStyles } from "./styles/shared.js";
import { PROJECTS, PROJECT_TAGS } from "./data/projects.js";
import "./components/app-header.js";
import "./components/loading-screen.js";
import "./components/media-grid.js";
import "./components/project-page.js";
import "./components/tag-filter-bar.js";
import type { Project, AppState } from "./types.js";

@customElement("portfolio-app")
export class PortfolioApp extends LitElement {
  @state() private _appState: AppState = {
    selectedProjectId: undefined,
    isLoading: true,
    isMobile: false,
  };

  @state() private _filterTag?: string;

  private _loadedThumbnails = new Set<string>();
  private _totalThumbnails = 0;

  static styles = [
    sharedStyles,
    css`
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
        height: calc(var(--vh, 1vh) * 100);
        overflow: hidden;
        background: var(--color-background);
        color: var(--color-text-primary);
      }

      .app-container {
        position: relative;
        height: calc(var(--vh, 1vh) * 100);
        display: flex;
        flex-direction: column;
      }

      /* In flow below fixed header so tag rows can wrap without clipping */
      tag-filter-bar {
        flex-shrink: 0;
        margin-top: var(--header-height);
        z-index: 90;
      }

      media-grid {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        overflow-x: hidden;
      }

      project-page {
        flex: 1;
        min-height: 0;
        margin-top: var(--header-height);
      }

      .hidden {
        display: none !important;
      }

      @media (max-width: 768px) {
        tag-filter-bar {
          margin-top: var(--header-height-mobile);
        }

        project-page {
          margin-top: var(--header-height-mobile);
        }
      }

      /* Performance optimizations */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this._appState = {
      ...this._appState,
      selectedProjectId: this._getProjectIdFromHash(),
    };
    this._initializeApp();
    window.addEventListener("resize", this._handleResize);
    window.addEventListener("hashchange", this._handleHashChange);
    document.addEventListener("keydown", this._handleKeydown);
    // Listen for thumbnail loading events
    document.addEventListener(
      "thumbnail-loaded",
      this._handleThumbnailLoaded as EventListener
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this._handleResize);
    window.removeEventListener("hashchange", this._handleHashChange);
    document.removeEventListener("keydown", this._handleKeydown);
    document.removeEventListener(
      "thumbnail-loaded",
      this._handleThumbnailLoaded as EventListener
    );
  }

  private _initializeApp() {
    this._setViewportHeight();
    this._checkMobile();
    this._countTotalThumbnails();
  }

  private _countTotalThumbnails() {
    this._totalThumbnails = PROJECTS.reduce((count, project) => {
      const thumbnail = project.thumbnail;
      return thumbnail &&
        (thumbnail.type === "video" || thumbnail.type === "image")
        ? count + 1
        : count;
    }, 0);

    if (this._totalThumbnails === 0) {
      this._hideLoading();
    }
  }

  private _handleThumbnailLoaded = (event: Event) => {
    const { mediaSrc } = (event as CustomEvent).detail;
    this._loadedThumbnails.add(mediaSrc);

    if (this._loadedThumbnails.size >= this._totalThumbnails) {
      this._hideLoading();
    }
  };

  private _hideLoading() {
    if (!this._appState.isLoading) {
      return;
    }
    this._appState = {
      ...this._appState,
      isLoading: false,
    };
  }

  private _handleResize = () => {
    this._checkMobile();
    this._setViewportHeight();
  };

  private _setViewportHeight() {
    // Fix for mobile viewport height issues
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  private _checkMobile() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== this._appState.isMobile) {
      this._appState = {
        ...this._appState,
        isMobile,
      };
    }
  }

  private _getProjectIdFromHash(): string | undefined {
    const match = window.location.hash.match(/^#\/project\/(.+)$/);
    if (!match) return undefined;
    const id = decodeURIComponent(match[1]);
    return PROJECTS.some((p) => p.id === id) ? id : undefined;
  }

  private _handleHashChange = () => {
    this._appState = {
      ...this._appState,
      selectedProjectId: this._getProjectIdFromHash(),
    };
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this._appState.selectedProjectId) {
      this._handleBack();
    }
  };

  private _handleItemSelected = (event: CustomEvent) => {
    const { projectId } = event.detail;
    window.location.hash = `#/project/${projectId}`;
  };

  private _handleBack = () => {
    window.location.hash = "";
  };

  private get _selectedProject(): Project | undefined {
    if (!this._appState.selectedProjectId) return undefined;
    return PROJECTS.find(
      (project) => project.id === this._appState.selectedProjectId
    );
  }

  private get _visibleProjects(): Project[] {
    if (!this._filterTag) return PROJECTS;
    return PROJECTS.filter((p) => p.tags?.includes(this._filterTag!));
  }

  private _handleTagChange = (event: CustomEvent<{ tag?: string }>) => {
    this._filterTag = event.detail.tag;
  };

  render() {
    const selected = this._selectedProject;

    return html`
      <div class="app-container">
        ${selected
          ? ""
          : html`
              <loading-screen
                .visible=${this._appState.isLoading}
              ></loading-screen>
            `}

        <app-header
          .showBack=${!!selected}
          @back=${this._handleBack}
        ></app-header>

        <tag-filter-bar
          class=${selected ? "hidden" : ""}
          .tags=${PROJECT_TAGS}
          .selectedTag=${this._filterTag}
          @tag-change=${this._handleTagChange}
        ></tag-filter-bar>

        <media-grid
          class=${selected ? "hidden" : ""}
          .projects=${this._visibleProjects}
          @item-selected=${this._handleItemSelected}
        ></media-grid>

        ${selected
          ? html`
              <project-page .project=${selected}></project-page>
            `
          : ""}
      </div>
    `;
  }
}
