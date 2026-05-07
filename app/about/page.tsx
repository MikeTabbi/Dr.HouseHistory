import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — House Legacy Group",
  description:
    "Mission, philosophy, and founder: House Legacy Group bridges scholarship, strategy, history, and innovation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="mb-6">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          About House Legacy Group
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900">
          Ideas put to work
        </h1>

        <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
          <p>
            House Legacy Group was founded on the belief that ideas matter most when they are put to
            work in the world. The firm exists to bridge scholarship and strategy, history and
            innovation, research and action. In an era shaped by rapid technological change,
            political uncertainty, and institutional strain, House Legacy Group helps organizations
            think with greater depth, act with greater clarity, and communicate with greater purpose.
            Its mission is to provide research-driven, historically informed, and practically grounded
            services that strengthen institutions, communities, and public understanding.
          </p>
          <p>
            The philosophy of the firm is simple: serious thought should lead to meaningful impact.
            House Legacy Group brings together historical intelligence, civic and political strategy,
            media production, and emerging technology consulting under one umbrella because the
            challenges facing society are rarely confined to a single field. Institutions need
            context. Leaders need strategy. Communities need stories that inform and inspire.
            Technology needs human understanding. By combining these elements, the firm is designed
            to help clients navigate complexity with a deeper sense of perspective, responsibility,
            and direction.
          </p>
          <p>
            House Legacy Group was created by Anton D. House, PhD, a historian, educator, and
            institutional analyst whose work explores the relationship between history, public life,
            political development, and social systems. Dr. House founded the firm to create a
            platform where scholarly rigor could meet real-world application. His background in
            research, teaching, public scholarship, policy-related inquiry, and institutional
            analysis shapes the company&apos;s approach to every project. Rather than offering generic
            consulting, the firm is built around the belief that historical knowledge, civic
            understanding, and strategic thinking can help organizations make better decisions and
            build stronger futures.
          </p>
          <p>
            At its core, House Legacy Group exists because the world needs more institutions and
            leaders capable of thinking beyond the immediate moment. The firm&apos;s work is rooted in
            the humanities and social sciences, but it is oriented toward practical outcomes:
            stronger narratives, better-informed strategies, more thoughtful public engagement, and
            more human-centered uses of technology. Through its subsidiaries in media, civic
            consulting, and artificial intelligence, House Legacy Group turns scholarship into action
            and ideas into impact.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">Founder</h2>
        <div className="mt-6 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
          <p>
            <strong className="font-semibold text-neutral-900">Anton D. House, PhD</strong> is a
            historian, educator, institutional analyst, and founder of House Legacy Group. His work
            focuses on historical intelligence, African American institutional history, public policy,
            social systems, and the role of ideas in shaping organizations and communities.
          </p>
          <p>
            Dr. Anton D. House is a scholar of U.S. and African American history whose work examines
            institutions, economic development, civic life, and political thought. He has taught and
            lectured across history, political science, and philosophy, contributed to policy-oriented
            research, and worked on projects involving education, public history, workforce research,
            and historical preservation. Through House Legacy Group, he integrates scholarship,
            strategy, and emerging technology into a practical consulting platform.
          </p>
        </div>

        <p className="mt-12 text-pretty text-neutral-600">
          House Legacy Group was founded to bridge ideas and action. The firm brings together
          historical knowledge, policy thinking, media production, and artificial intelligence
          consulting to help organizations better understand the systems they operate in and the
          futures they are building.
        </p>

        <div className="mt-12 rounded-lg border border-neutral-200 bg-white p-8 shadow-sm ring-1 ring-black/5">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Coherence
          </p>
          <p className="mt-4 text-center text-pretty text-neutral-700">
            One founder with one philosophy expressed through three practical arms: media tells the
            story; civic consulting shapes public action; AI interprets systems and the future.
          </p>
          <Link
            href="/subsidiaries"
            className="mt-6 flex justify-center text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
          >
            Explore subsidiaries
          </Link>
        </div>
      </article>
    </main>
  );
}
