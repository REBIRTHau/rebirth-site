import { MediaSection } from "@/components/sections/MediaSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { pageSEO } from "@/data/seo";

export const metadata = pageSEO.media;

export default function MediaPage() {
  return (
    <>
      <PageHeader title="Media" description="Behind the work, frameworks, and transformation content." />
      <MediaSection />
    </>
  );
}
