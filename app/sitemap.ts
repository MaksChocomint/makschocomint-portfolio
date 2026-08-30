import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://makschocomint.ru/",
      lastModified: new Date("2026-08-30"),
      changeFrequency: "monthly",
      priority: 1,
      images: ["https://makschocomint.ru/og-image.png"],
    },
  ];
}
