"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/subsidiaries", label: "Subsidiaries" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-900 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-white/35 bg-white/5 text-xs font-semibold tracking-tight text-white/80"
            aria-hidden
          >
            HL
          </div>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            House Legacy Group
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex md:gap-10"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100 md:inline-flex"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-neutral-900/80"
              aria-hidden
            />
            Contact us
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <span className="text-lg leading-none">×</span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-neutral-900 px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900"
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-neutral-900/80"
                aria-hidden
              />
              Contact us
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
