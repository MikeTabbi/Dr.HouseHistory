import Link from "next/link";
import type { Metadata } from "next";
import { DivisionCard } from "@/components/DivisionCard";
import houseLegacy from "@/assets/HouseLegacy.png";
import houseLegacyAi from "@/assets/HouseLegacyAI.png";
import mediaContent from "@/assets/Media-Content.png";

export const metadata: Metadata = {
  title: "Subsidiaries — House Legacy Group",
  description:
    "Media & Content Production, Political Strategy & Civic Consulting, and House Legacy AI—three subsidiaries, one research foundation.",
};

export default function SubsidiariesPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Subsidiaries</h1>
        <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
          <p>
            House Legacy Group is a multidisciplinary firm built to operate through distinct but
            connected divisions, each designed to address a different area of public, cultural, and
            institutional life. At its core, the firm brings together research, strategy,
            storytelling, and historical intelligence to help organizations think more clearly,
            communicate more effectively, and respond to a rapidly changing world.
          </p>
          <p>
            Rather than functioning as a single narrow service provider, House Legacy Group is
            structured as an umbrella platform that allows specialized work to be carried out through
            focused subsidiaries while maintaining one shared foundation of intellectual rigor, public
            impact, and strategic clarity.
          </p>
          <p>
            The firm currently operates through three subsidiaries:{" "}
            <strong className="font-semibold text-neutral-900">Media &amp; Content Production</strong>
            ,{" "}
            <strong className="font-semibold text-neutral-900">
              Political Strategy &amp; Civic Consulting
            </strong>
            , and <strong className="font-semibold text-neutral-900">House Legacy AI</strong>. Media
            &amp; Content Production develops documentaries, podcasts, educational media, and digital
            storytelling projects that translate ideas and research into compelling narratives.
            Political Strategy &amp; Civic Consulting provides research, civic engagement strategy,
            public messaging, and institutional advisory services for organizations, leaders, and
            public-facing initiatives. House Legacy AI serves as the firm&apos;s innovation arm,
            helping clients integrate artificial intelligence with stronger historical context,
            institutional awareness, and human-centered analysis.
          </p>
          <p>
            Together, these subsidiaries allow House Legacy Group to function as a modern platform for
            ideas, influence, and implementation.
          </p>
        </div>

        <h2 className="mt-14 text-center text-2xl font-bold tracking-tight text-neutral-900">
          Three divisions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-neutral-600">
          House Legacy Group operates through three focused subsidiaries, each designed to meet a
          different need while sharing a common foundation: research rigor, strategic clarity, and
          public impact.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DivisionCard
            image={mediaContent}
            alt="Media and Content Production"
            href="/media-content-production"
          />
          <DivisionCard
            image={houseLegacy}
            alt="Political Strategy and Civic Consulting"
            href="/political-strategy-civic-consulting"
          />
          <DivisionCard
            image={houseLegacyAi}
            alt="House Legacy AI"
            href="/house-legacy-ai"
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/research"
            className="text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
          >
            Research foundation
          </Link>
        </div>
      </div>
    </main>
  );
}
