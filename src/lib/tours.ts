export type RouteKey = "gold" | "platinum";

export type TourRoute = {
  key: RouteKey;
  name: string;
  subtitle: string;
  duration: string;
  minutes: number;
  seatPriceUsd: number;
  charterPriceUsd: number;
  highlights: string[];
  features: string[];
  path: string;
  badge?: string;
};

export const TOURS: Record<RouteKey, TourRoute> = {
  gold: {
    key: "gold",
    name: "Gold Route",
    subtitle: "Pyramids & Sphinx Discovery",
    duration: "15 minutes",
    minutes: 15,
    seatPriceUsd: 260,
    charterPriceUsd: 1040,
    highlights: [
      "Giza Plateau",
      "The Great Pyramids",
      "The Great Sphinx",
      "Saqqara skyline",
    ],
    features: ["VIP lounge check-in", "Full safety briefing", "Commemorative flight certificate"],
    path: "/helicopter-tours/gold-pyramids-flight",
  },
  platinum: {
    key: "platinum",
    name: "Platinum Route",
    subtitle: "Cairo Heritage Panorama",
    duration: "25 minutes",
    minutes: 25,
    seatPriceUsd: 375,
    charterPriceUsd: 1500,
    highlights: [
      "The Great Pyramids & Sphinx",
      "Saqqara & Step Pyramid",
      "Grand Egyptian Museum (GEM)",
      "The Nile River & Cairo panorama",
    ],
    features: [
      "VIP lounge check-in",
      "Extended flight path",
      "Live English commentary",
      "Lounge refreshments",
    ],
    path: "/helicopter-tours/platinum-cairo-flight",
    badge: "Best for the Complete Cairo Experience",
  },
};

export const TOUR_LIST = [TOURS.gold, TOURS.platinum];

export const WHATSAPP_NUMBER = "+20 10 14545 086";
export const WHATSAPP_LINK = "https://wa.me/201014545086";
export const CONTACT_EMAIL = "info@xtremeskyegypt.com";
export const OFFICE_ADDRESS =
  "5A by The Waterway, South 90th Street, Fifth Settlement, New Cairo, Egypt";

export const FAQS = [
  {
    q: "Where does the flight depart from?",
    a: "All flights depart from a dedicated heliport near the Giza area. Exact departure coordinates and lounge details are confirmed with your booking, along with recommended arrival time (45 minutes before departure).",
  },
  {
    q: "Do we fly directly over the Pyramids?",
    a: "Flight paths follow approved airspace corridors that provide clear panoramic views of the Giza Plateau, the Pyramids and the Sphinx. Exact positioning is always determined by air traffic control clearance on the day of the flight.",
  },
  {
    q: "What identification is required?",
    a: "Every passenger must present a valid passport (international guests) or national ID (residents). Names must match the booking exactly for security clearance.",
  },
  {
    q: "How are passenger weight limits handled?",
    a: "Passenger weights are collected discreetly before the flight for weight-and-balance planning. The cabin seats up to 4 passengers within a certified maximum payload; our team will advise if a second flight or private charter is required.",
  },
  {
    q: "What happens in bad weather?",
    a: "Safety governs every decision. If wind, visibility or dust conditions fall outside our go/no-go criteria, your flight is rescheduled free of charge or refunded per our weather terms.",
  },
  {
    q: "Is hotel pickup included?",
    a: "Hotel transfers can be arranged on request from most Cairo and Giza hotels. Select the transfer option in your availability request and our team will quote and coordinate it.",
  },
];

export const REVIEWS = [
  {
    quote:
      "Seeing the Pyramids from the helicopter was the highlight of our Cairo visit.",
    name: "Sarah T.",
    meta: "United Kingdom · Platinum Route",
  },
  {
    quote: "Flawless coordination for our marriage proposal over the Giza Plateau.",
    name: "Marc & Elena",
    meta: "France · Private Gold Route",
  },
  {
    quote:
      "Professional briefing and unforgettable views of the Grand Egyptian Museum.",
    name: "Dimitri K.",
    meta: "Germany · Platinum Route",
  },
];

export const TRUST_ITEMS = [
  {
    title: "Commercial Operations",
    desc: "Flights operate within an authorized commercial aviation framework.",
    icon: "ShieldCheck",
  },
  {
    title: "Certified Crew",
    desc: "Professionally qualified pilots with extensive Cairo airspace experience.",
    icon: "BadgeCheck",
  },
  {
    title: "Intimate Capacity",
    desc: "Maximum 4 passengers per helicopter — never a crowded cabin.",
    icon: "Users",
  },
  {
    title: "English Commentary",
    desc: "Interactive noise-canceling headsets with live pilot narration.",
    icon: "Headphones",
  },
  {
    title: "Secure Booking",
    desc: "No forced upfront payment until your slot is verified by operations.",
    icon: "Lock",
  },
  {
    title: "Weather Protection",
    desc: "Guaranteed rescheduling or fair terms if conditions are unsafe.",
    icon: "CloudSun",
  },
] as const;
