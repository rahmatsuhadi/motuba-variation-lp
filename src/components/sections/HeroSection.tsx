import Image from "next/image";
import { HERO_PHOTO, WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="dark-surface relative overflow-hidden bg-asphalt text-on-dark"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:h-full lg:w-[58%]">
        <Image
          src={HERO_PHOTO.imageSrc}
          alt={HERO_PHOTO.alt}
          width={HERO_PHOTO.width}
          height={HERO_PHOTO.height}
          sizes="(max-width: 1023px) 100vw, 60vw"
          preload={true}
          fetchPriority="high"
          className="h-full w-full object-cover object-[58%_50%]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-asphalt to-transparent lg:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none hidden lg:absolute lg:inset-0 lg:block lg:bg-gradient-to-r lg:from-asphalt lg:via-asphalt/70 lg:via-30% lg:to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1160px] px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8 lg:py-24">
        <div className="lg:max-w-[540px]">
          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.5rem,5.2vw+0.9rem,4.35rem)] font-bold leading-[0.98] tracking-[-0.02em] text-on-dark"
          >
            Bengkel Mobil Tua di Srandakan, Bantul
          </h1>

          <p className="mt-5 max-w-[50ch] text-[clamp(1rem,0.25vw+0.95rem,1.0625rem)] leading-[1.65] text-on-dark-muted">
            Bengkel rumahan spesialis motuba dekat Jl. Kuwaru dan JJLS. Melayani
            servis mesin dan karburator, pengecatan bodi, variasi, hingga jemput
            unit area sekitar. Paling aktif buka tiap hari Minggu, hari lain
            fleksibel sesuai janjian WA.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-accent px-6 py-3 text-base font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover"
            >
              Chat WhatsApp Langsung
            </a>
            <a
              href="#keluhan"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-on-dark/45 bg-asphalt-elevated px-6 py-3 text-base font-semibold text-on-dark transition-colors duration-150 hover:border-on-dark hover:bg-asphalt active:bg-asphalt"
            >
              Isi Form Cek Keluhan
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-on-dark-muted">
            <a
              href={WORKSHOP_PROFILE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-medium text-on-dark underline decoration-on-dark/40 underline-offset-4 transition-colors duration-150 hover:text-accent-bright hover:decoration-accent-bright"
            >
              Buka Rute Google Maps
            </a>
            <a
              href={WORKSHOP_PROFILE.phoneHref}
              className="inline-flex min-h-11 items-center font-medium text-on-dark-muted transition-colors duration-150 hover:text-on-dark"
            >
              Telp / WA:{" "}
              <span className="ml-1.5 font-mono font-medium text-on-dark">
                {WORKSHOP_PROFILE.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
