import { cn } from "@/lib/cn";

/**
 * Consistent section shell — spacing, max-width, optional top glow.
 */
export function Section({ id, children, className, innerClassName, glow = false }) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-6 py-24 sm:px-8 sm:py-32 lg:py-40",
        glow && "section-glow",
        className
      )}
    >
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}
