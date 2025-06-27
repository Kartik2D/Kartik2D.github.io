export interface MediaItem {
  src: string;
  type: "video" | "image";
  alt?: string;
}

export interface LinkItem {
  href: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  media: MediaItem[];
  links?: LinkItem[];
}
