import { WorkSection } from "@/components/sections/WorkSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageSEO } from "@/data/seo";

export const metadata = pageSEO.work;

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Work" description="Cinematic portfolio of transformation-driven projects." />
      <WorkSection />
    </>
  );
}
