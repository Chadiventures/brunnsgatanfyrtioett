import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  blurb: string;
  image: string;
};

export default function TeamCard({ name, role, blurb, image }: TeamCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-clay">
        <Image
          src={image}
          alt={`${name}, ${role}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-xl text-linen">{name}</h3>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-clay">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink/70">{blurb}</p>
    </article>
  );
}
