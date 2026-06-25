import { notFound } from "next/navigation";
import { WorkProjectDetailSection } from "@/components/sections/WorkProjectDetailSection";
import { getAllWorkSlugs, getWorkBySlug } from "@/lib/work";

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getWorkBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.cardDescription,
    openGraph: {
      title: project.title,
      description: project.cardDescription,
      images: project.image ? [{ url: project.image, alt: project.title }] : undefined,
    },
  };
}

export default function WorkProjectPage({ params }) {
  const project = getWorkBySlug(params.slug);
  if (!project) notFound();

  return <WorkProjectDetailSection project={project} />;
}
