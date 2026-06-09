/**
 * EDIT SITE COPY HERE — navigation, services, process, socials, form options.
 */

export const brand = {
  name: "REBIRTH",
  tagline: "DISCIPLINE. PURPOSE. POWER.",
  description: "Strategic content and cinematic storytelling built for growth.",
};

export const brandPillars = ["VIDEO", "PHOTO", "EDITING", "STRATEGY"];

export const ctaPrimary = "Start a Project";
export const ctaHref = "/#booking";

export const instagramHandle = "@rebirth.au";
export const instagramUrl = "https://instagram.com/rebirth.au";

/** Primary sticky nav (luxury minimal) */
export const primaryNavigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: ctaPrimary, href: ctaHref },
];

/** Full sitemap links (footer / secondary) */
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Results", href: "/results" },
  { label: "Media", href: "/media" },
  { label: ctaPrimary, href: ctaHref },
];

export const socialLinks = [{ label: instagramHandle, href: instagramUrl }];

export const contactEmail = "dylan@rebirthco.au";

export const services = [
  {
    title: "Cinematic Brand Films",
    description:
      "Launch and legacy films that compress your story into undeniable proof—built for trust, not trends.",
  },
  {
    title: "Short-Form Content Systems",
    description:
      "Weekly output with structure: hooks, pacing, and identity so the algorithm serves your brand, not the other way around.",
  },
  {
    title: "Transformation Storytelling",
    description:
      "Narrative arcs that carry discipline, purpose, and power—so your audience feels the shift before you say a word.",
  },
  {
    title: "Content Strategy & Execution",
    description:
      "Clear creative direction, shot planning, and post engineering—fewer random posts, more compound momentum.",
  },
  {
    title: "Social Media Launch Packages",
    description:
      "A controlled debut: hero assets, cutdowns, and a launch rhythm designed to make the first impression unforgettable.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "We map identity, audience tension, and the truth worth building the story around.",
  },
  {
    title: "Build the Story",
    description: "Structure, tone, and visual language—so every frame reinforces who you are becoming.",
  },
  {
    title: "Film / Capture",
    description: "Intentional cinematography and performance direction—discipline on set, power in frame.",
  },
  {
    title: "Edit / Engineer",
    description: "Pacing, sound, color, and detail—where emotion is shaped with precision, not noise.",
  },
  {
    title: "Launch / Refine",
    description: "Release systems, iterations, and momentum—so the work compounds after day one.",
  },
];

export const identityPhilosophy = {
  headline: "ATTENTION FADES. IDENTITY COMPOUNDS.",
  subheadline: ["The goal is not more content.", "The goal is becoming undeniable."],
  body: "REBIRTH exists to help brands build momentum through cinematic storytelling, disciplined execution, and strategic content systems that compound over time.",
};

export const testimonials = [
  {
    quote:
      "REBIRTH rebuilt the way we communicate. Our content started carrying identity, not just attention.",
    name: "Jordan M.",
    role: "Founder, Training Brand",
  },
  {
    quote:
      "They brought discipline into our process and clarity into every visual decision.",
    name: "Luca R.",
    role: "Director, Automotive Studio",
  },
];

/** Homepage “Why REBIRTH” — outcome-focused differentiators */
export const whyRebirth = {
  headline: "Why REBIRTH",
  subhead:
    "A studio built for brands that want the work to feel inevitable—disciplined, cinematic, and unmistakably theirs.",
  points: [
    {
      title: "Story-first execution",
      body: "We do not decorate ideas. We engineer narrative tension, clarity, and payoff—then build visuals around it.",
    },
    {
      title: "Masculine cinematic energy",
      body: "Strength without shouting. Confidence without cliché. A tone built for resilience, ambition, and conviction.",
    },
    {
      title: "Systems, not random content",
      body: "Repeatable output with standards—so your brand compounds instead of resetting every week.",
    },
    {
      title: "Brand identity focus",
      body: "Every cut, caption, and frame should reinforce who you are becoming—not chase attention for its own sake.",
    },
    {
      title: "Premium detail",
      body: "Typography, pacing, sound, and grade—quiet details that read as expensive at first glance.",
    },
    {
      title: "Built for transformation brands",
      body: "Gyms, trades, athletes, creators, and ambitious operators entering a new chapter—when the old identity is too small.",
    },
  ],
};

export const formOptions = {
  budgetRanges: [
    "Under $500",
    "$500 – $1,000",
    "$1,000 – $2,500",
    "$2,500 – $5,000",
    "$5,000+",
  ],
};
