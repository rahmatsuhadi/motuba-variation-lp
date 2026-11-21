import type { Metadata } from "next";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { MobileActionBar } from "@/components/sections/MobileActionBar";
import { QuickInfoStrip } from "@/components/sections/QuickInfoStrip";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HERO_PHOTO, WORKSHOP_PROFILE } from "@/data/workshop";
import {
  buildHomeStructuredData,
  HOME_DESCRIPTION,
  HOME_TITLE,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    siteName: WORKSHOP_PROFILE.brandName,
    locale: "id_ID",
    type: "website",
    images: HERO_PHOTO.imageSrc
      ? [
          {
            url: HERO_PHOTO.imageSrc,
            width: HERO_PHOTO.width,
            height: HERO_PHOTO.height,
            alt: HERO_PHOTO.alt,
            type: "image/jpeg",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: HERO_PHOTO.imageSrc
      ? [
          {
            url: HERO_PHOTO.imageSrc,
            alt: HERO_PHOTO.alt,
          },
        ]
      : undefined,
  },
};

export default function HomePage() {
  const structuredData = buildHomeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static JSON-LD with escaped '<' per Next.js guide
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <a href="#main-content" className="skip-link">
        Langsung ke konten utama
      </a>

      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <QuickInfoStrip />
        <ServicesSection />
        <GallerySection />
        <ConsultationSection />
        <ReviewsSection />
        <LocationSection />
      </main>

      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
