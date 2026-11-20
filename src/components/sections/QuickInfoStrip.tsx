import { QUICK_INFO_ITEMS } from "@/data/workshop";

export function QuickInfoStrip() {
  return (
    <section
      aria-label="Ringkasan operasional bengkel"
      className="border-y border-ink bg-surface"
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 divide-y divide-ink-muted/35 md:grid-cols-3 md:divide-x md:divide-y-0">
          {QUICK_INFO_ITEMS.map((item) => (
            <div
              key={item.code}
              className="py-5 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <dt className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                <span className="font-mono font-medium text-accent">
                  {item.code}
                </span>
                <span>{item.label}</span>
              </dt>
              <dd className="mt-1.5 text-base font-bold text-ink">
                {item.value}
              </dd>
              <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
