import type { Project } from "../types.js";

export const PROJECTS: Project[] = [
  {
    id: "rhythm-game",
    title: "Rhythm Game",
    description:
      "My capstone: a one-button rhythm game built in Godot for a gallery, where a parent dog barks a rhythm and you bark it back.",
    details: {
      problem:
        "My capstone was shown in a gallery, and gallery visitors give a piece about five seconds before moving on, while games normally take minutes to teach. The design had to survive that: one big red button you instinctively hit, no instructions, and music built from loops since I'm not a musician.",
      highlight:
        "The game teaches itself through a call-and-response everyone already knows: a parent dog barks a bar of rhythm, and you, the baby dog, bark it back on the button. The whole experience runs about two minutes, and it held up in the gallery. The hardest engineering problem was audio timing. Godot's DSP clock support wasn't good enough for beat-accurate judgment, so I built my own workaround on top of it.",
      tools:
        "Godot, GDScript, custom audio timing workaround, loop-based music.",
      nextSteps:
        "The game is extensible through code and music loops, so new bars are cheap to add. The audio timing workaround keeps it off the web for now; a proper web build would mean solving the DSP clock problem again on that platform.",
      audience:
        "Gallery visitors with five seconds of patience, and anyone who's ever barked back at a dog.",
    },
    thumbnail: { src: "mov/dog.mp4", type: "video" },
    media: [
      { src: "mov/dog.mp4", type: "video" },
      { src: "mov/play.mp4", type: "video" },
    ],
    tags: ["Games"],
    featured: true,
  },
  {
    id: "timing-practice",
    title: "Timing Practice",
    description:
      "A school motion piece made to show off my animation sensibilities.",
    details: {
      problem:
        "A school project, and honestly an excuse to play. I'm a big fan of the animation graph editor and I love intense easing, so this video is really just a showcase of those sensibilities.",
      highlight:
        "Lived in the graph editor, hand-tuning curves and pushing the easing hard so the motion snaps and settles with real weight instead of sliding linearly.",
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
    id: "amuselabs-promo",
    title: "AmuseLabs Promo",
    description:
      "Client work: 60-second social spot for a crossword platform, from user research through final animation.",
    details: {
      problem:
        "AmuseLabs needed a social spot that explained their crossword platform quickly, and their existing messaging had weak spots nobody had diagnosed.",
      highlight:
        "Went beyond the brief: ran user research on how people actually understood the product, and the design fixes that came out of it shipped on their live website.",
      tools: "After Effects, user research and interviews, brand design.",
      nextSteps:
        "Tighten the research-to-motion pipeline: prototype messaging variants as animatics and test them before committing to a final render.",
      audience:
        "Clients who need a designer who questions the brief, and teams looking for motion work grounded in real user understanding.",
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
    id: "inkwell",
    title: "InkWell",
    description:
      "Browser vector sketchpad with a custom geometry kernel, built as the foundation of a larger creative coding ecosystem.",
    details: {
      problem:
        "Flash let you draw vectors like they were clay: overlapping shapes of the same color fused into one, shapes of different colors cut into each other where they crossed, and you could peel a line away from its fill. When Adobe killed Flash in 2020, that way of drawing died with it, and every modern vector tool went back to treating shapes as separate, rigid objects. Bringing the clay-like feel back is surprisingly hard: when shapes merge and split, tiny rounding errors in the math leave behind gaps and slivers.",
      highlight:
        "Built the geometry engine from scratch. Instead of storing points as decimals that drift, I snap everything to a whole-number grid so shapes always line up exactly. I track how every edge connects to its neighbors in a structure that makes merging, splitting, and undo reliable. And I wrote the math that figures out exactly where two curves cross, which is what lets shapes cleanly cut into each other.",
      tools:
        "TypeScript and HTML Canvas, with a custom geometry engine. Evaluated Rust, Zig, Swift, and C++ (Godot GDExtension) plus Wasm for the long-term engine.",
      nextSteps:
        "You can try it in the browser right now, no install needed, and it already works well as an illustration tool with a Flash-style vector brush. It's an active long-term project, meant as the foundation of a creative coding ecosystem with performance the original Flash engine couldn't reach. Next up: full merge-and-cut operations across overlapping shapes, and exposing the engine so other tools can script it.",
      audience:
        "Ex-Flash artists who miss drawing this way, and developers who want a hackable geometry foundation to build on.",
    },
    thumbnail: { src: "mov/inkwell.mov", type: "video" },
    media: [{ src: "mov/inkwell.mov", type: "video" }],
    links: [
      {
        href: "https://kartik2d.github.io/inkwell/",
        label: "Open Inkwell",
        type: "primary",
      },
    ],
    tags: ["Creative Tools"],
    featured: true,
    browserPlayable: true,
  },
  {
    id: "files-vs-apps",
    title: "Files vs Apps",
    description:
      "Essay on how AI is quietly dismantling the app-centric era of computing, and why that matters for who owns your work.",
    articleHtml: `
      <h2>A brief history</h2>
      <p>Through the 80s and 90s, computing was file-centric. Documents, spreadsheets, and code lived as independent files you could open with whatever tool you liked. A text file was a text file. You could open it in anything.</p>
      <p>In the 2000s, application ecosystems took over and software became the gateway to our data. By the 2010s, we were in the walled garden era: apps mediated our relationship with files and often obscured them entirely behind proprietary formats and cloud services.</p>
      <p>Each step traded away user autonomy for convenience.</p>
      <h2>The cost of app-centrism</h2>
      <p>Vendor lock-in holds creative work hostage to specific companies and their business models. Format obsolescence threatens its longevity: what happens to your Notion database if the company disappears? Data portability is an afterthought on most platforms, and subscription fatigue grows as we pay monthly fees for access to our own work. The incentives of the companies that build apps have drifted away from the needs of the people who create inside them.</p>
      <figure class="article-figure">
        <img src="mov/filesvapps-cover.png" alt="Diagram comparing file-centric tools sharing an open format versus siloed apps with proprietary formats." />
      </figure>
      <h2>Enter AI</h2>
      <p>What users actually want is to transform their data. The interface is just the means. Traditional applications bundle interfaces, features, and file formats into inseparable units; AI unbundles them, allowing each to evolve independently.</p>
      <blockquote><p>The request changes from "I need Photoshop" to "I need to edit this image."</p></blockquote>
      <p>When that happens, the interface stops being something you invest years learning. It becomes disposable. The data underneath is what lasts.</p>
      <h2>What this looks like in practice</h2>
      <p>Instead of buying Adobe Illustrator and learning it, a user might simply ask an AI to: <em>"Code me a custom SVG editor that precisely fits my needs."</em></p>
      <p>Instead of subscribing to a data visualization platform: <em>"Build me a data visualization directly from this dataset."</em></p>
      <p>Instead of bending your workflow to fit Notion: <em>"Create a custom markdown editor aligned with my exact workflow."</em></p>
      <p>In each case, a purpose-built tool replaces a general-purpose application. The app becomes an output you generate on demand, fitted to the job at hand.</p>
      <p>We may be circling back, in a strange way, to something like the file-centric model. The tool becomes invisible. The work remains yours.</p>
      <h2>What app designers can learn from this</h2>
      <p>The rise of AI-generated, purpose-built tools is a signal. Users abandon apps that make them serve the tool.</p>
      <p>The designers who do well in the coming years will be the ones who treat the user's outcome as the product. That reframe has real consequences. Data portability becomes a day-one priority and a statement of trust. Feature checklists matter less than the amount of friction sitting between the user and what they came to do.</p>
      <blockquote><p>The best apps of the next decade will be transparent pipes: opinionated about workflow, humble about ownership.</p></blockquote>
      <p>There's also a lesson about format. When an AI can generate a bespoke tool in minutes, lock-in stops working as a retention strategy and just gives people a reason to leave. The proprietary format has turned from moat into liability. Export-first thinking is good product strategy, and good ethics too.</p>
      <p>Finally, AI should push designers to ask what makes a general-purpose app worth using at all. The answer, increasingly, is community and trust, things a generated tool can't replicate. Build around those, and no prompt can replace you.</p>
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
    id: "canvas-code",
    title: "CanvasCode",
    description:
      "A cross between an IDE and a vector editor, where you code your own tools and extend the canvas while you draw.",
    details: {
      problem:
        "Flash was a bridge between drawing and programming: draw an asset, convert it to a symbol, immediately write logic for it. Today's pipeline splits that work into a designer's app and an engineer's app, with friction in between.",
      highlight:
        "Made the editor itself programmable: you write code inside the app to create new brushes, generators, and canvas behaviors, then immediately draw with them. Using a tool and building one become the same activity.",
      tools:
        "TypeScript, HTML Canvas, in-app code editor and runtime. Part of a broader exploration of bridging performant graphics with reactive UI (Lit, Svelte, Paper.js, Rive).",
      nextSteps:
        "Still exploratory. The extensibility ideas and the Flash-style drawing goals are feeding into InkWell; the open question is whether CanvasCode stays a playground or merges into that ecosystem.",
      audience:
        "Creative coders and ex-Flash artists who miss drawing and scripting in one place: multidisciplinary creators who haven't had a native home since 2020.",
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
      "A desktop game launcher that finds every game on your machine and presents them in one grid, with a layout that scales from handhelds to TVs.",
    details: {
      problem:
        "Games end up scattered across Steam, Epic, Xbox, Ubisoft, and itch, plus everything you downloaded straight off the internet. There's no single place to see your whole library at a glance. Other launchers also lock you into one kind of screen, so the one built for a tiny handheld won't work on a living-room TV, and vice versa.",
      highlight:
        "Backpack scans your machine for installed games across every store, then goes online to pull cover art, key art, and descriptions so the grid looks good automatically. The interesting design choice: I laid it out first for a Game Boy sized screen, then made everything scale proportionally from there. That makes one rock-solid layout that holds up on anything from a Game Boy style handheld to a big TV.",
      tools: "Tauri, Rust, Lit, TypeScript, IGDB API.",
      nextSteps:
        "An ongoing project, but already functional. Build it yourself and it will find your games and present them nicely. Next up is broadening store coverage and refining the metadata matching.",
      audience:
        "Anyone whose games are spread across a dozen stores and devices, from handheld PCs to the living-room TV.",
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
    tags: ["Creative Tools"],
    featured: true,
  },
  {
    id: "ui-work",
    title: "EG4 Energy App",
    description:
      "Design exploration for EG4's home energy dashboard redesign, moving from a deliberately playful starting point to a serious product identity.",
    details: {
      problem:
        "EG4's existing energy dashboard needed a redesign. They wanted a more unique identity while still showing everything a homeowner needs at a glance: solar, battery, grid, load, and savings.",
      highlight:
        "I like to start playful on purpose. The first pass was a cartoony, Duolingo-inspired take, too bold to ship but perfect for breaking out of the old dashboard's gravity. From there I distilled its best ideas into a serious design and kept refining it through rounds of feedback from the company's leadership. The screenshots trace that evolution.",
      tools: "Figma, high-fidelity mockups, iterative design reviews.",
      nextSteps:
        "Prototype the energy-flow animations in code, where live data driving the motion is exactly the design-engineering overlap I work in.",
      audience:
        "EG4 customers monitoring their home energy systems daily, from solar enthusiasts to homeowners who just want to know everything is okay.",
    },
    thumbnail: { src: "mov/ui/1.png", type: "image" },
    media: [
      {
        src: "mov/ui/3.png",
        type: "image",
        alt: "Starting point: the deliberately playful, Duolingo-inspired design side by side with its serious dark translation.",
      },
      {
        src: "mov/ui/1.png",
        type: "image",
        alt: "Pushing the serious direction: glowing dial, node-graph, and isometric house treatments of the energy dashboard.",
      },
      {
        src: "mov/ui/2.png",
        type: "image",
        alt: "Further explorations: outline illustration, schematic house, and isometric EV charging treatments.",
      },
    ],
    tags: ["Digital Art"],
  },
  {
    id: "landscape",
    title: "Gilroy",
    description:
      "Environment illustration exploring atmosphere, color, and scale.",
    details: {
      problem:
        "Atmosphere carries an environment painting. I set out to capture a specific California landscape feeling with the fewest possible moves.",
      highlight:
        "Built depth with color temperature and value grouping, keeping detail sparse. The eye reads the scale from the atmospheric shifts.",
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
      "Lead designer for LA Hacks 2019: full brand identity, hype video, icons, and social graphics for one of the largest collegiate hackathons.",
    details: {
      problem:
        "LA Hacks 2019 needed a complete brand identity that could hype thousands of students across video, social, print, and venue signage, built from scratch by a design team of three.",
      highlight:
        "Led the identity from concept to delivery: designed the system, then personally animated the hype video in After Effects so the motion language and the static brand were one continuous voice.",
      tools: "After Effects, Adobe Creative Cloud, brand system design.",
      nextSteps:
        "Carry the motion-first approach to brand systems into product and tool branding.",
      audience:
        "Hackathon attendees and sponsors in 2019; today, anyone assessing whether I can own a visual identity end-to-end under deadline.",
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
      "One-hour game jam: an endless runner where every element reacts to the player with responsive feedback.",
    details: {
      problem:
        "Could I make something genuinely fun in a single hour? Game jams expose whether your instincts for feel and feedback are fast enough to work under brutal constraints.",
      highlight:
        "Spent the hour almost entirely on responsiveness: every collision, pickup, and movement gives immediate visual feedback. With one hour, juice beats content volume.",
      tools: "GameMaker, exported to HTML5 so it runs in the browser.",
      nextSteps:
        "Use the same constraint as a recurring exercise: one hour, one mechanic, maximum feel.",
      audience:
        "LA Hacks attendees who needed a break between hacking sessions, and it's still playable in your browser right now.",
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
      "Experimental brush engine where the mark responds to how you paint.",
    details: {
      problem:
        "Most drawing apps treat brushes as static stamps along a path. I wanted a brush that feels alive, one that responds to the speed and rhythm of your gesture without adding input latency.",
      highlight:
        "Built a brush engine where stroke dynamics drive the mark-making: the same gesture painted fast or slow produces a different mark. Handling high-frequency pointer input so strokes feel immediate was as much of the work as the visuals.",
      tools: "TypeScript, HTML Canvas, custom stroke-dynamics engine.",
      nextSteps:
        "Exploratory for now. I'm investigating GPU-based path rendering and hardware-accelerated pipelines (including Godot GDExtension with Rust) to run these brushes at full canvas resolution in real time.",
      audience:
        "Artists bored of static brushes, and tool designers interested in expressive, gesture-driven input.",
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
      "Interactive generative doodle inspired by early WebGL experiments.",
    details: {
      problem:
        "An early exercise in making the browser feel alive: could a few hundred lines of creative code produce something people actually want to poke at? Toys like this are how I test interaction ideas cheaply.",
      highlight:
        "Kept the interaction loop tight: the flower responds continuously to input instead of playing canned animations, which is what makes a toy feel alive.",
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
    id: "space-shooter",
    title: "Space Shooter",
    description:
      "Arcade prototype in LÖVE 2D drenched in screen shake, chromatic aberration, and tactile effects.",
    details: {
      problem:
        "This one had no plan. Each effect started as me testing a screen function in LÖVE 2D, and one experiment kept leading to the next. The square particles were meant to be something else entirely, but I liked them so much against the chromatic aberration that I built a game around the aesthetic.",
      highlight:
        "Implemented the effects stack from scratch in Lua, tuning screen shake, chromatic aberration, and hit flashes until shooting felt physical. As the logic grew, OOP inheritance became the bottleneck, which pushed me toward entity-component architecture and data-oriented design.",
      tools: "LÖVE 2D, Lua, custom shader effects, ECS-style architecture.",
      nextSteps:
        "Extract the effects stack into a reusable game-feel library, built on a proper ECS, for future LÖVE and engine projects.",
      audience:
        "Players who like crunchy arcade action, and developers studying how layered feedback creates the feeling of impact.",
    },
    thumbnail: { src: "mov/mov3.mp4", type: "video" },
    media: [{ src: "mov/mov3.mp4", type: "video" }],
    tags: ["Games"],
  },
  {
    id: "basketball-prototype",
    title: "Basketball Prototype",
    description:
      "Physics toy in LÖVE 2D with responsive nets and ropes that make every shot feel tangible.",
    details: {
      problem:
        "Soft-body details like nets and ropes are where physics toys usually fall apart, looking either rigid or explosive. The challenge was making the net the most satisfying part of the shot.",
      highlight:
        "Built rope and net simulation with constraint-based physics in Lua, tuned so the net's reaction to a swish became the reward. The physics is the feedback.",
      tools: "LÖVE 2D, Lua, constraint-based soft-body simulation.",
      nextSteps:
        "Fold this simulation work into my engine experiments, treating soft-body dynamics as a first-class primitive in custom tools.",
      audience:
        "Players who replay a shot just to watch the net move, and developers interested in readable, hand-rolled physics.",
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
      "Grayscale value study of a fishing scene: a boy on the bank and the catch on the line.",
    details: {
      highlight:
        "Built the scene from value masses first, so the bent rod, the rippling water, and the catch on the line all read in pure grayscale.",
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
