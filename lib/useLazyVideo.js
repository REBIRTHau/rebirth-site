"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lazy-load and pause portfolio preview clips when off-screen.
 */
export function useLazyVideo({ eager = false, rootMargin = "120px" } = {}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager) setShouldLoad(true);
  }, [eager]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        if (entry.isIntersecting) {
          setShouldLoad(true);
          return;
        }

        video?.pause();
      },
      { rootMargin, threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager, rootMargin]);

  return { containerRef, videoRef, shouldLoad };
}
