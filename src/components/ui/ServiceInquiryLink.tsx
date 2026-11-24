"use client";

import type { ServiceSlug } from "@/data/workshop";

interface ServiceInquiryLinkProps {
  serviceSlug: ServiceSlug;
  serviceTitle: string;
  variant?: "default" | "accent";
}

export function ServiceInquiryLink({
  serviceSlug,
  serviceTitle,
  variant = "default",
}: ServiceInquiryLinkProps) {
  function handleClick() {
    window.dispatchEvent(
      new CustomEvent("motuba:select-service", {
        detail: { serviceSlug },
      }),
    );

    const section = document.getElementById("keluhan");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    section?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Tanya layanan ${serviceTitle} lewat form keluhan`}
      className={
        variant === "accent"
          ? "inline-flex min-h-11 items-center justify-center rounded-[4px] bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover"
          : "inline-flex min-h-11 items-center justify-center rounded-[4px] border border-ink-muted bg-card px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-surface active:bg-surface"
      }
    >
      Tanya layanan ini
    </button>
  );
}
