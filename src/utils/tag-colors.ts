export interface TagColor {
  background: string;
  color: string;
}

export const TAG_COLORS: Record<string, TagColor> = {
  Games: { background: "#dc2626", color: "#ffffff" },
  "Creative Tools": { background: "#4f46e5", color: "#ffffff" },
  "Motion Design": { background: "#d97706", color: "#ffffff" },
  "Digital Art": { background: "#9333ea", color: "#ffffff" },
  "Blog Posts": { background: "#0891b2", color: "#ffffff" },
  "UI UX": { background: "#db2777", color: "#ffffff" },
};

const DEFAULT_TAG_COLOR: TagColor = {
  background: "rgba(0, 0, 0, 0.65)",
  color: "#ffffff",
};

export function getTagColor(tag: string): TagColor {
  return TAG_COLORS[tag] ?? DEFAULT_TAG_COLOR;
}
