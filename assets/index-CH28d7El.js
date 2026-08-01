import{f as e,u as t,i,a,x as r,E as o,T as s}from"./vendor-By3TWujv.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},d={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:e},l=(e=d,t,i)=>{const{kind:a,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,r,e)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const r=this[a];t.call(this,i),this.requestUpdate(a,r,e)}}throw Error("Unsupported decorator location: "+a)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(e){return(t,i)=>"object"==typeof i?l(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(e){return c({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=i`
  /* CSS Custom Properties */
  :host {
    --color-primary: #6366f1;
    --color-primary-hover: #4f46e5;
    --color-text-primary: #111827;
    --color-text-secondary: #6b7280;
    --color-background: #ffffff;
    --color-border: #e5e7eb;

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
`,m=i`
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
`,g=i`
  /* Media styles are now defined in individual components for better control */
`,u=i`
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
`,v=[{id:"rhythm-game",title:"Rhythm Game",description:"My capstone project: a one-button rhythm game built in Godot for a gallery installation. A parent dog barks a rhythm and the player barks it back.",details:{problem:"The game was exhibited in a gallery. Gallery visitors give a piece a few seconds before moving on, while games normally require minutes of instruction. The design had to work within that constraint: a single physical button, no written instructions, and music built from short, manageable loops.",highlight:"The game teaches itself through call-and-response. A parent dog barks a bar of rhythm, and the player, as the baby dog, repeats it on the button. A full session runs about two minutes, and the format held up in the gallery. The main engineering problem was audio timing: Godot's DSP clock was not precise enough for beat-accurate input judgment, so I built a custom timing layer on top of it.",tools:"Godot, GDScript, custom audio timing layer, loop-based music.",nextSteps:"The game is extensible through code and additional music loops, so new bars are cheap to add. A web build exists. Next steps are adding more bars and improving browser audio timing.",audience:"Gallery visitors, and anyone with a browser. The game is playable online."},thumbnail:{src:"mov/dog.mp4",type:"video"},media:[{src:"mov/dog.mp4",type:"video"},{src:"mov/play.mp4",type:"video"}],links:[{href:"https://kartik2d.github.io/DoggyRhythm/",label:"Play Online",type:"primary"}],tags:["Games"],browserPlayable:!0,featured:!0},{id:"flipcel",title:"FlipCel",description:"A browser-based vector sketchpad with a custom geometry kernel. Intended as the foundation of a larger creative coding ecosystem.",details:{problem:"Flash had a drawing system no tool has replicated since it was discontinued in 2020. Shapes interacted directly on the canvas: they merged, cut into each other, and could be pulled apart again. I also prefer vector data over raster for archival reasons. Raster painting muddies easily and depends on zoom level; vectors stay crisp at any resolution. Rebuilding this behavior is difficult because rounding errors in the boolean geometry leave gaps and slivers when shapes merge and split.",highlight:"I built the geometry engine from scratch. Coordinates are snapped to an ultra-fine integer grid, the same approach Flash used. The grid is far finer than any screen pixel, so it is invisible, but it guarantees that two points intended to touch always touch exactly, and shape operations never produce hairline gaps. Edge connectivity is tracked in a structure that makes merging, splitting, and undo reliable, and I wrote the curve-intersection math that lets shapes cut into each other cleanly. Working in vectors also enables workflows a raster painting app cannot do: in the video below, I paint a landscape by laying down rough shapes that automatically crop themselves into the intended regions. Everything exports as clean SVG, so artwork is never trapped in the tool.",tools:"TypeScript and HTML Canvas, with a custom geometry engine. I evaluated Rust, Zig, Swift, and C++ (via Godot GDExtension) with Wasm as candidates for the long-term engine.",nextSteps:"FlipCel runs in the browser with no install and already works as an illustration tool with a Flash-style vector brush. To be precise about current scope: it is a vector sketchpad and does not have animation or timeline features at this stage. It is an active long-term project, intended as the foundation of a creative coding ecosystem with performance beyond the original Flash engine. Animation and a mobile build are next.",audience:"Ex-Flash artists who miss drawing this way, and developers who want a hackable geometry foundation to build on."},thumbnail:{src:"mov/flipcel.mov",type:"video"},media:[{src:"mov/flipcel.mov",type:"video"}],links:[{href:"https://kartik2d.github.io/FlipCel/",label:"Open FlipCel",type:"primary"}],tags:["Creative Tools"],featured:!0,browserPlayable:!0},{id:"timing-practice",title:"Timing Practice",description:"A school motion piece built around the After Effects graph editor and aggressive easing.",details:{problem:"This was a school assignment and an exercise in animation timing. I like intense easing curves, and this piece exists to demonstrate that sensibility.",highlight:"Most of the work happened in the graph editor: hand-tuning curves so the motion snaps and settles with weight instead of interpolating linearly.",tools:"After Effects, hand-tuned graph editor curves."},thumbnail:{src:"mov/Hello.mp4",type:"video"},media:[{src:"https://youtu.be/is6Ochvkjx8",type:"youtube"}],links:[{href:"https://youtu.be/is6Ochvkjx8",label:"Watch on YouTube",type:"primary"}],tags:["Motion Design"],featured:!0},{id:"ui-work",title:"EG4 Energy App",description:"Design exploration for the redesign of EG4's home energy dashboard, moving from a deliberately playful first pass to a production-ready identity.",details:{problem:"EG4's existing energy dashboard needed a redesign. The requirements: a more distinct identity, while keeping everything a homeowner needs readable at a glance — solar, battery, grid, load, and savings.",highlight:"I started with a deliberately playful direction: a cartoony, Duolingo-inspired pass that was too bold to ship but useful for breaking away from the old dashboard's conventions. I then distilled its stronger ideas into a serious design and refined it through review rounds with company leadership. The screenshots trace that progression.",tools:"Figma, high-fidelity mockups, iterative design reviews.",nextSteps:"Prototype the energy-flow animations in code. Live data driving motion is the design-engineering overlap I work in.",audience:"EG4 customers who monitor their home energy systems daily."},thumbnail:{src:"mov/ui/1.png",type:"image"},media:[{src:"mov/ui/3.png",type:"image",alt:"Starting point: the deliberately playful, Duolingo-inspired design next to its serious dark translation."},{src:"mov/ui/1.png",type:"image",alt:"The serious direction: glowing dial, node-graph, and isometric house treatments of the energy dashboard."},{src:"mov/ui/2.png",type:"image",alt:"Further explorations: outline illustration, schematic house, and isometric EV charging treatments."}],tags:["UI UX"]},{id:"files-vs-apps",title:"Files vs Apps",description:"An essay on how AI is unbundling the app-centric model of computing, and what that means for who owns your work.",articleHtml:'\n      <h2>A brief history</h2>\n      <p>Through the 80s and 90s, computing was file-centric. Documents, spreadsheets, and code existed as independent files, and any compatible program could open them. A text file was a text file.</p>\n      <p>In the 2000s, applications became the primary gateway to data. By the 2010s, apps mediated most of our relationship with files, often hiding them entirely behind proprietary formats and cloud services.</p>\n      <p>Each step traded user autonomy for convenience.</p>\n      <h2>The cost of app-centrism</h2>\n      <p>Vendor lock-in ties creative work to specific companies and their business models. Format obsolescence threatens its longevity: if Notion disappears, its databases go with it. Data portability is an afterthought on most platforms, and subscription pricing means paying monthly for access to your own work. The incentives of the companies building these apps have drifted away from the needs of the people creating inside them.</p>\n      <figure class="article-figure">\n        <img src="mov/filesvapps-cover.png" alt="Diagram comparing file-centric tools sharing an open format versus siloed apps with proprietary formats." />\n      </figure>\n      <h2>Enter AI</h2>\n      <p>What users actually want is to transform their data. The interface is only the means. Traditional applications bundle interface, features, and file format into one inseparable unit. AI unbundles them, letting each evolve independently.</p>\n      <blockquote><p>The request changes from "I need Photoshop" to "I need to edit this image."</p></blockquote>\n      <p>Once that happens, the interface stops being something you invest years learning. It becomes disposable. The data underneath is what persists.</p>\n      <h2>What this looks like in practice</h2>\n      <p>Instead of buying and learning Adobe Illustrator: <em>"Code me an SVG editor that fits my exact needs."</em></p>\n      <p>Instead of subscribing to a data visualization platform: <em>"Build a visualization directly from this dataset."</em></p>\n      <p>Instead of adapting a workflow to Notion: <em>"Create a markdown editor structured around how I actually work."</em></p>\n      <p>In each case, a purpose-built tool replaces a general-purpose application. The app becomes an output you generate on demand, fitted to the job at hand.</p>\n      <p>This is, in effect, a return to the file-centric model. The tool becomes disposable. The work stays yours.</p>\n      <h2>What app designers can learn from this</h2>\n      <p>Users abandon apps that make them serve the tool. Designers who do well in the coming years will treat the user\'s outcome as the product, and that reframe has concrete consequences: data portability becomes a day-one requirement, and the friction between the user and their goal matters more than the length of the feature list.</p>\n      <p>There is also a lesson about format. When an AI can generate a bespoke replacement in minutes, a proprietary format stops working as a retention strategy and becomes a reason to leave. Export-first design is good product strategy, and good ethics.</p>\n      <p>What remains defensible for a general-purpose app is community and trust, which a generated tool cannot replicate. Build around those.</p>\n    ',thumbnail:{src:"mov/filesvapps-cover.png",type:"image",alt:"Diagram comparing file-centric tools sharing an open format versus siloed apps with proprietary formats."},media:[],tags:["Blog Posts"]},{id:"amuselabs-promo",title:"AmuseLabs Promo",description:"Client work for AmuseLabs: a 60-second social video explaining their crossword platform, from user research through final animation.",details:{problem:"AmuseLabs needed a short social video that explained their crossword platform quickly. Their existing messaging also had gaps that had not been diagnosed.",highlight:"I extended the brief with user research into how people actually understood the product. The design corrections that came out of that research shipped on their live website, in addition to the video itself.",tools:"After Effects, user research and interviews, brand design.",nextSteps:"Tighten the research-to-motion pipeline: prototype messaging variants as animatics and test them before committing to a final render.",audience:"Clients who want the brief questioned, and teams looking for motion work grounded in user research."},thumbnail:{src:"mov/amuselabs_optimized.mp4",type:"video"},media:[{src:"https://www.youtube.com/watch?v=hyWDx1RaeU0",type:"youtube"}],links:[{href:"https://youtu.be/hyWDx1RaeU0",label:"Watch on YouTube",type:"primary"}],tags:["Motion Design"],featured:!0},{id:"space-shooter",title:"Space Shooter",description:"An arcade prototype in LÖVE 2D built around screen shake, chromatic aberration, and layered hit feedback.",details:{problem:"This project was unplanned. Each effect began as a test of a screen function in LÖVE 2D, and one experiment led to the next. The square particles were originally intended for something else, but they worked well against the chromatic aberration, so I built a game around that aesthetic.",highlight:"I implemented the effects stack from scratch in Lua, tuning screen shake, chromatic aberration, and hit flashes until shooting felt physical. As the game logic grew, OOP inheritance became a bottleneck, which pushed me toward entity-component architecture and data-oriented design.",tools:"LÖVE 2D, Lua, custom shader effects, ECS-style architecture.",nextSteps:"Extract the effects stack into a reusable game-feel library, built on a proper ECS, for future LÖVE and engine projects.",audience:"Players who like arcade action, and developers studying how layered feedback creates a sense of impact."},thumbnail:{src:"mov/mov3.mp4",type:"video"},media:[{src:"mov/mov3.mp4",type:"video"}],tags:["Games"]},{id:"canvas-code",title:"CanvasCode",description:"A cross between an IDE and a vector editor. You write code to create tools, then draw with them in the same application.",details:{problem:"Flash bridged drawing and programming: draw an asset, convert it to a symbol, and immediately attach logic to it. The current pipeline splits that work between a designer's application and an engineer's application, with friction between the two.",highlight:"The editor itself is programmable. You write code inside the app to create new brushes, generators, and canvas behaviors, then draw with them immediately. Using a tool and building one become the same activity.",tools:"TypeScript, HTML Canvas, in-app code editor and runtime. Part of a broader exploration of pairing performant graphics with reactive UI (Lit, Svelte, Paper.js, Rive).",nextSteps:"CanvasCode is exploratory. Its extensibility ideas and Flash-style drawing goals are feeding into FlipCel. The open question is whether it stays a standalone playground or merges into that ecosystem.",audience:"Creative coders and ex-Flash artists who want drawing and scripting in one place."},thumbnail:{src:"mov/CanvasCode.mp4",type:"video"},media:[{src:"mov/CanvasCode.mp4",type:"video"}],links:[{href:"https://kartik2d.github.io/CanvasCode/",label:"Try Live Demo",type:"primary"}],tags:["Creative Tools"],featured:!0,browserPlayable:!0},{id:"backpack",title:"Backpack",description:"A cross-platform game launcher that scans your machine for installed games across every store and presents them in a single grid.",details:{problem:"Installed games end up scattered across Steam, Epic, Xbox, Ubisoft, itch, and standalone downloads, with no single view of the full library. Existing launchers are also designed for one class of screen, so a layout built for a small handheld fails on a living-room TV and vice versa.",highlight:"Backpack scans the machine for installed games across stores, then pulls cover art, key art, and descriptions from IGDB so the grid populates automatically. The main design decision: I laid the interface out first for a Game Boy-sized screen, then made everything scale proportionally from there. One layout holds up from small handhelds to a TV.",tools:"Tauri, Rust, Lit, TypeScript, IGDB API.",nextSteps:"The project is ongoing but functional. Building it from source produces a working launcher that finds and presents your games. Next steps are broader store coverage and better metadata matching.",audience:"Anyone with games spread across multiple stores and devices, from handheld PCs to the living-room TV."},thumbnail:{src:"mov/backpack.png",type:"image"},media:[{src:"mov/backpack.png",type:"image"}],links:[{href:"https://github.com/Kartik2D/Backpack",label:"View on GitHub",type:"primary"}],tags:["UI UX"],featured:!0},{id:"landscape",title:"Gilroy",description:"An environment illustration of a California landscape, focused on atmosphere and scale.",details:{problem:"The goal was to capture a specific California landscape with as few moves as possible, letting atmosphere carry the image.",highlight:"Depth is built from color temperature and value grouping rather than detail. The scale reads from the atmospheric shifts.",tools:"Procreate."},thumbnail:{src:"mov/landscape.png",type:"image"},media:[{src:"mov/landscape.png",type:"image"}],tags:["Digital Art"]},{id:"la-hacks-branding",title:"LA Hacks Branding",description:"Lead designer for LA Hacks 2019: brand identity, hype video, icons, and social graphics for one of the largest collegiate hackathons.",details:{problem:"LA Hacks 2019 needed a complete brand identity covering video, social, print, and venue signage, built from scratch by a design team of three.",highlight:"I led the identity from concept to delivery: designed the system, then animated the hype video in After Effects myself so the motion language and the static brand stayed consistent.",tools:"After Effects, Adobe Creative Cloud, brand system design.",nextSteps:"Apply the same motion-first approach to product and tool branding.",audience:"Hackathon attendees and sponsors in 2019. As portfolio evidence: end-to-end ownership of a visual identity under deadline."},thumbnail:{src:"mov/lahacksHYPE_optimized.mp4",type:"video"},media:[{src:"https://www.youtube.com/watch?v=UZo1g0dDjRw",type:"youtube"},{src:"mov/lahacks1.png",type:"image"},{src:"mov/lahacks2.png",type:"image"},{src:"mov/lahacks3.png",type:"image"}],links:[{href:"https://youtu.be/UZo1g0dDjRw",label:"Watch on YouTube",type:"primary"}],tags:["Motion Design"]},{id:"la-hacks-minigame",title:"LA Hacks Minigame",description:"A game jam entry built in one hour: an endless runner where every element gives immediate feedback.",details:{problem:"The constraint was a single hour of development time. Jams that short test whether your instincts for feel and feedback hold up under pressure.",highlight:"Nearly the entire hour went into responsiveness: every collision, pickup, and movement produces immediate visual feedback. Under that time limit, feedback quality matters more than content volume.",tools:"GameMaker, exported to HTML5 so it runs in the browser.",nextSteps:"Repeat the constraint as a recurring exercise: one hour, one mechanic, maximum feel.",audience:"LA Hacks attendees who needed a break between hacking sessions. Still playable in the browser."},thumbnail:{src:"mov/lahacks_optimized.mp4",type:"video"},media:[{src:"mov/lahacks_optimized.mp4",type:"video"}],links:[{href:"LaHacksMinigame/index.html",label:"Play Online",type:"primary"}],tags:["Games"],browserPlayable:!0},{id:"zen-painter",title:"Zen Painter",description:"An experimental brush engine where the mark responds to how the stroke is made.",details:{problem:"Most drawing applications treat brushes as static stamps along a path. I wanted a brush that responds to the speed and rhythm of the gesture without adding input latency.",highlight:"Stroke dynamics drive the mark-making: the same gesture painted fast or slow produces a different mark. Handling high-frequency pointer input so strokes feel immediate was as much of the work as the visuals.",tools:"TypeScript, HTML Canvas, custom stroke-dynamics engine.",nextSteps:"Currently exploratory. I am investigating GPU-based path rendering and hardware-accelerated pipelines, including Godot GDExtension with Rust, to run these brushes at full canvas resolution in real time.",audience:"Artists who want more expressive brushes, and tool designers interested in gesture-driven input."},thumbnail:{src:"mov/brush.mp4",type:"video"},media:[{src:"mov/brush1.jpeg",type:"image"}],links:[{href:"https://kartik2d.itch.io/zen-painter",label:"Play on Itch.io",type:"primary"}],tags:["Creative Tools"],featured:!0},{id:"flower-p5js",title:"Flower (p5.js)",description:"An interactive generative sketch in p5.js, from my early WebGL experiments.",details:{problem:"An early exercise in interactive creative coding. Small toys like this are a cheap way to test interaction ideas.",highlight:"The interaction loop is tight: the flower responds continuously to input rather than playing canned animations, which is what makes it feel alive.",tools:"p5.js, JavaScript."},thumbnail:{src:"mov/flower_web_optimized.mp4",type:"video"},media:[{src:"mov/flower_web_optimized.mp4",type:"video"}],links:[{href:"flower/index.html",label:"Try Interactive Demo",type:"primary"}],tags:["Games"],browserPlayable:!0},{id:"basketball-prototype",title:"Basketball Prototype",description:"A physics toy in LÖVE 2D with simulated nets and ropes that react to every shot.",details:{problem:"Soft-body details like nets and ropes are where physics toys usually fail, reading as either rigid or unstable. The goal was to make the net the most satisfying part of the shot.",highlight:"I built the rope and net simulation with constraint-based physics in Lua, tuned so the net's reaction to a made shot is the reward. The physics itself is the feedback.",tools:"LÖVE 2D, Lua, constraint-based soft-body simulation.",nextSteps:"Fold this simulation work into my engine experiments, treating soft-body dynamics as a first-class primitive in custom tools.",audience:"Players who replay a shot to watch the net move, and developers interested in readable, hand-rolled physics."},thumbnail:{src:"mov/mov.mp4",type:"video"},media:[{src:"mov/basketball3.mp4",type:"video"},{src:"mov/mov2.mp4",type:"video"},{src:"mov/mov.mp4",type:"video"}],tags:["Games"]},{id:"fishing",title:"Fishing",description:"A grayscale value study of a fishing scene: a boy on the bank and the catch on the line.",details:{highlight:"The scene is built from value masses first, so the bent rod, the rippling water, and the catch on the line all read in pure grayscale.",tools:"Procreate."},thumbnail:{src:"mov/painting2.jpeg",type:"image"},media:[{src:"mov/painting2.jpeg",type:"image"}],tags:["Digital Art"]}],b=[...new Set(v.flatMap(e=>e.tags??[]))].sort((e,t)=>e.localeCompare(t));var f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,w=(e,t,i,a)=>{for(var r,o=a>1?void 0:a?y(t,i):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&f(t,i,o),o};let k=class extends a{constructor(){super(...arguments),this.showBack=!1,this._handleBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0}))}}render(){return r`
      <header>
        <div class="header-content">
          ${this.showBack?r`
                <button
                  class="back-btn"
                  @click=${this._handleBack}
                  aria-label="Back to projects"
                >
                  &larr; Back to projects
                </button>
              `:r`
                <div class="brand">
                  <h1 class="brand-title">Kartik Vinayak</h1>
                  <p class="brand-subtitle">Motion & Interactive Design</p>
                </div>
              `}
          <a
            class="btn btn-primary contact-btn"
            href="mailto:kartikvinayak3@gmail.com"
            aria-label="Send email to Kartik Vinayak"
          >
            Get in touch
          </a>
        </div>
      </header>
    `}};k.styles=[p,m,u,i`
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

      .back-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm) var(--spacing-md);
        background: transparent;
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-sm);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        cursor: pointer;
        transition: all var(--transition-fast);
      }

      .back-btn:hover {
        background: var(--color-border);
        color: var(--color-text-primary);
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
    `],w([c({type:Boolean})],k.prototype,"showBack",2),k=w([n("app-header")],k);var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,j=(e,t,i,a)=>{for(var r,o=a>1?void 0:a?_(t,i):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&x(t,i,o),o};let T=class extends a{constructor(){super(...arguments),this.visible=!1}render(){return r`
      <div class="loading-content">
        <div class="spinner" aria-hidden="true"></div>
        <h2 class="loading-title">Kartik Vinayak</h2>
        <p class="loading-subtitle">Loading portfolio...</p>
      </div>
    `}updated(e){e.has("visible")&&this.toggleAttribute("visible",this.visible)}};function $(e){const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];return t?`https://www.youtube-nocookie.com/embed/${t}?rel=0&modestbranding=1&autoplay=0`:e}T.styles=[p,i`
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
    `],j([c({type:Boolean})],T.prototype,"visible",2),T=j([n("loading-screen")],T);const E={Games:{background:"#dc2626",color:"#ffffff"},"Creative Tools":{background:"#4f46e5",color:"#ffffff"},"Motion Design":{background:"#d97706",color:"#ffffff"},"Digital Art":{background:"#9333ea",color:"#ffffff"},"Blog Posts":{background:"#0891b2",color:"#ffffff"},"UI UX":{background:"#db2777",color:"#ffffff"}},I={background:"rgba(0, 0, 0, 0.65)",color:"#ffffff"};function z(e){return E[e]??I}var S=Object.defineProperty,L=Object.getOwnPropertyDescriptor,P=(e,t,i,a)=>{for(var r,o=a>1?void 0:a?L(t,i):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&S(t,i,o),o};let C=class extends a{constructor(){super(...arguments),this.isSelected=!1,this._isHovered=!1,this._isVisible=!1,this._updateInfoOffset=()=>{this._infoPane&&this.style.setProperty("--info-offset",`${this._infoPane.offsetHeight}px`)},this._handleTouchStart=()=>{this._isHovered=!0,this._videoElement&&this._videoElement.paused&&this._videoElement.play().catch(()=>{})},this._handleTouchEnd=()=>{setTimeout(()=>{this._isHovered=!1},200)},this._handleMouseEnter=()=>{this._isHovered=!0,this._videoElement&&this._videoElement.paused&&this._videoElement.play().catch(()=>{})},this._handleMouseLeave=()=>{this._isHovered=!1},this._handleClick=()=>{this.dispatchEvent(new CustomEvent("item-select",{detail:{projectId:this.project.id},bubbles:!0}))},this._handleVideoLoaded=e=>{const t=e.target;this._videoElement=t,document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}})),this._isVisible&&t.play().catch(()=>{})},this._handleVideoError=e=>{const t=e.target;console.warn(`Video failed to load: ${t.src}`),document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._handleImageLoaded=e=>{const t=e.target;document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._handleImageError=e=>{const t=e.target;console.warn(`Image failed to load: ${t.src}`),document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._setupIntersectionObserver=()=>{this._intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{this._isVisible=e.isIntersecting,e.isIntersecting&&this._videoElement?this._videoElement.play().catch(()=>{}):!e.isIntersecting&&this._videoElement&&this._videoElement.pause()})},{threshold:.5,rootMargin:"50px"}),this._intersectionObserver.observe(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this.addEventListener("mouseenter",this._handleMouseEnter),this.addEventListener("mouseleave",this._handleMouseLeave),this.addEventListener("touchstart",this._handleTouchStart,{passive:!0}),this.addEventListener("touchend",this._handleTouchEnd,{passive:!0}),this._setupIntersectionObserver()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("mouseenter",this._handleMouseEnter),this.removeEventListener("mouseleave",this._handleMouseLeave),this.removeEventListener("touchstart",this._handleTouchStart),this.removeEventListener("touchend",this._handleTouchEnd),this._intersectionObserver&&this._intersectionObserver.disconnect(),this._resizeObserver&&this._resizeObserver.disconnect()}firstUpdated(){this._infoPane&&(this._updateInfoOffset(),this._resizeObserver=new ResizeObserver(()=>this._updateInfoOffset()),this._resizeObserver.observe(this._infoPane))}_renderMedia(){const e=this.project.thumbnail;if(!e)return r``;const t=function(e="preview"){const t={muted:!0,playsInline:!0,loop:!0,autoplay:!0,preload:"metadata"};return"preview"===e?t:{...t,controls:!0,preload:"auto"}}("preview");switch(e.type){case"video":return r`
          <video
            class="media-element"
            src=${e.src}
            muted
            loop
            autoplay
            playsinline
            preload=${t.preload}
            aria-label=${`Video preview for ${this.project.title}`}
            @loadedmetadata=${this._handleVideoLoaded}
            @error=${this._handleVideoError}
          ></video>
        `;case"youtube":return r`
          <iframe
            class="media-element"
            src=${$(e.src)}
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowfullscreen
            title=${`YouTube video for ${this.project.title}`}
          ></iframe>
        `;case"image":return r`
          <img
            class="media-element"
            src=${e.src}
            alt=${e.alt||this.project.title}
            loading="lazy"
            decoding="async"
            @load=${this._handleImageLoaded}
            @error=${this._handleImageError}
          />
        `;default:return r``}}render(){const e=this.project.tags?.slice(0,3)??[];return r`
      <div
        class="media-container"
        role="button"
        tabindex="0"
        aria-label=${`View ${this.project.title} project details`}
      >
        ${this._renderMedia()}
      </div>

      <div class="info-stack">
        ${e.length||this.project.browserPlayable?r`
              <div class="badges-row">
                ${e.length?r`
                      <div class="tag-list">
                        ${e.map(e=>{const{background:t,color:i}=z(e);return r`<span
                            class="tag"
                            style="background: ${t}; color: ${i};"
                            >${e}</span
                          >`})}
                      </div>
                    `:""}
                ${this.project.browserPlayable?r`<span class="tag browser-badge">Try in browser</span>`:""}
              </div>
            `:""}

        <div class="info-pane">
          <h3 class="media-title">${this.project.title}</h3>
          <p class="media-description">${this.project.description}</p>

          <span class="more-info"
            >More info <span class="arrow" aria-hidden="true">&rarr;</span></span
          >
        </div>
      </div>
    `}updated(e){e.has("isSelected")&&this.toggleAttribute("selected",this.isSelected),e.has("_isHovered")&&this.toggleAttribute("hovered",this._isHovered)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var A;C.styles=[p,g,i`
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

      /* Sliding stack: badges sit on top, info pane underneath, both rise together. */
      .info-stack {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        transform: translateY(var(--info-offset, 100%));
        transition: transform var(--transition-normal);
      }

      :host(:hover) .info-stack,
      :host([hovered]) .info-stack,
      :host([selected]) .info-stack {
        transform: translateY(0);
      }

      .badges-row {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm) var(--spacing-md);
        pointer-events: none;
      }

      .info-pane {
        /* Avoid transparent stops so light thumbnails don’t wash out white text. */
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.82) 0%,
          rgba(0, 0, 0, 0.9) 40%,
          rgba(0, 0, 0, 0.96) 100%
        );
        color: white;
        padding: var(--spacing-md);
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

      :host([selected]) .info-pane {
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(67, 56, 202, 0.92) 100%
        );
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
        justify-content: flex-end;
        align-items: flex-end;
        gap: var(--spacing-xs);
      }

      .more-info {
        display: inline-flex;
        align-items: center;
        gap: 0.2em;
        margin-top: var(--spacing-sm);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: #a5b4fc;
        text-decoration: none;
        border-bottom: 1px solid currentColor;
        padding-bottom: 1px;
      }

      .more-info .arrow {
        transition: transform var(--transition-fast);
      }

      :host(:hover) .more-info,
      :host([hovered]) .more-info {
        color: #c7d2fe;
      }

      :host(:hover) .more-info .arrow,
      :host([hovered]) .more-info .arrow {
        transform: translateX(3px);
      }

      .tag {
        padding: 0.35rem var(--spacing-sm);
        border-radius: var(--border-radius-sm);
        font-size: var(--font-size-base);
        font-weight: var(--font-weight-semibold);
        line-height: 1.2;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        pointer-events: none;
      }

      .browser-badge {
        background: #f5c518;
        color: #1a1508;
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
    `],P([c({type:Object})],C.prototype,"project",2),P([c({type:Boolean})],C.prototype,"isSelected",2),P([h()],C.prototype,"_isHovered",2),P([h()],C.prototype,"_isVisible",2),P([(A=".info-pane",(e,t,i)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(e,t,{get(){return e=this,e.renderRoot?.querySelector(A)??null;var e}}))],C.prototype,"_infoPane",2),C=P([n("media-item")],C);var O=Object.defineProperty,D=Object.getOwnPropertyDescriptor,M=(e,t,i,a)=>{for(var r,o=a>1?void 0:a?D(t,i):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&O(t,i,o),o};let H=class extends a{constructor(){super(...arguments),this.projects=[],this._handleItemSelect=e=>{const{projectId:t}=e.detail;this.dispatchEvent(new CustomEvent("item-selected",{detail:{projectId:t},bubbles:!0}))}}render(){return 0===this.projects.length?r`
        <div class="grid-container">
          <div class="empty-state">
            <p>No projects to display</p>
          </div>
        </div>
      `:r`
      <div class="grid-container">
        <div class="projects-grid">
          ${this.projects.map(e=>r`
              <media-item
                .project=${e}
                .isSelected=${this.selectedId===e.id}
                @item-select=${this._handleItemSelect}
              ></media-item>
            `)}
        </div>
      </div>
    `}};H.styles=[p,u,i`
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
    `],M([c({type:Array})],H.prototype,"projects",2),M([c({type:String})],H.prototype,"selectedId",2),H=M([n("media-grid")],H);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G=2;class V{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class B extends V{constructor(e){if(super(e),this.it=o,e.type!==G)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o||null==e)return this._t=void 0,this.it=e;if(e===s)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}B.directiveName="unsafeHTML",B.resultType=1;const F=(U=B,(...e)=>({_$litDirective$:U,values:e}));var U,R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,W=(e,t,i,a)=>{for(var r,o=a>1?void 0:a?q(t,i):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&R(t,i,o),o};let N=class extends a{_renderDetails(){const e=this.project?.details;if(!e)return r``;const t=[["Why",e.problem,"why"],["What's Interesting",e.highlight,"highlight"],["Tools",e.tools,"tools"],["What's Next",e.nextSteps,"next"],["Who It's For",e.audience,"audience"]].filter(e=>Boolean(e[1]));return t.length?r`
      <div class="details-section">
        ${t.map(([e,t,i])=>r`
            <div class="detail-item detail-item--${i}">
              <h4 class="detail-label">${e}</h4>
              <p class="detail-text">${t}</p>
            </div>
          `)}
      </div>
    `:r``}_renderMedia(){return this.project?.media.length?r`
      <div class="media-section">
        <h3 class="section-title">
          ${this.project.media.length>1?`Media (${this.project.media.length})`:"Media"}
        </h3>
        <div class="media-grid">
          ${this.project.media.map(e=>{switch(e.type){case"video":return r`
                  <div class="media-item">
                    <video
                      class="media-element"
                      src=${e.src}
                      loop
                      playsinline
                      controls
                      preload="auto"
                    ></video>
                  </div>
                `;case"youtube":return r`
                  <div class="media-item">
                    <iframe
                      class="media-element"
                      src=${$(e.src)}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                `;case"image":return r`
                  <div class="media-item">
                    <img
                      class="media-element"
                      src=${e.src}
                      alt=${e.alt||this.project.title}
                    />
                  </div>
                `;default:return r``}})}
        </div>
      </div>
    `:r``}_renderLinks(){return this.project?.links?.length?r`
      <div class="links-section">
        <div class="links-grid">
          ${this.project.links.map(e=>r`
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
    `:r``}render(){return this.project?r`
      <div class="page-content">
        <div class="page-header">
          <h1 class="page-title">${this.project.title}</h1>
          <p class="page-description">${this.project.description}</p>

          ${this._renderLinks()}
          ${this.project.tags?.length?r`
                <div class="tag-list">
                  ${this.project.tags.map(e=>r`<span class="tag">${e}</span>`)}
                </div>
              `:""}
        </div>

        ${this._renderDetails()}
        ${this.project.articleHtml?r`<div class="article">
              ${F(this.project.articleHtml)}
            </div>`:""}
        ${this._renderMedia()}
      </div>
    `:r``}};N.styles=[p,m,g,i`
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
        border-left: 3px solid var(--detail-accent);
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
        padding: var(--spacing-xs) var(--spacing-sm);
        background: var(--color-border);
        color: var(--color-text-secondary);
        border-radius: var(--border-radius-sm);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
      }

      @media (max-width: 768px) {
        .page-content {
          padding: var(--spacing-lg);
        }

        .page-title {
          font-size: var(--font-size-2xl);
        }
      }
    `],W([c({type:Object})],N.prototype,"project",2),N=W([n("project-page")],N);var Y=Object.defineProperty,K=Object.getOwnPropertyDescriptor,X=(e,t,i,a)=>{for(var r,o=a>1?void 0:a?K(t,i):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&Y(t,i,o),o};let Z=class extends a{constructor(){super(...arguments),this.tags=[]}_select(e){e===this.selectedTag&&void 0!==e||this.dispatchEvent(new CustomEvent("tag-change",{detail:{tag:e},bubbles:!0,composed:!0}))}render(){return r`
      <nav class="inner" aria-label="Filter work by tag">
        <div class="chips">
          <button
            type="button"
            class="btn btn-secondary chip chip-all"
            aria-pressed=${void 0===this.selectedTag?"true":"false"}
            @click=${()=>this._select(void 0)}
          >
            All
          </button>
          ${this.tags.map(e=>{const{background:t,color:i}=z(e);return r`
              <button
                type="button"
                class="btn btn-secondary chip tag-chip"
                style="--tag-bg: ${t}; --tag-fg: ${i};"
                aria-pressed=${this.selectedTag===e?"true":"false"}
                @click=${()=>this._select(e)}
              >
                ${e}
              </button>
            `})}
        </div>
      </nav>
    `}};Z.styles=[p,m,i`
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

      .tag-chip[aria-pressed="false"] {
        background: var(--color-background);
        color: var(--tag-bg);
        border-color: var(--tag-bg);
      }

      .tag-chip[aria-pressed="false"]:hover {
        background: color-mix(in srgb, var(--tag-bg) 12%, white);
      }

      .tag-chip[aria-pressed="true"] {
        background: var(--tag-bg);
        color: var(--tag-fg);
        border-color: var(--tag-bg);
      }

      .tag-chip[aria-pressed="true"]:hover {
        filter: brightness(0.92);
      }

      @media (max-width: 768px) {
        .inner {
          padding: var(--spacing-sm) var(--spacing-md);
        }
      }
    `],X([c({type:Array})],Z.prototype,"tags",2),X([c({type:String})],Z.prototype,"selectedTag",2),Z=X([n("tag-filter-bar")],Z);var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,ee=(e,t,i,a)=>{for(var r,o=a>1?void 0:a?Q(t,i):t,s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&J(t,i,o),o};let te=class extends a{constructor(){super(...arguments),this._appState={selectedProjectId:void 0,isLoading:!0,isMobile:!1},this._loadedThumbnails=new Set,this._totalThumbnails=0,this._handleThumbnailLoaded=e=>{const t=e,{mediaSrc:i}=t.detail;this._loadedThumbnails.add(i),console.log(`Thumbnail loaded: ${i.split("/").pop()} (${this._loadedThumbnails.size}/${this._totalThumbnails})`),this._loadedThumbnails.size>=this._totalThumbnails&&(console.log("All thumbnails loaded, hiding loading screen"),setTimeout(()=>{this._hideLoading()},300))},this._handleResize=()=>{this._checkMobile(),this._setViewportHeight()},this._handleHashChange=()=>{this._appState={...this._appState,selectedProjectId:this._getProjectIdFromHash()}},this._handleKeydown=e=>{"Escape"===e.key&&this._appState.selectedProjectId&&this._handleBack()},this._handleItemSelected=e=>{const{projectId:t}=e.detail;window.location.hash=`#/project/${t}`},this._handleBack=()=>{window.location.hash=""},this._handleTagChange=e=>{this._filterTag=e.detail.tag}}connectedCallback(){super.connectedCallback(),this._appState={...this._appState,selectedProjectId:this._getProjectIdFromHash()},this._initializeApp(),window.addEventListener("resize",this._handleResize),window.addEventListener("hashchange",this._handleHashChange),document.addEventListener("keydown",this._handleKeydown),document.addEventListener("thumbnail-loaded",this._handleThumbnailLoaded)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResize),window.removeEventListener("hashchange",this._handleHashChange),document.removeEventListener("keydown",this._handleKeydown),document.removeEventListener("thumbnail-loaded",this._handleThumbnailLoaded),void 0!==this._loadingTimeoutId&&window.clearTimeout(this._loadingTimeoutId)}_initializeApp(){this._setViewportHeight(),this._checkMobile(),this._countTotalThumbnails(),this._startLoadingTimeout()}_countTotalThumbnails(){this._totalThumbnails=v.reduce((e,t)=>{const i=t.media[0];return!i||"video"!==i.type&&"image"!==i.type?e:e+1},0),console.log(`Loading screen waiting for ${this._totalThumbnails} thumbnails to load`),0===this._totalThumbnails&&this._hideLoading()}_startLoadingTimeout(){this._loadingTimeoutId=window.setTimeout(()=>{console.warn("Loading timeout reached, showing portfolio anyway"),this._hideLoading()},2500)}_hideLoading(){this._appState.isLoading&&(void 0!==this._loadingTimeoutId&&(window.clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._appState={...this._appState,isLoading:!1})}_setViewportHeight(){const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}_checkMobile(){const e=window.innerWidth<=768;e!==this._appState.isMobile&&(this._appState={...this._appState,isMobile:e})}_getProjectIdFromHash(){const e=window.location.hash.match(/^#\/project\/(.+)$/);if(!e)return;const t=decodeURIComponent(e[1]);return v.some(e=>e.id===t)?t:void 0}get _selectedProject(){if(this._appState.selectedProjectId)return v.find(e=>e.id===this._appState.selectedProjectId)}get _visibleProjects(){return this._filterTag?v.filter(e=>e.tags?.includes(this._filterTag)):v}render(){const e=this._selectedProject;return r`
      <div class="app-container">
        ${e?"":r`
              <loading-screen
                .visible=${this._appState.isLoading}
              ></loading-screen>
            `}

        <app-header
          .showBack=${!!e}
          @back=${this._handleBack}
        ></app-header>

        <tag-filter-bar
          class=${e?"hidden":""}
          .tags=${b}
          .selectedTag=${this._filterTag}
          @tag-change=${this._handleTagChange}
        ></tag-filter-bar>

        <media-grid
          class=${e?"hidden":""}
          .projects=${this._visibleProjects}
          @item-selected=${this._handleItemSelected}
        ></media-grid>

        ${e?r`
              <project-page .project=${e}></project-page>
            `:""}
      </div>
    `}};te.styles=[p,i`
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
    `],ee([h()],te.prototype,"_appState",2),ee([h()],te.prototype,"_filterTag",2),te=ee([n("portfolio-app")],te);
//# sourceMappingURL=index-CH28d7El.js.map
