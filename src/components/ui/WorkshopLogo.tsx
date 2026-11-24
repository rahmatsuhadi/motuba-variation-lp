import Image from "next/image";

interface WorkshopLogoProps {
  variant?: "dark" | "light";
}

export function WorkshopLogo({ variant = "dark" }: WorkshopLogoProps) {
  const isDark = variant === "dark";

  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span
        className={
          isDark
            ? "inline-flex shrink-0 items-center justify-center rounded-[4px] bg-on-dark px-1.5 py-1"
            : "inline-flex shrink-0 items-center justify-center"
        }
      >
        <Image
          src="/images/logo-motuba-mark.png"
          alt=""
          aria-hidden="true"
          width={65}
          height={36}
          sizes="65px"
          className="h-7 w-[51px] shrink-0 object-contain sm:h-8 sm:w-[58px]"
        />
      </span>
      <span className="flex min-w-0 flex-col text-left">
        <span
          className={`font-display text-lg font-bold leading-none tracking-tight sm:text-xl ${
            isDark ? "text-on-dark" : "text-ink"
          }`}
        >
          Motuba Variation
        </span>
        <span
          className={`mt-0.5 text-xs font-medium leading-tight ${
            isDark ? "text-on-dark-muted" : "text-ink-muted"
          }`}
        >
          Workshop, Srandakan
        </span>
      </span>
    </span>
  );
}
