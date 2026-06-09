import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { whyRebirth } from "@/data/site";

export function WhyRebirthSection() {
  return (
    <Section glow className="bg-rebirth-base">
      <Reveal>
        <Label>{whyRebirth.headline}</Label>
        <h2 className="heading-display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{whyRebirth.subhead}</h2>
      </Reveal>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
        {whyRebirth.points.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <article className="card-premium h-full p-9 sm:p-10 lg:p-11">
              <h3 className="font-sans text-lg font-medium text-rebirth-white">{item.title}</h3>
              <p className="body-muted mt-4 text-sm">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
