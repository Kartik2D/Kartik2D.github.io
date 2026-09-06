import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sharedStyles, buttonStyles } from "../styles/shared.js";
import { getTagColor } from "../utils/tag-colors.js";

@customElement("tag-filter-bar")
export class TagFilterBar extends LitElement {
  @property({ type: Array }) tags: string[] = [];
  @property({ type: String }) selectedTag?: string;

  static styles = [
    sharedStyles,
    buttonStyles,
    css`
      :host {
        display: block;
        background: var(--color-background);
        border-bottom: 1px solid var(--color-border);
      }

      .inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        row-gap: var(--spacing-sm);
        column-gap: var(--spacing-md);
        padding: var(--spacing-sm) var(--spacing-xl);
      }

      .chips {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-sm);
        justify-content: flex-start;
        width: 100%;
      }

      .chip {
        padding: var(--spacing-xs) var(--spacing-md);
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-medium);
        border-radius: 999px;
        white-space: nowrap;
      }

      .chip-all[aria-pressed="true"] {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
      }

      .chip-all[aria-pressed="true"]:hover {
        background: var(--color-primary-hover);
      }

      .tag-chip {
        background: var(--tag-bg);
        color: var(--tag-fg);
        border-color: var(--tag-bg);
      }

      .tag-chip[aria-pressed="false"] {
        opacity: 0.55;
      }

      .tag-chip[aria-pressed="false"]:hover {
        opacity: 0.8;
      }

      .tag-chip[aria-pressed="true"]:hover {
        filter: brightness(0.92);
      }

      @media (max-width: 768px) {
        .inner {
          padding: var(--spacing-sm) var(--spacing-md);
        }
      }
    `,
  ];

  private _select(tag: string | undefined) {
    if (tag === this.selectedTag && tag !== undefined) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent("tag-change", {
        detail: { tag },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <nav class="inner" aria-label="Filter work by tag">
        <div class="chips">
          <button
            type="button"
            class="btn btn-secondary chip chip-all"
            aria-pressed=${this.selectedTag === undefined ? "true" : "false"}
            @click=${() => this._select(undefined)}
          >
            All
          </button>
          ${this.tags.map((tag) => {
            const { background, color } = getTagColor(tag);
            return html`
              <button
                type="button"
                class="btn btn-secondary chip tag-chip"
                style="--tag-bg: ${background}; --tag-fg: ${color};"
                aria-pressed=${this.selectedTag === tag ? "true" : "false"}
                @click=${() => this._select(tag)}
              >
                ${tag}
              </button>
            `;
          })}
        </div>
      </nav>
    `;
  }
}
