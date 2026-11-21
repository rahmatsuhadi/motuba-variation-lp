import { WorkshopPhotoFrame } from "@/components/ui/WorkshopPhotoFrame";
import { GALLERY_SLOTS } from "@/data/workshop";

export function GallerySection() {
  return (
    <section
      id="garapan"
      aria-labelledby="garapan-heading"
      className="border-t border-ink py-12 sm:py-16 lg:py-[88px]"
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-t-2 border-ink pt-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="garapan-heading"
            className="font-display text-[clamp(1.75rem,3vw+0.85rem,2.75rem)] font-bold leading-[1.08] text-ink"
          >
            Garapan di Bengkel
          </h2>
          <p className="max-w-[54ch] text-sm leading-relaxed text-ink-muted sm:text-base">
            Foto asli beberapa mobil tua yang pernah mampir dan digarap langsung
            di bengkel.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {GALLERY_SLOTS.map((slot, index) => {
            const layoutClass =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                  ? "lg:col-span-5"
                  : "lg:col-span-6";

            const sizes =
              index === 0
                ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 640px"
                : index === 1
                  ? "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 460px"
                  : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 540px";

            return (
              <article key={slot.slotCode} className={layoutClass}>
                <WorkshopPhotoFrame
                  slotCode={slot.slotCode}
                  imageSrc={slot.imageSrc}
                  placeholderSrc={slot.placeholderSrc}
                  alt={slot.alt}
                  aspectRatio={slot.aspectRatio}
                  aspectLabel={slot.aspectLabel}
                  width={slot.width}
                  height={slot.height}
                  sizes={sizes}
                  placeholderHint={slot.placeholderHint}
                />
                <div className="mt-3">
                  <h3 className="font-display text-xl font-bold leading-snug text-ink">
                    {slot.carModel}
                  </h3>
                  <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-ink-muted">
                    {slot.workSummary}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
