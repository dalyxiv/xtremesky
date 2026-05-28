import { Facebook, Instagram, Linkedin, Music2, Twitter } from "lucide-react";

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
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4 text-center md:text-left">
          <img src={new URL("../../assets/logo.jpeg", import.meta.url).href} alt="Xtreme Sky Egypt" className="size-16 rounded-full object-cover ring-1 ring-white/30" />
          <div>
            <p className="font-serif text-xl tracking-[0.25em] font-semibold text-white">XTREME SKY EGYPT</p>
            <p className="mt-2 text-sm text-foreground/60">Private helicopter tours over Cairo & Giza.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
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
