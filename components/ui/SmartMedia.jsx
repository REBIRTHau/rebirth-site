"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const fallbackClass =
  "bg-[linear-gradient(165deg,#141416_0%,#0a0a0b_55%,#060607_100%)]";

/**
 * Image with neutral fallback. Supports priority load for hero/LCP.
 */
export function SmartMedia({ src, alt = "", className, priority = false, sizes }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={cn(fallbackClass, className)} role="img" aria-label={alt || undefined} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}
