import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Content Production — House Legacy Group",
  description:
    "Documentaries, podcasts, educational media, and historically grounded narrative production.",
};

const coreServices = [
  "documentary development and production",
  "podcast production",
  "educational video series",
  "script development and research support",
  "historical consulting for film and media",
  "public history and digital storytelling projects",
];

const idealClients = [
  "schools and universities",
  "nonprofits",
  "public history organizations",
  "foundations",
  "mission-driven brands",
  "podcast and documentary collaborators",
];

export default function MediaContentProductionPage() {
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
          Media &amp; Content Production
        </h1>
        <p className="mt-4 text-lg font-medium text-neutral-800">
          Media &amp; Content Production turns research, ideas, and lived experience into compelling
          stories.
        </p>

        <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
          <p>
            This is the storytelling and communications arm of House Legacy Group—a media division
            focused on documentary work, podcasting, educational storytelling, digital content, and
            historically grounded narrative production.
          </p>
          <p>
            This division develops documentaries, podcasts, educational media, digital storytelling
            projects, and narrative content that bring historical, civic, and cultural subjects to wider
            audiences. It is designed for institutions, educators, nonprofits, creators, and brands
            seeking thoughtful, mission-driven content.
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
          Media &amp; Content Production is House Legacy Group&apos;s storytelling arm, producing
          thoughtful, research-driven content that educates, inspires, and preserves memory through film,
          audio, and digital media. This subsidiary connects historical knowledge, podcast vision, public
          engagement, and communication strengths into a coherent media platform.
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
