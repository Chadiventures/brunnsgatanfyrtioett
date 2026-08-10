import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TablePhoto from "@/components/TablePhoto";
import MenuItem from "@/components/MenuItem";
import { menuSections, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meny",
  description:
    "Mellanrätter från Brunnsgatan 41 i Nyköping. Kallt, varmt och sött, gjort för att delas runt bordet.",
};

export default function MenyPage() {
  return (
    <>
      <section className="relative min-h-[65svh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mat.png"
            alt="Rätt från menyn"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 45%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[65svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
            Menyn
          </p>
          <h1 className="hero-heading mt-4 max-w-3xl text-[clamp(2.8rem,7vw,5.5rem)] text-linen">
            Gjord för att delas.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-linen/80">
            Två till tre rätter per person. Låt tallrikarna vandra runt bordet, smaka på varandras
            favoriter, och låt kvällen ta den väg den vill. Det är så här man äter hos oss, och det
            är därför man vill tillbaka.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="border border-gold-hairline/40 bg-clay/30 px-6 py-5 text-sm leading-relaxed text-ink/70">
              <strong className="font-semibold text-forest">Så funkar det:</strong> Alla rätter
              serveras som mellanrätter och delas mellan sällskapet. Beställ lite mer än ni tror, så
              får ni mer att prata om. Menyn ändras efter säsong, så enstaka rätter kan bytas ut.
              Fråga oss gärna om allergier. Vi vill att ni känner er trygga, och lite bortskämda.
            </div>
          </Reveal>
          <Reveal delay={40}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink/70">
              Det här är inte en meny man skyndar igenom. Det är en kväll man bygger tillsammans,
              rätt för rätt, glas för glas. Missar du något i natt finns det kanske kvar imorgon.
              Eller så är det redan utbytt mot något ännu bättre.
            </p>
          </Reveal>

          <div className="mt-16 space-y-16">
            {menuSections.map((section, i) => (
              <Reveal key={section.title} delay={i * 60}>
                <h2 className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-forest">
                  <span>{section.title}</span>
                  <span className="h-px flex-1 bg-line" />
                </h2>
                <div className="mt-2">
                  {section.items.map((item) => (
                    <MenuItem
                      key={item.name}
                      name={item.name}
                      price={item.price}
                      desc={item.desc}
                    />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-forest/40 bg-forest px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
              Vinlistan
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-linen">
              Kurerad av vår chefsommelier.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-linen/80">
              Varje rätt har sin motpart i glaset. Tess sätter samman listan med samma omsorg som
              köket sätter menyn, så du slipper gissa och kan luta dig tillbaka. Fråga gärna. Det är
              så de där oväntat fina paren uppstår.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-linen/70">
              Ladda ner hela vinlistan som PDF, eller låt oss guida dig när du sitter här.
            </p>
            <a
              href={site.wineListPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-linen/35 px-6 py-3 text-sm font-semibold text-linen transition hover:border-clay hover:text-clay"
            >
              Ladda ner vinlistan
            </a>
          </Reveal>
          <Reveal delay={100} variant="scale">
            <div className="photo-duo ml-auto max-w-xl">
              <TablePhoto
                src="/images/viner.png"
                alt="Vin"
                seed="meny-viner"
                ratio="portrait"
                objectPosition="center"
                caption="Vinlistan"
                sizes="(max-width: 768px) 50vw, 24vw"
              />
              <TablePhoto
                src="/images/vin.png"
                alt="Vin på bordet"
                seed="meny-vin"
                ratio="portrait"
                className="photo-duo-offset"
                objectPosition="center"
                caption="I glaset"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-linen/20 bg-forest-deep px-8 py-12 md:flex-row md:items-center md:px-14">
            <div className="max-w-xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
                Reservera
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-linen md:text-4xl">
                Boka ditt bord.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-linen/80">
                Menyn väntar. Bordet också, men inte hur länge som helst. Särskilt inte när helgen
                närmar sig.
              </p>
            </div>
            <Link
              href="/boka-bord"
              className="inline-flex rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-linen transition hover:bg-terracotta-deep"
            >
              Boka bord
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
