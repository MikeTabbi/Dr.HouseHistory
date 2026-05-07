import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — House Legacy Group",
  description:
    "Research themes, institutional collaborations, and public scholarship that ground House Legacy Group's consulting and media work.",
};

const majorThemes = [
  "institutions and organizational development",
  "race, inequality, and Black institutional life",
  "labor, workforce systems, and economic opportunity",
  "education, curriculum, and public knowledge",
  "technology, artificial intelligence, and social context",
  "democracy, civic life, and political development",
  "public memory, historical preservation, and cultural interpretation",
];

const ongoingInquiry = [
  "the history and development of institutions",
  "African American history and organizational life",
  "labor and workforce inequality",
  "desegregation and educational justice",
  "civic leadership and democratic participation",
  "technology and artificial intelligence in social systems",
  "the relationship between history, policy, and the public sphere",
];

export default function ResearchPage() {
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
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Research</h1>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-neutral-600">
          House Legacy Group is rooted in research. Our consulting and media work grows out of
          sustained inquiry into institutions, public life, historical change, and the social
          systems that shape contemporary challenges.
        </p>

        <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
          <p>
            House Legacy Group is rooted in research, public scholarship, and sustained intellectual
            inquiry. The firm&apos;s work is grounded in the belief that strong strategy, meaningful
            storytelling, and responsible innovation require more than surface-level analysis. They
            require historical depth, institutional understanding, and serious engagement with the
            forces that shape social, political, and cultural life. The Research section reflects that
            House Legacy Group is not built on generic consulting language, but on a foundation of
            scholarship, interpretation, and real-world inquiry.
          </p>
          <p>
            At the center of this work is a commitment to connecting ideas to institutions and history
            to contemporary challenges. House Legacy Group draws from academic research, policy-oriented
            analysis, public history, and educational work to support projects across its
            subsidiaries. Whether the subject is artificial intelligence, civic strategy, media
            production, or institutional development, the firm approaches its work with an emphasis on
            context, rigor, and public relevance.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">
          Featured collaboration
        </h2>
        <div className="mt-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="text-lg font-semibold text-neutral-900">
            Heldrich Center for Workforce Development, Rutgers University
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-neutral-600">
            House Legacy Group&apos;s research foundation includes collaboration connected to workforce,
            labor, and institutional analysis through work associated with the Heldrich Center for
            Workforce Development at Rutgers University. This work reflects a broader engagement with
            questions of inequality, employment, public policy, and the structures that shape economic
            opportunity in the United States.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">
          Major research themes
        </h2>
        <p className="mt-4 text-pretty text-neutral-600">
          These themes give the firm a broad but coherent intellectual framework for engaging
          contemporary questions with depth and interdisciplinary perspective.
        </p>
        <ul className="mt-6 space-y-3 text-neutral-600">
          {majorThemes.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                aria-hidden
              />
              <span className="text-pretty leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">
          Grants and initiatives
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-neutral-600">
          The firm&apos;s research profile is strengthened by participation in grant-supported and
          collaborative initiatives related to education, desegregation, social justice, historical
          preservation, and public scholarship—linking research to equity, policy, and institutional
          transformation.
        </p>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">
          Public history &amp; education
        </h2>
        <div className="mt-6 space-y-6 text-pretty leading-relaxed text-neutral-600">
          <p>
            House Legacy Group is informed by public history and community-facing scholarship,
            including work connected to Black history, interpretation, preservation, and communicating
            complex historical subjects to broader audiences—bridging scholarly knowledge with civic
            understanding and cultural memory.
          </p>
          <p>
            Education is a central dimension of the firm&apos;s research identity: teaching, curriculum
            development, and public-facing learning shape projects that require clarity, depth, and
            intellectual accessibility for students, institutions, policymakers, and the public.
          </p>
          <p>
            The firm&apos;s research intersects with labor, democracy, education, inequality,
            technology, and public systems—making it useful for organizations seeking historically
            informed analysis that speaks to contemporary governance and decision-making.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">
          Ongoing areas of inquiry
        </h2>
        <ul className="mt-6 space-y-3 text-neutral-600">
          {ongoingInquiry.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                aria-hidden
              />
              <span className="text-pretty leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">Why it matters</h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-neutral-600">
          This research foundation gives House Legacy Group a distinct advantage: intellectual depth,
          historical awareness, and institutional understanding in every area of its work—analysis
          that is rigorous, contextual, and oriented toward meaningful impact rather than surface-level
          solutions.
        </p>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border-2 border-neutral-900 bg-transparent px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Blog &amp; insights
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Schedule Consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
