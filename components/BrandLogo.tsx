import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  markOnly?: boolean;
};

const sizes = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
  lg: "h-24 w-24 md:h-28 md:w-28",
};

export default function BrandLogo({
  href = "/",
  inverted = false,
  size = "sm",
  className = "",
  markOnly = false,
}: BrandLogoProps) {
  const mark = (
    <span
      className={`relative inline-grid place-items-center overflow-hidden bg-forest text-linen ${sizes[size]} ${className}`}
      aria-hidden={markOnly ? true : undefined}
    >
      <svg viewBox="0 0 100 100" className="h-[86%] w-[86%]" fill="currentColor" role="img">
        <title>Brunnsgatan Fyrtioett</title>
        <text
          x="8"
          y="28"
          fontFamily="var(--font-public-sans), system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          letterSpacing="0.04em"
        >
          BRUNNS
        </text>
        <text
          x="8"
          y="50"
          fontFamily="var(--font-public-sans), system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          letterSpacing="0.04em"
        >
          GATAN
        </text>
        <text
          x="8"
          y="72"
          fontFamily="var(--font-public-sans), system-ui, sans-serif"
          fontSize="14"
          fontWeight="700"
          letterSpacing="0.02em"
        >
          FYRTIOETT
        </text>
        <path
          d="M78 68 V88 H58"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
        />
      </svg>
    </span>
  );

  if (markOnly) return mark;

  return (
    <Link href={href} className="group inline-flex items-center gap-3" aria-label="Brunnsgatan 41, till startsidan">
      {mark}
      <span className="hidden flex-col leading-none sm:flex">
        <span
          className={`font-display text-lg tracking-tight ${
            inverted ? "text-linen" : "text-ink"
          }`}
        >
          Brunnsgatan
        </span>
        <span
          className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${
            inverted ? "text-clay" : "text-forest"
          }`}
        >
          Fyrtioett · Nyköping
        </span>
      </span>
    </Link>
  );
}
