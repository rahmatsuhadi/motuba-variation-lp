import type { MetadataRoute } from "next";
import { GALLERY_SLOTS, HERO_PHOTO } from "@/data/workshop";
import { SITE_LAST_MODIFIED, SITE_URL, toAbsoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const workshopImages = [
    HERO_PHOTO.imageSrc,
    ...GALLERY_SLOTS.map((slot) => slot.imageSrc),
  ]
    .filter((src): src is string => Boolean(src))
    .map((src) => toAbsoluteUrl(src));

  return [
    {
      url: SITE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
      images: workshopImages,
    },
  ];
}
