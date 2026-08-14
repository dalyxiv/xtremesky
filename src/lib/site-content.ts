import type { RouteKey } from "@/lib/tours";

export const HOME_STATS = [
  {
    figure: "USD",
    label: "Fixed published pricing",
    desc: "Seat and private-charter prices are published in US dollars so nothing changes between request and confirmation.",
  },
  {
    figure: "04",
    label: "Four passenger seats",
    desc: "A single cabin with a maximum of four passengers. No coach loads, no rotating groups.",
  },
  {
    figure: "01",
    label: "Operational review before payment",
    desc: "Every request passes weight-and-balance, airspace and weather review before any payment link is issued.",
  },
  {
    figure: "30",
    label: "Minutes arrival guidance",
    desc: "Arrive thirty minutes before your slot so identification, briefing and manifest checks are unhurried.",
  },
];

export const GUEST_JOURNEY = [
  {
    title: "Arrive & welcome",
    desc: "Meet your ground host, present identification and complete the passenger manifest in the departure lounge.",
  },
  {
    title: "Brief & prepare",
    desc: "A structured safety briefing covers boarding, headsets, seat allocation and cabin procedure before you walk out.",
  },
  {
    title: "Fly & remember",
    desc: "Board with your assigned seating, fly the cleared corridor and return for refreshments and your flight record.",
  },
];

export const SAFETY_REGISTER: {
  label: string;
  note?: string;
  status: "published" | "pending" | "confirmed";
}[] = [
  {
    label: "Air operator certificate",
    note: "Operator credential held by the flight provider.",
    status: "pending",
  },
  { label: "Aircraft registration & airworthiness", note: "Registration mark and current review.", status: "pending" },
  { label: "Passenger liability insurance", note: "Policy certificate and cover limits.", status: "pending" },
  { label: "Pilot licensing & currency records", note: "Licence class and recency of the operating crew.", status: "pending" },
  { label: "Passenger identity verification", note: "Passport or national ID checked against the manifest.", status: "published" },
  { label: "Weight-and-balance procedure", note: "Weights collected before departure and loaded into the flight plan.", status: "published" },
  { label: "Weather & airspace go / no-go process", note: "Documented limits applied on the day of flight.", status: "published" },
  { label: "Pre-flight safety briefing record", note: "Signed briefing sheet issued per departure.", status: "confirmed" },
];

export const GUEST_ASSURANCES = [
  {
    heading: "Passenger verification",
    body: [
      "Every passenger name on the manifest must match the identification presented at the lounge. International guests present a passport; residents present a national ID. We cannot substitute names at the helipad, because the manifest is the document the flight is cleared against.",
    ],
  },
  {
    heading: "Weight and balance",
    body: [
      "Individual passenger weights are requested at booking and confirmed discreetly at check-in. They are used for load planning and seat allocation, not for pricing. If a group exceeds the certified payload, our team will propose a second departure or a private charter rather than reducing safety margins.",
    ],
  },
  {
    heading: "Weather and airspace",
    body: [
      "Flights operate only inside published wind, visibility and dust limits and only with air traffic control clearance. If any limit is not met, the flight is postponed or refunded under the cancellation and weather policy. This decision sits with the operating crew and is final.",
    ],
  },
  {
    heading: "Children and infants",
    body: [
      "Children may fly with an accompanying adult and occupy their own seat with a restraint. Up to two infants may be carried subject to load planning. Ages are collected in the passenger manifest so seating and restraints can be arranged before you arrive.",
    ],
  },
  {
    heading: "Health and accessibility",
    body: [
      "Tell us about reduced mobility, recent surgery, cardiac or respiratory conditions, or pregnancy in the notes field of your request. Boarding involves a short walk and a step up into the cabin; we will describe the exact conditions honestly rather than promise assistance we cannot document.",
    ],
  },
];

export const FULL_FAQS = [
  {
    q: "Is my booking confirmed as soon as I submit the form?",
    a: "No. Submitting the form creates a request. Our operations team reviews the date, passenger group, weight-and-balance and airspace availability, then returns with a confirmation and a payment link or a DMC invoice. Nothing is charged before that review.",
  },
  {
    q: "Where does the flight depart from?",
    a: "Departures are from a dedicated helipad serving the Giza area. The exact address, gate and lounge instructions are issued with your confirmation, together with your arrival time.",
  },
  {
    q: "Can you guarantee the exact flight path?",
    a: "No operator can. Routes shown on this site are indicative and always flown subject to air traffic control clearance and weather on the day. We publish the intended corridor rather than promise a fixed track.",
  },
  {
    q: "How many passengers can fly at once?",
    a: "Four passenger seats per helicopter, combined across adults and children, plus up to two infants subject to load planning.",
  },
  {
    q: "Do children and infants pay?",
    a: "Children occupying a seat are priced as passengers. Infants carried without a seat are handled case by case during the operational review.",
  },
  {
    q: "Why do you collect passenger weights?",
    a: "Weight and balance is a certification requirement, not a commercial one. Accurate weights let the crew plan fuel, seating and payload margins correctly.",
  },
  {
    q: "What is the difference between shared and private pricing?",
    a: "A shared seat is priced per passenger and may fly alongside other guests. A private charter reserves the whole cabin at the published charter price, whether you fill four seats or two.",
  },
  {
    q: "What happens if the weather cancels my flight?",
    a: "You are offered the next available slot or a full refund of anything paid, under the cancellation and weather policy. Weather decisions carry no penalty for guests.",
  },
  {
    q: "Can you arrange hotel transfers?",
    a: "Transfers from most Cairo and Giza hotels can be quoted on request. Select the transfer option in your request and our team will price and coordinate it.",
  },
  {
    q: "When do I pay?",
    a: "After operational approval. You choose between a secure payment link or, for travel-trade partners, an invoice against the confirmed manifest.",
  },
];

export const OCCASIONS = [
  "Couples",
  "Families",
  "Proposals",
  "Birthdays",
  "VIP guests",
  "DMC partners",
];

export const ROUTE_DIAGRAMS: Record<RouteKey, string[]> = {
  gold: ["Departure helipad", "Giza Plateau", "Great Pyramids", "The Sphinx", "Return"],
  platinum: [
    "Departure helipad",
    "Giza Plateau",
    "Saqqara",
    "Grand Egyptian Museum",
    "Nile corridor",
    "Return",
  ],
};

export const TOUR_MINI_FAQS: Record<RouteKey, { q: string; a: string }[]> = {
  gold: [
    {
      q: "How long is the airborne time?",
      a: "Fifteen minutes airborne, with roughly ninety minutes on the ground for check-in, briefing and return to the lounge.",
    },
    {
      q: "Will we see the Sphinx clearly?",
      a: "The cleared corridor gives a panoramic view of the plateau including the Sphinx. Exact positioning depends on air traffic control on the day.",
    },
    {
      q: "Can we book the whole helicopter?",
      a: "Yes. The private charter price reserves all four seats regardless of how many guests fly.",
    },
  ],
  platinum: [
    {
      q: "What does the extra ten minutes add?",
      a: "The extended corridor adds Saqqara, the Grand Egyptian Museum and a Nile and Cairo panorama on the return leg.",
    },
    {
      q: "Is commentary included?",
      a: "Yes. Noise-cancelling headsets with live English commentary from the crew are included.",
    },
    {
      q: "Is this suitable for a proposal?",
      a: "It is our most requested route for proposals because of its longer airborne time. Tell us in your request so timing and seating can be arranged.",
    },
  ],
};
