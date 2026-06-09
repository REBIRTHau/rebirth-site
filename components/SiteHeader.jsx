"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ctaHref, ctaPrimary, primaryNavigation } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const menuEase = [0.22, 1, 0.36, 1];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8 sm:py-5">
        <motion.div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-sm border px-5 py-3.5 text-rebirth-white",
            "transition-[background-color,box-shadow,border-color] duration-500 ease-out",
            scrolled ? "nav-glass nav-glass-scrolled" : "nav-glass"
          )}
        >
          <Link href="/" aria-label="REBIRTH home" className="shrink-0">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {primaryNavigation.map((item) => {
              const active = !item.href.includes("#") && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-sans text-[10px] font-medium uppercase tracking-caps transition-colors duration-500 ease-out",
                    active ? "text-white" : "text-white/45 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href={ctaHref}
            className="hidden rounded-sm border border-white/15 px-4 py-2.5 font-sans text-[9px] font-medium uppercase tracking-caps text-rebirth-white/85 transition-all duration-500 hover:border-white/30 hover:text-rebirth-white lg:inline-flex xl:text-[10px]"
          >
            {ctaPrimary}
          </Link>
          <button className="lg:hidden" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
            <Icon type="menu" />
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[90] flex flex-col bg-rebirth-void/98 p-6 text-rebirth-white backdrop-blur-md"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.38, ease: menuEase }}
          >
            <div className="flex justify-between">
              <Logo />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                <Icon type="x" />
              </button>
            </div>
            <motion.nav
              className="mt-16 flex flex-1 flex-col gap-1"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: menuEase, delay: 0.05 }}
            >
              {primaryNavigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.42, ease: menuEase, delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/[0.04] py-6 font-sans text-3xl font-medium tracking-[-0.03em] transition-colors duration-300 hover:text-rebirth-white sm:text-4xl"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
