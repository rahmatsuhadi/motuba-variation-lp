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

      const inertedElements: HTMLElement[] = [];
      for (const child of Array.from(document.body.children)) {
        if (
          child instanceof HTMLElement &&
          !child.hasAttribute("data-mobile-nav-portal") &&
          !child.inert
        ) {
          child.inert = true;
          inertedElements.push(child);
        }
      }

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
        for (const el of inertedElements) {
          el.inert = false;
        }
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
          <div
            data-mobile-nav-portal=""
            className="dark-surface fixed inset-0 z-50 flex justify-end lg:hidden"
          >
            <button
              type="button"
              aria-label="Tutup menu navigasi"
              onClick={() => closeDrawer(true)}
              className="fixed inset-0 bg-asphalt/75"
              tabIndex={-1}
            />
            <div
              ref={drawerRef}
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi Motuba Variation Workshop"
              className="relative z-10 flex h-full w-full max-w-xs flex-col justify-between overflow-y-auto border-l border-asphalt-border bg-asphalt p-5 text-on-dark shadow-[var(--shadow-drawer)]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-asphalt-border pb-4">
                  <span className="font-display text-xl font-bold text-on-dark">
                    Menu Bengkel
                  </span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => closeDrawer(true)}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[4px] border border-on-dark/40 bg-asphalt-elevated px-3 text-sm font-semibold text-on-dark transition-colors duration-150 hover:border-on-dark hover:bg-asphalt"
                  >
                    Tutup
                  </button>
                </div>

                <nav aria-label="Navigasi mobile" className="mt-4">
                  <ul className="divide-y divide-asphalt-border border-b border-asphalt-border">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => closeDrawer(false)}
                          className="flex min-h-12 items-center justify-between py-3 text-base font-semibold text-on-dark transition-colors duration-150 hover:text-accent-bright"
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

              <div className="mt-6 border-t border-asphalt-border pt-4 text-xs leading-relaxed text-on-dark-muted">
                <p className="font-semibold text-on-dark">
                  Telepon / WA:{" "}
                  <span className="font-mono font-medium">{phoneDisplay}</span>
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
        aria-controls={isOpen ? "mobile-nav-drawer" : undefined}
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-11 min-w-11 shrink-0 items-center gap-1.5 rounded-[4px] border border-on-dark/40 bg-asphalt-elevated px-3 py-2 text-sm font-semibold text-on-dark transition-colors duration-150 hover:border-on-dark hover:bg-asphalt active:bg-asphalt"
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
