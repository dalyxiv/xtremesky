import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Music2, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/xtremeskyegypt/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/xtremeskyegypt/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/xtremeskyegypt", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/xtremeskyegypt", label: "LinkedIn" },
  { icon: Music2, href: "https://www.tiktok.com/@xtremeskyegypt", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-onyx py-14 px-6">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-3 items-start">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img
            src={new URL("../../assets/logo.jpeg", import.meta.url).href}
            alt="Xtreme Sky Egypt"
            className="h-24 w-auto object-contain"
          />
          <p className="text-sm text-foreground/60">Private helicopter tours over Cairo & Giza.</p>
        </div>

        <div className="text-center md:text-left space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold-bright)]">Contact</p>
          <a
            href="mailto:info@xtremeskyegypt.com"
            className="flex items-center justify-center md:justify-start gap-2 text-white/90 hover:text-[var(--gold-bright)] transition"
          >
            <Mail className="size-4" /> info@xtremeskyegypt.com
          </a>
          <Link
            to="/refund"
            className="block text-sm text-foreground/70 hover:text-white underline underline-offset-4 transition"
          >
            Refund Policy
          </Link>
          <Link
            to="/booking"
            className="block text-sm text-foreground/70 hover:text-white underline underline-offset-4 transition"
          >
            Book Your Flight
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-11 place-items-center rounded-full border border-gold/40 text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--onyx)] hover:-translate-y-1 hover:shadow-[0_0_25px_-2px_var(--gold)]"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-gold/10 text-center text-xs text-foreground/50 tracking-widest">
        © 2026 XTREME SKY EGYPT. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
