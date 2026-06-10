import { brand } from "./site";

const baseUrl = "https://rebirthco.au";

export const defaultSEO = {
  metadataBase: new URL(baseUrl),
  title: {
    default: brand.name,
    template: "%s | REBIRTH",
  },
  description: brand.description,
  keywords: [
    "REBIRTH",
    "cinematic brand films",
    "content systems",
    "brand transformation",
    "premium content studio",
  ],
  authors: [{ name: "REBIRTH" }],
  openGraph: {
    title: brand.name,
    description: brand.description,
    url: baseUrl,
    siteName: "REBIRTH",
    images: [
      {
        url: "/rebirth/photos/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "REBIRTH cinematic hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.tagline,
    images: ["/rebirth/photos/hero-poster.jpg"],
  },
  icons: {
    icon: "/rebirth/favicon.png",
    shortcut: "/rebirth/favicon.png",
    apple: "/rebirth/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const pageSEO = {
  home: {
    title: { absolute: brand.name },
    description: brand.description,
    openGraph: {
      title: brand.name,
      description: brand.description,
    },
    twitter: {
      title: brand.name,
      description: brand.tagline,
    },
  },
  about: {
    title: "About",
    description: "Every brand reaches a point where the old identity is too small.",
  },
  services: {
    title: "Services",
    description: "Not content for attention. Content for identity, trust, and momentum.",
  },
  work: {
    title: "Work",
    description: "Cinematic portfolio of transformation-driven projects.",
  },
  caseStudies: {
    title: "Case Studies",
    description: "Proof of execution with strategic and visual outcomes.",
  },
  results: {
    title: "Results",
    description: "Proof of execution built for momentum.",
  },
  media: {
    title: "Media",
    description: "Insights, behind-the-scenes, and transformation content.",
  },
  apply: {
    title: "Start a Project",
    description: "Start a project with REBIRTH.",
  },
};
