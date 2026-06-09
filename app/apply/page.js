import { ApplySection } from "@/components/sections/ApplySection";
import { PageHeader } from "@/components/ui/PageHeader";
import { ctaPrimary } from "@/data/site";
import { pageSEO } from "@/data/seo";

export const metadata = pageSEO.apply;

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        title={ctaPrimary}
        description="Tell us about your brand, scope, and timeline. We respond with clear next steps."
      />
      <ApplySection />
    </>
  );
}
