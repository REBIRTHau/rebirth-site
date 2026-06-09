import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageSEO } from "@/data/seo";

export const metadata = pageSEO.about;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About REBIRTH"
        description="Every brand reaches a point where the old identity is too small. REBIRTH exists for what comes next."
      />
      <ManifestoSection />
      <PhilosophySection />
    </>
  );
}
