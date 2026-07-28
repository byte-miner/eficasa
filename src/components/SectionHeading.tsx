type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  underline?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  underline = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase ${
            light ? "text-cyan" : "text-navy"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold md:text-4xl ${
          light ? "text-white" : "text-navy"
        } ${underline && align === "left" ? "gold-underline" : ""} ${
          underline && align === "center" ? "relative inline-block" : ""
        }`}
      >
        {title}
        {underline && align === "center" && (
          <span className="absolute bottom-[-0.35rem] left-1/2 h-0.5 w-12 -translate-x-1/2 bg-cyan" />
        )}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-relaxed md:text-lg ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
