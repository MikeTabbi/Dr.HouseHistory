import Link from "next/link";
import { DivisionCard } from "@/components/DivisionCard";
import { stubBlogPosts } from "@/lib/blog-stubs";
import houseLegacy from "@/assets/HouseLegacy.png";
import houseLegacyAi from "@/assets/HouseLegacyAI.png";
import mediaContent from "@/assets/Media-Content.png";

const problemAreas = [
  "Making sense of policy, institutions, and civic dynamics in fast-moving news cycles",
  "Producing media and narratives that connect history to present-day decisions",
  "Applying artificial intelligence without losing historical judgment or social context",
  "Designing strategy when stakeholders span government, community, and technology partners",
];

const authorityPoints = [
  "Research-led perspective across history, policy, and emerging technology",
  "Subsidiaries dedicated to content production, civic consulting, and responsible AI practice",
  "Work structured for organizations that need clarity, credibility, and executable next steps",
];

const founderCredibilityHighlights = [
  "Historian, educator, and institutional analyst",
  "Founder, House Legacy Group",
  "Executive Council member, ASALH",
  "Research and policy collaboration with the Heldrich Center at Rutgers University",
  "Lecturer and public speaker in history, political thought, and civic life",
  "Grant-funded work in education, historical preservation, and social justice initiatives",
];

const researchCollaborationAreas = [
  "African American history and institutional life",
  "public policy and workforce research",
  "education, curriculum, and historical preservation",
  "civic engagement and social justice initiatives",
  "institutional systems analysis",
  "history, technology, and artificial intelligence",
];

const institutionalContexts = [
  {
    title: "Rutgers University – Heldrich Center for Workforce Development",
    body: "Research collaboration contributing to workforce and policy-related analysis, including work connected to labor, inequality, and institutional outcomes.",
  },
  {
    title: "Howard University",
    body: "Academic training, research development, and ongoing intellectual influence through historical scholarship, political thought, and interdisciplinary inquiry.",
  },
  {
    title: "Association for the Study of African American Life and History (ASALH)",
    body: "Leadership and professional engagement through one of the nation’s most significant Black historical organizations, linking scholarship, public memory, and institutional networks.",
  },
  {
    title: "Grant-Funded Educational and Historical Initiatives",
    body: "Participation in projects related to Black history education, desegregation research, curriculum development, historical preservation, and broader public scholarship.",
  },
];

