import Link from "next/link";
import { brand, contactEmail, navigation, socialLinks } from "@/data/site";

export function SiteFooter() {
  const footerLinks = navigation.filter((item) => item.href !== "/");

  return (
    <footer className="relative border-t border-white/[0.04] bg-rebirth-void px-6 py-20 text-rebirth-white sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-sans text-sm font-medium uppercase tracking-label">{brand.name}</p>
          <p className="label-caps mt-4">{brand.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-rebirth-muted">
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-rebirth-white"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-rebirth-muted">
            <a href={`mailto:${contactEmail}`} className="transition hover:text-rebirth-white">
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <p className="label-caps">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-rebirth-muted">
              {footerLinks.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-rebirth-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-caps">Studio</p>
            <p className="body-muted mt-5 max-w-xs text-sm">
              REBIRTH turns identity into content, content into momentum, and momentum into movement.
            </p>
            <p className="label-caps mt-10 text-rebirth-white/25">
              © {new Date().getFullYear()} REBIRTH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
