import { ResultsSection } from "@/components/sections/ResultsSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { pageSEO } from "@/data/seo";
import { testimonials } from "@/data/site";

export const metadata = pageSEO.results;

export default function ResultsPage() {
  return (
    <>
      <PageHeader title="Results" description="Attention fades. Identity compounds." />
      <ResultsSection />
      <Section className="bg-rebirth-base pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="card-premium p-9 sm:p-10">
                <p className="text-lg leading-relaxed text-white/78">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-8 text-sm font-medium text-rebirth-white">{item.name}</p>
                <p className="label-caps mt-1 text-rebirth-smoke">{item.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
