import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CurrencyCode = "USD" | "EGP" | "EUR" | "GBP";

export const CURRENCIES: Record<
  CurrencyCode,
  { code: CurrencyCode; symbol: string; label: string; rate: number }
> = {
  USD: { code: "USD", symbol: "$", label: "USD", rate: 1 },
  EGP: { code: "EGP", symbol: "EGP ", label: "EGP", rate: 48.0769 },
  EUR: { code: "EUR", symbol: "€", label: "EUR", rate: 0.923 },
  GBP: { code: "GBP", symbol: "£", label: "GBP", rate: 0.788 },
};

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  format: (usd: number) => string;
  convert: (usd: number) => number;
};

const CurrencyContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "xse-currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as CurrencyCode | null;
    if (saved && saved in CURRENCIES) setCurrency(saved);
  }, []);

  const value = useMemo<Ctx>(() => {
    const meta = CURRENCIES[currency];
    const convert = (usd: number) => Math.round(usd * meta.rate);
    return {
      currency,
      setCurrency: (c) => {
        setCurrency(c);
        try {
          window.localStorage.setItem(STORAGE_KEY, c);
        } catch {
          /* ignore */
        }
      },
      convert,
      format: (usd: number) =>
        `${meta.symbol}${convert(usd).toLocaleString("en-US")}`,
    };
  }, [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}

export function CurrencyDisclaimer({ className = "" }: { className?: string }) {
  const { currency } = useCurrency();
  return (
    <p className={`text-xs italic text-foreground/55 ${className}`}>
      Prices shown in {currency} are converted references. Operational payments are
      calculated at confirmed rates.
    </p>
  );
}
