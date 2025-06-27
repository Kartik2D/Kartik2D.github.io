import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./media-item.js";
import type { Project } from "../types";

@customElement("media-grid")
export class MediaGrid extends LitElement {
  @property({ type: Array }) projects: Project[] = [];
  @property({ type: String }) selectedId?: string;

  static styles = css`
    :host {
      display: block;
      height: 100vh;
      overflow-y: auto;
      padding: 0;
    }

    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0;
      padding: 0;
      min-height: 100%;
    }

    .grid media-item {
      flex: 1 1 300px;
      min-height: 250px;
      max-height: 400px;
    }

    /* Responsive breakpoints */
    @media (max-width: 768px) {
      .grid media-item {
        flex: 1 1 100%;
        min-height: 200px;
        max-height: 300px;
      }
    }

    @media (min-width: 769px) and (max-width: 1200px) {
      .grid media-item {
        flex: 1 1 calc(50% - 0px);
      }
    }

    @media (min-width: 1201px) {
      .grid media-item {
        flex: 1 1 calc(33.333% - 0px);
      }
    }
  `;

  private _handleItemSelect(event: CustomEvent) {
    const { projectId } = event.detail;
    this.dispatchEvent(
      new CustomEvent("item-selected", {
        detail: { projectId },
        bubbles: true,
      })
    );
  }

  render() {
    return html`
      <div class="grid">
        ${this.projects.map((project, index) => {
          const itemId = `project-${index}`;
          return html`
            <media-item
              .project=${project}
              .itemId=${itemId}
              .isSelected=${this.selectedId === itemId}
              @item-select=${this._handleItemSelect}
            ></media-item>
          `;
        })}
      </div>
    `;
  }
}
