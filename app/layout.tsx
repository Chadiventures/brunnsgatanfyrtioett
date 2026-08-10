import type { Metadata } from "next";
import { Fraunces, Newsreader, Public_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientCursor from "@/components/AmbientCursor";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brunnsgatan 41 | Premium gastrokrog i Nyköping",
    template: "%s | Brunnsgatan 41",
  },
  description:
    "Brunnsgatan 41 i Nyköping. Chic gastrokrog med mellanrätter, öppen köksdörr och en vinlista kurerad av vår chefsommelier. Boka bord.",
  icons: {
    icon: "/images/logga-fyrtioett.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${fraunces.variable} ${newsreader.variable} ${publicSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col bg-linen font-sans text-ink"
        suppressHydrationWarning
      >
        <div className="grain" aria-hidden="true" />
        <AmbientCursor />
        <ScrollProgress />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
