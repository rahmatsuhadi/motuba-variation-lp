"use client";

import type { ServiceSlug } from "@/data/workshop";

interface ServiceInquiryLinkProps {
  serviceSlug: ServiceSlug;
  serviceTitle: string;
}

export function ServiceInquiryLink({
  serviceSlug,
  serviceTitle,
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
      className="inline-flex min-h-11 items-center rounded-[4px] border border-ink-muted bg-canvas px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-surface active:bg-surface"
    >
      Tanya layanan ini
    </button>
  );
}
