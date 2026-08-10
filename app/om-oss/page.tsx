import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TablePhoto from "@/components/TablePhoto";
import TeamCard from "@/components/TeamCard";
import ConceptCard from "@/components/ConceptCard";
import { concepts, site, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Historien bakom Brunnsgatan 41 i Nyköping, teamet i kök och matsal, och utmärkelserna vi är stolta över.",
};

export default function OmOssPage() {
  return (
    <>
      <section className="relative min-h-[58svh] overflow-hidden sm:min-h-[70svh]">
        <div className="absolute inset-0">
          <Image
            src="/images/party.png"
            alt="Stämning på Brunnsgatan 41"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%] sm:object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/35 sm:from-black/80 sm:via-black/35 sm:to-black/25" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[58svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-28 sm:min-h-[70svh] sm:pb-16 sm:pt-32 md:px-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
            Om oss
          </p>
          <h1 className="hero-heading mt-3 max-w-3xl text-[clamp(2.2rem,8.5vw,5.5rem)] text-linen sm:mt-4">
            Historien bakom tegelväggarna.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-linen/80 sm:mt-6 sm:text-lg">
            Vi byggde inte en scen. Vi byggde ett vardagsrum. Ett ställe där gäster, kök och matsal
            delar samma kväll, och där man känner sig välkommen redan i dörren.
          </p>
        </div>
      </section>
      <section className="px-5 py-16 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-forest">
              Vår historia
            </p>
            <h2 className="mt-4 section-heading text-[1.85rem] tracking-tight text-forest sm:text-4xl md:text-5xl">
              Ett vardagsrum med öppen köksdörr.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
              <p>
                Bakom de handkarvade tegelväggarna på Brunnsgatan 41 delar kök och matsal samma rum.
                Ingen linje, inget avstånd, bara ett golv där kockarna hör klirret från glasen och
                gästerna ser elden i grillen. Det är därför det känns så nära, som att man är mitt i
                något som pågår just för dig och ditt sällskap.
              </p>
              <p>
                Vi tror på det enkla: riktigt bra råvaror, hantverk utan krångel, och en atmosfär där
                människor stannar länge efter sista tuggan. Rätterna serveras som mellanrätter,
                tänkta att delas, med två till tre rätter per person som utgångspunkt. Det är så
                kvällen blir gemensam, och så favoriterna uppstår.
              </p>
              <p>
                Hit kommer man för maten, och stannar för stämningen. För skratten runt bordet. För
                känslan av att personalen ser dig, och att kvällen får ta den tid den behöver.
              </p>
              <p>{site.policy}</p>
            </div>
            <blockquote className="mt-10 border-l border-forest pl-5">
              <p className="font-quote text-xl italic leading-snug text-ink sm:text-2xl">
                “Vi är ett gäng som brinner för det här livet, och vi vill att varje kväll hos oss
                ska kännas som en av årets bästa.”
              </p>
              <cite className="mt-4 block text-[0.65rem] not-italic uppercase tracking-[0.18em] text-forest">
                Andreas Hanna, ägare
              </cite>
            </blockquote>
          </Reveal>
          <Reveal delay={100} variant="scale">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <TablePhoto
                src="/images/matsal.png"
                alt="Matsal"
                seed="om-matsal"
                ratio="portrait"
                className="col-span-7"
                objectPosition="center 30%"
                caption="Matsalen"
                sizes="(max-width: 768px) 60vw, 32vw"
              />
              <div className="col-span-5 flex flex-col gap-3 pt-6 md:gap-4 md:pt-16">
                <TablePhoto
                  src="/images/entre.png"
                  alt="Entre"
                  seed="om-entre"
                  ratio="square"
                  objectPosition="center"
                  caption="Entrén"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
                <TablePhoto
                  src="/images/person.png"
                  alt="Gäst"
                  seed="om-person"
                  ratio="portrait"
                  objectPosition="center top"
                  caption="Gäster"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-forest px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
              Vad vi drivs av
            </p>
            <h2 className="mt-4 section-heading text-[1.85rem] tracking-tight text-linen sm:text-4xl md:text-5xl">
              Nyfikenhet, tempo och yrkesstolthet.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-linen/80">
              Vi jagar inte trender. Vi jagar känslan när tallriken landar, när glaset träffar rätt,
              och när sällskapet tystnar en sekund innan samtalet tar fart igen. Det är därför folk
              bokar om, och varför det kan vara svårt att få plats när helgen närmar sig.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
            {concepts.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
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
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-forest">
              Teamet
            </p>
            <h2 className="mt-4 section-heading text-[1.85rem] tracking-tight text-forest sm:text-4xl md:text-5xl">
              Där kök och matsal möts.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
              Bakom varje kväll står ett gäng som brinner för det här. Inte för showen, utan för dig
              som sitter vid bordet. Lär känna dem lite. När ni ses i lokalen känns det redan som om
              ni känner varandra.
            </p>
          </Reveal>
          <div className="mt-10 grid items-stretch gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-7">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 70} variant="soft" className="h-full">
                <TeamCard
                  name={member.name}
                  role={member.role}
                  blurb={member.blurb}
                  image={member.image}
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink/70 sm:mt-12">
            Vill du bli en del av teamet? Mejla{" "}
            <a href={`mailto:${site.email}`} className="text-forest hover:text-ink">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-8 border border-linen/20 bg-forest px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-center md:px-14">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-clay">
                Evenemang
              </p>
              <h2 className="mt-3 section-heading text-[1.65rem] tracking-tight text-linen sm:text-3xl md:text-4xl">
                Vinmiddagar, gästspel och säsongens menyer.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-linen/80">
                Ibland tar kvällen en ännu finare form. Hör av dig om du vill vara med när det händer,
                innan platserna är borta.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-linen transition hover:bg-terracotta-deep"
              >
                Mejla för info
              </a>
              <Link
                href="/boka-bord"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-linen/35 px-6 py-3 text-sm font-semibold text-linen transition hover:border-clay hover:text-clay"
              >
                Boka bord
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
