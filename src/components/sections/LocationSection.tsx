import { CopyButton } from "@/components/ui/CopyButton";
import { WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function LocationSection() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <section
      id="lokasi"
      aria-labelledby="lokasi-heading"
      className="border-t border-ink py-12 sm:py-16 lg:py-[88px]"
    >
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <div className="border-t-2 border-ink pt-4">
            <h2
              id="lokasi-heading"
              className="font-display text-[clamp(1.75rem,3vw+0.85rem,2.75rem)] font-bold leading-[1.08] text-ink"
            >
              Bengkel Rumahan di Jopaten RT 5, Poncosari
            </h2>
          </div>

          <dl className="mt-6 divide-y divide-rule border-y border-ink">
            <div className="py-4">
              <dt className="text-xs font-semibold text-ink-muted">
                Alamat lengkap
              </dt>
              <dd className="mt-1 max-w-[58ch] text-base font-medium leading-relaxed text-ink">
                <address className="not-italic">
                  {WORKSHOP_PROFILE.address}
                </address>
              </dd>
            </div>

            <div className="py-4">
              <dt className="text-xs font-semibold text-ink-muted">
                Patokan jalur
              </dt>
              <dd className="mt-1 max-w-[58ch] text-base leading-relaxed text-ink">
                {WORKSHOP_PROFILE.routeLandmark}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold text-ink-muted">
                  Plus Code Google Maps
                </dt>
                <dd className="mt-1 font-mono text-sm font-medium text-ink">
                  {WORKSHOP_PROFILE.plusCodeShort}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-ink-muted">
                  Koordinat peta
                </dt>
                <dd className="mt-1 font-mono text-sm font-medium text-ink">
                  {WORKSHOP_PROFILE.coordinates.lat},{" "}
                  {WORKSHOP_PROFILE.coordinates.lng}
                </dd>
              </div>
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
          <div className="rounded-[4px] border-2 border-ink bg-surface p-6">
            <h3 className="font-display text-2xl font-bold leading-tight text-ink">
              Chat WhatsApp Dulu Sebelum Berangkat
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">
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
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] border border-ink bg-canvas px-5 py-3 text-base font-semibold text-ink transition-colors duration-150 hover:bg-surface active:bg-surface"
              >
                Buka Rute di Google Maps
              </a>
              <a
                href={WORKSHOP_PROFILE.phoneHref}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[4px] border border-ink-muted bg-canvas px-5 py-3 text-base font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-surface active:bg-surface"
              >
                Telepon {WORKSHOP_PROFILE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
