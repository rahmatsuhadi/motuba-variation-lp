import Image from "next/image";

export function WorkshopLogo() {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 sm:gap-3">
      <Image
        src="/images/logo-motuba-mark.png"
        alt=""
        aria-hidden="true"
        width={65}
        height={36}
        loading="eager"
        className="h-8 w-[58px] shrink-0 object-contain sm:h-9 sm:w-[65px]"
      />
      <span className="flex min-w-0 flex-col text-left">
        <span className="font-display text-lg font-bold leading-none tracking-tight text-ink sm:text-xl">
          Motuba Variation
        </span>
        <span className="mt-0.5 text-xs font-medium leading-tight text-ink-muted">
          Workshop
        </span>
      </span>
    </span>
  );
}
