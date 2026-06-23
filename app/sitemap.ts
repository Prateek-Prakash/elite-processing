import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: company.siteUrl,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
