type ConceptCardProps = {
  title: string;
  body: string;
  icon: "share" | "season" | "wine";
  seed?: string;
  index?: string;
  tone?: "light" | "dark";
};

export default function ConceptCard({
  title,
  body,
  index = "01",
  tone = "light",
}: ConceptCardProps) {
  const dark = tone === "dark";
  return (
    <article
      className={`concept-card group border-t pt-8 ${
        dark ? "border-linen/25" : "border-gold-hairline/40"
      }`}
    >
      <p
        className={`font-quote text-sm italic transition duration-500 group-hover:tracking-[0.08em] ${
          dark ? "text-clay" : "text-terracotta"
        }`}
      >
        {index}
      </p>
      <h3
        className={`mt-4 font-display text-2xl tracking-tight transition duration-500 ${
          dark
            ? "text-linen group-hover:text-clay"
            : "text-forest group-hover:text-terracotta"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 text-[0.95rem] leading-relaxed ${
          dark ? "text-linen/75" : "text-ink/70"
        }`}
      >
        {body}
      </p>
      <span className={`concept-card-line ${dark ? "opacity-90" : ""}`} aria-hidden="true" />
    </article>
  );
}
