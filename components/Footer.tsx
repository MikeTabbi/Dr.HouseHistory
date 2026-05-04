import Link from "next/link";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subsidiaries", label: "Subsidiaries" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const LINKEDIN_URL = "https://www.linkedin.com";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 md:gap-8">
        <div>
          <p className="text-sm font-semibold text-neutral-900">House Legacy Group</p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Research. Strategy. Historical Intelligence.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {footerNav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-neutral-600 underline-offset-4 transition hover:text-neutral-900 hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm text-neutral-600">
          <p>
            <a
              href="mailto:info@houselegacygroup.com"
              className="font-medium text-neutral-900 underline-offset-4 hover:underline"
            >
              info@houselegacygroup.com
            </a>
          </p>
          <p className="mt-2">
            <a
              href="https://houselegacygroup.com"
              className="underline-offset-4 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              houselegacygroup.com
            </a>
          </p>
          <p className="mt-2">
            <a
              href={LINKEDIN_URL}
              className="underline-offset-4 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-neutral-200 pt-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} House Legacy Group. All rights reserved.
      </p>
    </footer>
  );
}
