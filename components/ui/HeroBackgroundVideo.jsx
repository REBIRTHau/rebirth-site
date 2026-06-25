"use client";

import { memo, useEffect, useRef } from "react";
import { assets } from "@/lib/assets";

function HeroBackgroundVideoInner() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {});
    };

    play();
    video.addEventListener("canplay", play);

    return () => {
      video.removeEventListener("canplay", play);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video hero-video-ken-burns h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={assets.hero.poster}
    >
      <source src={assets.hero.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
    </video>
  );
}

export const HeroBackgroundVideo = memo(HeroBackgroundVideoInner);
