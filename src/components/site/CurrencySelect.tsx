import { CURRENCIES, useCurrency, type CurrencyCode } from "@/lib/currency";

export function CurrencySelect({ className = "" }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();
  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">Currency</span>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        aria-label="Select currency"
        className="rounded-full border border-gold/40 bg-charcoal/70 px-3 py-2 text-xs font-medium uppercase tracking-widest text-[var(--gold-bright)] outline-none transition hover:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/50"
      >
        {Object.values(CURRENCIES).map((c) => (
          <option key={c.code} value={c.code} className="text-ink">
            {c.label}
          </option>
        ))}
      </select>
    </label>
  );
}
