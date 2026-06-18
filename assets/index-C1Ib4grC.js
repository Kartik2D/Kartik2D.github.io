import{f as e,u as t,i,a,x as o,E as r,T as n}from"./vendor-By3TWujv.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},d={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:e},l=(e=d,t,i)=>{const{kind:a,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,o,e)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const o=this[a];t.call(this,i),this.requestUpdate(a,o,e)}}throw Error("Unsupported decorator location: "+a)};
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
`,v=[{id:"rhythm-game",title:"Rhythm Game",description:"My capstone: a one-button rhythm game built in Godot for a gallery, where a parent dog barks a rhythm and you bark it back.",details:{problem:"My capstone was shown in a gallery, and gallery visitors give a piece about five seconds before moving on, while games normally take minutes to teach. The design had to survive that: one big red button you instinctively hit, no instructions, and music built from simple, manageable loops.",highlight:"The game teaches itself through a call-and-response everyone already knows: a parent dog barks a bar of rhythm, and you, the baby dog, bark it back on the button. The whole experience runs about two minutes, and it held up in the gallery. The hardest engineering problem was audio timing. Godot's DSP clock support wasn't good enough for beat-accurate judgment, so I built my own workaround on top of it.",tools:"Godot, GDScript, custom audio timing workaround, loop-based music.",nextSteps:"The game is extensible through code and music loops, so new bars are cheap to add. There's a web build now; next up is more bars and tightening browser audio timing.",audience:"Gallery visitors with five seconds of patience, anyone who's ever barked back at a dog, and you can play it in your browser right now."},thumbnail:{src:"mov/dog.mp4",type:"video"},media:[{src:"mov/dog.mp4",type:"video"},{src:"mov/play.mp4",type:"video"}],links:[{href:"https://kartik2d.github.io/DoggyRhythm/",label:"Play Online",type:"primary"}],tags:["Games"],browserPlayable:!0,featured:!0},{id:"inkwell",title:"InkWell",description:"Browser vector sketchpad with a custom geometry kernel, built as the foundation of a larger creative coding ecosystem.",details:{problem:"Flash had the best drawing system ever made. Shapes interacted directly on the canvas: they merged, cut into each other, and could be pulled apart again. No tool has worked that way since Flash died in 2020. Part of why I love this way of working is an anxiety about the data my artwork lives in. Raster painting muddies easily, and the result depends on how far you zoom in. Vectors stay crisp at any size. Bringing this back is surprisingly hard, though: when shapes merge and split, tiny rounding errors in the math leave behind gaps and slivers.",highlight:"Built the geometry engine from scratch. Coordinates live on an ultra-fine integer grid, the same trick Flash itself used: the grid is far finer than any screen pixel, so you never see it, but it means two points that should touch always touch exactly, and shape operations never leave hairline gaps. I track how every edge connects to its neighbors in a structure that makes merging, splitting, and undo reliable. And I wrote the math that figures out exactly where two curves cross, which is what lets shapes cleanly cut into each other. Working in vectors also unlocks tricks a traditional painting app can't do: in the video below, I paint an entire landscape by throwing down loose, rough shapes that automatically crop themselves into the regions I want. And the best part: everything you make exports as a clean SVG, so your artwork is never trapped.",tools:"TypeScript and HTML Canvas, with a custom geometry engine. Evaluated Rust, Zig, Swift, and C++ (Godot GDExtension) plus Wasm for the long-term engine.",nextSteps:"You can try it in the browser right now, no install needed, and it already works well as an illustration tool with a Flash-style vector brush. It's an active long-term project, meant as the foundation of a creative coding ecosystem with performance the original Flash engine couldn't reach. Next up: animation, and a mobile build.",audience:"Ex-Flash artists who miss drawing this way, and developers who want a hackable geometry foundation to build on."},thumbnail:{src:"mov/inkwell.mov",type:"video"},media:[{src:"mov/inkwell.mov",type:"video"}],links:[{href:"https://kartik2d.github.io/inkwell/",label:"Open Inkwell",type:"primary"}],tags:["Creative Tools"],featured:!0,browserPlayable:!0},{id:"timing-practice",title:"Timing Practice",description:"A school motion piece made to show off my animation sensibilities.",details:{problem:"A school project, and an excuse to play. I'm a big fan of the animation graph editor and I love intense easing, so this video is really just a showcase of those sensibilities.",highlight:"Lived in the graph editor, hand-tuning curves and pushing the easing hard so the motion snaps and settles with real weight instead of sliding linearly.",tools:"After Effects, hand-tuned graph editor curves."},thumbnail:{src:"mov/Hello.mp4",type:"video"},media:[{src:"https://youtu.be/is6Ochvkjx8",type:"youtube"}],links:[{href:"https://youtu.be/is6Ochvkjx8",label:"Watch on YouTube",type:"primary"}],tags:["Motion Design"],featured:!0},{id:"ui-work",title:"EG4 Energy App",description:"Design exploration for EG4's home energy dashboard redesign, moving from a deliberately playful starting point to a serious product identity.",details:{problem:"EG4's existing energy dashboard needed a redesign. They wanted a more unique identity while still showing everything a homeowner needs at a glance: solar, battery, grid, load, and savings.",highlight:"I like to start playful on purpose. The first pass was a cartoony, Duolingo-inspired take, too bold to ship but perfect for breaking out of the old dashboard's gravity. From there I distilled its best ideas into a serious design and kept refining it through rounds of feedback from the company's leadership. The screenshots trace that evolution.",tools:"Figma, high-fidelity mockups, iterative design reviews.",nextSteps:"Prototype the energy-flow animations in code, where live data driving the motion is exactly the design-engineering overlap I work in.",audience:"EG4 customers monitoring their home energy systems daily, from solar enthusiasts to homeowners who just want to know everything is okay."},thumbnail:{src:"mov/ui/1.png",type:"image"},media:[{src:"mov/ui/3.png",type:"image",alt:"Starting point: the deliberately playful, Duolingo-inspired design side by side with its serious dark translation."},{src:"mov/ui/1.png",type:"image",alt:"Pushing the serious direction: glowing dial, node-graph, and isometric house treatments of the energy dashboard."},{src:"mov/ui/2.png",type:"image",alt:"Further explorations: outline illustration, schematic house, and isometric EV charging treatments."}],tags:["UI UX"]},{id:"files-vs-apps",title:"Files vs Apps",description:"Essay on how AI is quietly dismantling the app-centric era of computing, and why that matters for who owns your work.",articleHtml:'\n      <h2>A brief history</h2>\n      <p>Through the 80s and 90s, computing was file-centric. Documents, spreadsheets, and code lived as independent files you could open with whatever tool you liked. A text file was a text file. You could open it in anything.</p>\n      <p>In the 2000s, application ecosystems took over and software became the gateway to our data. By the 2010s, we were in the walled garden era: apps mediated our relationship with files and often obscured them entirely behind proprietary formats and cloud services.</p>\n      <p>Each step traded away user autonomy for convenience.</p>\n      <h2>The cost of app-centrism</h2>\n      <p>Vendor lock-in holds creative work hostage to specific companies and their business models. Format obsolescence threatens its longevity: what happens to your Notion database if the company disappears? Data portability is an afterthought on most platforms, and subscription fatigue grows as we pay monthly fees for access to our own work. The incentives of the companies that build apps have drifted away from the needs of the people who create inside them.</p>\n      <figure class="article-figure">\n        <img src="mov/filesvapps-cover.png" alt="Diagram comparing file-centric tools sharing an open format versus siloed apps with proprietary formats." />\n      </figure>\n      <h2>Enter AI</h2>\n      <p>What users actually want is to transform their data. The interface is just the means. Traditional applications bundle interfaces, features, and file formats into inseparable units; AI unbundles them, allowing each to evolve independently.</p>\n      <blockquote><p>The request changes from "I need Photoshop" to "I need to edit this image."</p></blockquote>\n      <p>When that happens, the interface stops being something you invest years learning. It becomes disposable. The data underneath is what lasts.</p>\n      <h2>What this looks like in practice</h2>\n      <p>Instead of buying Adobe Illustrator and learning it, a user might simply ask an AI to: <em>"Code me a custom SVG editor that precisely fits my needs."</em></p>\n      <p>Instead of subscribing to a data visualization platform: <em>"Build me a data visualization directly from this dataset."</em></p>\n      <p>Instead of bending your workflow to fit Notion: <em>"Create a custom markdown editor aligned with my exact workflow."</em></p>\n      <p>In each case, a purpose-built tool replaces a general-purpose application. The app becomes an output you generate on demand, fitted to the job at hand.</p>\n      <p>We may be circling back, in a strange way, to something like the file-centric model. The tool becomes invisible. The work remains yours.</p>\n      <h2>What app designers can learn from this</h2>\n      <p>The rise of AI-generated, purpose-built tools is a signal. Users abandon apps that make them serve the tool.</p>\n      <p>The designers who do well in the coming years will be the ones who treat the user\'s outcome as the product. That reframe has real consequences. Data portability becomes a day-one priority and a statement of trust. Feature checklists matter less than the amount of friction sitting between the user and what they came to do.</p>\n      <blockquote><p>The best apps of the next decade will be transparent pipes: opinionated about workflow, humble about ownership.</p></blockquote>\n      <p>There\'s also a lesson about format. When an AI can generate a bespoke tool in minutes, lock-in stops working as a retention strategy and just gives people a reason to leave. The proprietary format has turned from moat into liability. Export-first thinking is good product strategy, and good ethics too.</p>\n      <p>Finally, AI should push designers to ask what makes a general-purpose app worth using at all. The answer, increasingly, is community and trust, things a generated tool can\'t replicate. Build around those, and no prompt can replace you.</p>\n    ',thumbnail:{src:"mov/filesvapps-cover.png",type:"image",alt:"Diagram comparing file-centric tools sharing an open format versus siloed apps with proprietary formats."},media:[],tags:["Blog Posts"]},{id:"amuselabs-promo",title:"AmuseLabs Promo",description:"Client work: 60-second social spot for a crossword platform, from user research through final animation.",details:{problem:"AmuseLabs needed a social spot that explained their crossword platform quickly, and their existing messaging had weak spots nobody had diagnosed.",highlight:"Went beyond the brief: ran user research on how people actually understood the product, and the design fixes that came out of it shipped on their live website.",tools:"After Effects, user research and interviews, brand design.",nextSteps:"Tighten the research-to-motion pipeline: prototype messaging variants as animatics and test them before committing to a final render.",audience:"Clients who need a designer who questions the brief, and teams looking for motion work grounded in real user understanding."},thumbnail:{src:"mov/amuselabs_optimized.mp4",type:"video"},media:[{src:"https://www.youtube.com/watch?v=hyWDx1RaeU0",type:"youtube"}],links:[{href:"https://youtu.be/hyWDx1RaeU0",label:"Watch on YouTube",type:"primary"}],tags:["Motion Design"],featured:!0},{id:"space-shooter",title:"Space Shooter",description:"Arcade prototype in LÖVE 2D drenched in screen shake, chromatic aberration, and tactile effects.",details:{problem:"This one had no plan. Each effect started as me testing a screen function in LÖVE 2D, and one experiment kept leading to the next. The square particles were meant to be something else entirely, but I liked them so much against the chromatic aberration that I built a game around the aesthetic.",highlight:"Implemented the effects stack from scratch in Lua, tuning screen shake, chromatic aberration, and hit flashes until shooting felt physical. As the logic grew, OOP inheritance became the bottleneck, which pushed me toward entity-component architecture and data-oriented design.",tools:"LÖVE 2D, Lua, custom shader effects, ECS-style architecture.",nextSteps:"Extract the effects stack into a reusable game-feel library, built on a proper ECS, for future LÖVE and engine projects.",audience:"Players who like crunchy arcade action, and developers studying how layered feedback creates the feeling of impact."},thumbnail:{src:"mov/mov3.mp4",type:"video"},media:[{src:"mov/mov3.mp4",type:"video"}],tags:["Games"]},{id:"canvas-code",title:"CanvasCode",description:"A cross between an IDE and a vector editor, where you code your own tools and extend the canvas while you draw.",details:{problem:"Flash was a bridge between drawing and programming: draw an asset, convert it to a symbol, immediately write logic for it. Today's pipeline splits that work into a designer's app and an engineer's app, with friction in between.",highlight:"Made the editor itself programmable: you write code inside the app to create new brushes, generators, and canvas behaviors, then immediately draw with them. Using a tool and building one become the same activity.",tools:"TypeScript, HTML Canvas, in-app code editor and runtime. Part of a broader exploration of bridging performant graphics with reactive UI (Lit, Svelte, Paper.js, Rive).",nextSteps:"Still exploratory. The extensibility ideas and the Flash-style drawing goals are feeding into InkWell; the open question is whether CanvasCode stays a playground or merges into that ecosystem.",audience:"Creative coders and ex-Flash artists who miss drawing and scripting in one place: multidisciplinary creators who haven't had a native home since 2020."},thumbnail:{src:"mov/CanvasCode.mp4",type:"video"},media:[{src:"mov/CanvasCode.mp4",type:"video"}],links:[{href:"https://kartik2d.github.io/CanvasCode/",label:"Try Live Demo",type:"primary"}],tags:["Creative Tools"],featured:!0,browserPlayable:!0},{id:"backpack",title:"Backpack",description:"A cross-platform game launcher that finds every game on your machine and presents them in one grid, with a layout that works great on every screen.",details:{problem:"Games end up scattered across Steam, Epic, Xbox, Ubisoft, and itch, plus everything you downloaded straight off the internet. There's no single place to see your whole library at a glance. Other launchers also lock you into one kind of screen, so the one built for a tiny handheld won't work on a living-room TV, and vice versa.",highlight:"Backpack scans your machine for installed games across every store, then goes online to pull cover art, key art, and descriptions so the grid looks good automatically. The interesting design choice: I laid it out first for a Game Boy sized screen, then made everything scale proportionally from there. That makes one rock-solid layout that holds up on anything from a Game Boy style handheld to a big TV.",tools:"Tauri, Rust, Lit, TypeScript, IGDB API.",nextSteps:"An ongoing project, but already functional. Build it yourself and it will find your games and present them nicely. Next up is broadening store coverage and refining the metadata matching.",audience:"Anyone whose games are spread across a dozen stores and devices, from handheld PCs to the living-room TV."},thumbnail:{src:"mov/backpack.png",type:"image"},media:[{src:"mov/backpack.png",type:"image"}],links:[{href:"https://github.com/Kartik2D/Backpack",label:"View on GitHub",type:"primary"}],tags:["UI UX"],featured:!0},{id:"landscape",title:"Gilroy",description:"Environment illustration exploring atmosphere, color, and scale.",details:{problem:"Atmosphere carries an environment painting. I set out to capture a specific California landscape feeling with the fewest possible moves.",highlight:"Built depth with color temperature and value grouping, keeping detail sparse. The eye reads the scale from the atmospheric shifts.",tools:"Procreate."},thumbnail:{src:"mov/landscape.png",type:"image"},media:[{src:"mov/landscape.png",type:"image"}],tags:["Digital Art"]},{id:"la-hacks-branding",title:"LA Hacks Branding",description:"Lead designer for LA Hacks 2019: full brand identity, hype video, icons, and social graphics for one of the largest collegiate hackathons.",details:{problem:"LA Hacks 2019 needed a complete brand identity that could hype thousands of students across video, social, print, and venue signage, built from scratch by a design team of three.",highlight:"Led the identity from concept to delivery: designed the system, then personally animated the hype video in After Effects so the motion language and the static brand were one continuous voice.",tools:"After Effects, Adobe Creative Cloud, brand system design.",nextSteps:"Carry the motion-first approach to brand systems into product and tool branding.",audience:"Hackathon attendees and sponsors in 2019; today, anyone assessing whether I can own a visual identity end-to-end under deadline."},thumbnail:{src:"mov/lahacksHYPE_optimized.mp4",type:"video"},media:[{src:"https://www.youtube.com/watch?v=UZo1g0dDjRw",type:"youtube"},{src:"mov/lahacks1.png",type:"image"},{src:"mov/lahacks2.png",type:"image"},{src:"mov/lahacks3.png",type:"image"}],links:[{href:"https://youtu.be/UZo1g0dDjRw",label:"Watch on YouTube",type:"primary"}],tags:["Motion Design"]},{id:"la-hacks-minigame",title:"LA Hacks Minigame",description:"One-hour game jam: an endless runner where every element reacts to the player with responsive feedback.",details:{problem:"Could I make something genuinely fun in a single hour? Game jams expose whether your instincts for feel and feedback are fast enough to work under brutal constraints.",highlight:"Spent the hour almost entirely on responsiveness: every collision, pickup, and movement gives immediate visual feedback. With one hour, juice beats content volume.",tools:"GameMaker, exported to HTML5 so it runs in the browser.",nextSteps:"Use the same constraint as a recurring exercise: one hour, one mechanic, maximum feel.",audience:"LA Hacks attendees who needed a break between hacking sessions, and it's still playable in your browser right now."},thumbnail:{src:"mov/lahacks_optimized.mp4",type:"video"},media:[{src:"mov/lahacks_optimized.mp4",type:"video"}],links:[{href:"LaHacksMinigame/index.html",label:"Play Online",type:"primary"}],tags:["Games"],browserPlayable:!0},{id:"zen-painter",title:"Zen Painter",description:"Experimental brush engine where the mark responds to how you paint.",details:{problem:"Most drawing apps treat brushes as static stamps along a path. I wanted a brush that feels alive, one that responds to the speed and rhythm of your gesture without adding input latency.",highlight:"Built a brush engine where stroke dynamics drive the mark-making: the same gesture painted fast or slow produces a different mark. Handling high-frequency pointer input so strokes feel immediate was as much of the work as the visuals.",tools:"TypeScript, HTML Canvas, custom stroke-dynamics engine.",nextSteps:"Exploratory for now. I'm investigating GPU-based path rendering and hardware-accelerated pipelines (including Godot GDExtension with Rust) to run these brushes at full canvas resolution in real time.",audience:"Artists bored of static brushes, and tool designers interested in expressive, gesture-driven input."},thumbnail:{src:"mov/brush.mp4",type:"video"},media:[{src:"mov/brush1.jpeg",type:"image"}],links:[{href:"https://kartik2d.itch.io/zen-painter",label:"Play on Itch.io",type:"primary"}],tags:["Creative Tools"],featured:!0},{id:"flower-p5js",title:"Flower (p5.js)",description:"Interactive generative doodle inspired by early WebGL experiments.",details:{problem:"An early exercise in making the browser feel alive: could a few hundred lines of creative code produce something people actually want to poke at? Toys like this are how I test interaction ideas cheaply.",highlight:"Kept the interaction loop tight: the flower responds continuously to input instead of playing canned animations, which is what makes a toy feel alive.",tools:"p5.js, JavaScript."},thumbnail:{src:"mov/flower_web_optimized.mp4",type:"video"},media:[{src:"mov/flower_web_optimized.mp4",type:"video"}],links:[{href:"flower/index.html",label:"Try Interactive Demo",type:"primary"}],tags:["Games"],browserPlayable:!0},{id:"basketball-prototype",title:"Basketball Prototype",description:"Physics toy in LÖVE 2D with responsive nets and ropes that make every shot feel tangible.",details:{problem:"Soft-body details like nets and ropes are where physics toys usually fall apart, looking either rigid or explosive. The challenge was making the net the most satisfying part of the shot.",highlight:"Built rope and net simulation with constraint-based physics in Lua, tuned so the net's reaction to a swish became the reward. The physics is the feedback.",tools:"LÖVE 2D, Lua, constraint-based soft-body simulation.",nextSteps:"Fold this simulation work into my engine experiments, treating soft-body dynamics as a first-class primitive in custom tools.",audience:"Players who replay a shot just to watch the net move, and developers interested in readable, hand-rolled physics."},thumbnail:{src:"mov/mov.mp4",type:"video"},media:[{src:"mov/basketball3.mp4",type:"video"},{src:"mov/mov2.mp4",type:"video"},{src:"mov/mov.mp4",type:"video"}],tags:["Games"]},{id:"fishing",title:"Fishing",description:"Grayscale value study of a fishing scene: a boy on the bank and the catch on the line.",details:{highlight:"Built the scene from value masses first, so the bent rod, the rippling water, and the catch on the line all read in pure grayscale.",tools:"Procreate."},thumbnail:{src:"mov/painting2.jpeg",type:"image"},media:[{src:"mov/painting2.jpeg",type:"image"}],tags:["Digital Art"]}],b=[...new Set(v.flatMap(e=>e.tags??[]))].sort((e,t)=>e.localeCompare(t));var f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,w=(e,t,i,a)=>{for(var o,r=a>1?void 0:a?y(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(r=(a?o(t,i,r):o(r))||r);return a&&r&&f(t,i,r),r};let k=class extends a{constructor(){super(...arguments),this.showBack=!1,this._handleBack=()=>{this.dispatchEvent(new CustomEvent("back",{bubbles:!0}))}}render(){return o`
      <header>
        <div class="header-content">
          ${this.showBack?o`
                <button
                  class="back-btn"
                  @click=${this._handleBack}
                  aria-label="Back to projects"
                >
                  &larr; Back to projects
                </button>
              `:o`
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
    `],w([c({type:Boolean})],k.prototype,"showBack",2),k=w([s("app-header")],k);var x=Object.defineProperty,_=Object.getOwnPropertyDescriptor,j=(e,t,i,a)=>{for(var o,r=a>1?void 0:a?_(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(r=(a?o(t,i,r):o(r))||r);return a&&r&&x(t,i,r),r};let T=class extends a{constructor(){super(...arguments),this.visible=!1}render(){return o`
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
    `],j([c({type:Boolean})],T.prototype,"visible",2),T=j([s("loading-screen")],T);const I={Games:{background:"#dc2626",color:"#ffffff"},"Creative Tools":{background:"#4f46e5",color:"#ffffff"},"Motion Design":{background:"#d97706",color:"#ffffff"},"Digital Art":{background:"#9333ea",color:"#ffffff"},"Blog Posts":{background:"#0891b2",color:"#ffffff"},"UI UX":{background:"#db2777",color:"#ffffff"}},E={background:"rgba(0, 0, 0, 0.65)",color:"#ffffff"};function z(e){return I[e]??E}var S=Object.defineProperty,P=Object.getOwnPropertyDescriptor,L=(e,t,i,a)=>{for(var o,r=a>1?void 0:a?P(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(r=(a?o(t,i,r):o(r))||r);return a&&r&&S(t,i,r),r};let C=class extends a{constructor(){super(...arguments),this.isSelected=!1,this._isHovered=!1,this._isVisible=!1,this._updateInfoOffset=()=>{this._infoPane&&this.style.setProperty("--info-offset",`${this._infoPane.offsetHeight}px`)},this._handleTouchStart=()=>{this._isHovered=!0,this._videoElement&&this._videoElement.paused&&this._videoElement.play().catch(()=>{})},this._handleTouchEnd=()=>{setTimeout(()=>{this._isHovered=!1},200)},this._handleMouseEnter=()=>{this._isHovered=!0,this._videoElement&&this._videoElement.paused&&this._videoElement.play().catch(()=>{})},this._handleMouseLeave=()=>{this._isHovered=!1},this._handleClick=()=>{this.dispatchEvent(new CustomEvent("item-select",{detail:{projectId:this.project.id},bubbles:!0}))},this._handleVideoLoaded=e=>{const t=e.target;this._videoElement=t,document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}})),this._isVisible&&t.play().catch(()=>{})},this._handleVideoError=e=>{const t=e.target;console.warn(`Video failed to load: ${t.src}`),document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._handleImageLoaded=e=>{const t=e.target;document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._handleImageError=e=>{const t=e.target;console.warn(`Image failed to load: ${t.src}`),document.dispatchEvent(new CustomEvent("thumbnail-loaded",{detail:{mediaSrc:t.src}}))},this._setupIntersectionObserver=()=>{this._intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{this._isVisible=e.isIntersecting,e.isIntersecting&&this._videoElement?this._videoElement.play().catch(()=>{}):!e.isIntersecting&&this._videoElement&&this._videoElement.pause()})},{threshold:.5,rootMargin:"50px"}),this._intersectionObserver.observe(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this.addEventListener("mouseenter",this._handleMouseEnter),this.addEventListener("mouseleave",this._handleMouseLeave),this.addEventListener("touchstart",this._handleTouchStart,{passive:!0}),this.addEventListener("touchend",this._handleTouchEnd,{passive:!0}),this._setupIntersectionObserver()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick),this.removeEventListener("mouseenter",this._handleMouseEnter),this.removeEventListener("mouseleave",this._handleMouseLeave),this.removeEventListener("touchstart",this._handleTouchStart),this.removeEventListener("touchend",this._handleTouchEnd),this._intersectionObserver&&this._intersectionObserver.disconnect(),this._resizeObserver&&this._resizeObserver.disconnect()}firstUpdated(){this._infoPane&&(this._updateInfoOffset(),this._resizeObserver=new ResizeObserver(()=>this._updateInfoOffset()),this._resizeObserver.observe(this._infoPane))}_renderMedia(){const e=this.project.thumbnail;if(!e)return o``;const t=function(e="preview"){const t={muted:!0,playsInline:!0,loop:!0,autoplay:!0,preload:"metadata"};return"preview"===e?t:{...t,controls:!0,preload:"auto"}}("preview");switch(e.type){case"video":return o`
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
        `;case"youtube":return o`
          <iframe
            class="media-element"
            src=${$(e.src)}
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            allowfullscreen
            title=${`YouTube video for ${this.project.title}`}
          ></iframe>
        `;case"image":return o`
          <img
            class="media-element"
            src=${e.src}
            alt=${e.alt||this.project.title}
            loading="lazy"
            decoding="async"
            @load=${this._handleImageLoaded}
            @error=${this._handleImageError}
          />
        `;default:return o``}}render(){const e=this.project.tags?.slice(0,3)??[];return o`
      <div
        class="media-container"
        role="button"
        tabindex="0"
        aria-label=${`View ${this.project.title} project details`}
      >
        ${this._renderMedia()}
      </div>

      <div class="info-stack">
        ${e.length||this.project.browserPlayable?o`
              <div class="badges-row">
                ${e.length?o`
                      <div class="tag-list">
                        ${e.map(e=>{const{background:t,color:i}=z(e);return o`<span
                            class="tag"
                            style="background: ${t}; color: ${i};"
                            >${e}</span
                          >`})}
                      </div>
                    `:""}
                ${this.project.browserPlayable?o`<span class="tag browser-badge">Try in browser</span>`:""}
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
    `],L([c({type:Object})],C.prototype,"project",2),L([c({type:Boolean})],C.prototype,"isSelected",2),L([h()],C.prototype,"_isHovered",2),L([h()],C.prototype,"_isVisible",2),L([(A=".info-pane",(e,t,i)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(e,t,{get(){return e=this,e.renderRoot?.querySelector(A)??null;var e}}))],C.prototype,"_infoPane",2),C=L([s("media-item")],C);var O=Object.defineProperty,D=Object.getOwnPropertyDescriptor,M=(e,t,i,a)=>{for(var o,r=a>1?void 0:a?D(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(r=(a?o(t,i,r):o(r))||r);return a&&r&&O(t,i,r),r};let H=class extends a{constructor(){super(...arguments),this.projects=[],this._handleItemSelect=e=>{const{projectId:t}=e.detail;this.dispatchEvent(new CustomEvent("item-selected",{detail:{projectId:t},bubbles:!0}))}}render(){return 0===this.projects.length?o`
        <div class="grid-container">
          <div class="empty-state">
            <p>No projects to display</p>
          </div>
        </div>
      `:o`
      <div class="grid-container">
        <div class="projects-grid">
          ${this.projects.map(e=>o`
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
    `],M([c({type:Array})],H.prototype,"projects",2),M([c({type:String})],H.prototype,"selectedId",2),H=M([s("media-grid")],H);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=2;class G{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V extends G{constructor(e){if(super(e),this.it=r,e.type!==B)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r||null==e)return this._t=void 0,this.it=e;if(e===n)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}V.directiveName="unsafeHTML",V.resultType=1;const F=(U=V,(...e)=>({_$litDirective$:U,values:e}));var U,W=Object.defineProperty,R=Object.getOwnPropertyDescriptor,q=(e,t,i,a)=>{for(var o,r=a>1?void 0:a?R(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(r=(a?o(t,i,r):o(r))||r);return a&&r&&W(t,i,r),r};let N=class extends a{_renderDetails(){const e=this.project?.details;if(!e)return o``;const t=[["Why",e.problem,"why"],["What's Interesting",e.highlight,"highlight"],["Tools",e.tools,"tools"],["What's Next",e.nextSteps,"next"],["Who It's For",e.audience,"audience"]].filter(e=>Boolean(e[1]));return t.length?o`
      <div class="details-section">
        ${t.map(([e,t,i])=>o`
            <div class="detail-item detail-item--${i}">
              <h4 class="detail-label">${e}</h4>
              <p class="detail-text">${t}</p>
            </div>
          `)}
      </div>
    `:o``}_renderMedia(){return this.project?.media.length?o`
      <div class="media-section">
        <h3 class="section-title">
          ${this.project.media.length>1?`Media (${this.project.media.length})`:"Media"}
        </h3>
        <div class="media-grid">
          ${this.project.media.map(e=>{switch(e.type){case"video":return o`
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
                `;case"youtube":return o`
                  <div class="media-item">
                    <iframe
                      class="media-element"
                      src=${$(e.src)}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                `;case"image":return o`
                  <div class="media-item">
                    <img
                      class="media-element"
                      src=${e.src}
                      alt=${e.alt||this.project.title}
                    />
                  </div>
                `;default:return o``}})}
        </div>
      </div>
    `:o``}_renderLinks(){return this.project?.links?.length?o`
      <div class="links-section">
        <div class="links-grid">
          ${this.project.links.map(e=>o`
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
    `:o``}render(){return this.project?o`
      <div class="page-content">
        <div class="page-header">
          <h1 class="page-title">${this.project.title}</h1>
          <p class="page-description">${this.project.description}</p>

          ${this._renderLinks()}
          ${this.project.tags?.length?o`
                <div class="tag-list">
                  ${this.project.tags.map(e=>o`<span class="tag">${e}</span>`)}
                </div>
              `:""}
        </div>

        ${this._renderDetails()}
        ${this.project.articleHtml?o`<div class="article">
              ${F(this.project.articleHtml)}
            </div>`:""}
        ${this._renderMedia()}
      </div>
    `:o``}};N.styles=[p,m,g,i`
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
    `],q([c({type:Object})],N.prototype,"project",2),N=q([s("project-page")],N);var K=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,X=(e,t,i,a)=>{for(var o,r=a>1?void 0:a?Y(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(r=(a?o(t,i,r):o(r))||r);return a&&r&&K(t,i,r),r};let Z=class extends a{constructor(){super(...arguments),this.tags=[]}_select(e){e===this.selectedTag&&void 0!==e||this.dispatchEvent(new CustomEvent("tag-change",{detail:{tag:e},bubbles:!0,composed:!0}))}render(){return o`
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
          ${this.tags.map(e=>{const{background:t,color:i}=z(e);return o`
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
    `],X([c({type:Array})],Z.prototype,"tags",2),X([c({type:String})],Z.prototype,"selectedTag",2),Z=X([s("tag-filter-bar")],Z);var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,ee=(e,t,i,a)=>{for(var o,r=a>1?void 0:a?Q(t,i):t,n=e.length-1;n>=0;n--)(o=e[n])&&(r=(a?o(t,i,r):o(r))||r);return a&&r&&J(t,i,r),r};let te=class extends a{constructor(){super(...arguments),this._appState={selectedProjectId:void 0,isLoading:!0,isMobile:!1},this._loadedThumbnails=new Set,this._totalThumbnails=0,this._handleThumbnailLoaded=e=>{const t=e,{mediaSrc:i}=t.detail;this._loadedThumbnails.add(i),console.log(`Thumbnail loaded: ${i.split("/").pop()} (${this._loadedThumbnails.size}/${this._totalThumbnails})`),this._loadedThumbnails.size>=this._totalThumbnails&&(console.log("All thumbnails loaded, hiding loading screen"),setTimeout(()=>{this._hideLoading()},300))},this._handleResize=()=>{this._checkMobile(),this._setViewportHeight()},this._handleHashChange=()=>{this._appState={...this._appState,selectedProjectId:this._getProjectIdFromHash()}},this._handleKeydown=e=>{"Escape"===e.key&&this._appState.selectedProjectId&&this._handleBack()},this._handleItemSelected=e=>{const{projectId:t}=e.detail;window.location.hash=`#/project/${t}`},this._handleBack=()=>{window.location.hash=""},this._handleTagChange=e=>{this._filterTag=e.detail.tag}}connectedCallback(){super.connectedCallback(),this._appState={...this._appState,selectedProjectId:this._getProjectIdFromHash()},this._initializeApp(),window.addEventListener("resize",this._handleResize),window.addEventListener("hashchange",this._handleHashChange),document.addEventListener("keydown",this._handleKeydown),document.addEventListener("thumbnail-loaded",this._handleThumbnailLoaded)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResize),window.removeEventListener("hashchange",this._handleHashChange),document.removeEventListener("keydown",this._handleKeydown),document.removeEventListener("thumbnail-loaded",this._handleThumbnailLoaded),void 0!==this._loadingTimeoutId&&window.clearTimeout(this._loadingTimeoutId)}_initializeApp(){this._setViewportHeight(),this._checkMobile(),this._countTotalThumbnails(),this._startLoadingTimeout()}_countTotalThumbnails(){this._totalThumbnails=v.reduce((e,t)=>{const i=t.media[0];return!i||"video"!==i.type&&"image"!==i.type?e:e+1},0),console.log(`Loading screen waiting for ${this._totalThumbnails} thumbnails to load`),0===this._totalThumbnails&&this._hideLoading()}_startLoadingTimeout(){this._loadingTimeoutId=window.setTimeout(()=>{console.warn("Loading timeout reached, showing portfolio anyway"),this._hideLoading()},2500)}_hideLoading(){this._appState.isLoading&&(void 0!==this._loadingTimeoutId&&(window.clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=void 0),this._appState={...this._appState,isLoading:!1})}_setViewportHeight(){const e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}_checkMobile(){const e=window.innerWidth<=768;e!==this._appState.isMobile&&(this._appState={...this._appState,isMobile:e})}_getProjectIdFromHash(){const e=window.location.hash.match(/^#\/project\/(.+)$/);if(!e)return;const t=decodeURIComponent(e[1]);return v.some(e=>e.id===t)?t:void 0}get _selectedProject(){if(this._appState.selectedProjectId)return v.find(e=>e.id===this._appState.selectedProjectId)}get _visibleProjects(){return this._filterTag?v.filter(e=>e.tags?.includes(this._filterTag)):v}render(){const e=this._selectedProject;return o`
      <div class="app-container">
        ${e?"":o`
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

        ${e?o`
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
    `],ee([h()],te.prototype,"_appState",2),ee([h()],te.prototype,"_filterTag",2),te=ee([s("portfolio-app")],te);
//# sourceMappingURL=index-C1Ib4grC.js.map
