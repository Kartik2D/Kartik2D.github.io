/**
 * Utility functions for media handling
 */

/**
 * Convert YouTube watch URL to privacy-enhanced embed URL
 */
export function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
  )?.[1];

  return videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`
    : url;
}

/**
 * Check if a URL is a YouTube video
 */
export function isYouTubeUrl(url: string): boolean {
  return /(?:youtube\.com\/watch\?v=|youtu\.be\/)/.test(url);
}

/**
 * Get optimized video attributes for different contexts
 */
export function getVideoAttributes(context: "preview" | "detail" = "preview") {
  const baseAttributes = {
    muted: true,
    playsInline: true,
    loop: true,
    autoplay: true,
    preload: "metadata" as const,
  };

  if (context === "preview") {
    return baseAttributes;
  }

  return {
    ...baseAttributes,
    controls: true,
    preload: "auto" as const,
  };
}

/**
 * Generate responsive image srcset for different screen densities
 */
export function generateImageSrcSet(baseSrc: string): string {
  // For future implementation with optimized images
  return baseSrc;
}
