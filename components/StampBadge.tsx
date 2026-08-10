type StampBadgeProps = {
  code: string;
  label: string;
  featured?: boolean;
};

function isLetterHeavy(code: string) {
  const letters = (code.match(/[A-Za-zÅÄÖåäö]/g) || []).length;
  return letters >= 3;
}

export default function StampBadge({ code, label, featured = false }: StampBadgeProps) {
  const letterHeavy = isLetterHeavy(code);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-2 py-1 text-center">
      {featured ? (
        <span
          className="mb-1 text-[10px] leading-none text-gold-hairline/70 sm:mb-1.5 sm:text-[11px]"
          aria-hidden="true"
        >
          ✦
        </span>
      ) : (
        <span className="mb-1 h-2.5 sm:mb-1.5 sm:h-2" aria-hidden="true" />
      )}
      <span
        className={`font-display leading-none ${
          letterHeavy
            ? "max-w-[11ch] text-[clamp(0.95rem,3.6vw,1.55rem)] font-extralight tracking-[0.04em] sm:max-w-none sm:tracking-[0.08em]"
            : "tracking-[0.06em] sm:tracking-[0.08em]"
        } ${
          featured
            ? "text-[clamp(1.35rem,5.5vw,1.95rem)] text-[#C9BBA5]/90"
            : letterHeavy
              ? "text-[#B8A992]/80"
              : "text-[clamp(1.05rem,4.2vw,1.3rem)] text-[#B8A992]/80"
        }`}
      >
        {code}
      </span>
      <span
        className={`mt-2 max-w-[14ch] font-medium uppercase leading-snug sm:mt-1.5 sm:max-w-none ${
          featured
            ? "text-[0.58rem] tracking-[0.14em] text-[#A89880]/60 sm:text-[0.55rem] sm:tracking-[0.2em]"
            : "text-[0.55rem] tracking-[0.12em] text-[#A89880]/50 sm:text-[0.52rem] sm:tracking-[0.2em]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
