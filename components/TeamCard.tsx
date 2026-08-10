import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  blurb: string;
  image: string;
};

export default function TeamCard({ name, role, blurb, image }: TeamCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-clay">
        <Image
          src={image}
          alt={`${name}, ${role}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-[center_18%] transition duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-90 transition duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="section-heading text-xl tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] transition duration-500 group-hover:text-linen">
            {name}
          </h3>
          <span
            className="mt-2.5 block h-px w-8 bg-gold-hairline/80 transition duration-500 group-hover:w-12"
            aria-hidden="true"
          />
          <p className="mt-2.5 text-[0.65rem] uppercase tracking-[0.18em] text-clay transition duration-500 group-hover:text-[#E4D7C0]">
            {role}
          </p>
        </div>
      </div>
      <p className="mt-5 flex-1 text-sm leading-[1.75] text-ink/70">{blurb}</p>
    </article>
  );
}
