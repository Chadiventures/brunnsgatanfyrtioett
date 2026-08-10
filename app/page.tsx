import Link from "next/link";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import ConceptCard from "@/components/ConceptCard";
import TablePhoto from "@/components/TablePhoto";
import { Gallery } from "@/components/Gallery";
import StampsSection from "@/components/StampsSection";
import ParallaxMedia from "@/components/ParallaxMedia";
import { concepts, galleryImages, stamps, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StampsSection stamps={stamps} />
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-forest">
              Upplevelsen
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-forest md:text-5xl">
              Ett rum där kök och matsal andas samma luft.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70">
              Bakom tegelväggarna möts hantverk och närhet. Tallrikarna vandrar runt bordet, glasen
              fylls om, och personalen håller takten utan att störa magin. Det känns mer som att
              komma hem till vänner än att gå på restaurang. På bästa sätt.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">
              Här stannar man ofta längre än planerat. Skålarna töms, samtalet tar fart, och plötsligt
              är det sent. De som missar en kväll här brukar höra om den efteråt.
            </p>
            <Link
              href="/om-oss"
              className="mt-8 inline-flex text-sm font-semibold tracking-wide text-forest transition hover:text-ink"
            >
              Läs vår historia →
            </Link>
          </Reveal>
          <Reveal delay={120} variant="scale">
            <div className="photo-duo">
              <TablePhoto
                src="/images/matsal.png"
                alt="Matsalen"
                seed="home-matsal"
                ratio="portrait"
                objectPosition="center 35%"
                caption="Matsalen"
                sizes="(max-width: 768px) 50vw, 28vw"
              />
              <TablePhoto
                src="/images/mat.png"
                alt="Rätt från köket"
                seed="home-mat"
                ratio="portrait"
                className="photo-duo-offset"
                objectPosition="center 45%"
                caption="Köket"
                sizes="(max-width: 768px) 50vw, 22vw"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-forest px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
              Konceptet
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-linen md:text-5xl">
              Mellanrätter, gjorda för att delas.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-linen/80">
              Ingen beställer ensam här. Ni smakar er igenom kvällen tillsammans, skickar vidare det
              bästa, och upptäcker favoriter ni inte visste att ni hade. Det är därför gästerna
              kommer tillbaka, och varför bordet känns som en plats man inte vill ge ifrån sig.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {concepts.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <ConceptCard
                  title={item.title}
                  body={item.body}
                  icon={item.icon}
                  index={`0${i + 1}`}
                  tone="dark"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-forest">
                  Ur köket
                </p>
                <h2 className="mt-4 font-display text-4xl tracking-tight text-forest md:text-5xl">
                  Kvällen, i bilder.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink/70">
                  Lite av det som möter dig när ljuset går ner och lokalen fylls. Rått, grillat, sött
                  och det som händer mellan tallrikarna. Resten får du uppleva själv. Helst snart.
                </p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ink/70 md:text-right">
                Bilderna räcker långt. Känslan vid bordet räcker längre.
              </p>
            </div>
          </Reveal>
          <Gallery
            images={galleryImages.map((img) => ({
              src: img.src,
              alt: img.alt,
              label: img.caption,
            }))}
          />
        </div>
      </section>
      <section className="border-y border-forest/30 bg-forest px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
              Röster
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-linen md:text-5xl">
              Hört vid borden.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-linen/80">
              Vi skulle kunna berätta hur det känns. Men våra gäster gör det bättre. Det här är
              kvällar som stannar kvar, och som folk pratar om när de kommer hem.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.quote} delay={i * 90}>
                <blockquote className="quote-glow border-t border-linen/25 pt-8">
                  <p className="font-quote text-2xl italic leading-snug text-linen md:text-3xl">
                    “{t.quote}”
                  </p>
                  <cite className="mt-5 block text-[0.65rem] not-italic uppercase tracking-[0.18em] text-clay">
                    {t.source}
                  </cite>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden px-5 py-28 md:px-10 md:py-36">
        <ParallaxMedia src="/images/cocktail.png" alt="Cocktail" opacity={1} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <Reveal variant="scale">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Reservera
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)] md:text-6xl">
              Bordet väntar på dig.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Platserna är få, och kvällarna fylls fort. Särskilt inför helgen. Boka ditt bord innan
              någon annan tar det, så ses vi bakom tegelväggarna.
            </p>
            <Link
              href="/boka-bord"
              className="btn-shine mt-10 inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-sm font-semibold tracking-wide text-linen shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition hover:bg-terracotta-deep"
            >
              Boka bord
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
