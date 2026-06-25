"use client";

import { useState } from "react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

const iconClass = "h-[2.36rem] w-[2.36rem] shrink-0 sm:h-[2.7rem] sm:w-[2.7rem]";

export function Logo({ className = "", large = false, variant = "wordmark" }) {
  const [failed, setFailed] = useState(false);
  const isIcon = variant === "icon";
  const src = isIcon ? assets.logoIcon : assets.logo;

  if (failed) {
    return (
      <span
        className={cn(
          "inline-flex items-center font-sans font-semibold uppercase tracking-label text-rebirth-white",
          large ? "text-4xl sm:text-6xl" : isIcon ? iconClass : "text-xs sm:text-sm",
          className
        )}
      >
        {isIcon ? "R" : "REBIRTH"}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt="REBIRTH"
      width={isIcon ? 44 : undefined}
      height={isIcon ? 44 : undefined}
      loading="eager"
      decoding={isIcon ? "sync" : "async"}
      fetchPriority="high"
      onError={() => setFailed(true)}
      className={cn(
        "w-auto shrink-0",
        large ? "h-20 sm:h-28" : isIcon ? iconClass : "h-7 sm:h-8",
        className
      )}
    />
  );
}
