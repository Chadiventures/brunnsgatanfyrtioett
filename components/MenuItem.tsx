type MenuItemProps = {
  name: string;
  price: string;
  desc: string;
};

export default function MenuItem({ name, price, desc }: MenuItemProps) {
  return (
    <div className="menu-item group relative flex items-start justify-between gap-4 border-b border-gold-hairline/40 py-5 last:border-b-0 sm:gap-6 sm:py-6">
      <div className="relative z-10 min-w-0">
        <h3 className="section-heading text-lg tracking-tight text-forest transition duration-500 group-hover:text-terracotta sm:text-xl">
          {name}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{desc}</p>
      </div>
      <span className="relative z-10 shrink-0 font-quote text-base italic text-terracotta transition duration-500 group-hover:scale-110 sm:text-lg">
        {price}
      </span>
    </div>
  );
}
