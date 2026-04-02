import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Legacy AI — House Legacy Group",
  description: "House Legacy AI initiatives and subcontractor network.",
};

export default function HouseLegacyAiPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
          House Legacy AI
        </h1>
        <p className="mt-6 text-lg text-neutral-600">
          Content for House Legacy AI will go here.
        </p>
      </div>
    </main>
  );
}
