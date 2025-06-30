import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles, layoutStyles } from "../styles/shared.js";
import "./media-item.js";
import type { Project } from "../types.js";

@customElement("media-grid")
export class MediaGrid extends LitElement {
  @property({ type: Array }) projects: Project[] = [];
  @property({ type: String }) selectedId?: string;

  static styles = [
    sharedStyles,
    layoutStyles,
    css`
      :host {
        display: block;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }

      .grid-container {
        padding: 0;
        min-height: 100%;
      }

      .grid {
        display: grid;
        gap: 0;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        max-width: 1400px;
        margin: 0 auto;
      }

      .projects-grid {
        display: grid;
        gap: 0;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      }

      .empty-state {
        grid-column: 1 / -1;
        text-align: center;
        padding: var(--spacing-2xl);
        color: var(--color-text-secondary);
      }

      /* Responsive adjustments */
      @media (max-width: 640px) {
        .grid-container {
          padding: 0;
        }

        .projects-grid {
          grid-template-columns: 1fr;
          gap: 0;
        }
      }

      @media (min-width: 641px) and (max-width: 1024px) {
        .projects-grid {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }
      }

      @media (min-width: 1800px) {
        .projects-grid {
          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        }
      }

      /* Performance optimizations */
      @media (prefers-reduced-motion: reduce) {
        :host {
          scroll-behavior: auto;
        }
      }
    `,
  ];

  private _handleItemSelect = (event: CustomEvent) => {
    const { projectId } = event.detail;
    this.dispatchEvent(
      new CustomEvent("item-selected", {
        detail: { projectId },
        bubbles: true,
      })
    );
  };

  render() {
    if (this.projects.length === 0) {
      return html`
        <div class="grid-container">
          <div class="empty-state">
            <p>No projects to display</p>
          </div>
        </div>
      `;
    }

    return html`
      <div class="grid-container">
        <div class="projects-grid">
          ${this.projects.map(
            (project: Project) => html`
              <media-item
                .project=${project}
                .isSelected=${this.selectedId === project.id}
                @item-select=${this._handleItemSelect}
              ></media-item>
            `
          )}
        </div>
      </div>
    `;
  }
}
