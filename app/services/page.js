import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageSEO } from "@/data/seo";

export const metadata = pageSEO.services;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Not content for attention. Content for identity, trust, and momentum."
      />
      <ServicesSection />
      <ProcessSection />
    </>
  );
}
