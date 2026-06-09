"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function Logo({ className = "", large = false }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={cn("relative inline-flex items-center", className)}>
      {!loaded || failed ? (
        <span
          className={cn(
            "font-sans font-semibold uppercase tracking-label text-rebirth-white",
            large ? "text-4xl sm:text-6xl" : "text-xs sm:text-sm"
          )}
        >
          REBIRTH
        </span>
      ) : null}
      {!failed ? (
        <img
          src="/rebirth/logo.png"
          alt="REBIRTH"
          loading="eager"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(large ? "h-20 w-auto sm:h-28" : "h-7 w-auto sm:h-8", loaded ? "block" : "hidden")}
        />
      ) : null}
    </span>
  );
}
