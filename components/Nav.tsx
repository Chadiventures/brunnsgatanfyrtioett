"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const links = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/meny", label: "Meny" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const onLight = scrolled || pathname === "/boka-bord" || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        onLight
          ? "border-b border-forest/25 bg-linen/95 py-3 backdrop-blur-xl"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <BrandLogo inverted={!onLight} size="sm" />
        <button
          type="button"
          className={`grid h-11 w-11 place-items-center md:hidden ${onLight ? "text-ink" : "text-linen"}`}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-2xl leading-none">{open ? "×" : "☰"}</span>
        </button>
        <nav
          className={`${
            open
              ? "absolute inset-x-0 top-full flex max-h-[calc(100dvh-4rem)] flex-col gap-6 overflow-y-auto border-b border-forest/20 bg-linen/98 px-5 py-8 backdrop-blur-xl"
              : "hidden"
          } md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-10 md:overflow-visible md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            const lightLinks = onLight || open;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base tracking-wide transition md:text-sm ${
                  active
                    ? lightLinks
                      ? "text-terracotta"
                      : "text-clay"
                    : lightLinks
                      ? "text-forest hover:text-terracotta"
                      : "text-linen/80 hover:text-clay"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/boka-bord"
            className="btn-shine inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold tracking-wide text-linen transition hover:bg-terracotta-deep md:min-h-0 md:py-2.5"
          >
            Boka bord
          </Link>
        </nav>
      </div>
    </header>
  );
}
