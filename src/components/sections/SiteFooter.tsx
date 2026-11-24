import { WorkshopLogo } from "@/components/ui/WorkshopLogo";
import { NAV_ITEMS, WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <footer className="dark-surface border-t border-asphalt-border bg-asphalt pt-12 pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-on-dark md:py-14">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-7">
          <a
            href="#top"
            className="inline-flex min-h-11 items-center rounded-[4px]"
          >
            <WorkshopLogo variant="dark" />
          </a>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-on-dark-muted">
            Bengkel mobil rumahan spesialis mobil tua di Srandakan, Bantul,
            Yogyakarta (Jogja). Paling aktif buka di hari Minggu dan hari lain
            sesuai janjian WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-5">
          <div>
            <h2 className="text-xs font-semibold text-on-dark-muted">
              Navigasi halaman
            </h2>
            <ul className="mt-2 space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="-mx-1 inline-flex min-h-11 min-w-11 items-center px-1 text-sm font-semibold text-on-dark/90 transition-colors duration-150 hover:text-accent-bright"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-on-dark-muted">
              Kontak &amp; rute langsung
            </h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href={generalWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-1 inline-flex min-h-11 min-w-11 flex-wrap items-center gap-x-1 px-1 text-sm font-semibold text-accent-bright transition-colors duration-150 hover:text-on-dark"
                >
                  <span>Chat WhatsApp</span>
                  <span className="whitespace-nowrap font-mono font-medium">
                    ({WORKSHOP_PROFILE.phoneDisplay})
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={WORKSHOP_PROFILE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-1 inline-flex min-h-11 min-w-11 items-center px-1 text-sm font-semibold text-on-dark/90 transition-colors duration-150 hover:text-accent-bright"
                >
                  Buka Rute Google Maps
                </a>
              </li>
              <li>
                <a
                  href={WORKSHOP_PROFILE.phoneHref}
                  className="-mx-1 inline-flex min-h-11 min-w-11 items-center px-1 text-sm font-semibold text-on-dark/90 transition-colors duration-150 hover:text-accent-bright"
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
