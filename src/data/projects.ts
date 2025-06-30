import type { Project } from "../types.js";

export const PROJECTS: Project[] = [
  {
    id: "rhythm-game",
    title: "Rhythm Game",
    description:
      "Rhythm game built in Godot with precise audio timing. Features bouncy visual feedback that responds dynamically to musical beats.",
    thumbnail: { src: "mov/dog.mp4", type: "video" },
    media: [{ src: "mov/dog.mp4", type: "video" }],
    tags: ["Games", "Audio Programming"],
    featured: true,
  },
  {
    id: "timing-practice",
    title: "Timing Practice",
    description:
      "Motion study exploring satisfying animation. Focuses on creating weighted, organic movement that feels natural rather than robotic.",
    thumbnail: { src: "mov/Hello.mp4", type: "video" },
    media: [{ src: "https://youtu.be/is6Ochvkjx8", type: "youtube" }],
    links: [
      {
        href: "https://youtu.be/is6Ochvkjx8",
        label: "Watch on YouTube",
        type: "primary",
      },
    ],
    tags: ["Motion Design", "Animation"],
    featured: true,
  },
  {
    id: "amuselabs-promo",
    title: "AmuseLabs Promo",
    description:
      "Client work: 60-second social spot for crossword app. Handled everything from initial concept to final animation.",
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
    tags: ["Commercial", "Motion Design"],
    featured: true,
  },
  {
    id: "la-hacks-branding",
    title: "LA Hacks Branding",
    description:
      "Lead designer: created complete brand identity from scratch. Designed hype video, icons, and social graphics for major hackathon.",
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
    tags: ["Branding", "Motion Design"],
  },
  {
    id: "canvas-code",
    title: "CanvasCode",
    description:
      "Web-based vector graphics editor built in TypeScript. Created as a customizable alternative to Illustrator with built-in scripting tools.",
    thumbnail: { src: "mov/CanvasCode.mp4", type: "video" },
    media: [{ src: "mov/CanvasCode.mp4", type: "video" }],
    links: [
      {
        href: "https://kartik2d.github.io/CanvasCode/",
        label: "Try Live Demo",
        type: "primary",
      },
    ],
    tags: ["Web Development", "Creative Tools"],
    featured: true,
  },
  {
    id: "la-hacks-minigame",
    title: "LA Hacks Minigame",
    description:
      "One-hour game jam exploring satisfying game interactions. Visual elements react and communicate with the player through responsive feedback.",
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
  },
  {
    id: "zen-painter",
    title: "Zen Painter",
    description:
      "Experimental brush tool that creates unique marks based on how you paint. Explores new approaches to digital art beyond traditional drawing apps.",
    thumbnail: { src: "mov/brush.mp4", type: "video" },
    media: [{ src: "mov/brush1.jpeg", type: "image" }],
    links: [
      {
        href: "https://kartik2d.itch.io/zen-painter",
        label: "Play on Itch.io",
        type: "primary",
      },
    ],
    tags: ["Creative Tools", "Generative Art"],
    featured: true,
  },
  {
    id: "flower-p5js",
    title: "Flower (p5.js)",
    description: "Interactive doodle inspired by early WebGL experiments.",
    thumbnail: { src: "mov/flower_web_optimized.mp4", type: "video" },
    media: [{ src: "mov/flower_web_optimized.mp4", type: "video" }],
    links: [
      {
        href: "flower/index.html",
        label: "Try Interactive Demo",
        type: "primary",
      },
    ],
    tags: ["Creative Coding", "Interactive"],
  },
  {
    id: "space-shooter",
    title: "Space Shooter",
    description:
      "Arcade prototype built in Lua with heavy visual effects. Features screen shake and chromatic aberration that create satisfying tactile feedback.",
    thumbnail: { src: "mov/mov3.mp4", type: "video" },
    media: [{ src: "mov/mov3.mp4", type: "video" }],
    tags: ["Games", "Visual Effects"],
  },
  {
    id: "basketball-prototype",
    title: "Basketball Prototype",
    description:
      "Physics toy built in Lua with responsive nets and ropes. Focuses on creating satisfying interactions through dynamic visual feedback.",
    thumbnail: { src: "mov/mov.mp4", type: "video" },
    media: [
      { src: "mov/basketball3.mp4", type: "video" },
      { src: "mov/mov2.mp4", type: "video" },
      { src: "mov/mov.mp4", type: "video" },
    ],
    tags: ["Games", "Physics Simulation"],
  },
  {
    id: "digital-painting-1",
    title: "Digital Painting I",
    description: "Personal digital illustration.",
    thumbnail: { src: "mov/painting1.jpeg", type: "image" },
    media: [{ src: "mov/painting1.jpeg", type: "image" }],
    tags: ["Digital Art"],
  },
  {
    id: "digital-painting-2",
    title: "Digital Painting II",
    description: "Personal digital illustration.",
    thumbnail: { src: "mov/painting2.jpeg", type: "image" },
    media: [{ src: "mov/painting2.jpeg", type: "image" }],
    tags: ["Digital Art"],
  },
  {
    id: "digital-painting-3",
    title: "Digital Painting III",
    description: "Personal digital illustration.",
    thumbnail: { src: "mov/painting3.jpeg", type: "image" },
    media: [{ src: "mov/painting3.jpeg", type: "image" }],
    tags: ["Digital Art"],
  },
];
