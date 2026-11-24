import { WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function MobileActionBar() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <section
      aria-label="Aksi cepat WhatsApp dan Rute"
      className="dark-surface fixed inset-x-0 bottom-0 z-40 border-t border-asphalt-border bg-asphalt px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[var(--shadow-action-bar)] md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={generalWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover"
        >
          Chat WA
        </a>
        <a
          href={WORKSHOP_PROFILE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-on-dark/40 bg-asphalt-elevated px-4 py-2.5 text-sm font-semibold text-on-dark transition-colors duration-150 hover:border-on-dark hover:bg-asphalt active:bg-asphalt"
        >
          Rute Maps
        </a>
      </div>
    </section>
  );
}
