import { QUICK_INFO_ITEMS, type QuickInfoItem } from "@/data/workshop";

function QuickInfoIcon({ icon }: { icon: QuickInfoItem["icon"] }) {
  if (icon === "calendar") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-accent"
      >
        <rect
          x="3"
          y="4.5"
          width="14"
          height="12.5"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M6.5 2.5V5.5M13.5 2.5V5.5M3 8.5H17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (icon === "map") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-accent"
      >
        <path
          d="M10 17.5C10 17.5 15.5 12.6 15.5 8.25C15.5 5.21 13.04 2.75 10 2.75C6.96 2.75 4.5 5.21 4.5 8.25C4.5 12.6 10 17.5 10 17.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="8.25"
          r="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    );
  }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-accent"
    >
      <path
        d="M2.5 5.5H12V13.5H2.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H15.2L17.5 10.5V13.5H12V8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle
        cx="5.75"
        cy="15"
        r="1.75"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="14.5"
        cy="15"
        r="1.75"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function QuickInfoStrip() {
  return (
    <section
      aria-label="Ringkasan operasional bengkel"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-[1160px] px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {QUICK_INFO_ITEMS.map((item) => (
            <div
              key={item.label}
              className="py-5 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <dt className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
                <QuickInfoIcon icon={item.icon} />
                <span>{item.label}</span>
              </dt>
              <dd className="mt-2 text-base font-bold text-ink">
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
