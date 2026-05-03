type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
