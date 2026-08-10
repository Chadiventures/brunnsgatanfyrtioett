import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-clay/20 bg-forest-deep pb-[max(0px,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:gap-12 md:px-10 md:py-16">
        <div>
          <p className="font-display text-2xl tracking-tight text-linen">
            Brunnsgatan <span className="text-clay">41</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-linen/75">
            Nyköpings mest efterfrågade bord. En intim kvarterskrog där mellanrätter, kurerat vin och
            ett varmt gäng gör att gäster ofta stannar längre än de tänkt, och kommer tillbaka som
            gamla vänner.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs uppercase tracking-[0.16em] text-linen/70">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-clay">
              Instagram
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-clay">
              Facebook
            </a>
            <a href={site.social.tripadvisor} target="_blank" rel="noopener noreferrer" className="hover:text-clay">
              Tripadvisor
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-clay">Besök</h2>
          <p className="mt-4 text-sm leading-relaxed text-linen/75">
            Brunnsgatan 41
            <br />
            611 32 Nyköping
          </p>
          <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-linen hover:text-clay">
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-clay">Öppettider</h2>
          <ul className="mt-4 space-y-2 text-sm text-linen/75">
            {site.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-clay">Utforska</h2>
          <div className="mt-4 flex flex-col gap-2 text-sm text-linen/75">
            <Link href="/om-oss" className="hover:text-clay">Om oss</Link>
            <Link href="/meny" className="hover:text-clay">Meny</Link>
            <a href={site.wineListPdf} target="_blank" rel="noopener noreferrer" className="hover:text-clay">
              Vinlista (PDF)
            </a>
            <Link href="/boka-bord" className="hover:text-clay">Boka bord</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-clay/20 bg-forest-deep px-5 pb-20 pt-5 text-center text-[0.7rem] tracking-wide text-linen/55 md:px-10 md:pb-5">
        © 2026 Brunnsgatan Fyrtioett. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
