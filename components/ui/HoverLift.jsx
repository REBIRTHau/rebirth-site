"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle card elevation on hover — GPU-friendly transform only.
 */
export function HoverLift({ children, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {children}
    </motion.div>
  );
}
