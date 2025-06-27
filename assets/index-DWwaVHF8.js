import{f as e,u as t,i,a as r,x as o}from"./vendor-CV6DCs31.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},a={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:e},n=(e=a,t,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];t.call(this,i),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(e){return(t,i)=>"object"==typeof i?n(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(e){return d({...e,state:!0,attribute:!1})}var l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?h(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&l(t,i,s),s};let m=class extends r{constructor(){super(...arguments),this.isSelected=!1,this._isHovered=!1,this._isDragging=!1,this._dragStartX=0,this._dragStartY=0,this._dragThreshold=10}connectedCallback(){super.connectedCallback(),this.addEventListener("touchstart",this._handleTouchStart,{passive:!1}),this.addEventListener("touchmove",this._handleTouchMove,{passive:!1}),this.addEventListener("touchend",this._handleTouchEnd),this.addEventListener("mouseenter",this._handleMouseEnter),this.addEventListener("mouseleave",this._handleMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("touchstart",this._handleTouchStart),this.removeEventListener("touchmove",this._handleTouchMove),this.removeEventListener("touchend",this._handleTouchEnd),this.removeEventListener("mouseenter",this._handleMouseEnter),this.removeEventListener("mouseleave",this._handleMouseLeave)}_handleTouchStart(e){const t=e.touches[0];this._dragStartX=t.clientX,this._dragStartY=t.clientY,this._isDragging=!1,this._isHovered=!0}_handleTouchMove(e){const t=e.touches[0],i=Math.abs(t.clientX-this._dragStartX),r=Math.abs(t.clientY-this._dragStartY);(i>this._dragThreshold||r>this._dragThreshold)&&(this._isDragging=!0,this._isHovered=!0)}_handleTouchEnd(e){setTimeout(()=>{this._isHovered=!1},300),this._isDragging||this._handleClick(),this._isDragging=!1}_handleMouseEnter(){this._isHovered=!0}_handleMouseLeave(){this._isHovered=!1}_handleClick(){this.dispatchEvent(new CustomEvent("item-select",{detail:{projectId:this.itemId},bubbles:!0}))}_getYouTubeEmbedUrl(e){const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];return t?`https://www.youtube-nocookie.com/embed/${t}?rel=0&modestbranding=1`:e}render(){const e=this.project.media[0];return o`
      <div class="media-container" @click=${this._handleClick}>
        ${"video"===e.type?o`
              <video
                src=${e.src}
                muted
                loop
                autoplay
                playsinline
              ></video>
            `:"youtube"===e.type?o`
              <iframe
                src=${this._getYouTubeEmbedUrl(e.src)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
    `}updated(e){e.has("isSelected")&&this.toggleAttribute("selected",this.isSelected),e.has("_isHovered")&&this.toggleAttribute("hovered",this._isHovered)}};m.styles=i`
    :host {
      display: block;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      background: #000;
      transition: all 0.3s ease;
    }

    :host(:hover),
    :host([hovered]) {
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
    img,
    iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
      border: none;
    }

    :host(:hover) video,
    :host(:hover) img,
    :host(:hover) iframe,
    :host([hovered]) video,
    :host([hovered]) img,
    :host([hovered]) iframe {
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

    :host(:hover) .overlay,
    :host([hovered]) .overlay {
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
  `,p([d({type:Object})],m.prototype,"project",2),p([d({type:String})],m.prototype,"itemId",2),p([d({type:Boolean})],m.prototype,"isSelected",2),p([c()],m.prototype,"_isHovered",2),p([c()],m.prototype,"_isDragging",2),m=p([s("media-item")],m);var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,v=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?g(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&u(t,i,s),s};let b=class extends r{constructor(){super(...arguments),this.projects=[]}_handleItemSelect(e){const{projectId:t}=e.detail;this.dispatchEvent(new CustomEvent("item-selected",{detail:{projectId:t},bubbles:!0}))}render(){return o`
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
    `}};b.styles=i`
    :host {
      display: block;
      height: 100vh;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0;
      -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
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
      :host {
        /* Improve touch scrolling performance on mobile */
        scroll-behavior: smooth;
      }

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

    @media (min-width: 1800px) {
      .grid media-item {
        flex: 1 1 calc(25% - 0px);
      }
    }
  `,v([d({type:Array})],b.prototype,"projects",2),v([d({type:String})],b.prototype,"selectedId",2),b=v([s("media-grid")],b);var y=Object.defineProperty,f=Object.getOwnPropertyDescriptor,k=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?f(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&y(t,i,s),s};let _=class extends r{constructor(){super(...arguments),this._isMobile=!1,this.projects=[{title:"Timing Practice",description:"Motion study exploring staggered keyframes and snappy easing.",media:[{src:"public/mov/Hello.mp4",type:"video"}],links:[{href:"https://youtu.be/is6Ochvkjx8",label:"YouTube"}]},{title:"AmuseLabs Promo",description:"30-second social spot introducing a new crossword feature.",media:[{src:"public/mov/animatic.mov",type:"video"},{src:"https://www.youtube.com/watch?v=hyWDx1RaeU0",type:"youtube"}],links:[{href:"https://youtu.be/hyWDx1RaeU0",label:"Watch on YouTube"}]},{title:"LA Hacks Branding",description:"Event package – hype video, icons, and social graphics.",media:[{src:"public/mov/lahacksHYPE.mp4",type:"video"},{src:"public/mov/lahacks2.png",type:"image"}]},{title:"LA Hacks Minigame",description:"One-hour jam project focused on juicy game feel.",media:[{src:"public/mov/lahacks.mp4",type:"video"}],links:[{href:"LaHacksMinigame/index.html",label:"Play online"}]},{title:"Zen Painter",description:"Generative brush toy that reacts to stroke speed and angle.",media:[{src:"public/mov/brush.mp4",type:"video"},{src:"public/mov/brush1.jpeg",type:"image"}],links:[{href:"https://kartik2d.itch.io/zen-painter",label:"Itch.io"}]},{title:"Flower (p5.js)",description:"Interactive doodle inspired by early WebGL experiments.",media:[{src:"public/mov/flower.mp4",type:"video"}],links:[{href:"flower/index.html",label:"Try it"}]},{title:"Space Shooter",description:"Arcade prototype with heavy screen shake and chromatic aberration.",media:[{src:"public/mov/mov3.mp4",type:"video"}]},{title:"Basketball Prototype",description:"Physics toy featuring spring-loaded nets and bendy ropes.",media:[{src:"public/mov/mov.mp4",type:"video"},{src:"public/mov/basketball3.mp4",type:"video"}]},{title:"Digital Paintings",description:"Assorted personal illustrations.",media:[{src:"public/mov/painting1.jpeg",type:"image"},{src:"public/mov/painting2.jpeg",type:"image"}]}]}connectedCallback(){super.connectedCallback(),this._checkMobile(),window.addEventListener("resize",this._checkMobile.bind(this)),document.addEventListener("keydown",this._handleKeydown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._checkMobile.bind(this)),document.removeEventListener("keydown",this._handleKeydown.bind(this))}_checkMobile(){this._isMobile=window.innerWidth<=768}_handleItemSelected(e){const{projectId:t}=e.detail;this._selectedProjectId=t}_handlePanelClose(){this._selectedProjectId=void 0}_handleOverlayClick(e){e.target===e.currentTarget&&this._handlePanelClose()}_handleKeydown(e){"Escape"===e.key&&this._selectedProjectId&&this._handlePanelClose()}get _selectedProject(){if(!this._selectedProjectId)return;const e=parseInt(this._selectedProjectId.replace("project-",""));return this.projects[e]}_getYouTubeEmbedUrl(e){const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];return t?`https://www.youtube-nocookie.com/embed/${t}?rel=0&modestbranding=1`:e}render(){return o`
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
          ${this._selectedProject?o`
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
                    ${this._selectedProject.media.length>0?o`
                          <div class="media-section">
                            <h3>
                              ${this._selectedProject.media.length>1?`Media (${this._selectedProject.media.length})`:"Media"}
                            </h3>
                            <div class="media-grid">
                              ${this._selectedProject.media.map(e=>"video"===e.type?o`
                                        <div class="media-item">
                                          <video
                                            src=${e.src}
                                            controls
                                            playsinline
                                          ></video>
                                        </div>
                                      `:"youtube"===e.type?o`
                                        <div class="media-item">
                                          <iframe
                                            src=${this._getYouTubeEmbedUrl(e.src)}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                            style="aspect-ratio: 16/9;"
                                          ></iframe>
                                        </div>
                                      `:o`
                                        <div class="media-item">
                                          <img
                                            src=${e.src}
                                            alt=${e.alt||this._selectedProject.title}
                                          />
                                        </div>
                                      `)}
                            </div>
                          </div>
                        `:""}
                    ${this._selectedProject.links?.length?o`
                          <div class="links-section">
                            <h3>Links</h3>
                            <div class="links">
                              ${this._selectedProject.links.map(e=>o`
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
                </div>
              `:""}
        </div>
      </div>
    `}};_.styles=i`
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
  `,k([c()],_.prototype,"_selectedProjectId",2),k([c()],_.prototype,"_isMobile",2),_=k([s("portfolio-app")],_);
//# sourceMappingURL=index-DWwaVHF8.js.map
