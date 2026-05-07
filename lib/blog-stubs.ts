export type StubBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

/** Placeholder posts for the homepage until a CMS or real blog is wired up. */
export const stubBlogPosts: StubBlogPost[] = [
  {
    slug: "historical-context-for-institutional-ai",
    title: "Historical context for institutional AI decisions",
    excerpt:
      "Why organizations adopt tools faster than they adopt judgment—and how historical framing keeps strategy aligned with mission and community trust.",
    date: "March 2026",
  },
  {
    slug: "civic-memory-and-policy-narratives",
    title: "Civic memory and the stories that shape policy",
    excerpt:
      "How public narratives about the past constrain or open options in the present—and what that means for leaders communicating across difference.",
    date: "February 2026",
  },
  {
    slug: "workforce-research-and-public-impact",
    title: "From workforce research to public impact",
    excerpt:
      "Connecting data on labor and inequality to narratives stakeholders can act on, without flattening the histories that produced today’s institutions.",
    date: "January 2026",
  },
];
