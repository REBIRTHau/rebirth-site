"use client";

import { createContext, useContext } from "react";

/**
 * True after the intro surface has cleared — hero / primary motion should wait for this
 * so staggered reveals are actually visible (not running behind the loader).
 */
export const MotionSurfaceContext = createContext(false);

export function useMotionSurfaceReady() {
  return useContext(MotionSurfaceContext);
}
