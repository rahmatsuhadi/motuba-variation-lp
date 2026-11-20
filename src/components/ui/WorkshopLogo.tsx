// Dummy wordmark logo: ganti dengan <Image> dari public/images/ saat logo resmi pemilik tersedia.
export function WorkshopLogo() {
  return (
    <span className="inline-flex min-w-0 items-center gap-2 sm:gap-2.5">
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] border-2 border-ink bg-surface font-display text-lg font-bold tracking-tight text-ink"
      >
        MV
      </span>
      <span className="flex min-w-0 flex-col text-left">
        <span className="font-display text-lg font-bold leading-none tracking-tight text-ink sm:text-xl">
          Motuba Variation
        </span>
        <span className="mt-0.5 text-xs font-medium leading-tight text-ink-muted">
          Workshop, Srandakan
        </span>
      </span>
    </span>
  );
}
