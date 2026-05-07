"use client";

import { useState } from "react";

const AREA_OPTIONS = [
  "Media & Content Production",
  "Political Strategy & Civic Consulting",
  "House Legacy AI",
  "Speaking / Lecturing",
  "Research Collaboration",
] as const;

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 – $20,000",
  "$20,000 – $100,000",
  "Enterprise Project",
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-neutral-200 bg-white p-8 shadow-sm ring-1 ring-black/5"
        role="status"
      >
        <p className="text-lg font-semibold text-neutral-900">Thank you</p>
        <p className="mt-2 text-neutral-600">
          Your message has been noted. Form delivery is not yet connected—finalize your email or
          form backend to receive submissions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8"
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-900">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm outline-none ring-neutral-900/10 transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
        />
      </div>
      <div>
        <label
          htmlFor="contact-organization"
          className="block text-sm font-medium text-neutral-900"
        >
          Organization
        </label>
        <input
          id="contact-organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-900">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
        />
      </div>
      <div>
        <label htmlFor="contact-area" className="block text-sm font-medium text-neutral-900">
          Area of interest
        </label>
        <select
          id="contact-area"
          name="areaOfInterest"
          required
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
        >
          <option value="" disabled>
            Select an area
          </option>
          {AREA_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-description" className="block text-sm font-medium text-neutral-900">
          Project description
        </label>
        <textarea
          id="contact-description"
          name="projectDescription"
          rows={5}
          required
          className="mt-2 w-full resize-y rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
        />
      </div>
      <div>
        <label htmlFor="contact-budget" className="block text-sm font-medium text-neutral-900">
          Project budget range
        </label>
        <select
          id="contact-budget"
          name="budgetRange"
          required
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
        >
          <option value="" disabled>
            Select a range
          </option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 sm:w-auto"
      >
        Send inquiry
      </button>
    </form>
  );
}
