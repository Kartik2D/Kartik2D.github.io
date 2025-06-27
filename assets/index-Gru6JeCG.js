import{f as e,u as t,i,a as r,x as a}from"./vendor-CV6DCs31.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},s={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:e},n=(e=s,t,i)=>{const{kind:r,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,a,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const a=this[r];t.call(this,i),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(e){return(t,i)=>"object"==typeof i?n(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function l(e){return d({...e,state:!0,attribute:!1})}const c=i`
  /* CSS Custom Properties */
  :host {
    --color-primary: #6366f1;
    --color-primary-hover: #4f46e5;
    --color-text-primary: #111827;
    --color-text-secondary: #6b7280;
    --color-background: #ffffff;
    --color-border: #e5e7eb;
    --color-overlay: rgba(0, 0, 0, 0.8);

    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;

    --border-radius-sm: 6px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;

    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.75rem;

    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;

    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

    --header-height: 4rem;
    --header-height-mobile: 3.5rem;

    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    --breakpoint-2xl: 1536px;
  }
`,p=i`
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    user-select: none;
  }

  .btn-primary {
    background: var(--color-primary);
    color: white;
  }

  .btn-primary:hover {
    background: var(--color-primary-hover);
  }

  .btn-secondary {
    background: transparent;
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border);
  }

  .btn-secondary:hover {
    background: var(--color-border);
    color: var(--color-text-primary);
  }

  .btn-icon {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border-radius: 50%;
    background: none;
    color: var(--color-text-secondary);
  }

  .btn-icon:hover {
    background: var(--color-border);
  }
`,h=i`
  /* Media styles are now defined in individual components for better control */
