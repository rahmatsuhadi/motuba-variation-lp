import { ServiceInquiryLink } from "@/components/ui/ServiceInquiryLink";
import { SERVICES } from "@/data/workshop";

export function ServicesSection() {
  return (
    <section
      id="layanan"
      aria-labelledby="layanan-heading"
      className="py-12 sm:py-16 lg:py-[88px]"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="border-t-2 border-ink pt-4 lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <h2
            id="layanan-heading"
            className="font-display text-[clamp(1.75rem,3vw+0.85rem,2.75rem)] font-bold leading-[1.08] text-ink"
          >
            Pengerjaan di Garasi
          </h2>
          <p className="mt-4 max-w-[42ch] text-[clamp(1rem,0.25vw+0.94rem,1.0625rem)] leading-[1.65] text-ink-muted">
            Mobil tua punya kondisi yang beda-beda tiap unit. Karena itu biaya
            dan lama pengerjaan dibahas terbuka lewat foto, deskripsi gejala,
            atau cek langsung di bengkel.
          </p>
        </div>

        <ol className="divide-y divide-rule border-y border-ink lg:col-span-8">
          {SERVICES.map((service) => (
            <li key={service.code} className="py-7 first:pt-6 last:pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-medium text-accent">
                    {service.code}
                  </span>
                  <h3 className="font-display text-[clamp(1.25rem,1.4vw+0.85rem,1.6rem)] font-bold leading-[1.2] text-ink">
                    {service.title}
                  </h3>
                </div>
                <div className="shrink-0">
                  <ServiceInquiryLink
                    serviceSlug={service.slug}
                    serviceTitle={service.title}
                  />
                </div>
              </div>

              <p className="mt-3 max-w-[65ch] text-[clamp(1rem,0.25vw+0.94rem,1.0625rem)] leading-[1.65] text-ink">
                {service.summary}
              </p>

              <ul className="mt-4 space-y-2 border-l-2 border-ink-muted/40 pl-4 text-sm leading-relaxed text-ink-muted">
                {service.symptomsOrNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>

              <p className="mt-4 max-w-[65ch] rounded-[2px] bg-surface px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                <span className="font-semibold">Catatan: </span>
                {service.conditionNote}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
