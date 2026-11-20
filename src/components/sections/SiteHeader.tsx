import { MobileNavDrawer } from "@/components/sections/MobileNavDrawer";
import { WorkshopLogo } from "@/components/ui/WorkshopLogo";
import { NAV_ITEMS, WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function SiteHeader() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <header className="sticky top-0 z-30 border-b border-ink bg-canvas">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-x-3 gap-y-2 px-3 py-2.5 sm:px-6 lg:flex-nowrap lg:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 min-w-0 max-w-full items-center rounded-[2px] py-0.5"
        >
          <WorkshopLogo />
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden lg:flex lg:items-center lg:gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-[4px] px-3 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:bg-surface hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={generalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center justify-center whitespace-nowrap rounded-[4px] bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover lg:inline-flex"
          >
            Chat WhatsApp
          </a>

          <MobileNavDrawer
            navItems={NAV_ITEMS}
            whatsappUrl={generalWaUrl}
            phoneDisplay={WORKSHOP_PROFILE.phoneDisplay}
            address={WORKSHOP_PROFILE.address}
          />
        </div>
      </div>
    </header>
  );
}
