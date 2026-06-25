"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const fallbackClass =
  "bg-[linear-gradient(165deg,#141416_0%,#0a0a0b_55%,#060607_100%)]";

/**
 * Image with neutral fallback. Supports priority load for hero/LCP.
 */
export function SmartMedia({
  src,
  alt = "",
  className,
  priority = false,
  eager = false,
  sizes,
  objectPosition,
}) {
  const [failed, setFailed] = useState(false);
  const loadImmediately = priority || eager;

  if (!src || failed) {
    return <div className={cn(fallbackClass, className)} role="img" aria-label={alt || undefined} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loadImmediately ? "eager" : "lazy"}
      decoding={loadImmediately ? "sync" : "async"}
      fetchPriority={loadImmediately ? "high" : "low"}
      sizes={sizes}
      onError={() => setFailed(true)}
      style={objectPosition ? { objectPosition } : undefined}
      className={cn("object-cover", className)}
    />
  );
}
