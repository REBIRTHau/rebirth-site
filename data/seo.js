const baseUrl = "https://rebirthco.au";

export const defaultSEO = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "REBIRTH | Discipline. Purpose. Power.",
    template: "%s | REBIRTH",
  },
  description:
    "REBIRTH builds cinematic storytelling, content systems, and identity-driven brand transformation for ambitious brands.",
  keywords: [
    "REBIRTH",
    "cinematic brand films",
    "content systems",
    "brand transformation",
    "premium content studio",
  ],
  authors: [{ name: "REBIRTH" }],
  openGraph: {
    title: "REBIRTH",
    description: "Premium transformation and cinematic content systems.",
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
    title: "REBIRTH",
    description: "Discipline. Purpose. Power.",
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
    title: "Cinematic Transformation",
    description: "We build the visual systems behind transformation.",
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
