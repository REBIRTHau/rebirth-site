/**
 * PORTFOLIO — add projects here. Every project needs a unique slug and dedicated page at /work/[slug].
 *
 * Thumbnail:      public/rebirth/thumbnails/<filename>
 * Preview video:  public/rebirth/projects/<project-folder>/<filename>.mp4
 */

import { assets, portfolioFiles } from "@/lib/assets";

const fullThrottleSlug = "full-throttle-diamond-excavators";

export const workItems = [
  {
    id: fullThrottleSlug,
    slug: fullThrottleSlug,
    title: "Full Throttle × Diamond Excavators",
    category: "Brand Film",
    cardDescription:
      "A cinematic brand film capturing the people, place, and atmosphere behind the Full Throttle project.",
    image: assets.thumbnail("portfolio-full-throttle.png"),
    description:
      "A cinematic brand film capturing the people, place, and atmosphere behind the Full Throttle project. Rather than focusing only on the final work, this film tells the story of the people, the environment, and the moments that set the project in motion.",
    previewVideo: assets.project(fullThrottleSlug, "full-throttle01.mp4"),
    /** Paste YouTube video ID only (e.g. b4bNh3MSr84 from https://youtu.be/b4bNh3MSr84) */
    youtubeVideoId: "2SJpmFbDnmE",
    ctaLabel: "VIEW PROJECT",
    filmCtaLabel: "WATCH FULL FILM",
  },
  {
    id: "vf-commodore-film",
    slug: "vf-commodore-film",
    title: "VF Commodore Film",
    category: "Automotive",
    cardDescription:
      "A cinematic automotive film showcasing a Holden VF Commodore through dynamic visuals, immersive sound design, and storytelling-focused editing.",
    image: assets.thumbnail(portfolioFiles.three),
    previewVideo: assets.project("vf-commodore", "commodore-edit.mp4"),
    description:
      "Created as a cinematic showcase of a Holden VF Commodore, this film focuses on atmosphere, movement, and emotion rather than simply documenting a vehicle. Every shot was designed to highlight the character of the car through composition, colour, sound design, and pacing.",
    services: ["Filming", "Video Editing", "Colour Grading", "Sound Design"],
    result:
      "A complete cinematic automotive film demonstrating REBIRTH's approach to visual storytelling, editing, and premium content creation.",
    youtubeVideoId: "b4bNh3MSr84",
    ctaLabel: "VIEW PROJECT",
    filmCtaLabel: "WATCH FULL FILM",
  },
];

export const workCategories = ["Brand Film", "Automotive"];
