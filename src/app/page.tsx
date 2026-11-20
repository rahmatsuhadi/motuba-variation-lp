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

export default function HomePage() {
  return (
    <>
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
