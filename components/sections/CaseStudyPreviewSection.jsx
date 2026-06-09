import { CinematicCtaLink } from "@/components/ui/CinematicCtaLink";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function CaseStudyPreviewSection() {
  return (
    <Section className="bg-rebirth-base">
      <div className="panel-editorial">
        <Reveal>
          <Label>Case Studies</Label>
          <h2 className="heading-display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
            From inconsistent posting to an identity-led content engine.
          </h2>
          <p className="body-muted mt-8 max-w-3xl">
            See how REBIRTH repositioned a performance brand through cinematic execution, structural content systems, and
            disciplined weekly momentum.
          </p>
          <div className="mt-10">
            <CinematicCtaLink href="/case-studies" secondary>
              Read case studies
            </CinematicCtaLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
