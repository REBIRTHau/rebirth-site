import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SmartMedia } from "@/components/ui/SmartMedia";
import { HoverLift } from "@/components/ui/HoverLift";
import { mediaItems } from "@/data/media";

export function MediaSection() {
  return (
    <Section className="bg-rebirth-base">
      <Reveal>
        <Label>Media</Label>
        <h2 className="heading-display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
          Content that documents the process and sharpens the message.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {mediaItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <HoverLift>
              <article className="card-premium overflow-hidden p-0">
                <SmartMedia src={item.image} alt={item.title} className="h-56 w-full sm:h-64" />
                <div className="p-7 sm:p-8">
                  <p className="label-caps">{item.type}</p>
                  <h3 className="mt-4 font-sans text-xl font-medium tracking-[-0.02em] text-rebirth-white">
                    {item.title}
                  </h3>
                  <p className="body-muted mt-4 text-sm">{item.description}</p>
                </div>
              </article>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
