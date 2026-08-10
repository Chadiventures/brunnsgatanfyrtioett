type MenuItemProps = {
  name: string;
  price: string;
  desc: string;
};

export default function MenuItem({ name, price, desc }: MenuItemProps) {
  return (
    <div className="menu-item group relative flex items-start justify-between gap-6 border-b border-gold-hairline/40 py-6 last:border-b-0">
      <div className="relative z-10">
        <h3 className="font-display text-xl tracking-tight text-forest transition duration-500 group-hover:text-terracotta">
          {name}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{desc}</p>
      </div>
      <span className="relative z-10 shrink-0 font-quote text-lg italic text-terracotta transition duration-500 group-hover:scale-110">
        {price}
      </span>
    </div>
  );
}
