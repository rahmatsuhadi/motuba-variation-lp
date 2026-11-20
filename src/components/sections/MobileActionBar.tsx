import { WORKSHOP_PROFILE } from "@/data/workshop";
import { buildGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function MobileActionBar() {
  const generalWaUrl = buildGeneralWhatsAppUrl(WORKSHOP_PROFILE.whatsappE164);

  return (
    <section
      aria-label="Aksi cepat WhatsApp dan Rute"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-canvas px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(28,27,24,0.12)] md:hidden"
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
          className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-ink bg-canvas px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface active:bg-surface"
        >
          Rute Maps
        </a>
      </div>
    </section>
  );
}
