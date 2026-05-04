import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House Legacy AI — House Legacy Group",
  description:
    "Humanities-informed AI advisory: historical intelligence, institutional analysis, bias review, and human-centered deployment.",
};

const coreServices = [
  "historical intelligence consulting",
  "institutional systems analysis",
  "AI training and dataset development",
  "bias auditing and human-centered review",
  "policy and governance memos",
  "public-sector AI advisory",
  "scenario design and qualitative research support",
];

const idealClients = [
  "AI companies",
  "public-sector vendors",
  "universities",
  "nonprofits",
  "policy institutes",
  "civic technology groups",
  "foundations",
  "research centers",
];

const practiceAreas = [
  {
    title: "Historical intelligence consulting",
    body: "We help organizations understand the historical context behind the systems, institutions, and data they use.",
  },
  {
    title: "AI training & dataset development",
    body: "We support the development of AI training materials, scenario design, and humanities-informed datasets that improve context and reasoning.",
  },
  {
    title: "Institutional analysis",
    body: "We analyze how organizations, policies, and social systems evolve so AI tools can be deployed with stronger real-world understanding.",
  },
  {
    title: "Bias auditing & human-centered review",
    body: "We review AI systems, outputs, and workflows for historical blind spots, cultural distortion, and institutional bias.",
  },
];

const childWelfareAdvisory = [
  "Predictive risk model governance review",
  "Historical and policy context memos",
  "Stakeholder interview synthesis",
  "Bias / disparity review support",
  "Caseworker workflow analysis",
  "Court and agency systems mapping",
  "Human-centered training materials",
  "Public-facing briefing documents",
];

export default function HouseLegacyAiPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="mb-6">
          <Link
            href="/subsidiaries"
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Subsidiaries
          </Link>
        </p>
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Subsidiary
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">House Legacy AI</h1>
        <p className="mt-4 text-lg font-medium text-neutral-800">
          House Legacy AI is where social science, historical intelligence, and artificial intelligence
          meet.
        </p>

        <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-neutral-600">
          <p>
            Artificial intelligence systems are increasingly used to interpret human behavior,
            history, and social systems—yet many AI models are trained primarily by engineers rather
            than historians or social scientists. House Legacy AI bridges that gap by connecting
            technology organizations with historians, political scientists, and institutional experts
            who help artificial intelligence understand the complexity of human society.
          </p>
          <p>
            A humanities- and social-science-informed AI advisory and consulting practice focused on
            historical intelligence, institutional analysis, bias review, and human-centered AI
            deployment.
          </p>
          <p>
            House Legacy AI helps organizations deploy AI with greater historical context, institutional
            awareness, and human-centered judgment. It supports organizations working at the
            intersection of technology, policy, education, and public systems—bringing historians,
            social scientists, and institutional thinkers into AI-related work so that systems can be
            built, reviewed, and deployed with stronger contextual understanding and fewer blind spots.
          </p>
        </div>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">Practice areas</h2>
        <div className="mt-8 space-y-8">
          {practiceAreas.map(({ title, body }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-neutral-600">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-pretty leading-relaxed text-neutral-600">
          In high-stakes public systems, House Legacy AI helps agencies, nonprofits, and technology
          partners deploy human-centered AI through historical intelligence, institutional analysis,
          bias auditing, and policy translation.
        </p>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">Core services</h2>
        <ul className="mt-6 space-y-3 text-neutral-600">
          {coreServices.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                aria-hidden
              />
              <span className="text-pretty leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-bold tracking-tight text-neutral-900">Ideal clients</h2>
        <ul className="mt-6 space-y-3 text-neutral-600">
          {idealClients.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                aria-hidden
              />
              <span className="text-pretty leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">
            Child Welfare AI Advisory
          </h2>
          <ul className="mt-6 space-y-3 text-neutral-600">
            {childWelfareAdvisory.map((item) => (
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

        <p className="mt-12 text-pretty text-lg leading-relaxed text-neutral-600">
          House Legacy AI is the historical and institutional intelligence arm of House Legacy Group,
          helping organizations use artificial intelligence more responsibly, contextually, and
          effectively—turning academic depth into a future-facing consulting offer at the intersection
          of historian, policy thinker, institutional analyst, and network builder.
        </p>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Schedule Consultation
          </Link>
        </div>
      </article>
    </main>
  );
}
