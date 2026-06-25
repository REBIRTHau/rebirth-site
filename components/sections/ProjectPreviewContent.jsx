"use client";

import { useEffect, useState } from "react";
import { CinematicCtaLink } from "@/components/ui/CinematicCtaLink";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { useLazyVideo } from "@/lib/useLazyVideo";
import { cn } from "@/lib/cn";
import { getProjectPreviewVideo, getProjectYouTubeUrl } from "@/lib/work";

const previewFrameClass = "h-56 w-full sm:h-80";

export function ProjectPreviewVideo({ src, poster, eager = false }) {
  const { containerRef, videoRef, shouldLoad } = useLazyVideo({ eager });
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.play().catch(() => {});
    setMuted(true);
  }, [shouldLoad, src, videoRef]);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next) video.play().catch(() => {});
  }

  return (
    <div ref={containerRef} className={cn("relative bg-rebirth-void", previewFrameClass)}>
      <SmartMedia src={poster} alt="" priority={eager} className={previewFrameClass} />
      {shouldLoad ? (
        <video
          ref={videoRef}
          className={cn("portfolio-preview-video absolute inset-0 h-full w-full object-cover", previewFrameClass)}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      ) : null}
      {shouldLoad ? (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-4 right-4 rounded-sm border border-white/15 bg-rebirth-void/80 px-3 py-2 font-sans text-[9px] font-medium uppercase tracking-caps text-rebirth-white/85 backdrop-blur-sm transition hover:border-white/30"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      ) : null}
    </div>
  );
}

export function ProjectPreviewContent({ project, eagerVideo = false }) {
  const previewVideo = getProjectPreviewVideo(project);
  const youtubeUrl = getProjectYouTubeUrl(project);

  return (
    <>
      {previewVideo ? (
        <ProjectPreviewVideo src={previewVideo} poster={project.image} eager={eagerVideo} />
      ) : (
        <SmartMedia src={project.image} alt={project.title} className={previewFrameClass} />
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
