import Link from "next/link";
import type { Metadata } from "next";
import { stubBlogPosts } from "@/lib/blog-stubs";

export const metadata: Metadata = {
  title: "Blog & insights — House Legacy Group",
  description: "Writing on history, policy, institutions, and technology from House Legacy Group.",
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Home
          </Link>
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
          Blog &amp; insights
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Preview posts below; full articles will be published here as the blog goes live.
        </p>
        <ul className="mt-10 space-y-6">
          {stubBlogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-lg border border-neutral-200 bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm text-neutral-500">{post.date}</p>
                <h2 className="mt-1 text-lg font-semibold text-neutral-900 group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-neutral-600">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
