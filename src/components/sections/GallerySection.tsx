import Image from "next/image";
import { WorkshopPhotoFrame } from "@/components/ui/WorkshopPhotoFrame";
import { GALLERY_SLOTS } from "@/data/workshop";

export function GallerySection() {
  const [featuredWork, ...supportingWorks] = GALLERY_SLOTS;

  return (
    <section
      id="garapan"
      aria-labelledby="garapan-heading"
      className="border-y border-border bg-surface py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="garapan-heading"
            className="font-display text-[clamp(2rem,3.2vw+0.85rem,3rem)] font-bold leading-[1.05] text-ink"
          >
            Garapan di Bengkel
          </h2>
          <p className="max-w-[52ch] text-sm leading-relaxed text-ink-muted sm:text-base">
            Foto asli beberapa mobil tua dan komponen yang pernah ditangani
            langsung di garasi Srandakan.
          </p>
        </div>

        {featuredWork ? (
          <article className="dark-surface mt-8 grid grid-cols-1 overflow-hidden rounded-[6px] bg-asphalt text-on-dark lg:grid-cols-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[340px]">
              <Image
                src={featuredWork.imageSrc}
                alt={featuredWork.alt}
                width={featuredWork.width}
                height={featuredWork.height}
                sizes="(max-width: 1023px) 100vw, 660px"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-5">
              <h3 className="font-display text-2xl font-bold leading-tight text-on-dark sm:text-3xl">
                {featuredWork.carModel}
              </h3>
              <p className="mt-3 text-sm leading-[1.65] text-on-dark-muted sm:text-base">
                {featuredWork.workSummary}
              </p>
              <a
                href="#keluhan"
                className="mt-6 inline-flex min-h-11 items-center justify-center self-start rounded-[4px] border border-on-dark/45 bg-asphalt-elevated px-4 py-2 text-sm font-semibold text-on-dark transition-colors duration-150 hover:border-on-dark hover:bg-asphalt"
              >
                Konsultasi keluhan serupa
              </a>
            </div>
          </article>
        ) : null}

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportingWorks.map((item) => (
            <article
              key={item.carModel}
              className="flex flex-col overflow-hidden rounded-[6px] border border-border bg-card"
            >
              <WorkshopPhotoFrame
                imageSrc={item.imageSrc}
                alt={item.alt}
                aspectRatio="4/3"
                width={item.width}
                height={item.height}
                sizes="(max-width: 767px) 100vw, 360px"
                objectPosition={item.objectPosition}
                className="rounded-none"
              />
              <div className="p-5">
                <h3 className="font-display text-xl font-bold leading-snug text-ink">
                  {item.carModel}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {item.workSummary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
