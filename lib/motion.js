/** Shared luxury motion tokens — Apple / Porsche / Linear pacing */

export const EASE_LUXURY = [0.16, 1, 0.3, 1];
export const EASE_OUT = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: EASE_LUXURY },
  },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0.04) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const viewportReveal = {
  once: true,
  margin: "-10% 0px -8% 0px",
  amount: 0.18,
};