export default function Home() {
  return (
    <main className="bg-neutral-100">
      <section className="border-b border-neutral-200/80 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            House Legacy Group
          </p>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Ideas, Institutions, and Intelligence for a Changing World
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600">
            House Legacy Group helps organizations navigate history, policy, civic life, and
            emerging technology through research, storytelling, and strategic consulting.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="#subsidiaries"
              className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border-2 border-neutral-900 bg-transparent px-8 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white sm:w-auto"
            >
              Explore Our Work
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 sm:w-auto"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Who we are
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-neutral-600">
            House Legacy Group is a multidisciplinary firm at the intersection of history, policy,
            media, and technology. Through our subsidiaries, we produce meaningful content, advise
            civic and policy initiatives, and help organizations apply artificial intelligence with
            greater historical context and social intelligence.
          </p>
        </div>
      </section>

      <section
        id="subsidiaries"
        className="scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Our subsidiaries
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-neutral-600">
            Three practices—content, consulting, and AI—working as one firm.
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
        </div>
      </section>

      <section className="border-y border-neutral-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Founder &amp; credibility
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Founder
          </p>
          <h3 className="mt-4 text-xl font-bold text-neutral-900 sm:text-2xl">
            Anton D. House, PhD
          </h3>
          <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
            <p>
              Anton D. House, PhD is a historian, educator, and institutional analyst whose work
              sits at the intersection of history, public policy, civic life, and emerging technology.
              As founder of House Legacy Group, he brings scholarly rigor, strategic thinking, and
              public-facing research into a multidisciplinary platform designed to serve
              organizations, institutions, and communities navigating complex social and
              institutional challenges.
            </p>
            <p>
              Dr. House&apos;s work is grounded in the study of historical systems, African American
              institutional life, political development, and the relationship between ideas and
              public life. He has taught and lectured in history, political science, and philosophy,
              contributed to research and public scholarship, and participated in grant-funded
              initiatives involving education, historical preservation, workforce research, and
              social justice. His broader vision for House Legacy Group is to create a firm that
              joins intellectual depth with practical execution across media, civic strategy, and
              artificial intelligence.
            </p>
            <p>
              House Legacy Group is built on a foundation of scholarship, institutional engagement,
              and public impact. Dr. House&apos;s experience includes university teaching, public
              lecturing, research collaboration, curriculum and policy-oriented work, and leadership
              within scholarly and civic networks. His background positions the firm to approach
              problems not only with technical and strategic awareness, but with historical depth,
              cultural intelligence, and institutional understanding.
            </p>
            <p>
              Through House Legacy Group and House Legacy AI, Dr. House is developing a model of
              consulting that draws on the strengths of the humanities and social sciences to
              address contemporary questions in policy, media, and technology. That approach makes
              the firm especially well suited for clients seeking thoughtful analysis,
              context-driven strategy, and work informed by both scholarship and real-world
              application.
            </p>
          </div>
          <h3 className="mt-12 text-lg font-bold text-neutral-900">
            Credibility highlights
          </h3>
          <ul className="mt-6 space-y-3 text-neutral-600">
            {founderCredibilityHighlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                  aria-hidden
                />
                <span className="text-pretty leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Research &amp; institutional collaborations
          </h2>
          <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
            <p>
              House Legacy Group is grounded in serious research, institutional engagement, and
              public-facing scholarship. The firm&apos;s work grows out of sustained inquiry into
              history, policy, education, labor, civic life, and the systems that shape public
              experience. Rather than treating research as separate from practice, House Legacy Group
              uses scholarship as the foundation for strategy, media, and consulting work across its
              subsidiaries.
            </p>
            <p>
              Through Dr. Anton D. House&apos;s academic, policy, and public work, the firm is
              connected to a broader network of universities, research centers, professional
              organizations, and grant-supported initiatives. These collaborations strengthen House
              Legacy Group&apos;s ability to approach projects with intellectual rigor,
              interdisciplinary perspective, and institutional credibility. Whether the work involves
              historical interpretation, public policy, educational development, or human-centered
              AI, the firm&apos;s approach is rooted in research that is both analytically strong and
              publicly relevant.
            </p>
          </div>

          <h3 className="mt-12 text-xl font-bold tracking-tight text-neutral-900">
            Areas of research and collaboration
          </h3>
          <ul className="mt-6 space-y-3 text-neutral-600">
            {researchCollaborationAreas.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                  aria-hidden
                />
                <span className="text-pretty leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl font-bold tracking-tight text-neutral-900">
            Selected institutional and collaborative contexts
          </h3>
          <div className="mt-8 space-y-8">
            {institutionalContexts.map(({ title, body }) => (
              <div key={title}>
                <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
                <p className="mt-2 text-pretty leading-relaxed text-neutral-600">{body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-bold tracking-tight text-neutral-900">
            Why it matters
          </h3>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-neutral-600">
            This research foundation gives House Legacy Group an advantage that many consulting and
            media firms do not have: the ability to combine practical strategy with historical
            depth, policy awareness, and institutional understanding. It allows the firm to serve
            clients who need not only creative execution or technical advice, but context,
            interpretation, and a deeper understanding of how systems evolve over time.
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Why organizations work with us
          </h2>
          <ul className="mt-8 space-y-4 text-neutral-600">
            {authorityPoints.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                  aria-hidden
                />
                <span className="text-pretty leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Problems we help you solve
          </h2>
          <ul className="mt-8 space-y-4 text-neutral-600">
            {problemAreas.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                  aria-hidden
                />
                <span className="text-pretty leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="insights"
        className="scroll-mt-24 border-y border-neutral-200/80 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                Blog &amp; insights
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-neutral-600">
                Recent writing on history, institutions, policy, and technology—preview posts until
                the full blog launches.
              </p>
            </div>
            <Link
              href="/blog"
              className="shrink-0 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stubBlogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-lg border border-neutral-200 bg-neutral-50/80 p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {post.date}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-neutral-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-neutral-700 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-neutral-600">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Let&apos;s build something with depth, clarity, and impact.
          </h2>
          <p className="mt-4 text-pretty text-lg text-neutral-300">
            Tell us what you are building. We will help you place it in its historical, civic, and
            technological context—and chart a practical path forward.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
