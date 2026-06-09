import { ApplySection } from "@/components/sections/ApplySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyRebirthSection } from "@/components/sections/WhyRebirthSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { pageSEO } from "@/data/seo";

export const metadata = pageSEO.home;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <WorkSection sectionId="work" title="Selected work. Proof that discipline shows up on screen." limit={3} />
      <ProcessSection />
      <ResultsSection />
      <WhyRebirthSection />
      <ApplySection />
    </>
  );
}
