import { CaseStudyPreviewSection } from "@/components/sections/CaseStudyPreviewSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageSEO } from "@/data/seo";

export const metadata = pageSEO.caseStudies;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader title="Case Studies" description="Strategic outcomes behind the cinematic execution." />
      <CaseStudyPreviewSection />
      <WorkSection title="Projects with role, deliverables, and measurable outcomes." />
    </>
  );
}
