import "@/app/globals.css";
import { AssetPreloads } from "@/components/AssetPreloads";
import { SiteShell } from "@/components/SiteShell";
import { defaultSEO } from "@/data/seo";
import { fontSans } from "@/lib/fonts";

export const metadata = defaultSEO;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <head>
        <AssetPreloads />
      </head>
      <body className="min-h-screen bg-rebirth-void font-sans antialiased text-rebirth-white">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
