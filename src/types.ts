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

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: MediaItem;
  media: MediaItem[];
  links?: LinkItem[];
  tags?: string[];
  featured?: boolean;
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
