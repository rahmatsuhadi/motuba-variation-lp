import { WorkshopLogo } from "@/components/ui/WorkshopLogo";
import { NAV_ITEMS, WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <footer className="border-t-2 border-ink bg-surface pt-10 pb-[calc(5.75rem+env(safe-area-inset-bottom))] md:py-12">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-7">
          <a
            href="#top"
            className="inline-flex min-h-11 items-center rounded-[2px]"
          >
            <WorkshopLogo />
          </a>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-ink">
            Bengkel mobil rumahan spesialis mobil tua di Jopaten RT 5,
            Poncosari, Srandakan, Bantul. Paling aktif buka di hari Minggu dan
            hari lain sesuai janjian WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-5">
          <div>
            <h2 className="font-mono text-xs font-medium text-ink-muted">
              Navigasi halaman
            </h2>
            <ul className="mt-2 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="-mx-1 inline-flex min-h-11 min-w-11 items-center px-1 text-sm font-semibold text-ink transition-colors duration-150 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xs font-medium text-ink-muted">
              Kontak &amp; rute langsung
            </h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href={generalWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-1 inline-flex min-h-11 min-w-11 flex-wrap items-center gap-x-1 px-1 text-sm font-semibold text-accent transition-colors duration-150 hover:text-accent-hover"
                >
                  <span>Chat WhatsApp</span>
                  <span className="whitespace-nowrap">
                    ({WORKSHOP_PROFILE.phoneDisplay})
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={WORKSHOP_PROFILE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-1 inline-flex min-h-11 min-w-11 items-center px-1 text-sm font-semibold text-ink transition-colors duration-150 hover:text-accent"
                >
                  Buka Rute Google Maps
                </a>
              </li>
              <li>
                <a
                  href={WORKSHOP_PROFILE.phoneHref}
                  className="-mx-1 inline-flex min-h-11 min-w-11 items-center px-1 text-sm font-semibold text-ink transition-colors duration-150 hover:text-accent"
                >
                  Telepon Langsung
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
