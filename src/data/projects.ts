import type { Project } from "../types.js";

export const PROJECTS: Project[] = [
  {
    id: "rhythm-game",
    title: "Rhythm Game",
    description:
      "My capstone project: a one-button rhythm game built in Godot for a gallery installation. A parent dog barks a rhythm and the player barks it back.",
    details: {
      problem:
        "The game was exhibited in a gallery. Gallery visitors give a piece a few seconds before moving on, while games normally require minutes of instruction. The design had to work within that constraint: a single physical button, no written instructions, and music built from short, manageable loops.",
      highlight:
        "The game teaches itself through call-and-response. A parent dog barks a bar of rhythm, and the player, as the baby dog, repeats it on the button. A full session runs about two minutes, and the format held up in the gallery. The main engineering problem was audio timing: Godot's DSP clock was not precise enough for beat-accurate input judgment, so I built a custom timing layer on top of it.",
      tools: "Godot, GDScript, custom audio timing layer, loop-based music.",
      nextSteps:
        "The game is extensible through code and additional music loops, so new bars are cheap to add. A web build exists. Next steps are adding more bars and improving browser audio timing.",
      audience:
        "Gallery visitors, and anyone with a browser. The game is playable online.",
    },
    thumbnail: { src: "mov/dog.mp4", type: "video" },
    media: [
      { src: "mov/dog.mp4", type: "video" },
      { src: "mov/play.mp4", type: "video" },
    ],
    links: [
      {
        href: "https://kartik2d.github.io/DoggyRhythm/",
        label: "Play Online",
        type: "primary",
      },
    ],
    tags: ["Games"],
    browserPlayable: true,
    featured: true,
  },
  {
    id: "flipcel",
    title: "FlipCel",
    description:
      "A browser-based vector sketchpad with a custom geometry kernel. Intended as the foundation of a larger creative coding ecosystem.",
    details: {
      problem:
        "Flash had a drawing system no tool has replicated since it was discontinued in 2020. Shapes interacted directly on the canvas: they merged, cut into each other, and could be pulled apart again. I also prefer vector data over raster for archival reasons. Raster painting muddies easily and depends on zoom level; vectors stay crisp at any resolution. Rebuilding this behavior is difficult because rounding errors in the boolean geometry leave gaps and slivers when shapes merge and split.",
      highlight:
        "I built the geometry engine from scratch. Coordinates are snapped to an ultra-fine integer grid, the same approach Flash used. The grid is far finer than any screen pixel, so it is invisible, but it guarantees that two points intended to touch always touch exactly, and shape operations never produce hairline gaps. Edge connectivity is tracked in a structure that makes merging, splitting, and undo reliable, and I wrote the curve-intersection math that lets shapes cut into each other cleanly. Working in vectors also enables workflows a raster painting app cannot do: in the video below, I paint a landscape by laying down rough shapes that automatically crop themselves into the intended regions. Everything exports as clean SVG, so artwork is never trapped in the tool.",
      tools:
        "TypeScript and HTML Canvas, with a custom geometry engine. I evaluated Rust, Zig, Swift, and C++ (via Godot GDExtension) with Wasm as candidates for the long-term engine.",
      nextSteps:
        "FlipCel runs in the browser with no install and already works as an illustration tool with a Flash-style vector brush. To be precise about current scope: it is a vector sketchpad and does not have animation or timeline features at this stage. It is an active long-term project, intended as the foundation of a creative coding ecosystem with performance beyond the original Flash engine. Animation and a mobile build are next.",
      audience:
        "Ex-Flash artists who miss drawing this way, and developers who want a hackable geometry foundation to build on.",
    },
    thumbnail: { src: "mov/flipcel.mov", type: "video" },
    media: [{ src: "mov/flipcel.mov", type: "video" }],
    links: [
      {
        href: "https://kartik2d.github.io/FlipCel/",
        label: "Open FlipCel",
        type: "primary",
      },
    ],
    tags: ["Creative Tools"],
    featured: true,
    browserPlayable: true,
  },
  {
    id: "timing-practice",
    title: "Timing Practice",
    description:
      "A school motion piece built around the After Effects graph editor and aggressive easing.",
    details: {
      problem:
        "This was a school assignment and an exercise in animation timing. I like intense easing curves, and this piece exists to demonstrate that sensibility.",
      highlight:
        "Most of the work happened in the graph editor: hand-tuning curves so the motion snaps and settles with weight instead of interpolating linearly.",
      tools: "After Effects, hand-tuned graph editor curves.",
    },
    thumbnail: { src: "mov/Hello.mp4", type: "video" },
    media: [{ src: "https://youtu.be/is6Ochvkjx8", type: "youtube" }],
    links: [
      {
        href: "https://youtu.be/is6Ochvkjx8",
        label: "Watch on YouTube",
        type: "primary",
      },
    ],
    tags: ["Motion Design"],
    featured: true,
  },
  {
    id: "ui-work",
    title: "EG4 Energy App",
    description:
      "Design exploration for the redesign of EG4's home energy dashboard, moving from a deliberately playful first pass to a production-ready identity.",
    details: {
      problem:
        "EG4's existing energy dashboard needed a redesign. The requirements: a more distinct identity, while keeping everything a homeowner needs readable at a glance — solar, battery, grid, load, and savings.",
      highlight:
        "I started with a deliberately playful direction: a cartoony, Duolingo-inspired pass that was too bold to ship but useful for breaking away from the old dashboard's conventions. I then distilled its stronger ideas into a serious design and refined it through review rounds with company leadership. The screenshots trace that progression.",
      tools: "Figma, high-fidelity mockups, iterative design reviews.",
      nextSteps:
        "Prototype the energy-flow animations in code. Live data driving motion is the design-engineering overlap I work in.",
      audience: "EG4 customers who monitor their home energy systems daily.",
    },
    thumbnail: { src: "mov/ui/1.png", type: "image" },
    media: [
      {
        src: "mov/ui/3.png",
        type: "image",
        alt: "Starting point: the deliberately playful, Duolingo-inspired design next to its serious dark translation.",
      },
      {
        src: "mov/ui/1.png",
        type: "image",
        alt: "The serious direction: glowing dial, node-graph, and isometric house treatments of the energy dashboard.",
      },
      {
        src: "mov/ui/2.png",
        type: "image",
        alt: "Further explorations: outline illustration, schematic house, and isometric EV charging treatments.",
      },
    ],
    tags: ["UI UX"],
  },
  {
    id: "files-vs-apps",
    title: "Files vs Apps",
    description:
      "An essay on how AI is unbundling the app-centric model of computing, and what that means for who owns your work.",
    articleHtml: `
      <h2>A brief history</h2>
      <p>Through the 80s and 90s, computing was file-centric. Documents, spreadsheets, and code existed as independent files, and any compatible program could open them. A text file was a text file.</p>
      <p>In the 2000s, applications became the primary gateway to data. By the 2010s, apps mediated most of our relationship with files, often hiding them entirely behind proprietary formats and cloud services.</p>
      <p>Each step traded user autonomy for convenience.</p>
      <h2>The cost of app-centrism</h2>
      <p>Vendor lock-in ties creative work to specific companies and their business models. Format obsolescence threatens its longevity: if Notion disappears, its databases go with it. Data portability is an afterthought on most platforms, and subscription pricing means paying monthly for access to your own work. The incentives of the companies building these apps have drifted away from the needs of the people creating inside them.</p>
      <figure class="article-figure">
        <img src="mov/filesvapps-cover.png" alt="Diagram comparing file-centric tools sharing an open format versus siloed apps with proprietary formats." />
      </figure>
      <h2>Enter AI</h2>
      <p>What users actually want is to transform their data. The interface is only the means. Traditional applications bundle interface, features, and file format into one inseparable unit. AI unbundles them, letting each evolve independently.</p>
      <blockquote><p>The request changes from "I need Photoshop" to "I need to edit this image."</p></blockquote>
      <p>Once that happens, the interface stops being something you invest years learning. It becomes disposable. The data underneath is what persists.</p>
      <h2>What this looks like in practice</h2>
      <p>Instead of buying and learning Adobe Illustrator: <em>"Code me an SVG editor that fits my exact needs."</em></p>
      <p>Instead of subscribing to a data visualization platform: <em>"Build a visualization directly from this dataset."</em></p>
      <p>Instead of adapting a workflow to Notion: <em>"Create a markdown editor structured around how I actually work."</em></p>
      <p>In each case, a purpose-built tool replaces a general-purpose application. The app becomes an output you generate on demand, fitted to the job at hand.</p>
      <p>This is, in effect, a return to the file-centric model. The tool becomes disposable. The work stays yours.</p>
      <h2>What app designers can learn from this</h2>
      <p>Users abandon apps that make them serve the tool. Designers who do well in the coming years will treat the user's outcome as the product, and that reframe has concrete consequences: data portability becomes a day-one requirement, and the friction between the user and their goal matters more than the length of the feature list.</p>
      <p>There is also a lesson about format. When an AI can generate a bespoke replacement in minutes, a proprietary format stops working as a retention strategy and becomes a reason to leave. Export-first design is good product strategy, and good ethics.</p>
      <p>What remains defensible for a general-purpose app is community and trust, which a generated tool cannot replicate. Build around those.</p>
    `,
    thumbnail: {
      src: "mov/filesvapps-cover.png",
      type: "image",
      alt: "Diagram comparing file-centric tools sharing an open format versus siloed apps with proprietary formats.",
    },
    media: [],
    tags: ["Blog Posts"],
  },
  {
    id: "amuselabs-promo",
    title: "AmuseLabs Promo",
    description:
      "Client work for AmuseLabs: a 60-second social video explaining their crossword platform, from user research through final animation.",
    details: {
      problem:
        "AmuseLabs needed a short social video that explained their crossword platform quickly. Their existing messaging also had gaps that had not been diagnosed.",
      highlight:
        "I extended the brief with user research into how people actually understood the product. The design corrections that came out of that research shipped on their live website, in addition to the video itself.",
      tools: "After Effects, user research and interviews, brand design.",
      nextSteps:
        "Tighten the research-to-motion pipeline: prototype messaging variants as animatics and test them before committing to a final render.",
      audience:
        "Clients who want the brief questioned, and teams looking for motion work grounded in user research.",
    },
    thumbnail: { src: "mov/amuselabs_optimized.mp4", type: "video" },
    media: [
      { src: "https://www.youtube.com/watch?v=hyWDx1RaeU0", type: "youtube" },
    ],
    links: [
      {
        href: "https://youtu.be/hyWDx1RaeU0",
        label: "Watch on YouTube",
        type: "primary",
      },
    ],
    tags: ["Motion Design"],
    featured: true,
  },
  {
    id: "space-shooter",
    title: "Space Shooter",
    description:
      "An arcade prototype in LÖVE 2D built around screen shake, chromatic aberration, and layered hit feedback.",
    details: {
      problem:
        "This project was unplanned. Each effect began as a test of a screen function in LÖVE 2D, and one experiment led to the next. The square particles were originally intended for something else, but they worked well against the chromatic aberration, so I built a game around that aesthetic.",
      highlight:
        "I implemented the effects stack from scratch in Lua, tuning screen shake, chromatic aberration, and hit flashes until shooting felt physical. As the game logic grew, OOP inheritance became a bottleneck, which pushed me toward entity-component architecture and data-oriented design.",
      tools: "LÖVE 2D, Lua, custom shader effects, ECS-style architecture.",
      nextSteps:
        "Extract the effects stack into a reusable game-feel library, built on a proper ECS, for future LÖVE and engine projects.",
      audience:
        "Players who like arcade action, and developers studying how layered feedback creates a sense of impact.",
    },
    thumbnail: { src: "mov/mov3.mp4", type: "video" },
    media: [{ src: "mov/mov3.mp4", type: "video" }],
    tags: ["Games"],
  },
  {
    id: "canvas-code",
    title: "CanvasCode",
    description:
      "A cross between an IDE and a vector editor. You write code to create tools, then draw with them in the same application.",
    details: {
      problem:
        "Flash bridged drawing and programming: draw an asset, convert it to a symbol, and immediately attach logic to it. The current pipeline splits that work between a designer's application and an engineer's application, with friction between the two.",
      highlight:
        "The editor itself is programmable. You write code inside the app to create new brushes, generators, and canvas behaviors, then draw with them immediately. Using a tool and building one become the same activity.",
      tools:
        "TypeScript, HTML Canvas, in-app code editor and runtime. Part of a broader exploration of pairing performant graphics with reactive UI (Lit, Svelte, Paper.js, Rive).",
      nextSteps:
        "CanvasCode is exploratory. Its extensibility ideas and Flash-style drawing goals are feeding into FlipCel. The open question is whether it stays a standalone playground or merges into that ecosystem.",
      audience:
        "Creative coders and ex-Flash artists who want drawing and scripting in one place.",
    },
    thumbnail: { src: "mov/CanvasCode.mp4", type: "video" },
    media: [{ src: "mov/CanvasCode.mp4", type: "video" }],
    links: [
      {
        href: "https://kartik2d.github.io/CanvasCode/",
        label: "Try Live Demo",
        type: "primary",
      },
    ],
    tags: ["Creative Tools"],
    featured: true,
    browserPlayable: true,
  },
  {
    id: "backpack",
    title: "Backpack",
    description:
      "A cross-platform game launcher that scans your machine for installed games across every store and presents them in a single grid.",
    details: {
      problem:
        "Installed games end up scattered across Steam, Epic, Xbox, Ubisoft, itch, and standalone downloads, with no single view of the full library. Existing launchers are also designed for one class of screen, so a layout built for a small handheld fails on a living-room TV and vice versa.",
      highlight:
        "Backpack scans the machine for installed games across stores, then pulls cover art, key art, and descriptions from IGDB so the grid populates automatically. The main design decision: I laid the interface out first for a Game Boy-sized screen, then made everything scale proportionally from there. One layout holds up from small handhelds to a TV.",
      tools: "Tauri, Rust, Lit, TypeScript, IGDB API.",
      nextSteps:
        "The project is ongoing but functional. Building it from source produces a working launcher that finds and presents your games. Next steps are broader store coverage and better metadata matching.",
      audience:
        "Anyone with games spread across multiple stores and devices, from handheld PCs to the living-room TV.",
    },
    thumbnail: { src: "mov/backpack.png", type: "image" },
    media: [{ src: "mov/backpack.png", type: "image" }],
    links: [
      {
        href: "https://github.com/Kartik2D/Backpack",
        label: "View on GitHub",
        type: "primary",
      },
    ],
    tags: ["UI UX"],
    featured: true,
  },
  {
    id: "landscape",
    title: "Gilroy",
    description:
      "An environment illustration of a California landscape, focused on atmosphere and scale.",
    details: {
      problem:
        "The goal was to capture a specific California landscape with as few moves as possible, letting atmosphere carry the image.",
      highlight:
        "Depth is built from color temperature and value grouping rather than detail. The scale reads from the atmospheric shifts.",
      tools: "Procreate.",
    },
    thumbnail: { src: "mov/landscape.png", type: "image" },
    media: [{ src: "mov/landscape.png", type: "image" }],
    tags: ["Digital Art"],
  },
  {
    id: "la-hacks-branding",
    title: "LA Hacks Branding",
    description:
      "Lead designer for LA Hacks 2019: brand identity, hype video, icons, and social graphics for one of the largest collegiate hackathons.",
    details: {
      problem:
        "LA Hacks 2019 needed a complete brand identity covering video, social, print, and venue signage, built from scratch by a design team of three.",
      highlight:
        "I led the identity from concept to delivery: designed the system, then animated the hype video in After Effects myself so the motion language and the static brand stayed consistent.",
      tools: "After Effects, Adobe Creative Cloud, brand system design.",
      nextSteps:
        "Apply the same motion-first approach to product and tool branding.",
      audience:
        "Hackathon attendees and sponsors in 2019. As portfolio evidence: end-to-end ownership of a visual identity under deadline.",
    },
    thumbnail: { src: "mov/lahacksHYPE_optimized.mp4", type: "video" },
    media: [
      { src: "https://www.youtube.com/watch?v=UZo1g0dDjRw", type: "youtube" },
      { src: "mov/lahacks1.png", type: "image" },
      { src: "mov/lahacks2.png", type: "image" },
      { src: "mov/lahacks3.png", type: "image" },
    ],
    links: [
      {
        href: "https://youtu.be/UZo1g0dDjRw",
        label: "Watch on YouTube",
        type: "primary",
      },
    ],
    tags: ["Motion Design"],
  },
  {
    id: "la-hacks-minigame",
    title: "LA Hacks Minigame",
    description:
      "A game jam entry built in one hour: an endless runner where every element gives immediate feedback.",
    details: {
      problem:
        "The constraint was a single hour of development time. Jams that short test whether your instincts for feel and feedback hold up under pressure.",
      highlight:
        "Nearly the entire hour went into responsiveness: every collision, pickup, and movement produces immediate visual feedback. Under that time limit, feedback quality matters more than content volume.",
      tools: "GameMaker, exported to HTML5 so it runs in the browser.",
      nextSteps:
        "Repeat the constraint as a recurring exercise: one hour, one mechanic, maximum feel.",
      audience:
        "LA Hacks attendees who needed a break between hacking sessions. Still playable in the browser.",
    },
    thumbnail: { src: "mov/lahacks_optimized.mp4", type: "video" },
    media: [{ src: "mov/lahacks_optimized.mp4", type: "video" }],
    links: [
      {
        href: "LaHacksMinigame/index.html",
        label: "Play Online",
        type: "primary",
      },
    ],
    tags: ["Games"],
    browserPlayable: true,
  },
  {
    id: "zen-painter",
    title: "Zen Painter",
    description:
      "An experimental brush engine where the mark responds to how the stroke is made.",
    details: {
      problem:
        "Most drawing applications treat brushes as static stamps along a path. I wanted a brush that responds to the speed and rhythm of the gesture without adding input latency.",
      highlight:
        "Stroke dynamics drive the mark-making: the same gesture painted fast or slow produces a different mark. Handling high-frequency pointer input so strokes feel immediate was as much of the work as the visuals.",
      tools: "TypeScript, HTML Canvas, custom stroke-dynamics engine.",
      nextSteps:
        "Currently exploratory. I am investigating GPU-based path rendering and hardware-accelerated pipelines, including Godot GDExtension with Rust, to run these brushes at full canvas resolution in real time.",
      audience:
        "Artists who want more expressive brushes, and tool designers interested in gesture-driven input.",
    },
    thumbnail: { src: "mov/brush.mp4", type: "video" },
    media: [{ src: "mov/brush1.jpeg", type: "image" }],
    links: [
      {
        href: "https://kartik2d.itch.io/zen-painter",
        label: "Play on Itch.io",
        type: "primary",
      },
    ],
    tags: ["Creative Tools"],
    featured: true,
  },
  {
    id: "flower-p5js",
    title: "Flower (p5.js)",
    description:
      "An interactive generative sketch in p5.js, from my early WebGL experiments.",
    details: {
      problem:
        "An early exercise in interactive creative coding. Small toys like this are a cheap way to test interaction ideas.",
      highlight:
        "The interaction loop is tight: the flower responds continuously to input rather than playing canned animations, which is what makes it feel alive.",
      tools: "p5.js, JavaScript.",
    },
    thumbnail: { src: "mov/flower_web_optimized.mp4", type: "video" },
    media: [{ src: "mov/flower_web_optimized.mp4", type: "video" }],
    links: [
      {
        href: "flower/index.html",
        label: "Try Interactive Demo",
        type: "primary",
      },
    ],
    tags: ["Games"],
    browserPlayable: true,
  },
  {
    id: "basketball-prototype",
    title: "Basketball Prototype",
    description:
      "A physics toy in LÖVE 2D with simulated nets and ropes that react to every shot.",
    details: {
      problem:
        "Soft-body details like nets and ropes are where physics toys usually fail, reading as either rigid or unstable. The goal was to make the net the most satisfying part of the shot.",
      highlight:
        "I built the rope and net simulation with constraint-based physics in Lua, tuned so the net's reaction to a made shot is the reward. The physics itself is the feedback.",
      tools: "LÖVE 2D, Lua, constraint-based soft-body simulation.",
      nextSteps:
        "Fold this simulation work into my engine experiments, treating soft-body dynamics as a first-class primitive in custom tools.",
      audience:
        "Players who replay a shot to watch the net move, and developers interested in readable, hand-rolled physics.",
    },
    thumbnail: { src: "mov/mov.mp4", type: "video" },
    media: [
      { src: "mov/basketball3.mp4", type: "video" },
      { src: "mov/mov2.mp4", type: "video" },
      { src: "mov/mov.mp4", type: "video" },
    ],
    tags: ["Games"],
  },
  {
    id: "fishing",
    title: "Fishing",
    description:
      "A grayscale value study of a fishing scene: a boy on the bank and the catch on the line.",
    details: {
      highlight:
        "The scene is built from value masses first, so the bent rod, the rippling water, and the catch on the line all read in pure grayscale.",
      tools: "Procreate.",
    },
    thumbnail: { src: "mov/painting2.jpeg", type: "image" },
    media: [{ src: "mov/painting2.jpeg", type: "image" }],
    tags: ["Digital Art"],
  },
];

/** Unique tags across all projects, sorted for filter UI */
export const PROJECT_TAGS: string[] = [
  ...new Set(PROJECTS.flatMap((p) => p.tags ?? [])),
].sort((a, b) => a.localeCompare(b));
