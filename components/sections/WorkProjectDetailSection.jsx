"use client";

import { CinematicCtaLink } from "@/components/ui/CinematicCtaLink";
import { Label } from "@/components/ui/Label";
import { ProjectPreviewContent } from "@/components/sections/ProjectPreviewContent";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function WorkProjectDetailSection({ project }) {
  return (
    <>
      <header className="border-b border-white/[0.04] bg-rebirth-void/90 px-6 pb-10 pt-32 sm:px-8 sm:pb-12 sm:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Label>{project.category}</Label>
            <h1 className="heading-display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{project.title}</h1>
          </Reveal>
        </div>
      </header>

      <Section className="bg-rebirth-void">
        <Reveal>
          <div className="panel-editorial mx-auto max-w-3xl overflow-hidden rounded-panel border border-white/[0.06] bg-rebirth-surface shadow-card">
            <ProjectPreviewContent project={project} />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-16 flex justify-center sm:mt-20">
          <CinematicCtaLink href="/work" secondary>
            Back to Portfolio
          </CinematicCtaLink>
        </Reveal>
      </Section>
    </>
  );
}
