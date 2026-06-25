import { workItems } from "@/data/work";

export function getWorkBySlug(slug) {
  return workItems.find((item) => item.slug === slug) ?? null;
}

export function getAllWorkSlugs() {
  return workItems.filter((item) => item.slug).map((item) => item.slug);
}

export function getYouTubeWatchUrl(videoId) {
  const id = videoId?.trim();
  if (!id) return null;
  return `https://www.youtube.com/watch?v=${id}`;
}

export function getProjectPreviewVideo(project) {
  return project.previewVideo ?? project.teaserVideo ?? project.video ?? null;
}

export function getProjectYouTubeUrl(project) {
  if (project.youtubeUrl?.trim()) return project.youtubeUrl.trim();
  return getYouTubeWatchUrl(project.youtubeVideoId);
}
