export const site = {
  name: "Brunnsgatan 41",
  address: "Brunnsgatan 41, 611 32 Nyköping",
  email: "info@brunnsgatan41.com",
  hours: [
    "Tisdag till torsdag 17 till 22",
    "Fredag till lördag 17 till 00",
    "Stängt söndag och måndag",
  ],
  policy:
    "Endast gäster 18 år och äldre, ingen barnmeny. Väluppfostrade, mindre hundar är välkomna.",
  concept:
    "Mellanrätter som delas runt bordet. Vi rekommenderar två till tre rätter per person.",
  wineListPdf:
    "https://www.brunnsgatanfyrtioett.com/_files/ugd/3d69f4_7bfdcbf2c7574189beb648be3f3a7fe1.pdf",
  social: {
    instagram: "https://www.instagram.com/brunnsgatan41/",
    facebook: "https://www.facebook.com/profile.php?id=100069283699155",
    tripadvisor:
      "https://www.tripadvisor.se/Restaurant_Review-g189867-d27178716-Reviews-Brunnsgatan_41-Nykoping_Sodermanland_County.html",
  },
};

export const stamps = [
  { code: "FINE LEVEL", label: "WHITE GUIDE", seed: "wg", icon: "medal" as const },
  { code: "#1", label: "AV 90 I NYKÖPING", seed: "trip", icon: "star" as const },
  { code: "9,3/10", label: "THEFORK", seed: "fork", icon: "fork" as const },
  { label: "MUNSKÄNKARNA", seed: "mun", icon: "leaf" as const },
];

export const concepts = [
  {
    title: "Dela runt bordet",
    body: "Rätterna vandrar mellan tallrikarna hela kvällen, precis som samtalet. Vi rekommenderar två till tre rätter per person, plus lite nyfikenhet från hela sällskapet. Det är så kvällen blir större än menyn.",
    icon: "share" as const,
  },
  {
    title: "Säsong före allt",
    body: "Menyn hålls kort med flit. Det som är bäst just nu får ta plats på tallriken, och inget annat gör det. Kom i tid, för det bästa brukar ta slut först.",
    icon: "season" as const,
  },
  {
    title: "Vin i rätt händer",
    body: "Vår chefsommelier sätter samman en vinlista som följer varje rätt hela vägen till sista klunk i glaset. Låt dig gärna guidås. Det är en del av magin.",
    icon: "wine" as const,
  },
];

export const team = [
  {
    name: "Andreas Hanna",
    role: "Ägare",
    image: "/images/team/andreas-hanna.jpg",
    blurb:
      "Driver restaurangen med känsla för både gäst och detalj, och ett gäng han kallar sitt andra hem. Hos Andreas är du aldrig bara en bokning.",
  },
  {
    name: "Tobias Mardla",
    role: "Köksmästare",
    image: "/images/team/tobias-mardla.jpg",
    blurb:
      "Sätter tempot i köket och menyns riktning, med säsongens råvaror som utgångspunkt. Det du äter i kväll fanns kanske inte på menyn förra veckan.",
  },
  {
    name: "Tess Ohlsson",
    role: "Chefsommelier",
    image: "/images/team/tess-ohlsson.jpg",
    blurb:
      "Curerar vinlistan tallrik för tallrik, så varje glas möter rätten det serveras med. Fråga henne. Det är så de bästa kvällarna börjar.",
  },
  {
    name: "Karl Axelsson",
    role: "Kock",
    image: "/images/team/karl-axelsson.jpg",
    blurb:
      "En del av kökslaget som varje kväll ser till att detaljerna sitter, tallrik efter tallrik. Den där sista finishen som får dig att stanna kvar.",
  },
];

