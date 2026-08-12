import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Music2, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { CONTACT_EMAIL, OFFICE_ADDRESS, WHATSAPP_LINK, WHATSAPP_NUMBER } from "@/lib/tours";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/xtremeskyegypt/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/xtremeskyegypt/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/xtremeskyegypt", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/xtremeskyegypt", label: "LinkedIn" },
  { icon: Music2, href: "https://www.tiktok.com/@xtremeskyegypt", label: "TikTok" },
];

const columns = [
  {
    title: "Experiences",
    items: [
      { label: "All Experiences", to: "/experiences" as const },
      { label: "Gold Pyramids Flight", to: "/helicopter-tours/gold-pyramids-flight" as const },
      { label: "Platinum Cairo Flight", to: "/helicopter-tours/platinum-cairo-flight" as const },
      { label: "Check Availability", to: "/book" as const },
    ],
  },
  {
    title: "Plan & Trust",
    items: [
      { label: "Plan Your Flight", to: "/plan-your-flight" as const },
      { label: "Safety & Aircraft", to: "/safety-and-aircraft" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
  {
    title: "Policies",
    items: [
      { label: "Cancellation & Weather", to: "/cancellation-weather-policy" as const },
      { label: "Refund Policy", to: "/refund" as const },
      { label: "Privacy Policy", to: "/privacy-policy" as const },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-onyx px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt="Xtreme Sky Egypt" className="h-20 w-auto object-contain" />
          <p className="text-sm leading-relaxed text-foreground/65">
            Private helicopter experiences over the Pyramids of Giza and Cairo. Small cabins,
            certified crews, unforgettable perspective.
          </p>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-gold/40 text-[var(--gold-bright)] transition hover:bg-[var(--gold)] hover:text-[var(--onyx)]"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold-bright)]">{col.title}</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-4 border-t border-gold/10 pt-8 text-sm text-foreground/70 md:grid-cols-3">
        <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-white">
          <Mail className="size-4 text-[var(--gold-bright)]" /> {CONTACT_EMAIL}
        </a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
          <MessageCircle className="size-4 text-[var(--gold-bright)]" /> {WHATSAPP_NUMBER}
        </a>
        <p className="flex items-start gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--gold-bright)]" /> {OFFICE_ADDRESS}
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-7xl space-y-2 border-t border-gold/10 pt-6 text-xs leading-relaxed text-foreground/50">
        <p>
          Flight routes, altitudes and durations are always subject to aviation authority
          clearance, air traffic control instruction and weather conditions. Safety decisions are
          final and non-negotiable.
        </p>
        <p className="tracking-widest">© 2026 XTREME SKY EGYPT — EXTREME SKY FOR MANAGEMENT, MARKETING AND CONSULTING. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
