"use client";

import { memo, useEffect, useRef } from "react";
import { assets } from "@/lib/assets";

function ensureIosInline(video) {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
}

function HeroBackgroundVideoInner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    ensureIosInline(video);

    const isCoarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isCoarsePointer) {
      video.preload = "auto";
    }

    const play = () => {
      ensureIosInline(video);
      const attempt = video.play();
      if (attempt?.catch) attempt.catch(() => {});
    };

    const onPlaying = () => {
      video.removeAttribute("poster");
    };

    play();
    requestAnimationFrame(play);

    const retryTimers = [80, 200, 500, 1200].map((ms) => window.setTimeout(play, ms));

    video.addEventListener("loadedmetadata", play);
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    video.addEventListener("canplaythrough", play);
    video.addEventListener("playing", onPlaying);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
      },
      { threshold: 0.01 }
    );
    observer.observe(video);

    const onPageShow = () => play();
    const onVisibility = () => {
      if (!document.hidden) play();
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      retryTimers.forEach(clearTimeout);
      video.removeEventListener("loadedmetadata", play);
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      video.removeEventListener("canplaythrough", play);
      video.removeEventListener("playing", onPlaying);
      observer.disconnect();
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video hero-video-ken-burns h-full w-full object-cover"
      autoPlay
      muted
      defaultMuted
      loop
      playsInline
      preload="auto"
      poster={assets.hero.poster}
    >
      <source src={assets.hero.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
    </video>
  );
}

export const HeroBackgroundVideo = memo(HeroBackgroundVideoInner);
