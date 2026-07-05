import { useState } from "react";
import { Facebook, Instagram, Linkedin, Music2, Twitter, Phone, Mail, X } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/xtremeskyegypt/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/xtremeskyegypt/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/xtremeskyegypt", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/xtremeskyegypt", label: "LinkedIn" },
  { icon: Music2, href: "https://www.tiktok.com/@xtremeskyegypt", label: "TikTok" },
];

export function Footer() {
  const [openRefund, setOpenRefund] = useState(false);

  return (
    <footer className="border-t border-gold/20 bg-onyx py-14 px-6">
      <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-3 items-start">
        <div className="flex items-center gap-4 text-center md:text-left">
          <img
            src={new URL("../../assets/logo.jpeg", import.meta.url).href}
            alt="Xtreme Sky Egypt"
            className="size-16 rounded-full object-cover ring-1 ring-white/30"
          />
          <div>
            <p className="font-serif text-xl tracking-[0.25em] font-semibold text-white">XTREME SKY EGYPT</p>
            <p className="mt-2 text-sm text-foreground/60">Private helicopter tours over Cairo & Giza.</p>
          </div>
        </div>

        <div className="text-center md:text-left space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold-bright)]">Contact</p>
          <a
            href="tel:+201000000000"
            className="flex items-center justify-center md:justify-start gap-2 text-white/90 hover:text-[var(--gold-bright)] transition"
          >
            <Phone className="size-4" /> +20 100 000 0000
          </a>
          <a
            href="mailto:bookings@xtremesky.com"
            className="flex items-center justify-center md:justify-start gap-2 text-white/90 hover:text-[var(--gold-bright)] transition"
          >
            <Mail className="size-4" /> bookings@xtremesky.com
          </a>
          <button
            onClick={() => setOpenRefund(true)}
            className="block text-sm text-foreground/70 hover:text-white underline underline-offset-4 transition"
          >
            Refund Policy
          </button>
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

      {openRefund && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-md px-4 animate-fade-in"
          onClick={() => setOpenRefund(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gold/30 bg-charcoal p-8 md:p-10 glow-platinum animate-scale-in"
          >
            <button
              onClick={() => setOpenRefund(false)}
              aria-label="Close"
              className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-gold/30 text-white/80 hover:bg-white hover:text-onyx transition"
            >
              <X className="size-4" />
            </button>
            <h3 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-4">
              Refund & Cancellation Policy
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-5">
              At Xtreme Sky, your safety and experience are our top priorities. Because we operate on a
              Pay-on-Arrival basis, no upfront online payments are collected. However, we ask that you
              strictly adhere to our scheduling guidelines:
            </p>
            <ul className="space-y-4 text-foreground/80 leading-relaxed">
              <li>
                <span className="text-white font-semibold">Weather & Safety:</span> Helicopter flights are
                strictly subject to weather conditions, visibility, and airspace approvals. If Xtreme Sky
                must cancel your flight due to safety or operational concerns, you will be offered an
                immediate reschedule or a complete cancellation with zero penalty.
              </li>
              <li>
                <span className="text-white font-semibold">Customer Cancellations:</span> You may cancel
                or modify your booking free of charge up to 48 hours before your scheduled flight time by
                contacting our support team.
              </li>
              <li>
                <span className="text-white font-semibold">Late Arrivals & No-Shows:</span> Passengers are
                required to arrive at the VIP Lounge at least 30 minutes prior to departure. Late arrivals
                or no-shows will forfeit their scheduled flight slot and are not guaranteed a rescheduled time.
              </li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
}
