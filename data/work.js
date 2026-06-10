/**
 * EDIT PORTFOLIO — image paths use /public/rebirth/thumbnails/ (see lib/assets.js)
 */

import { assets, portfolioFiles } from "@/lib/assets";

export const workItems = [
  {
    id: "vf-commodore-film",
    title: "VF COMMODORE FILM",
    category: "AUTOMOTIVE",
    cardDescription:
      "A cinematic automotive film showcasing a Holden VF Commodore through dynamic visuals, immersive sound design, and storytelling-focused editing.",
    image: assets.thumbnail(portfolioFiles.three),
    video: assets.video("commodore-edit.mp4"),
    description:
      "Created as a cinematic showcase of a Holden VF Commodore, this film focuses on atmosphere, movement, and emotion rather than simply documenting a vehicle. Every shot was designed to highlight the character of the car through composition, colour, sound design, and pacing.",
    services: ["Filming", "Video Editing", "Colour Grading", "Sound Design"],
    result:
      "A complete cinematic automotive film demonstrating REBIRTH's approach to visual storytelling, editing, and premium content creation.",
    ctaLabel: "WATCH FULL FILM",
    /** Paste your full YouTube film URL here (e.g. https://www.youtube.com/watch?v=...) */
    youtubeUrl: "https://youtu.be/b4bNh3MSr84",
  },
];

export const workCategories = ["AUTOMOTIVE"];
