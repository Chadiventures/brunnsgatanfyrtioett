type StampIcon = "medal" | "star" | "fork" | "leaf";

type StampBadgeProps = {
  code?: string;
  label: string;
  icon?: StampIcon;
};

function StampIconSvg({ icon }: { icon: StampIcon }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (icon === "star") {
    return (
      <svg {...common}>
        <path d="M12 3.5l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.7l5-.7L12 3.5z" />
      </svg>
    );
  }
  if (icon === "fork") {
    return (
      <svg {...common}>
        <path d="M8 3v7M12 3v7M16 3v7M8 10h8M12 10v11" />
      </svg>
    );
  }
  if (icon === "leaf") {
    return (
      <svg {...common}>
        <path d="M5 19c8-1 12-7 13-14-7 1-13 5-14 13z" />
        <path d="M9 15l6-6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M8 3h8v5l-4 3.5L8 8V3z" />
      <path d="M12 11.5V17" />
      <path d="M9 21h6" />
      <path d="M9.5 17h5" />
    </svg>
  );
}

export default function StampBadge({ code, label, icon = "medal" }: StampBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-forest">
        <StampIconSvg icon={icon} />
      </span>
      {code ? (
        <span className="font-quote text-lg italic leading-none text-forest">{code}</span>
      ) : null}
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">{label}</span>
    </div>
  );
}
