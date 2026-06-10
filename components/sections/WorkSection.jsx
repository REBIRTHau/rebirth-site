"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { Button } from "@/components/ui/Button";
import { CinematicCtaLink } from "@/components/ui/CinematicCtaLink";
import { HoverLift } from "@/components/ui/HoverLift";
import { workCategories, workItems } from "@/data/work";
import { EASE_OUT } from "@/lib/motion";

function ProjectModalVideo({ src, poster }) {
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

export function WorkSection({ title = "Work that makes the shift visible.", limit, sectionId }) {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const showFilters = workItems.length > 1 && workCategories.length > 1;

  const visible = useMemo(() => {
    const base =
      active === "All" ? workItems : workItems.filter((item) => item.category === active);
    return typeof limit === "number" ? base.slice(0, limit) : base;
  }, [active, limit]);

  const isSingleFeatured = visible.length === 1;

  return (
    <Section id={sectionId} className="bg-rebirth-void">
      <Reveal>
        <Label>Work</Label>
        <h2 className="heading-display max-w-4xl text-4xl sm:text-6xl">{title}</h2>
      </Reveal>
      {showFilters ? (
        <div className="mt-10 flex flex-wrap gap-2">
          {["All", ...workCategories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-sm border px-4 py-2.5 font-sans text-[10px] font-medium uppercase tracking-caps transition duration-luxury ${
                active === category
                  ? "border-white/25 bg-rebirth-elevated text-rebirth-white"
                  : "border-white/[0.06] text-rebirth-white/45 hover:border-white/15 hover:text-rebirth-white/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}
      <div
        className={
          isSingleFeatured
            ? "mt-12 flex justify-center"
            : "mt-12 grid gap-6 md:grid-cols-2"
        }
      >
        {visible.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <HoverLift className={isSingleFeatured ? "w-full max-w-2xl" : undefined}>
              <article className="card-ambient group overflow-hidden p-0 transition duration-luxury hover:border-white/[0.08]">
                <div className="relative overflow-hidden">
                  <SmartMedia
                    src={project.image}
                    alt={project.title}
                    className={`w-full transition duration-[800ms] ease-out group-hover:scale-[1.03] ${
                      isSingleFeatured ? "h-64 sm:h-80" : "h-56 sm:h-64"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rebirth-void via-transparent to-transparent" />
                  <span className="label-caps absolute left-5 top-5 border border-white/[0.08] bg-rebirth-void/70 px-3 py-1 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className={isSingleFeatured ? "p-9 sm:p-10" : "p-8 sm:p-9"}>
                  <h3 className="font-sans text-xl font-medium tracking-[-0.02em] text-rebirth-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-rebirth-muted">
                    {project.cardDescription}
                  </p>
                  <div className="mt-8">
                    {project.youtubeUrl ? (
                      <CinematicCtaLink
                        href={project.youtubeUrl}
                        secondary
                        external
                        className="w-full sm:w-auto"
                      >
                        {project.ctaLabel ?? "Watch Full Film"}
                      </CinematicCtaLink>
                    ) : (
                      <Button
                        type="button"
                        secondary
                        onClick={() => setSelected(project)}
                        className="w-full sm:w-auto"
                      >
                        {project.ctaLabel ?? "WATCH FILM"}
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </HoverLift>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[110] grid place-items-center bg-black/85 p-4 backdrop-blur-md sm:p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-panel border border-white/[0.06] bg-rebirth-surface shadow-card"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] p-5 sm:p-6">
                <div>
                  <p className="label-caps">{selected.category}</p>
                  <h3 id="project-title" className="mt-3 font-sans text-xl font-medium text-rebirth-white sm:text-2xl">
                    {selected.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-sm border border-white/[0.08] p-2 text-rebirth-white/60 transition hover:border-white/20 hover:text-rebirth-white"
                  aria-label="Close project details"
                >
                  <Icon type="x" />
                </button>
              </div>
              {selected.video ? (
                <ProjectModalVideo src={selected.video} poster={selected.image} />
              ) : (
                <SmartMedia src={selected.image} alt={selected.title} className="h-56 w-full sm:h-64" />
              )}
              <div className="grid gap-5 p-5 text-sm leading-relaxed text-white/60 sm:p-6">
                <p>{selected.description}</p>
                {selected.services?.length ? (
                  <div>
                    <span className="label-caps text-rebirth-smoke">Services</span>
                    <ul className="mt-3 space-y-2 text-rebirth-muted">
                      {selected.services.map((service) => (
                        <li key={service}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {selected.result ? (
                  <p>
                    <span className="label-caps text-rebirth-smoke">Result</span>
                    <br />
                    <span className="mt-3 block text-rebirth-muted">{selected.result}</span>
                  </p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
