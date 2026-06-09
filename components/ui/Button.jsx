"use client";

import { useCallback, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function Button({ children, secondary = false, type = "button", className, ...props }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.85 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.85 });

  const onMove = useCallback(
    (e) => {
      if (reduceMotion) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      const cap = 8;
      x.set(mx * cap * 2);
      y.set(my * cap * 2);
    },
    [x, y, reduceMotion]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      type={type}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      onMouseMove={reduceMotion ? undefined : onMove}
      onMouseLeave={reduceMotion ? undefined : onLeave}
      whileHover={reduceMotion ? undefined : { scale: 1.012 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ type: "spring", stiffness: 460, damping: 32 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 rounded-sm border px-8 py-3.5 font-sans text-[10px] font-medium uppercase tracking-caps will-change-transform transition-colors duration-luxury",
        secondary
          ? "border-white/[0.12] bg-transparent text-rebirth-white/80 hover:border-white/22 hover:text-rebirth-white"
          : "border-rebirth-white/90 bg-rebirth-white text-rebirth-void hover:bg-rebirth-white/95",
        className
      )}
      {...props}
    >
      <span className="relative">{children}</span>
      <Icon className="relative h-4 w-4 opacity-70 transition duration-luxury group-hover:translate-x-0.5" />
    </motion.button>
  );
}
