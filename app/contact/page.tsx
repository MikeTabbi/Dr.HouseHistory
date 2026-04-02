import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — House Legacy Group",
  description: "Schedule a consultation or get in touch with House Legacy Group.",
};

export default function ContactPage() {
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
          Contact
        </h1>
        <p className="mt-6 text-lg text-neutral-600">
          Consultation scheduling and contact details will go here.
        </p>
      </div>
    </main>
  );
}
