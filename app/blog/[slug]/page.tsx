import Link from "next/link";
import { notFound } from "next/navigation";
import { stubBlogPosts } from "@/lib/blog-stubs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stubBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = stubBlogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return { title: `${post.title} — House Legacy Group` };
}

export default async function BlogStubPostPage({ params }: Props) {
  const { slug } = await params;
  const post = stubBlogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

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
          {" · "}
          <Link
            href="/blog"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            Blog
          </Link>
        </p>
        <p className="text-sm text-neutral-500">{post.date}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
          {post.title}
        </h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-neutral-600">
          {post.excerpt}
        </p>
        <p className="mt-8 rounded-lg border border-dashed border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-500">
          Full article body coming soon. This is a preview stub linked from the homepage.
        </p>
      </div>
    </main>
  );
}
