import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from "@/data/workshop";

export function ReviewsSection() {
  return (
    <section
      id="ulasan"
      aria-labelledby="ulasan-heading"
      className="py-12 sm:py-16 lg:py-[88px]"
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-t-2 border-ink pt-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2
              id="ulasan-heading"
              className="font-display text-[clamp(1.75rem,3vw+0.85rem,2.75rem)] font-bold leading-[1.08] text-ink"
            >
              Catatan Asli dari Pelanggan di Lokasi
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 lg:col-span-5 lg:justify-end">
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
              className="inline-flex min-h-11 items-center rounded-[4px] border border-ink bg-canvas px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface"
            >
              Lihat &amp; tulis ulasan di Google Maps
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 divide-y divide-rule border-y border-ink md:grid-cols-2 md:divide-x md:divide-y-0">
          {GOOGLE_REVIEWS.map((review) => (
            <figure
              key={review.author}
              className="py-7 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-mono text-xs font-medium text-accent">
                {review.rating} dari 5 bintang
              </p>
              <blockquote className="mt-3 font-display text-[clamp(1.5rem,2.2vw+0.9rem,2.25rem)] font-bold leading-[1.15] text-ink">
                &ldquo;{review.comment}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink-muted">
                <span className="font-semibold text-ink">{review.author}</span>
                <span>, {review.sourceLabel}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-5 max-w-[65ch] text-sm leading-relaxed text-ink-muted">
          Garasi rumahan kami mengutamakan obrolan santai langsung dengan
          mekanik sambil cek kondisi mobil, bukan ruang tunggu formal.
        </p>
      </div>
    </section>
  );
}
