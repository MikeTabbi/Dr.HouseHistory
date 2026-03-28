export type DivisionCardProps = {
  title: string;
  subtitle?: string;
  titleAllCaps?: boolean;
  subtitleCaps?: boolean;
};

export function DivisionCard({
  title,
  subtitle,
  titleAllCaps,
  subtitleCaps,
}: DivisionCardProps) {
  return (
    <article className="flex flex-col items-center rounded-lg bg-white px-8 py-10 text-center shadow-sm ring-1 ring-black/5">
      <div
        className="mb-6 flex h-24 w-24 shrink-0 items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-100 text-xs font-medium text-neutral-400"
        aria-hidden
      >
        Logo
      </div>
      <h2
        className={`text-lg font-bold tracking-tight text-neutral-900 ${
          titleAllCaps ? "uppercase tracking-wide" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-2 text-sm text-neutral-500 ${
            subtitleCaps ? "font-medium uppercase tracking-[0.2em]" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </article>
  );
}
