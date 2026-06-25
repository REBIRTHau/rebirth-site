"use client";

import { useEffect, useRef, useState } from "react";
import { CinematicCtaLink } from "@/components/ui/CinematicCtaLink";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { getProjectPreviewVideo, getProjectYouTubeUrl } from "@/lib/work";

export function ProjectPreviewVideo({ src, poster }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.play().catch(() => {});
    setMuted(true);
  }, [src]);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next) video.play().catch(() => {});
  }

  return (
    <div className="relative bg-rebirth-void">
      <video
        ref={videoRef}
        className="h-56 w-full object-cover sm:h-80"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-4 right-4 rounded-sm border border-white/15 bg-rebirth-void/80 px-3 py-2 font-sans text-[9px] font-medium uppercase tracking-caps text-rebirth-white/85 backdrop-blur-sm transition hover:border-white/30"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}

export function ProjectPreviewContent({ project }) {
  const previewVideo = getProjectPreviewVideo(project);
  const youtubeUrl = getProjectYouTubeUrl(project);

  return (
    <>
      {previewVideo ? (
        <ProjectPreviewVideo src={previewVideo} poster={project.image} />
      ) : (
        <SmartMedia src={project.image} alt={project.title} className="h-56 w-full sm:h-80" />
      )}
      <div className="grid gap-5 p-5 text-sm leading-relaxed text-white/60 sm:p-6">
        <p>{project.description}</p>
        {project.services?.length ? (
          <div>
            <span className="label-caps text-rebirth-smoke">Services</span>
            <ul className="mt-3 space-y-2 text-rebirth-muted">
              {project.services.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {project.result ? (
          <p>
            <span className="label-caps text-rebirth-smoke">Result</span>
            <br />
            <span className="mt-3 block text-rebirth-muted">{project.result}</span>
          </p>
        ) : null}
        {youtubeUrl ? (
          <div className="pt-2">
            <CinematicCtaLink href={youtubeUrl} secondary external className="w-full sm:w-auto">
              {project.filmCtaLabel ?? "Watch Full Film"}
            </CinematicCtaLink>
          </div>
        ) : null}
      </div>
    </>
  );
}
