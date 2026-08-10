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
    <div className="flex flex-col items-center text-center">
      {featured ? (
        <span
          className="mb-1.5 text-[11px] leading-none text-gold-hairline/70"
          aria-hidden="true"
        >
          ✦
        </span>
      ) : (
        <span className="mb-1.5 h-2" aria-hidden="true" />
      )}
      <span
        className={`font-display leading-none tracking-[0.08em] ${
          letterHeavy ? "font-extralight" : "font-normal"
        } ${
          featured
            ? "text-[clamp(1.3rem,2.4vw,1.95rem)] text-[#C9BBA5]/90"
            : "text-[clamp(0.95rem,1.7vw,1.3rem)] text-[#B8A992]/80"
        }`}
      >
        {code}
      </span>
      <span
        className={`mt-1.5 font-medium uppercase tracking-[0.2em] ${
          featured
            ? "text-[0.55rem] text-[#A89880]/55"
            : "text-[0.52rem] text-[#A89880]/45"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
