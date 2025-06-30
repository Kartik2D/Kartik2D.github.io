import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { sharedStyles } from "./styles/shared.js";
import { PROJECTS } from "./data/projects.js";
import "./components/app-header.js";
import "./components/loading-screen.js";
import "./components/media-grid.js";
import "./components/project-modal.js";
import type { Project, AppState } from "./types.js";

@customElement("portfolio-app")
export class PortfolioApp extends LitElement {
  @state() private _appState: AppState = {
    selectedProjectId: undefined,
    isLoading: true,
    isMobile: false,
  };

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

      media-grid {
        flex: 1;
        margin-top: var(--header-height);
        overflow-y: auto;
        overflow-x: hidden;
      }

      @media (max-width: 768px) {
        media-grid {
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
    this._initializeApp();
    window.addEventListener("resize", this._handleResize);
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
    this._startLoadingTimeout();
  }

  private _countTotalThumbnails() {
    // Count all media thumbnails that will be loaded in the grid view
    // (i.e., the primary/first media item of each project)
    this._totalThumbnails = PROJECTS.reduce((count, project) => {
      const primaryMedia = project.media[0];
      return primaryMedia &&
        (primaryMedia.type === "video" || primaryMedia.type === "image")
        ? count + 1
        : count;
    }, 0);

    console.log(
      `Loading screen waiting for ${this._totalThumbnails} thumbnails to load`
    );

    // If there are no thumbnails to load, hide loading immediately
    if (this._totalThumbnails === 0) {
      this._hideLoading();
    }
  }

  private _startLoadingTimeout() {
    // No timeout needed - we only wait for actual thumbnail videos to load
    // If a video fails to load, the error handler will still dispatch the event
  }

  private _handleThumbnailLoaded = (event: Event) => {
    const customEvent = event as CustomEvent;
    const { mediaSrc } = customEvent.detail;
    this._loadedThumbnails.add(mediaSrc);

    console.log(
      `Thumbnail loaded: ${mediaSrc.split("/").pop()} (${
        this._loadedThumbnails.size
      }/${this._totalThumbnails})`
    );

    // Check if all thumbnails have loaded
    if (this._loadedThumbnails.size >= this._totalThumbnails) {
      console.log("All thumbnails loaded, hiding loading screen");
      // Add a small delay for smooth UX
      setTimeout(() => {
        this._hideLoading();
      }, 300);
    }
  };

  private _hideLoading() {
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

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && this._appState.selectedProjectId) {
      this._handleModalClose();
    }
  };

  private _handleItemSelected = (event: CustomEvent) => {
    const { projectId } = event.detail;
    this._appState = {
      ...this._appState,
      selectedProjectId: projectId,
    };
  };

  private _handleModalClose = () => {
    this._appState = {
      ...this._appState,
      selectedProjectId: undefined,
    };
  };

  private get _selectedProject(): Project | undefined {
    if (!this._appState.selectedProjectId) return undefined;
    return PROJECTS.find(
      (project) => project.id === this._appState.selectedProjectId
    );
  }

  render() {
    return html`
      <div class="app-container">
        <loading-screen .visible=${this._appState.isLoading}></loading-screen>

        <app-header></app-header>

        <media-grid
          .projects=${PROJECTS}
          .selectedId=${this._appState.selectedProjectId}
          @item-selected=${this._handleItemSelected}
        ></media-grid>

        <project-modal
          .project=${this._selectedProject}
          .open=${!!this._selectedProject}
          @close=${this._handleModalClose}
        ></project-modal>
      </div>
    `;
  }
}
