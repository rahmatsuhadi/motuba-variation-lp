import type { MetadataRoute } from "next";
import { getWorkshopImageUrls } from "@/lib/seo";
import { SITE_LAST_MODIFIED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
      images: getWorkshopImageUrls(),
    },
  ];
}
