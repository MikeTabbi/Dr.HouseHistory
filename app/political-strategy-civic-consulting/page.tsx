import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Political Strategy & Civic Consulting — House Legacy Group",
  description:
    "Civic engagement strategy, public messaging, and institutional advisory for complex political and community environments.",
};

const coreServices = [
  "civic engagement strategy",
  "public messaging and narrative framing",
  "policy and historical research",
  "speech and presentation support",
  "educational and institutional strategy",
  "campaign and public leadership advisory",
  "stakeholder mapping and community outreach",
];

const idealClients = [
  "nonprofits",
  "civic organizations",
  "school systems",
  "local and state campaigns",
  "advocacy groups",
  "foundations",
  "public leadership initiatives",
];

export default function PoliticalStrategyCivicConsultingPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="mb-6">
          <Link
            href="/subsidiaries"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Subsidiaries
          </Link>
        </p>
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Subsidiary
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">
          Political Strategy &amp; Civic Consulting
        </h1>
        <p className="mt-4 text-lg font-medium text-neutral-800">
          Political Strategy &amp; Civic Consulting helps organizations navigate public life with
          clarity, historical perspective, and strategic discipline.
        </p>

        <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
          <p>
            This is the public-facing strategy and governance arm—a consulting practice focused on
            civic engagement, public education, policy framing, community strategy, and institutional
            research.
          </p>
          <p>
            This division provides research, messaging, strategy, and advisory support for civic
            organizations, educational institutions, nonprofits, campaigns, and policy initiatives. It is
            especially suited for work involving community engagement, public messaging, educational
            policy, democratic participation, and long-term institutional thinking.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">Core services</h2>
        <ul className="mt-6 space-y-3 text-neutral-600">
          {coreServices.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                aria-hidden
              />
              <span className="text-pretty leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">Ideal clients</h2>
        <ul className="mt-6 space-y-3 text-neutral-600">
          {idealClients.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                aria-hidden
              />
              <span className="text-pretty leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-pretty text-lg leading-relaxed text-neutral-600">
          Political Strategy &amp; Civic Consulting is the public-impact arm of House Legacy Group,
          helping leaders and institutions align messaging, strategy, and civic purpose in complex
          political and social environments—supporting political ambitions, public speaking,
          educational policy work, legislative interests, and broader civic leadership.
        </p>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Schedule Consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
