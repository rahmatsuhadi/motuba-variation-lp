import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from "@/data/workshop";

export function ReviewsSection() {
  return (
    <section
      id="ulasan"
      aria-labelledby="ulasan-heading"
      className="border-y border-border bg-surface py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              id="ulasan-heading"
              className="font-display text-[clamp(2rem,3.2vw+0.85rem,3rem)] font-bold leading-[1.05] text-ink"
            >
              Ulasan Pelanggan di Google Maps
            </h2>
            <p className="mt-2 max-w-[54ch] text-sm leading-relaxed text-ink-muted sm:text-base">
              Garasi rumahan ini mengutamakan obrolan santai langsung dengan
              mekanik sambil cek kondisi mobil, bukan ruang tunggu formal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div>
              <p className="font-display text-3xl font-bold leading-none text-ink">
                {GOOGLE_REVIEWS_SUMMARY.ratingDisplay} / 5
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                Berdasarkan {GOOGLE_REVIEWS_SUMMARY.reviewCount} ulasan asli di
                Google Maps
              </p>
            </div>
            <a
              href={GOOGLE_REVIEWS_SUMMARY.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-[4px] border border-ink-muted bg-card px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-canvas"
            >
              Lihat &amp; tulis ulasan di Google Maps
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {GOOGLE_REVIEWS.map((review) => (
            <figure
              key={review.author}
              className="flex flex-col justify-between rounded-[6px] border border-border bg-card p-6 sm:p-8"
            >
              <div>
                <p className="text-sm font-semibold text-accent">
                  {review.rating} dari 5 bintang
                </p>
                <blockquote className="mt-3 font-display text-[clamp(1.6rem,2.4vw+0.9rem,2.25rem)] font-bold leading-[1.15] text-ink">
                  &ldquo;{review.comment}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-5 text-sm text-ink-muted">
                <span className="font-semibold text-ink">{review.author}</span>
                <span>, {review.sourceLabel}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
