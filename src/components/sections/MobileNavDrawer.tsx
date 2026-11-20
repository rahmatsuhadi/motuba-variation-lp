"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { NavItem } from "@/data/workshop";

interface MobileNavDrawerProps {
  navItems: readonly NavItem[];
  whatsappUrl: string;
  phoneDisplay: string;
  address: string;
}

export function MobileNavDrawer({
  navItems,
  whatsappUrl,
  phoneDisplay,
  address,
}: MobileNavDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const wasOpenRef = useRef(false);
  const restoreFocusRef = useRef(false);

  const closeDrawer = useCallback((restoreFocus: boolean) => {
    restoreFocusRef.current = restoreFocus;
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();

      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
          event.preventDefault();
          closeDrawer(true);
          return;
        }

        if (event.key !== "Tab" || !drawerRef.current) {
          return;
        }

        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) {
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }

    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      if (restoreFocusRef.current) {
        restoreFocusRef.current = false;
        triggerRef.current?.focus();
      }
    }
  }, [isOpen, closeDrawer]);

  const drawerOverlay =
    isOpen && typeof document !== "undefined"
      ? createPortal(
          <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
            <button
              type="button"
              aria-label="Tutup menu navigasi"
              onClick={() => closeDrawer(true)}
              className="fixed inset-0 bg-ink/45"
              tabIndex={-1}
            />
            <div
              ref={drawerRef}
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi Motuba Variation Workshop"
              className="relative z-10 flex h-full w-full max-w-xs flex-col justify-between overflow-y-auto border-l-2 border-ink bg-canvas p-5 shadow-[-8px_0_24px_rgba(28,27,24,0.18)]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink pb-4">
                  <span className="font-display text-xl font-bold text-ink">
                    Menu Bengkel
                  </span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => closeDrawer(true)}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[4px] border border-ink-muted bg-canvas px-3 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-surface"
                  >
                    Tutup
                  </button>
                </div>

                <nav aria-label="Navigasi mobile" className="mt-4">
                  <ul className="divide-y divide-rule border-b border-rule">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => closeDrawer(false)}
                          className="flex min-h-12 items-center justify-between py-3 text-base font-semibold text-ink transition-colors duration-150 hover:text-accent"
                        >
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => closeDrawer(false)}
                    className="flex min-h-12 w-full items-center justify-center rounded-[4px] bg-accent px-4 py-3 text-base font-semibold text-on-accent transition-colors duration-150 hover:bg-accent-hover active:bg-accent-hover"
                  >
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-6 border-t border-rule pt-4 text-xs leading-relaxed text-ink-muted">
                <p className="font-semibold text-ink">
                  Telepon / WA: {phoneDisplay}
                </p>
                <p className="mt-1">{address}</p>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-11 min-w-11 shrink-0 items-center gap-1.5 rounded-[4px] border border-ink bg-canvas px-3 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface active:bg-surface"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 4.5H15.5M2.5 9H15.5M2.5 13.5H15.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
        <span>Menu</span>
      </button>

      {drawerOverlay}
    </div>
  );
}
