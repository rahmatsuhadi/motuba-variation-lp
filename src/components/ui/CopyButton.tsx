"use client";

import { useEffect, useRef, useState } from "react";

interface CopyButtonProps {
  value: string;
  label: string;
  copiedLabel?: string;
  className?: string;
}

export function CopyButton({
  value,
  label,
  copiedLabel = "Tersalin",
  className = "",
}: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      setStatus("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
      timerRef.current = setTimeout(() => {
        setStatus("idle");
      }, 2000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex min-h-11 items-center justify-center rounded-[4px] border border-ink-muted bg-canvas px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-surface active:bg-surface ${className}`}
      >
        {status === "copied" ? copiedLabel : label}
      </button>
      <span aria-live="polite" className="sr-only">
        {status === "copied" ? `${label}: ${copiedLabel}` : ""}
      </span>
      {status === "error" ? (
        <p role="alert" className="text-xs font-medium text-accent">
          Browser memblokir salin otomatis. Silakan blok dan salin teksnya
          secara manual.
        </p>
      ) : null}
    </div>
  );
}
