import { Icon } from "@/components/ui/Icon";
import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <Section id="process" className="bg-rebirth-void">
      <Reveal>
        <Label>Process</Label>
        <h2 className="heading-display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
          A luxury pipeline—disciplined, cinematic, and built to ship without chaos.
        </h2>
      </Reveal>
      <div className="mt-20 divide-y divide-white/[0.04] border-y border-white/[0.04]">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.04}>
            <div className="grid gap-6 py-10 sm:py-12 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12">
              <span className="label-caps text-rebirth-smoke">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-sans text-2xl font-medium tracking-[-0.03em] text-rebirth-white sm:text-3xl">
                  {step.title}
                </h3>
                <p className="body-muted mt-4 max-w-2xl">{step.description}</p>
              </div>
              <Icon className="mt-1 hidden h-5 w-5 text-rebirth-white/15 md:block" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
