export interface MediaItem {
  src: string;
  type: "video" | "image" | "youtube";
  alt?: string;
}

export interface LinkItem {
  href: string;
  label: string;
  type?: "primary" | "secondary";
}

export interface ProjectDetails {
  /** Why it exists / what the problem was */
  problem?: string;
  /** The interesting thing I did */
  highlight?: string;
  /** Tools used */
  tools?: string;
  /** What I would do next */
  nextSteps?: string;
  /** Who would use it */
  audience?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details?: ProjectDetails;
  /** Full article body (simple HTML) rendered on the project page */
  articleHtml?: string;
  thumbnail: MediaItem;
  media: MediaItem[];
  links?: LinkItem[];
  tags?: string[];
  featured?: boolean;
  /** Show a "Try in browser" badge on the grid thumbnail */
  browserPlayable?: boolean;
}

export interface AppState {
  selectedProjectId?: string;
  isLoading: boolean;
  isMobile: boolean;
}

export interface MediaGridConfig {
  columns: {
    mobile: number;
    tablet: number;
    desktop: number;
    wide: number;
  };
  gap: string;
}
