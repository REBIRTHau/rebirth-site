import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function PhilosophySection() {
  return (
    <Section className="bg-rebirth-base">
      <div className="panel-editorial">
        <Reveal>
          <Label>Brand Philosophy</Label>
          <h2 className="heading-display max-w-5xl text-4xl sm:text-5xl lg:text-6xl">
            Discipline creates direction. Purpose creates endurance. Power is built through repetition.
          </h2>
          <p className="body-muted mt-10 max-w-3xl">
            We build the visual systems behind transformation. REBIRTH is for brands that do not need noise. They need
            conviction, consistency, and cinematic execution.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
