/**
 * Re-encode hero.mp4 for web delivery (~5 Mbps H.264 1080p, faststart).
 * Requires: npm install (ffmpeg-static is a devDependency)
 *
 * Usage: npm run optimize:hero
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = path.join(root, "public", "videos", "hero.mp4");
const backup = path.join(root, "public", "videos", "hero-source.mp4");
const output = path.join(root, "public", "videos", "hero.mp4");

if (!ffmpegPath) {
  console.error("ffmpeg-static not found. Run: npm install");
  process.exit(1);
}

if (!fs.existsSync(input)) {
  console.error("Missing public/videos/hero.mp4");
  process.exit(1);
}

if (!fs.existsSync(backup)) {
  fs.copyFileSync(input, backup);
  console.log("Backed up original to public/videos/hero-source.mp4");
}

const args = [
  "-y",
  "-i",
  backup,
  "-an",
  "-c:v",
  "libx264",
  "-profile:v",
  "high",
  "-level",
  "4.1",
  "-pix_fmt",
  "yuv420p",
  "-vf",
  "scale=-2:1080",
  "-b:v",
  "5M",
  "-maxrate",
  "6M",
  "-bufsize",
  "10M",
  "-movflags",
  "+faststart",
  output,
];

console.log("Encoding web-optimized hero.mp4 (1080p, ~5 Mbps)...");
const result = spawnSync(ffmpegPath, args, { stdio: "inherit" });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const sizeMb = (fs.statSync(output).size / (1024 * 1024)).toFixed(1);
console.log(`Done. hero.mp4 is now ${sizeMb} MB.`);
