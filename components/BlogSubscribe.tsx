"use client";

import { useState } from "react";

export function BlogSubscribe() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mt-16 rounded-lg border border-neutral-200 bg-white p-8 shadow-sm ring-1 ring-black/5">
      <h2 className="text-xl font-bold tracking-tight text-neutral-900">
        Subscribe to House Legacy Group Insights
      </h2>
      <p className="mt-2 text-pretty text-neutral-600">
        Get essays, research updates, and new posts on history, policy, and AI.
      </p>
      {submitted ? (
        <p className="mt-6 text-sm text-neutral-600" role="status">
          Thanks—hook this form up to Mailchimp, ConvertKit, Beehiiv, or MailerLite when you finalize
          your stack.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="subscribe-name" className="sr-only">
              Name
            </label>
            <input
              id="subscribe-name"
              name="name"
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="subscribe-email" className="sr-only">
              Email
            </label>
            <input
              id="subscribe-email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
