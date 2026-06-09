import { Label } from "@/components/ui/Label";

export function PageHeader({ label, title, description }) {
  return (
    <header className="border-b border-white/[0.04] bg-rebirth-void/90 px-6 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-36">
      <div className="mx-auto max-w-7xl">
        {label ? <Label>{label}</Label> : null}
        <h1 className="heading-display max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        {description ? <p className="body-muted mt-8 max-w-2xl">{description}</p> : null}
      </div>
    </header>
  );
}
