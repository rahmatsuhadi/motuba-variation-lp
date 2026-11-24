import { CopyButton } from "@/components/ui/CopyButton";
import { WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function LocationSection() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <section
      id="lokasi"
      aria-labelledby="lokasi-heading"
      className="bg-canvas py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <h2
            id="lokasi-heading"
            className="font-display text-[clamp(2rem,3.2vw+0.85rem,3rem)] font-bold leading-[1.05] text-ink"
          >
            Lokasi Bengkel di Srandakan, Bantul
          </h2>

          <dl className="mt-6 grid grid-cols-1 divide-y divide-border rounded-[6px] border border-border bg-card sm:grid-cols-2">
            <div className="p-5 sm:col-span-2">
              <dt className="text-xs font-semibold text-ink-muted">
                Alamat lengkap
              </dt>
              <dd className="mt-1.5 max-w-[58ch] text-base font-medium leading-relaxed text-ink">
                <address className="not-italic">
                  {WORKSHOP_PROFILE.address}
                </address>
              </dd>
            </div>

            <div className="p-5 sm:col-span-2">
              <dt className="text-xs font-semibold text-ink-muted">
                Patokan jalur
              </dt>
              <dd className="mt-1.5 max-w-[58ch] text-base leading-relaxed text-ink">
                {WORKSHOP_PROFILE.routeLandmark}
              </dd>
            </div>

            <div className="p-5 sm:border-r sm:border-border">
              <dt className="text-xs font-semibold text-ink-muted">
                Plus Code Google Maps
              </dt>
              <dd className="mt-1.5 font-mono text-sm font-medium text-ink">
                {WORKSHOP_PROFILE.plusCodeShort}
              </dd>
            </div>

            <div className="p-5">
              <dt className="text-xs font-semibold text-ink-muted">
                Koordinat peta
              </dt>
              <dd className="mt-1.5 font-mono text-sm font-medium text-ink">
                {WORKSHOP_PROFILE.coordinates.lat},{" "}
                {WORKSHOP_PROFILE.coordinates.lng}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap items-start gap-3">
            <CopyButton value={WORKSHOP_PROFILE.address} label="Salin Alamat" />
            <CopyButton
              value={WORKSHOP_PROFILE.plusCodeFull}
              label="Salin Plus Code"
            />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="dark-surface rounded-[6px] bg-asphalt p-6 text-on-dark sm:p-8">
            <h3 className="font-display text-2xl font-bold leading-tight text-on-dark sm:text-3xl">
              Chat WhatsApp Dulu Sebelum Berangkat
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-on-dark-muted sm:text-base">
              Karena jadwal bengkel fleksibel dan pengerjaan sering menyesuaikan
              kondisi lapangan, chat WhatsApp dulu sebelum berangkat ke lokasi
              agar garasi dipastikan buka dan siap menerima unit.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] bg-accent px-5 py-3 text-base font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover"
              >
                Chat WhatsApp Dulu
              </a>
              <a
                href={WORKSHOP_PROFILE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] border border-on-dark/45 bg-asphalt-elevated px-5 py-3 text-base font-semibold text-on-dark transition-colors duration-150 hover:border-on-dark hover:bg-asphalt active:bg-asphalt"
              >
                Buka Rute di Google Maps
              </a>
              <a
                href={WORKSHOP_PROFILE.phoneHref}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] border border-asphalt-border bg-asphalt px-5 py-3 text-base font-semibold text-on-dark transition-colors duration-150 hover:border-on-dark/60 hover:bg-asphalt-elevated"
              >
                <span>Telepon</span>
                <span className="ml-1.5 font-mono font-medium">
                  {WORKSHOP_PROFILE.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
