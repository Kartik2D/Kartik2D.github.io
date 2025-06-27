import{f as e,u as t,i,a as r,x as o}from"./vendor-CV6DCs31.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},n={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:e},a=(e=n,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];t.call(this,i),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(e){return(t,i)=>"object"==typeof i?a(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function l(e){return d({...e,state:!0,attribute:!1})}var c=Object.defineProperty,p=Object.getOwnPropertyDescriptor,h=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?p(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&c(t,i,s),s};let m=class extends r{constructor(){super(...arguments),this.isSelected=!1}_handleClick(){this.dispatchEvent(new CustomEvent("item-select",{detail:{projectId:this.itemId},bubbles:!0}))}render(){const e=this.project.media[0];return o`
      <div class="media-container" @click=${this._handleClick}>
        ${"video"===e.type?o`
              <video
                src=${e.src}
                muted
                loop
                autoplay
                playsinline
              ></video>
            `:o`
              <img
                src=${e.src}
                alt=${e.alt||this.project.title}
              />
            `}

        <div class="overlay">
          <h3 class="title">${this.project.title}</h3>
          <p class="description">${this.project.description}</p>
        </div>
      </div>
    `}updated(e){e.has("isSelected")&&this.toggleAttribute("selected",this.isSelected)}};m.styles=i`
    :host {
      display: block;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      background: #000;
      transition: all 0.3s ease;
    }

    :host(:hover) {
      transform: scale(1.02);
      z-index: 2;
    }

    :host([selected]) {
      outline: 3px solid #6366f1;
      z-index: 3;
    }

    .media-container {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }

    video,
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    :host(:hover) video,
    :host(:hover) img {
      transform: scale(1.05);
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: white;
      padding: 1rem;
      transform: translateY(100%);
      transition: transform 0.3s ease;
    }

    :host(:hover) .overlay {
      transform: translateY(0);
    }

    .title {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 0.25rem 0;
    }

    .description {
      font-size: 0.875rem;
      opacity: 0.9;
      margin: 0;
      line-height: 1.3;
    }

    /* Show overlay on selected items */
    :host([selected]) .overlay {
      transform: translateY(0);
      background: linear-gradient(transparent, rgba(99, 102, 241, 0.8));
    }
  `,h([d({type:Object})],m.prototype,"project",2),h([d({type:String})],m.prototype,"itemId",2),h([d({type:Boolean})],m.prototype,"isSelected",2),m=h([s("media-item")],m);var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?b(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&g(t,i,s),s};let v=class extends r{constructor(){super(...arguments),this.projects=[]}_handleItemSelect(e){const{projectId:t}=e.detail;this.dispatchEvent(new CustomEvent("item-selected",{detail:{projectId:t},bubbles:!0}))}render(){return o`
      <div class="grid">
        ${this.projects.map((e,t)=>{const i=`project-${t}`;return o`
            <media-item
              .project=${e}
              .itemId=${i}
              .isSelected=${this.selectedId===i}
              @item-select=${this._handleItemSelect}
            ></media-item>
          `})}
      </div>
    `}};v.styles=i`
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
  `,f([d({type:Array})],v.prototype,"projects",2),f([d({type:String})],v.prototype,"selectedId",2),v=f([s("media-grid")],v);var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,k=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?y(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&u(t,i,s),s};let j=class extends r{constructor(){super(...arguments),this.isOpen=!1}_handleClose(){this.dispatchEvent(new CustomEvent("sidebar-close",{bubbles:!0}))}render(){return this.selectedProject?o`
      <div class="content">
        <button
          class="close-btn"
          @click=${this._handleClose}
          aria-label="Close sidebar"
        >
          ×
        </button>

        <div class="project-details">
          <h2>${this.selectedProject.title}</h2>
          <p>${this.selectedProject.description}</p>
        </div>

        ${this.selectedProject.media.length>1?o`
              <div class="media-section">
                <h3>Media (${this.selectedProject.media.length})</h3>
                <div class="media-grid">
                  ${this.selectedProject.media.map(e=>"video"===e.type?o`
                          <div class="media-item">
                            <video
                              src=${e.src}
                              controls
                              playsinline
                            ></video>
                          </div>
                        `:o`
                          <div class="media-item">
                            <img
                              src=${e.src}
                              alt=${e.alt||this.selectedProject.title}
                            />
                          </div>
                        `)}
                </div>
              </div>
            `:""}
        ${this.selectedProject.links?.length?o`
              <div class="links-section">
                <h3>Links</h3>
                <div class="links">
                  ${this.selectedProject.links.map(e=>o`
                      <a
                        href=${e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="link"
                      >
                        ${e.label}
                      </a>
                    `)}
                </div>
              </div>
            `:""}
      </div>
    `:o`
        <div class="content">
          <div class="empty-state">
            <h3>Select a project</h3>
            <p>Click on any media item to view details</p>
          </div>
        </div>
      `}updated(e){e.has("isOpen")&&this.toggleAttribute("open",this.isOpen),e.has("selectedProject")&&this.toggleAttribute("hidden",!this.selectedProject)}};j.styles=i`
    :host {
      display: block;
      width: 400px;
      height: 100vh;
      background: #ffffff;
      border-left: 1px solid #e5e7eb;
      overflow-y: auto;
      transition: transform 0.3s ease;
      position: relative;
    }

    :host([hidden]) {
      transform: translateX(100%);
    }

    .content {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      color: #6b7280;
    }

    .empty-state h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      color: #374151;
    }

    .empty-state p {
      margin: 0;
      font-size: 0.875rem;
    }

    .project-details h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
      color: #111827;
    }

    .project-details p {
      margin: 0 0 1.5rem 0;
      line-height: 1.6;
      color: #374151;
    }

    .media-section {
      margin-bottom: 2rem;
    }

    .media-section h3 {
      margin: 0 0 1rem 0;
      font-size: 1.125rem;
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
    img {
      width: 100%;
      height: auto;
      display: block;
    }

    .links-section {
      margin-top: auto;
      padding-top: 2rem;
    }

    .links-section h3 {
      margin: 0 0 1rem 0;
      font-size: 1.125rem;
      color: #111827;
    }

    .links {
      display: flex;
      flex-direction: column;
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

    .close-btn {
      display: none;
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
    }

    .close-btn:hover {
      background: #f3f4f6;
    }

    @media (max-width: 768px) {
      :host {
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
      }

      :host([open]) {
        transform: translateX(0);
      }

      .close-btn {
        display: flex;
      }
    }
  `,k([d({type:Object})],j.prototype,"selectedProject",2),k([d({type:Boolean})],j.prototype,"isOpen",2),j=k([s("project-sidebar")],j);var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,P=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?w(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&x(t,i,s),s};let O=class extends r{constructor(){super(...arguments),this._isMobile=!1,this._sidebarOpen=!1,this.projects=[{title:"Timing Practice",description:"Motion study exploring staggered keyframes and snappy easing.",media:[{src:"mov/Hello.mp4",type:"video"}],links:[{href:"https://youtu.be/is6Ochvkjx8",label:"YouTube"}]},{title:"AmuseLabs Promo",description:"30-second social spot introducing a new crossword feature.",media:[{src:"mov/animatic.mp4",type:"video"}]},{title:"LA Hacks Branding",description:"Event package – hype video, icons, and social graphics.",media:[{src:"mov/lahacksHYPE.mp4",type:"video"},{src:"mov/lahacks2.png",type:"image"}]},{title:"LA Hacks Minigame",description:"One-hour jam project focused on juicy game feel.",media:[{src:"mov/lahacks.mp4",type:"video"}],links:[{href:"LaHacksMinigame/index.html",label:"Play online"}]},{title:"Zen Painter",description:"Generative brush toy that reacts to stroke speed and angle.",media:[{src:"mov/brush.mp4",type:"video"},{src:"mov/brush1.jpeg",type:"image"}],links:[{href:"https://kartik2d.itch.io/zen-painter",label:"Itch.io"}]},{title:"Flower (p5.js)",description:"Interactive doodle inspired by early WebGL experiments.",media:[{src:"mov/flower.mp4",type:"video"}],links:[{href:"flower/index.html",label:"Try it"}]},{title:"Space Shooter",description:"Arcade prototype with heavy screen shake and chromatic aberration.",media:[{src:"mov/mov3.mp4",type:"video"}]},{title:"Basketball Prototype",description:"Physics toy featuring spring-loaded nets and bendy ropes.",media:[{src:"mov/mov.mp4",type:"video"},{src:"mov/basketball3.mp4",type:"video"}]},{title:"Digital Paintings",description:"Assorted personal illustrations.",media:[{src:"mov/painting1.jpeg",type:"image"},{src:"mov/painting2.jpeg",type:"image"}]}]}connectedCallback(){super.connectedCallback(),this._checkMobile(),window.addEventListener("resize",this._checkMobile.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._checkMobile.bind(this))}_checkMobile(){this._isMobile=window.innerWidth<=768}_handleItemSelected(e){const{projectId:t}=e.detail;this._selectedProjectId=t,this._isMobile&&(this._sidebarOpen=!0)}_handleSidebarClose(){this._isMobile&&(this._sidebarOpen=!1)}_handleOverlayClick(){this._sidebarOpen=!1}get _selectedProject(){if(!this._selectedProjectId)return;const e=parseInt(this._selectedProjectId.replace("project-",""));return this.projects[e]}render(){return o`
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
          ?open=${this._isMobile&&this._sidebarOpen}
          @click=${this._handleOverlayClick}
        ></div>

        <project-sidebar
          .selectedProject=${this._selectedProject}
          .isOpen=${this._sidebarOpen}
          @sidebar-close=${this._handleSidebarClose}
        ></project-sidebar>
      </div>
    `}};O.styles=i`
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
  `,P([l()],O.prototype,"_selectedProjectId",2),P([l()],O.prototype,"_isMobile",2),P([l()],O.prototype,"_sidebarOpen",2),O=P([s("portfolio-app")],O);
//# sourceMappingURL=index-BcKJ3Xk6.js.map
