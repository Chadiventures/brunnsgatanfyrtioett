import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ReservationForm from "@/components/ReservationForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Boka bord",
  description:
    "Boka bord på Brunnsgatan 41 i Nyköping. Fyll i formuläret eller prata med vår digitala värd.",
};

export default function BokaBordPage() {
  return (
    <section className="px-5 pb-24 pt-28 md:px-10 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-forest">
            Boka bord
          </p>
          <h1 className="hero-heading mt-3 text-[clamp(2.2rem,8vw,4.8rem)] text-forest sm:mt-4">
            Bordet väntar.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 sm:mt-6 sm:text-lg">
            Vi har bara plats för ett begränsat antal sällskap varje kväll. Det är en del av charmen,
            och anledningen till att de bästa kvällarna ofta bokas i tid.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
            Fyll i dina uppgifter, eller prata med vår digitala värd i hörnet. Vi bekräftar alltid
            bordet personligen innan kvällen, så att ni känner er väntade redan när ni kommer in.
          </p>
          <p className="mt-6 text-sm text-ink/70">
            Mejl:{" "}
            <a href={`mailto:${site.email}`} className="text-forest hover:text-ink">
              {site.email}
            </a>
          </p>
          <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
            <InfoCard title="Besök">
              Brunnsgatan 41
              <br />
              611 32 Nyköping
            </InfoCard>
            <InfoCard title="Öppettider">
              Tis till tor 17 till 22
              <br />
              Fre till lör 17 till 00
              <br />
              Sön och mån stängt
            </InfoCard>
            <InfoCard title="Bra att veta">{site.policy}</InfoCard>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ReservationForm />
        </Reveal>
      </div>
    </section>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-gold-hairline/40 bg-clay/30 p-4">
      <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-forest">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">{children}</p>
    </div>
  );
}
