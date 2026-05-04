import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — House Legacy Group",
  description:
    "Inquiries on consulting, media, speaking, partnerships, and research collaborations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Let&apos;s Talk</h1>
        <p className="mt-6 text-pretty text-lg text-neutral-600">
          We welcome inquiries related to consulting, media projects, speaking engagements,
          partnerships, and research collaborations.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
        <p className="mt-8 text-sm text-neutral-500">
          Direct email:{" "}
          <a
            href="mailto:info@houselegacygroup.com"
            className="font-medium text-neutral-700 underline-offset-4 hover:underline"
          >
            info@houselegacygroup.com
          </a>
        </p>
      </div>
    </main>
  );
}
