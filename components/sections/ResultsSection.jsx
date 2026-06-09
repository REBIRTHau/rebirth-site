import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { identityPhilosophy } from "@/data/site";

export function ResultsSection() {
  return (
    <Section id="results" className="bg-rebirth-base">
      <div className="panel-editorial max-w-5xl">
        <Reveal>
          <h2 className="heading-editorial">
            {identityPhilosophy.headline}
          </h2>
          <div className="mt-10 space-y-2">
            {identityPhilosophy.subheadline.map((line) => (
              <p key={line} className="font-sans text-lg font-normal leading-snug text-rebirth-white/80 sm:text-xl">
                {line}
              </p>
            ))}
          </div>
          <p className="body-muted mt-12 max-w-2xl border-t border-white/[0.04] pt-12">
            {identityPhilosophy.body}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
