"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { brand, brandPillars, ctaHref, ctaPrimary } from "@/data/site";
import { useMotionSurfaceReady } from "@/components/MotionSurfaceContext";
import { CinematicCtaLink } from "@/components/ui/CinematicCtaLink";
import { assets } from "@/lib/assets";
import { EASE_LUXURY } from "@/lib/motion";

function HeroBackgroundVideo() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {});
    };

    const onPlaying = () => setReady(true);

    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    video.addEventListener("playing", onPlaying);

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
      video.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video-ken-burns h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={ready ? undefined : assets.hero.poster}
    >
      <source src={assets.hero.video} type="video/mp4" />
    </video>
  );
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: EASE_LUXURY },
  },
});

const fadeUpInstant = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

function HeroWordmark({ delay, reduceMotion }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const variants = reduceMotion ? fadeUpInstant : fadeUp(delay);

  if (!logoFailed) {
    return (
      <motion.div variants={variants} className="relative flex justify-center px-2">
        <img
          src="/rebirth/logo.png"
          alt=""
          className="relative h-[min(25vw,12rem)] w-auto max-w-[min(92vw,25rem)] sm:h-[15rem]"
          onError={() => setLogoFailed(true)}
        />
      </motion.div>
    );
  }

  return (
    <motion.div variants={variants} className="relative">
      <h1 className="hero-wordmark-fallback">{brand.name}</h1>
    </motion.div>
  );
}

export function HeroSection() {
  const surfaceReady = useMotionSurfaceReady();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1.05, 1.05] : [1.05, 1.1]);
  const videoY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 32]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 12]);

  const reveal = Boolean(reduceMotion) || surfaceReady;
  const v = (d) => (reduceMotion ? fadeUpInstant : fadeUp(d));

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-rebirth-void px-6 pb-28 pt-32 text-center sm:px-8 sm:pb-24 sm:pt-36"
      aria-label="REBIRTH hero"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{ y: videoY, scale: videoScale }}
      >
        <HeroBackgroundVideo />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-rebirth-void/65" />
      <div className="hero-vignette pointer-events-none absolute inset-0 z-[2]" />
      <div className="grain pointer-events-none absolute inset-0 z-[3] mix-blend-overlay" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } } }}
        initial="hidden"
        animate={reveal ? "visible" : "hidden"}
      >
        <HeroWordmark delay={0} reduceMotion={reduceMotion} />

        <motion.div
          variants={v(0.12)}
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {brandPillars.map((pillar) => (
            <span key={pillar} className="pillar-tag">
              {pillar}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={v(0.32)}
          className="mx-auto mt-6 max-w-xl text-balance text-[15px] font-normal leading-[1.75] text-rebirth-muted sm:text-base"
        >
          {brand.description}
        </motion.p>

        <motion.div
          variants={v(0.45)}
          className="mt-12 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-14 sm:flex-row sm:justify-center sm:gap-4"
        >
          <CinematicCtaLink href={ctaHref}>{ctaPrimary}</CinematicCtaLink>
          <CinematicCtaLink href="/#work" secondary>
            View the Work
          </CinematicCtaLink>
        </motion.div>
      </motion.div>

      <a
        href="#belief"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-sans text-[9px] font-medium uppercase tracking-label text-rebirth-white/20 transition-colors hover:text-rebirth-white/45 sm:bottom-12"
        aria-label="Scroll to content"
      >
        <span>Scroll</span>
        <span className="scroll-cue-bar h-9 w-px bg-rebirth-white/25" />
      </a>
    </section>
  );
}