`,m=i`
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }

  .grid {
    display: grid;
    gap: var(--spacing-md);
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,v=[{id:"rhythm-game",title:"Rhythm Game",description:"Springy rhythm game featuring DSP timing mechanics. Fun and bouncy gameplay with tight audio synchronization.",media:[{src:"mov/dog.mp4",type:"video"}],tags:["Game Development","Audio","Interactive"],featured:!0},{id:"timing-practice",title:"Timing Practice",description:"Motion study exploring staggered keyframes and snappy easing.",media:[{src:"mov/Hello.mp4",type:"video"},{src:"https://youtu.be/is6Ochvkjx8",type:"youtube"}],links:[{href:"https://youtu.be/is6Ochvkjx8",label:"Watch on YouTube",type:"primary"}],tags:["Motion Graphics","Animation"],featured:!0},{id:"amuselabs-promo",title:"AmuseLabs Promo",description:"30-second social spot introducing a new crossword feature.",media:[{src:"mov/amuselabs_optimized.mp4",type:"video"},{src:"https://www.youtube.com/watch?v=hyWDx1RaeU0",type:"youtube"}],links:[{href:"https://youtu.be/hyWDx1RaeU0",label:"Watch on YouTube",type:"primary"}],tags:["Commercial","Motion Graphics"],featured:!0},{id:"la-hacks-branding",title:"LA Hacks Branding",description:"Event package – hype video, icons, and social graphics.",media:[{src:"mov/lahacksHYPE_optimized.mp4",type:"video"},{src:"mov/lahacks2.png",type:"image"}],tags:["Branding","Motion Graphics","Event"]},{id:"la-hacks-minigame",title:"LA Hacks Minigame",description:"One-hour jam project focused on juicy game feel.",media:[{src:"mov/lahacks_optimized.mp4",type:"video"}],links:[{href:"LaHacksMinigame/index.html",label:"Play Online",type:"primary"}],tags:["Game Development","Game Jam"]},{id:"zen-painter",title:"Zen Painter",description:"Generative brush toy that reacts to stroke speed and angle.",media:[{src:"mov/brush.mp4",type:"video"},{src:"mov/brush1.jpeg",type:"image"}],links:[{href:"https://kartik2d.itch.io/zen-painter",label:"Play on Itch.io",type:"primary"}],tags:["Interactive","Generative Art"],featured:!0},{id:"flower-p5js",title:"Flower (p5.js)",description:"Interactive doodle inspired by early WebGL experiments.",media:[{src:"mov/flower_web_optimized.mp4",type:"video"}],links:[{href:"flower/index.html",label:"Try Interactive Demo",type:"primary"}],tags:["Interactive","p5.js","WebGL"]},{id:"space-shooter",title:"Space Shooter",description:"Arcade prototype with heavy screen shake and chromatic aberration.",media:[{src:"mov/mov3.mp4",type:"video"}],tags:["Game Development","Prototype"]},{id:"basketball-prototype",title:"Basketball Prototype",description:"Physics toy featuring spring-loaded nets and bendy ropes.",media:[{src:"mov/mov.mp4",type:"video"},{src:"mov/basketball3.mp4",type:"video"}],tags:["Game Development","Physics"]},{id:"digital-paintings",title:"Digital Paintings",description:"Assorted personal illustrations.",media:[{src:"mov/painting1.jpeg",type:"image"},{src:"mov/painting2.jpeg",type:"image"}],tags:["Illustration","Digital Art"]}];var g=Object.getOwnPropertyDescriptor;let u=class extends r{render(){return a`
      <header>
        <div class="header-content">
          <div class="brand">
            <h1 class="brand-title">Kartik Vinayak</h1>
            <p class="brand-subtitle">Motion & Interactive Design</p>
          </div>
          <a
            class="btn btn-primary contact-btn"
            href="mailto:kartikvinayak3@gmail.com"
            aria-label="Send email to Kartik Vinayak"
          >
            Get in touch
          </a>
        </div>
      </header>
    `}};u.styles=[c,p,m,i`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background: var(--color-background);
        border-bottom: 1px solid var(--color-border);
        backdrop-filter: blur(8px);
      }

      .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: var(--header-height);
        padding: 0 var(--spacing-xl);
      }

      .brand {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
      }

      .brand-title {
        margin: 0;
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }

      .brand-subtitle {
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
      }

      .contact-btn {
        padding: var(--spacing-sm) var(--spacing-md);
        font-size: var(--font-size-sm);
      }

      @media (max-width: 768px) {
        .header-content {
          height: var(--header-height-mobile);
          padding: 0 var(--spacing-md);
        }

        .brand-title {
          font-size: var(--font-size-lg);
        }

        .contact-btn {
          padding: var(--spacing-xs) var(--spacing-sm);
          font-size: 0.8125rem;
        }
      }
    `],u=((e,t,i,r)=>{for(var a,o=r>1?void 0:r?g(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(o=a(o)||o);return o})([o("app-header")],u);var b=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=(e,t,i,r)=>{for(var a,o=r>1?void 0:r?y(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&b(t,i,o),o};let x=class extends r{constructor(){super(...arguments),this.visible=!1}render(){return a`
      <div class="loading-content">
        <div class="spinner" aria-hidden="true"></div>
        <h2 class="loading-title">Kartik Vinayak</h2>
        <p class="loading-subtitle">Loading portfolio...</p>
      </div>
    `}updated(e){e.has("visible")&&this.toggleAttribute("visible",this.visible)}};function w(e){const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];return t?`https://www.youtube-nocookie.com/embed/${t}?rel=0&modestbranding=1&autoplay=0`:e}x.styles=[c,i`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--color-background);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        visibility: visible;
        transition: opacity var(--transition-slow),
          visibility var(--transition-slow);
      }

      :host(:not([visible])) {
        opacity: 0;
        visibility: hidden;
      }

      .loading-content {
        text-align: center;
        max-width: 300px;
      }

      .spinner {
        width: 40px;
        height: 40px;
        margin: 0 auto var(--spacing-lg);
        border: 3px solid var(--color-border);
        border-top-color: var(--color-primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      .loading-title {
        margin: 0 0 var(--spacing-sm) 0;
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-primary);
      }

      .loading-subtitle {
        margin: 0;
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .spinner {
          animation: none;
          border-top-color: var(--color-border);
        }

        .spinner::after {
          content: "⏳";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5rem;
        }
      }
    `],f([d({type:Boolean})],x.prototype,"visible",2),x=f([o("loading-screen")],x);var _=Object.defineProperty,k=Object.getOwnPropertyDescriptor,j=(e,t,i,r)=>{for(var a,o=r>1?void 0:r?k(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&_(t,i,o),o};let z=class extends r{constructor(){super(...arguments),this.isSelected=!1,this._isHovered=!1,this._isVisible=!1,this._handleTouchStart=()=>{this._isHovered=!0,this._videoElement&&this._videoElement.paused&&this._videoElement.play().catch(()=>{})},this._handleTouchEnd=()=>{setTimeout(()=>{this._isHovered=!1},200)},this._handleMouseEnter=()=>{this._isHovered=!0,this._videoElement&&this._videoElement.paused&&this._videoElement.play().catch(()=>{})},this._handleMouseLeave=()=>{this._isHovered=!1},this._handleClick=()=>{this.dispatchEvent(new CustomEvent("item-select",{detail:{projectId:this.project.id},bubbles:!0}))},this._handleVideoLoaded=e=>{const t=e.target;this._videoElement=t,document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}})),this._isVisible&&t.play().catch(()=>{})},this._handleVideoError=e=>{const t=e.target;console.warn(`Video failed to load: ${t.src}`),document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._handleImageLoaded=e=>{const t=e.target;document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._handleImageError=e=>{const t=e.target;console.warn(`Image failed to load: ${t.src}`),document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._setupIntersectionObserver=()=>{this._intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{this._isVisible=e.isIntersecting,e.isIntersecting&&this._videoElement?this._videoElement.play().catch(()=>{}):!e.isIntersecting&&this._videoElement&&this._videoElement.pause()})},{threshold:.5,rootMargin:"50px"}),this._intersectionObserver.observe(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this.addEventListener("mouseenter",this._handleMouseEnter),this.addEventListener("mouseleave",this._handleMouseLeave),this.addEventListener("touchstart",this._handleTouchStart,{passive:!0}),this.addEventListener("touchend",this._handleTouchEnd,{passive:!0}),this._setupIntersectionObserver()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("mouseenter",this._handleMouseEnter),this.removeEventListener("mouseleave",this._handleMouseLeave),this.removeEventListener("touchstart",this._handleTouchStart),this.removeEventListener("touchend",this._handleTouchEnd),this._intersectionObserver&&this._intersectionObserver.disconnect()}_renderMedia(){const e=this.project.media[0];if(!e)return a``;switch(e.type){case"video":return a`
          <video
            class="media-element"
            src=${e.src}
            muted
            loop
            autoplay
            playsinline
            preload="metadata"
            aria-label=${`Video preview for ${this.project.title}`}
            @loadedmetadata=${this._handleVideoLoaded}
            @error=${this._handleVideoError}
          ></video>
        `;case"youtube":return a`
          <iframe
            class="media-element"
            src=${w(e.src)}
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title=${`YouTube video for ${this.project.title}`}
          ></iframe>
        `;case"image":return a`
          <img
            class="media-element"
            src=${e.src}
            alt=${e.alt||this.project.title}
            loading="eager"
            @load=${this._handleImageLoaded}
            @error=${this._handleImageError}
          />
        `;default:return a``}}render(){return a`
      <div
        class="media-container"
        role="button"
        tabindex="0"
        aria-label=${`View ${this.project.title} project details`}
      >
        ${this._renderMedia()}

        <div class="media-overlay">
          <h3 class="media-title">${this.project.title}</h3>
          <p class="media-description">${this.project.description}</p>

          ${this.project.tags?.length?a`
                <div class="tag-list">
                  ${this.project.tags.slice(0,3).map(e=>a`<span class="tag">${e}</span>`)}
                </div>
              `:""}
        </div>
      </div>
    `}updated(e){e.has("isSelected")&&this.toggleAttribute("selected",this.isSelected),e.has("_isHovered")&&this.toggleAttribute("hovered",this._isHovered)}};z.styles=[c,h,i`
      :host {
        display: block;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        background: #000;
        transition: all var(--transition-normal);
        aspect-ratio: 4/3;
      }

      .media-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #000;
      }

      .media-element {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border: none;
        transition: transform var(--transition-normal);
        display: block;
      }

      .media-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, var(--color-overlay));
        color: white;
        padding: var(--spacing-md);
        transform: translateY(100%);
        transition: transform var(--transition-normal);
        z-index: 1;
      }

      :host(:hover) .media-container,
      :host([hovered]) .media-container {
        transform: scale(1.02);
        box-shadow: var(--shadow-lg);
        z-index: 2;
      }

      :host([selected]) .media-container {
        outline: 3px solid var(--color-primary);
        z-index: 3;
      }

      :host(:hover) .media-element,
      :host([hovered]) .media-element {
        transform: scale(1.05);
      }

      :host(:hover) .media-overlay,
      :host([hovered]) .media-overlay,
      :host([selected]) .media-overlay {
        transform: translateY(0);
      }

      :host([selected]) .media-overlay {
        background: linear-gradient(transparent, rgba(99, 102, 241, 0.8));
      }

      .media-title {
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-semibold);
        margin: 0 0 var(--spacing-xs) 0;
      }

      .media-description {
        font-size: var(--font-size-sm);
        opacity: 0.9;
        margin: 0;
        line-height: 1.4;
      }

      .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-xs);
        margin-top: var(--spacing-sm);
      }

      .tag {
        padding: var(--spacing-xs) var(--spacing-sm);
        background: rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius-sm);
        font-size: 0.75rem;
        font-weight: var(--font-weight-medium);
        color: white;
      }

      @media (max-width: 768px) {
        :host(:hover) .media-container,
        :host([hovered]) .media-container {
          transform: none;
          box-shadow: none;
        }

        :host(:hover) .media-element,
        :host([hovered]) .media-element {
          transform: none;
        }
      }
    `],j([d({type:Object})],z.prototype,"project",2),j([d({type:Boolean})],z.prototype,"isSelected",2),j([l()],z.prototype,"_isHovered",2),j([l()],z.prototype,"_isVisible",2),z=j([o("media-item")],z);var E=Object.defineProperty,$=Object.getOwnPropertyDescriptor,L=(e,t,i,r)=>{for(var a,o=r>1?void 0:r?$(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&E(t,i,o),o};let S=class extends r{constructor(){super(...arguments),this.projects=[],this._handleItemSelect=e=>{const{projectId:t}=e.detail;this.dispatchEvent(new CustomEvent("item-selected",{detail:{projectId:t},bubbles:!0}))}}render(){return 0===this.projects.length?a`
        <div class="grid-container">
          <div class="empty-state">
            <p>No projects to display</p>
          </div>
        </div>
      `:a`
      <div class="grid-container">
        <div class="projects-grid">
          ${this.projects.map(e=>a`
              <media-item
                .project=${e}
                .isSelected=${this.selectedId===e.id}
                @item-select=${this._handleItemSelect}
              ></media-item>
            `)}
        </div>
      </div>
    `}};S.styles=[c,m,i`
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
    `],L([d({type:Array})],S.prototype,"projects",2),L([d({type:String})],S.prototype,"selectedId",2),S=L([o("media-grid")],S);var P=Object.defineProperty,I=Object.getOwnPropertyDescriptor,O=(e,t,i,r)=>{for(var a,o=r>1?void 0:r?I(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&P(t,i,o),o};let C=class extends r{constructor(){super(...arguments),this.open=!1,this._handleKeydown=e=>{"Escape"===e.key&&this.open&&this._handleClose()},this._handleClose=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0}))},this._handleOverlayClick=e=>{e.target===e.currentTarget&&this._handleClose()},this._handleVideoLoaded=e=>{e.target}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleKeydown)}_renderMedia(){return this.project?.media.length?a`
      <div class="media-section">
        <h3 class="section-title">
          ${this.project.media.length>1?`Media (${this.project.media.length})`:"Media"}
        </h3>
        <div class="media-grid">
          ${this.project.media.map(e=>{switch(e.type){case"video":return a`
                  <div class="media-item">
                    <video
                      class="media-element"
                      src=${e.src}
                      loop
                      playsinline
                      controls
                      preload="auto"
                      @loadeddata=${this._handleVideoLoaded}
                    ></video>
                  </div>
                `;case"youtube":return a`
                  <div class="media-item">
                    <iframe
                      class="media-element"
                      src=${w(e.src)}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                `;case"image":return a`
                  <div class="media-item">
                    <img
                      class="media-element"
                      src=${e.src}
                      alt=${e.alt||this.project.title}
                    />
                  </div>
                `;default:return a``}})}
        </div>
      </div>
    `:a``}_renderLinks(){return this.project?.links?.length?a`
      <div class="links-section">
        <h3 class="section-title">Links</h3>
        <div class="links-grid">
          ${this.project.links.map(e=>a`
              <a
                href=${e.href}
                class="link ${"secondary"===e.type?"link-secondary":"link-primary"}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${e.label}
              </a>
            `)}
        </div>
      </div>
    `:a``}render(){return this.project?a`
      <div @click=${this._handleOverlayClick}>
        <div class="modal-content">
          <div class="modal-header">
            <button
              class="btn btn-icon close-btn"
              @click=${this._handleClose}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 class="modal-title">${this.project.title}</h2>
            <p class="modal-description">${this.project.description}</p>

            ${this.project.tags?.length?a`
                  <div class="tag-list">
                    ${this.project.tags.map(e=>a`<span class="tag">${e}</span>`)}
                  </div>
                `:""}
          </div>

          <div class="modal-body">
            ${this._renderMedia()} ${this._renderLinks()}
          </div>
        </div>
      </div>
    `:a``}updated(e){e.has("open")&&this.toggleAttribute("open",this.open)}};C.styles=[c,p,h,i`
      :host {
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
        transition: opacity var(--transition-normal),
          visibility var(--transition-normal);
      }

      :host([open]) {
        opacity: 1;
        visibility: visible;
      }

      .modal-content {
        background: var(--color-background);
        border-radius: var(--border-radius-lg);
        max-width: 90vw;
        max-height: 90vh;
        width: 800px;
        overflow-y: auto;
        position: relative;
        box-shadow: var(--shadow-lg);
      }

      .modal-header {
        padding: var(--spacing-xl) var(--spacing-xl) var(--spacing-md);
        border-bottom: 1px solid var(--color-border);
        position: sticky;
        top: 0;
        background: var(--color-background);
        z-index: 10;
      }

      .close-btn {
        position: absolute;
        top: var(--spacing-md);
        right: var(--spacing-md);
        z-index: 1;
      }

      .modal-title {
        margin: 0 0 var(--spacing-sm) 0;
        font-size: var(--font-size-3xl);
        font-weight: var(--font-weight-bold);
        color: var(--color-text-primary);
        padding-right: var(--spacing-2xl);
      }

      .modal-description {
        margin: 0;
        line-height: 1.6;
        color: var(--color-text-secondary);
        font-size: var(--font-size-base);
      }

      .modal-body {
        padding: var(--spacing-xl);
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
      }

      .links-section {
        margin-top: var(--spacing-xl);
        padding-top: var(--spacing-xl);
        border-top: 1px solid var(--color-border);
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
        padding: var(--spacing-xs) var(--spacing-sm);
        background: var(--color-border);
        color: var(--color-text-secondary);
        border-radius: var(--border-radius-sm);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
      }

      @media (max-width: 768px) {
        .modal-content {
          max-width: 95vw;
          max-height: 95vh;
          border-radius: var(--border-radius-md);
        }

        .modal-header {
          padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-md);
        }

        .modal-title {
          font-size: var(--font-size-2xl);
        }

        .modal-body {
          padding: var(--spacing-lg);
        }

        .close-btn {
          top: var(--spacing-sm);
          right: var(--spacing-sm);
        }
      }
    `],O([d({type:Object})],C.prototype,"project",2),O([d({type:Boolean})],C.prototype,"open",2),C=O([o("project-modal")],C);var T=Object.defineProperty,M=Object.getOwnPropertyDescriptor,A=(e,t,i,r)=>{for(var a,o=r>1?void 0:r?M(t,i):t,s=e.length-1;s>=0;s--)(a=e[s])&&(o=(r?a(t,i,o):a(o))||o);return r&&o&&T(t,i,o),o};let V=class extends r{constructor(){super(...arguments),this._appState={selectedProjectId:void 0,isLoading:!0,isMobile:!1},this._loadedThumbnails=new Set,this._totalThumbnails=0,this._handleThumbnailLoaded=e=>{const t=e,{mediaSrc:i}=t.detail;this._loadedThumbnails.add(i),console.log(`Thumbnail loaded: ${i.split("/").pop()} (${this._loadedThumbnails.size}/${this._totalThumbnails})`),this._loadedThumbnails.size>=this._totalThumbnails&&(console.log("All thumbnails loaded, hiding loading screen"),setTimeout(()=>{this._hideLoading()},300))},this._handleResize=()=>{this._checkMobile(),this._setViewportHeight()},this._handleKeydown=e=>{"Escape"===e.key&&this._appState.selectedProjectId&&this._handleModalClose()},this._handleItemSelected=e=>{const{projectId:t}=e.detail;this._appState={...this._appState,selectedProjectId:t}},this._handleModalClose=()=>{this._appState={...this._appState,selectedProjectId:void 0}}}connectedCallback(){super.connectedCallback(),this._initializeApp(),window.addEventListener("resize",this._handleResize),document.addEventListener("keydown",this._handleKeydown),document.addEventListener("thumbnail-loaded",this._handleThumbnailLoaded)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResize),document.removeEventListener("keydown",this._handleKeydown),document.removeEventListener("thumbnail-loaded",this._handleThumbnailLoaded)}_initializeApp(){this._setViewportHeight(),this._checkMobile(),this._countTotalThumbnails(),this._startLoadingTimeout()}_countTotalThumbnails(){this._totalThumbnails=v.reduce((e,t)=>{const i=t.media[0];return!i||"video"!==i.type&&"image"!==i.type?e:e+1},0),console.log(`Loading screen waiting for ${this._totalThumbnails} thumbnails to load`),0===this._totalThumbnails&&this._hideLoading()}_startLoadingTimeout(){}_hideLoading(){this._appState={...this._appState,isLoading:!1}}_setViewportHeight(){const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}_checkMobile(){const e=window.innerWidth<=768;e!==this._appState.isMobile&&(this._appState={...this._appState,isMobile:e})}get _selectedProject(){if(this._appState.selectedProjectId)return v.find(e=>e.id===this._appState.selectedProjectId)}render(){return a`
      <div class="app-container">
        <loading-screen .visible=${this._appState.isLoading}></loading-screen>

        <app-header></app-header>

        <media-grid
          .projects=${v}
          .selectedId=${this._appState.selectedProjectId}
          @item-selected=${this._handleItemSelected}
        ></media-grid>

        <project-modal
          .project=${this._selectedProject}
          .open=${!!this._selectedProject}
          @close=${this._handleModalClose}
        ></project-modal>
      </div>
    `}};V.styles=[c,i`
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
    `],A([l()],V.prototype,"_appState",2),V=A([o("portfolio-app")],V);
//# sourceMappingURL=index-Gru6JeCG.js.map