export const menuSections = [
  {
    title: "Kallt och rått",
    items: [
      {
        name: "Chark och ost",
        price: "295 kr",
        desc: "Dagens charkuteri och ost, marmelad, knäckebröd, kapris och vispat smör",
      },
      {
        name: "Råbiff",
        price: "195 kr",
        desc: "Tryffelkräm, gulbeta, rödbeta, rödlök, bryntsmör, svartkålschips och prosciuttokrisp",
      },
      {
        name: "Östron",
        price: "245 kr",
        desc: "Citron, mignonette och hackad schalottenlök",
      },
    ],
  },
  {
    title: "Från köket",
    items: [
      {
        name: "Vitlökssoppa",
        price: "165 kr",
        desc: "Serveras med krokett på parmesan och räkor",
      },
      {
        name: "Kammussla",
        price: "245 kr",
        desc: "Jalapeño, syra och örtolja",
      },
      {
        name: "Ugnsbakad kål",
        price: "175 kr",
        desc: "Taleggio och rostad valnöt",
      },
      {
        name: "Lammytterfilé",
        price: "285 kr",
        desc: "Äppelcidervelouté och rostade rotfrukter",
      },
      {
        name: "Ankbröst",
        price: "295 kr",
        desc: "Krispigt skinn, portvinsjus och säsongens grönt",
      },
    ],
  },
  {
    title: "Sött",
    items: [
      {
        name: "Grillad persika",
        price: "145 kr",
        desc: "Vaniljglass, vispad grädde och rostade nötter",
      },
      {
        name: "Chokladfondant",
        price: "145 kr",
        desc: "Havssalt och crème fraîche-glass",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Maten höll restaurangklass rakt igenom. Kammusslorna och ostronen var i särklass.",
    source: "Gäst via TheFork",
  },
  {
    quote:
      "Vi var på genomresa och stannade till på ett infall. En av de bästa middagarna vi ätit på länge.",
    source: "Gäst via TheFork",
  },
  {
    quote:
      "Personalen tog hand om oss som gamla vänner, även när vi dök upp fel dag.",
    source: "Gäst via TheFork",
  },
  {
    quote:
      "Torsken var minnesvärd, stämningen gjorde att vi stannade långt efter sista tallriken.",
    source: "Gäst via Tripadvisor",
  },
];

export const galleryImages = [
  {
    src: "/images/ostron.png",
    alt: "Ostron med rom",
    seed: "gal-ostron",
    span: "hero" as const,
    caption: "Ostron",
    objectPosition: "center 40%",
  },
  {
    src: "/images/cocktail.png",
    alt: "Cocktail",
    seed: "gal-cocktail",
    span: "side" as const,
    caption: "Bar",
    objectPosition: "center",
  },
  {
    src: "/images/rib.png",
    alt: "Grillad rätt",
    seed: "gal-rib",
    span: "side" as const,
    caption: "Grill",
    objectPosition: "center",
  },
  {
    src: "/images/mat.png",
    alt: "Mellanrätter från köket",
    seed: "gal-mat",
    span: "wide" as const,
    caption: "Passet",
    objectPosition: "center",
  },
  {
    src: "/images/po.png",
    alt: "Detalj från bordet",
    seed: "gal-po",
    span: "norm" as const,
    caption: "Detalj",
    objectPosition: "center",
  },
  {
    src: "/images/tapas.png",
    alt: "Delningsrätter",
    seed: "gal-tapas",
    span: "tall" as const,
    caption: "Att dela",
    objectPosition: "center",
  },
  {
    src: "/images/la.png",
    alt: "Tallrik från Brunnsgatan 41",
    seed: "gal-la",
    span: "norm" as const,
    caption: "Tallrik",
    objectPosition: "center 35%",
  },
  {
    src: "/images/viner.png",
    alt: "Vin",
    seed: "gal-vin",
    span: "norm" as const,
    caption: "Vin",
    objectPosition: "center",
  },
  {
    src: "/images/party.png",
    alt: "Kvällsstämning",
    seed: "gal-party",
    span: "wide" as const,
    caption: "Kväll",
    objectPosition: "center 30%",
  },
];

export const chatHost = {
  name: "Maja",
  role: "Matsalen",
};

export const chatSystemPrompt = `Du heter Maja och jobbar i matsalen på Brunnsgatan 41 i Nyköping (Brunnsgatan 41, 611 32 Nyköping). Du chattar live med gäster just nu, som en vanlig människa på jobb. Du är varm, avslappnad och lite snabb i stilen, som när du tar emot någon vid baren.

Fakta du kan: mellanrätter som delas runt bordet, tipsa om 2 till 3 rätter per person, säsongsmeny, Tess Ohlsson är chefsommelier, Tobias Mardla köksmästare, Andreas Hanna ägare. Öppettider tisdag till torsdag 17 till 22, fredag till lördag 17 till 00, stängt söndag och måndag. Endast 18+, ingen barnmeny. Mindre väluppfostrade hundar ok. Snittpris ca 300 kr per rätt. White Guide Fine Level, etta av 90 på Tripadvisor i Nyköping, 9,3/10 på TheFork.

När någon vill boka: fråga naturligt efter namn, datum, tid, antal gäster, telefon eller mejl, och eventuella önskemål (allergier, firande). När du har det, sammanfatta kort och säg att ni hör av er snart för att låsa bordet.

Skriv som en människa: korta meningar, vardagssvenska, gärna "du", små värmande grejer. Aldrig som en bot, AI, digital värd eller assistent. Nämn aldrig att du är en AI. Säg inte "Hur kan jag hjälpa dig idag?" eller liknande standardsvar. Undvik punktlistor om det inte behövs. Inga tankstreck. Svara på svenska om gästen skriver svenska. Håll svaren korta, max några meningar.`;
