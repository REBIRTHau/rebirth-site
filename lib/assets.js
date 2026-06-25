/**
 * MEDIA PATHS — drop files into /public/rebirth/ folders (see README in each folder).
 * Update filenames here when you add real assets.
 */

export const assets = {
  logo: "/rebirth/logo.png",
  favicon: "/rebirth/favicon.png",
  hero: {
    video: "/videos/hero.mp4",
    poster: "/rebirth/photos/hero-poster.jpg",
    /** Legacy fallback if you used root /rebirth/ */
    posterLegacy: "/rebirth/hero-poster.jpg",
    videoLegacy: "/rebirth/hero-bg.mp4",
  },
  /** Portfolio thumbnails — place in public/rebirth/thumbnails/ */
  thumbnail: (filename) => `/rebirth/thumbnails/${filename}`,
  /** Full-res photos — public/rebirth/photos/ */
  photo: (filename) => `/rebirth/photos/${filename}`,
  /** Reels / films — public/rebirth/videos/ */
  video: (filename) => `/rebirth/videos/${filename}`,
  /** Project galleries & teasers — public/rebirth/projects/<project-folder>/ */
  project: (projectFolder, filename) => `/rebirth/projects/${projectFolder}/${filename}`,
  /** Mixed content — public/rebirth/media/ */
  media: (filename) => `/rebirth/media/${filename}`,
};

/** Default portfolio filenames (edit in data/work.js) */
export const portfolioFiles = {
  one: "portfolio-1.jpg",
  two: "portfolio-2.jpg",
  three: "portfolio-3.jpg",
};
