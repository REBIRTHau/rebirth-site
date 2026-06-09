/**
 * EDIT MEDIA GRID — files in /public/rebirth/media/ or /public/rebirth/photos/
 */

import { assets } from "@/lib/assets";

export const mediaItems = [
  {
    title: "Behind the Edit",
    type: "BTS",
    image: assets.media("bts-editing.jpg"),
    description: "How cinematic pacing and emotion are engineered in post.",
  },
  {
    title: "Transformation Framework",
    type: "Education",
    image: assets.photo("framework.jpg"),
    description: "Discipline creates direction. Purpose creates endurance.",
  },
  {
    title: "On Set",
    type: "Reel",
    image: assets.thumbnail("on-set.jpg"),
    video: assets.video("on-set-preview.mp4"),
    description: "Intentional capture—discipline on set, power in frame.",
  },
];
