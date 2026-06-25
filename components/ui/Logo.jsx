"use client";

import { useState } from "react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

export function Logo({ className = "", large = false, variant = "wordmark" }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const isIcon = variant === "icon";
  const src = isIcon ? assets.logoIcon : assets.logo;

  return (
    <span className={cn("relative inline-flex items-center", className)}>
      {!loaded || failed ? (
        <span
          className={cn(
            "font-sans font-semibold uppercase tracking-label text-rebirth-white",
            large ? "text-4xl sm:text-6xl" : isIcon ? "text-sm" : "text-xs sm:text-sm"
          )}
        >
          {isIcon ? "R" : "REBIRTH"}
        </span>
      ) : null}
      {!failed ? (
        <img
          src={src}
          alt="REBIRTH"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "w-auto shrink-0",
            large
              ? "h-20 sm:h-28"
              : isIcon
                ? "h-[2.36rem] sm:h-[2.7rem]"
                : "h-7 sm:h-8",
            loaded ? "block" : "hidden"
          )}
        />
      ) : null}
    </span>
  );
}
