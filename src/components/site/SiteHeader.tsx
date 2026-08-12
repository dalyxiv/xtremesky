import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { CurrencySelect } from "@/components/site/CurrencySelect";
import { WHATSAPP_LINK } from "@/lib/tours";

const links = [
  { label: "Experiences", to: "/experiences" },
  { label: "Route Maps", to: "/experiences", hash: "route-maps" },
  { label: "Why Fly With Us", to: "/", hash: "why-fly" },
  { label: "Safety", to: "/safety-and-aircraft" },
  { label: "FAQs", to: "/plan-your-flight", hash: "faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-gold/20 bg-onyx/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Xtreme Sky Egypt home">
          <img src={logo} alt="Xtreme Sky Egypt" className="h-11 w-auto object-contain md:h-12" />
          <span className="hidden font-serif text-sm tracking-[0.3em] text-[var(--gold-bright)] lg:block">
            XTREME SKY EGYPT
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs uppercase tracking-widest text-foreground/80 xl:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              className="transition hover:text-[var(--gold-bright)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CurrencySelect className="hidden sm:flex" />
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden size-10 place-items-center rounded-full border border-gold/40 text-[var(--gold-bright)] transition hover:bg-[var(--gold)] hover:text-[var(--onyx)] sm:grid"
          >
            <MessageCircle className="size-4" />
          </a>
          <Link
            to="/book"
            className="hidden rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-[var(--onyx)] transition hover:shadow-[0_0_30px_-4px_var(--gold)] md:inline-flex"
          >
            Check Availability
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-gold/40 text-[var(--gold-bright)] xl:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-onyx/95 backdrop-blur-xl xl:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-serif tracking-[0.3em] text-[var(--gold-bright)]">MENU</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full border border-gold/40 text-[var(--gold-bright)]"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={"hash" in l ? l.hash : undefined}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-gold/15 px-4 py-4 font-serif text-xl text-foreground/90 transition hover:border-[var(--gold)] hover:text-[var(--gold-bright)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 px-5">
            <CurrencySelect />
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-[var(--gold-bright)] to-[var(--gold)] px-5 py-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--onyx)]"
            >
              Check Availability
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-gold/40 px-5 py-3 text-center text-xs uppercase tracking-widest text-[var(--gold-bright)]"
            >
              WhatsApp Our Flight Team
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
