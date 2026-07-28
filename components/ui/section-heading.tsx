export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 lg:mb-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-amber">{index}</span>
        <span className="mono-caps text-xs text-faint">{eyebrow}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
