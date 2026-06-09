import { Label } from "@/components/ui/Label";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { HoverLift } from "@/components/ui/HoverLift";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <Section id="services" className="bg-rebirth-base">
      <Reveal>
        <Label>Services</Label>
        <h2 className="heading-display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
          Outcome-led creative systems for brands that want the work to feel inevitable.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <HoverLift className="h-full">
              <article className="card-ambient group flex h-full min-h-[18rem] flex-col">
                <p className="label-caps mb-0 text-rebirth-smoke">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 font-sans text-xl font-medium tracking-[-0.02em] text-rebirth-white sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-rebirth-muted">{service.description}</p>
                <div className="mt-8 h-px w-10 bg-white/10 transition-all duration-luxury group-hover:w-16" />
              </article>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
