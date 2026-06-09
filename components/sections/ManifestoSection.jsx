import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ManifestoSection() {
  return (
    <Section id="belief" glow className="bg-rebirth-base">
      <div className="section-divider absolute left-0 right-0 top-0" aria-hidden />
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <Label>Brand Belief</Label>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-[3.25rem]">
            Destroy the old self.{" "}
            <span className="text-rebirth-white/75">Build your new reality.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="body-muted">
            REBIRTH is not editing for attention. It is transformation—identity, story, discipline, and momentum built
            for operators who are done performing and ready to become undeniable.
          </p>
          <div className="card-ambient mt-10">
            <h3 className="font-sans text-base font-medium text-rebirth-white">The standard</h3>
            <p className="body-muted mt-4 max-w-md text-sm">
              Not content for attention. Content for identity, trust, and momentum. Built with discipline. Directed by
              purpose. Delivered with power.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
