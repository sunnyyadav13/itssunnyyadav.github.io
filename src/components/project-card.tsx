type ProjectCardProps = {
  title: string;
  period: string;
  summary: string;
  href: string;
  stack: string[];
  bullets: string[];
};

export function ProjectCard({
  title,
  period,
  summary,
  href,
  stack,
  bullets,
}: ProjectCardProps) {
  return (
    <article className="glass-panel rounded-[2rem] border border-border p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {period}
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted">{summary}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:-translate-y-0.5 hover:border-foreground"
        >
          View Repo
        </a>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
