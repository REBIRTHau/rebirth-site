"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useCallback, useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const primaryClass =
  "group relative inline-flex w-full items-center justify-center gap-3 rounded-sm border border-rebirth-white/90 bg-rebirth-white px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-caps text-rebirth-void sm:w-auto";

const secondaryClass =
  "group relative inline-flex w-full items-center justify-center gap-3 rounded-sm border border-white/[0.12] bg-transparent px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-caps text-rebirth-white/80 transition duration-luxury hover:border-white/25 hover:text-rebirth-white sm:w-auto";

/**
 * Valid anchor-based CTA (no button inside link) + subtle magnetic drift + premium hover.
 */
export function CinematicCtaLink({ href, secondary, children, className, external = false }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.9 });
  const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.9 });

  const onMove = useCallback(
    (e) => {
      if (reduceMotion) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      const cap = 10;
      x.set(mx * cap * 2);
      y.set(my * cap * 2);
    },
    [x, y, reduceMotion]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const linkClass = cn(secondary ? secondaryClass : primaryClass, "transition-colors duration-luxury");

  const inner = external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      <span className="relative">{children}</span>
      <Icon className="relative h-4 w-4 opacity-70 transition duration-luxury group-hover:translate-x-0.5" />
    </a>
  ) : (
    <Link href={href} className={linkClass}>
      <span className="relative">{children}</span>
      <Icon className="relative h-4 w-4 opacity-70 transition duration-luxury group-hover:translate-x-0.5" />
    </Link>
  );

  return (
    <motion.span
      ref={ref}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={reduceMotion ? undefined : onMove}
      onMouseLeave={reduceMotion ? undefined : onLeave}
      className={cn("block w-full will-change-transform sm:inline-block sm:w-auto", className)}
      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      {inner}
    </motion.span>
  );
}
