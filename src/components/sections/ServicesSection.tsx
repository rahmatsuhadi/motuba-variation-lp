import { ServiceInquiryLink } from "@/components/ui/ServiceInquiryLink";
import { SERVICES } from "@/data/workshop";

export function ServicesSection() {
  const coreService = SERVICES.find((service) => service.tier === "core");
  const bodyServices = SERVICES.filter((service) => service.tier === "body");
  const pickupService = SERVICES.find((service) => service.tier === "pickup");

  return (
    <section
      id="layanan"
      aria-labelledby="layanan-heading"
      className="bg-canvas py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="layanan-heading"
            className="font-display text-[clamp(2rem,3.2vw+0.85rem,3rem)] font-bold leading-[1.05] text-ink"
          >
            Pengerjaan di Garasi
          </h2>
          <p className="max-w-[52ch] text-sm leading-relaxed text-ink-muted sm:text-base">
            Mobil tua punya kondisi yang beda-beda tiap unit. Karena itu biaya
            dan lama pengerjaan dibahas terbuka lewat foto, deskripsi gejala,
            atau cek langsung di bengkel.
          </p>
        </div>

        {coreService ? (
          <article className="mt-8 grid grid-cols-1 gap-6 rounded-[6px] border border-border bg-card p-6 sm:p-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                {coreService.title}
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-ink-muted">
                {coreService.summary}
              </p>
              <div className="mt-5">
                <ServiceInquiryLink
                  serviceSlug={coreService.slug}
                  serviceTitle={coreService.title}
                  variant="accent"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink sm:text-base">
                {coreService.symptomsOrNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <p className="mt-5 rounded-[4px] bg-surface px-4 py-3 text-sm leading-relaxed text-ink">
                <span className="font-semibold">Catatan: </span>
                {coreService.conditionNote}
              </p>
            </div>
          </article>
        ) : null}

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {bodyServices.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col justify-between gap-6 rounded-[6px] border border-border bg-card p-6"
            >
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.65] text-ink-muted sm:text-base">
                  {service.summary}
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
                  {service.symptomsOrNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>

                <p className="mt-4 rounded-[4px] bg-surface px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                  <span className="font-semibold">Catatan: </span>
                  {service.conditionNote}
                </p>
              </div>

              <div>
                <ServiceInquiryLink
                  serviceSlug={service.slug}
                  serviceTitle={service.title}
                />
              </div>
            </article>
          ))}
        </div>

        {pickupService ? (
          <article className="mt-5 grid grid-cols-1 gap-6 rounded-[6px] border border-border bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl font-bold leading-tight text-ink">
                {pickupService.title}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.65] text-ink sm:text-base">
                {pickupService.summary}
              </p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-muted">
                {pickupService.symptomsOrNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-4 rounded-[4px] border border-border bg-card p-5 lg:col-span-5">
              <p className="text-sm leading-relaxed text-ink">
                <span className="font-semibold">Syarat &amp; jadwal: </span>
                {pickupService.conditionNote}
              </p>
              <div>
                <ServiceInquiryLink
                  serviceSlug={pickupService.slug}
                  serviceTitle={pickupService.title}
                />
              </div>
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}
