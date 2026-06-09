"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MotionSurfaceContext } from "@/components/MotionSurfaceContext";

export function SiteShell({ children }) {
  const pathname = usePathname();

  return (
    <MotionSurfaceContext.Provider value={true}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:border focus:border-white/15 focus:bg-rebirth-elevated focus:px-4 focus:py-2 focus:text-sm focus:text-rebirth-white"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        className="min-h-screen bg-rebirth-void text-rebirth-white selection:bg-rebirth-white/20 selection:text-rebirth-white"
      >
        <SiteHeader />
        <div key={pathname}>{children}</div>
        <SiteFooter />
      </main>
    </MotionSurfaceContext.Provider>
  );
}
