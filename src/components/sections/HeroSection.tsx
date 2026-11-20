import { WorkshopPhotoFrame } from "@/components/ui/WorkshopPhotoFrame";
import { HERO_PHOTO, WORKSHOP_PROFILE } from "@/data/workshop";

export function HeroSection() {
  return (
    <section
      id="top"
      className="py-10 sm:py-14 lg:py-20"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-10 lg:px-8">
        <div className="lg:col-span-7">
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.35rem,5vw+1rem,4.25rem)] font-bold leading-[1.02] tracking-tight text-ink"
          >
            Garasi Motuba di Jalur Pesisir Selatan.
          </h1>

          <p className="mt-5 max-w-[60ch] text-[clamp(1rem,0.25vw+0.94rem,1.0625rem)] leading-[1.65] text-ink-muted">
            Bengkel rumahan di Jopaten RT 5, Poncosari, Srandakan untuk servis,
            cat, dan variasi mobil tua. Jadwal fleksibel lewat janjian WhatsApp,
            paling aktif di hari Minggu.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#keluhan"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-accent px-6 py-3 text-base font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover"
            >
              Tanya Keluhan via WA
            </a>
            <a
              href={WORKSHOP_PROFILE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-ink bg-canvas px-6 py-3 text-base font-semibold text-ink transition-colors duration-150 hover:bg-surface active:bg-surface"
            >
              Buka Rute Maps
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <WorkshopPhotoFrame
            slotCode={HERO_PHOTO.slotCode}
            imageSrc={HERO_PHOTO.imageSrc}
            placeholderSrc={HERO_PHOTO.placeholderSrc}
            alt={HERO_PHOTO.alt}
            aspectRatio="4/3"
            aspectLabel={HERO_PHOTO.aspectLabel}
            width={HERO_PHOTO.width}
            height={HERO_PHOTO.height}
            sizes="(max-width: 1023px) 100vw, 460px"
            isHero={true}
            placeholderHint={HERO_PHOTO.caption}
          />
        </div>
      </div>
    </section>
  );
}
