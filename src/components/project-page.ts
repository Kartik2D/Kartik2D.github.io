import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { sharedStyles, buttonStyles, mediaStyles } from "../styles/shared.js";
import { getYouTubeEmbedUrl } from "../utils/media.js";
import { getTagColor } from "../utils/tag-colors.js";
import type { Project } from "../types.js";

@customElement("project-page")
export class ProjectPage extends LitElement {
  @property({ type: Object }) project?: Project;

  static styles = [
    sharedStyles,
    buttonStyles,
    mediaStyles,
    css`
      :host {
        display: block;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        background: var(--color-background);
      }

      .page-content {
        max-width: 800px;
        margin: 0 auto;
        padding: var(--spacing-xl);
      }

      .page-title {
        margin: 0 0 var(--spacing-sm) 0;
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-bold);
        color: var(--color-text-primary);
      }

      .page-description {
        margin: 0;
        line-height: 1.6;
        color: var(--color-text-secondary);
        font-size: var(--font-size-base);
      }

      .page-header {
        margin-bottom: var(--spacing-xl);
        padding-bottom: var(--spacing-lg);
        border-bottom: 1px solid var(--color-border);
      }

      .details-section {
        display: grid;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-xl);
      }

      .detail-item {
        padding: var(--spacing-md) var(--spacing-lg);
        border-radius: var(--border-radius-md);
        background: var(--detail-bg);
      }

      .detail-item--why {
        --detail-accent: #e11d48;
        --detail-bg: #fff1f2;
      }

      .detail-item--highlight {
        --detail-accent: #d97706;
        --detail-bg: #fffbeb;
      }

      .detail-item--tools {
        --detail-accent: #16a34a;
        --detail-bg: #f0fdf4;
      }

      .detail-item--next {
        --detail-accent: #0891b2;
        --detail-bg: #ecfeff;
      }

      .detail-item--audience {
        --detail-accent: var(--color-primary);
        --detail-bg: #eef2ff;
      }

      .detail-label {
        margin: 0 0 var(--spacing-xs) 0;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--detail-accent);
      }

      .detail-text {
        margin: 0;
        line-height: 1.6;
        color: var(--color-text-primary);
        opacity: 0.85;
        font-size: var(--font-size-base);
      }

      .article {
        margin-bottom: var(--spacing-xl);
      }

      .article h2 {
        margin: var(--spacing-xl) 0 var(--spacing-md) 0;
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }

      .article p {
        margin: 0 0 var(--spacing-md) 0;
        line-height: 1.7;
        color: var(--color-text-secondary);
        font-size: var(--font-size-base);
      }

      .article blockquote {
        margin: var(--spacing-lg) 0;
        padding: var(--spacing-md) var(--spacing-lg);
        border-left: 3px solid var(--color-primary);
        background: var(--color-border);
        border-radius: var(--border-radius-sm);
        color: var(--color-text-primary);
        font-style: italic;
      }

      .article blockquote p {
        margin: 0;
        color: var(--color-text-primary);
      }

      .article .article-figure {
        margin: var(--spacing-lg) 0;
      }

      .article .article-figure img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: var(--border-radius-md);
      }

      .media-section {
        margin-bottom: var(--spacing-xl);
      }

      .section-title {
        margin: 0 0 var(--spacing-md) 0;
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }

      .media-grid {
        display: grid;
        gap: var(--spacing-md);
        grid-template-columns: 1fr;
      }

      .media-item {
        border-radius: var(--border-radius-md);
        overflow: hidden;
        background: #000;
        aspect-ratio: 16/9;
      }

      .media-element {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background: #000;
        border: none;
        display: block;
      }

      .links-section {
        margin-top: var(--spacing-md);
      }

      .links-grid {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
      }

      .link {
        padding: var(--spacing-sm) var(--spacing-md);
        font-size: var(--font-size-sm);
        border-radius: var(--border-radius-sm);
        text-decoration: none;
        font-weight: var(--font-weight-medium);
        transition: all var(--transition-fast);
      }

      .link-primary {
        background: var(--color-primary);
        color: white;
      }

      .link-primary:hover {
        background: var(--color-primary-hover);
      }

      .link-secondary {
        background: transparent;
        color: var(--color-text-secondary);
        border: 1px solid var(--color-border);
      }

      .link-secondary:hover {
        background: var(--color-border);
        color: var(--color-text-primary);
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        margin-top: var(--spacing-md);
      }

      .tag {
        padding: 0.35rem var(--spacing-sm);
        border-radius: 999px;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-semibold);
        line-height: 1.2;
      }

      @media (max-width: 768px) {
        .page-content {
          padding: var(--spacing-lg);
        }

        .page-title {
          font-size: var(--font-size-2xl);
        }
      }
    `,
  ];

  private _renderDetails() {
    const details = this.project?.details;
    if (!details) return html``;

    const sections = (
      [
        ["Why", details.problem, "why"],
        ["What's Interesting", details.highlight, "highlight"],
        ["Tools", details.tools, "tools"],
        ["What's Next", details.nextSteps, "next"],
        ["Who It's For", details.audience, "audience"],
      ] as Array<[string, string | undefined, string]>
    ).filter(
      (section): section is [string, string, string] => Boolean(section[1])
    );

    if (!sections.length) return html``;

    return html`
      <div class="details-section">
        ${sections.map(
          ([label, text, kind]) => html`
            <div class="detail-item detail-item--${kind}">
              <h4 class="detail-label">${label}</h4>
              <p class="detail-text">${text}</p>
            </div>
          `
        )}
      </div>
    `;
  }

  private _renderMedia() {
    if (!this.project?.media.length) return html``;

    return html`
      <div class="media-section">
        <h3 class="section-title">
          ${this.project.media.length > 1
            ? `Media (${this.project.media.length})`
            : "Media"}
        </h3>
        <div class="media-grid">
          ${this.project.media.map((media) => {
            switch (media.type) {
              case "video":
                return html`
                  <div class="media-item">
                    <video
                      class="media-element"
                      src=${media.src}
                      loop
                      playsinline
                      controls
                      preload="auto"
                    ></video>
                  </div>
                `;
              case "youtube":
                return html`
                  <div class="media-item">
                    <iframe
                      class="media-element"
                      src=${getYouTubeEmbedUrl(media.src)}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                `;
              case "image":
                return html`
                  <div class="media-item">
                    <img
                      class="media-element"
                      src=${media.src}
                      alt=${media.alt || this.project!.title}
                    />
                  </div>
                `;
              default:
                return html``;
            }
          })}
        </div>
      </div>
    `;
  }

  private _renderLinks() {
    if (!this.project?.links?.length) return html``;

    return html`
      <div class="links-section">
        <div class="links-grid">
          ${this.project.links.map(
            (link) => html`
              <a
                href=${link.href}
                class="link ${link.type === "secondary"
                  ? "link-secondary"
                  : "link-primary"}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${link.label}
              </a>
            `
          )}
        </div>
      </div>
    `;
  }

  render() {
    if (!this.project) return html``;

    return html`
      <div class="page-content">
        <div class="page-header">
          <h1 class="page-title">${this.project.title}</h1>
          <p class="page-description">${this.project.description}</p>

          ${this._renderLinks()}
          ${this.project.tags?.length
            ? html`
                <div class="tag-list">
                  ${this.project.tags.map((tag) => {
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
        </div>

        ${this._renderDetails()}
        ${this.project.articleHtml
          ? html`<div class="article">
              ${unsafeHTML(this.project.articleHtml)}
            </div>`
          : ""}
        ${this._renderMedia()}
      </div>
    `;
  }
}
