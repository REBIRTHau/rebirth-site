import { assets } from "@/lib/assets";
import { workItems } from "@/data/work";

export function AssetPreloads() {
  const portfolioImages = [...new Set(workItems.map((item) => item.image).filter(Boolean))];

  return (
    <>
      <link rel="preload" href={assets.logoIcon} as="image" type="image/png" fetchPriority="high" />
      <link rel="preload" href={assets.hero.poster} as="image" type="image/jpeg" />
      <link rel="preload" href={assets.hero.video} as="video" type="video/mp4" />
      {portfolioImages.map((href) => (
        <link key={href} rel="preload" href={href} as="image" />
      ))}
    </>
  );
}
