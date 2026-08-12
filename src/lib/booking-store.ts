export type BookingRequest = {
  reference: string;
  routeKey: "gold" | "platinum";
  routeName: string;
  duration: string;
  flightType: "shared" | "private";
  date: string;
  timeWindow: string;
  passengers: number;
  weights?: string;
  transfer: boolean;
  occasion?: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  notes?: string;
  estimateUsd: number;
  currency: string;
  submittedAt: string;
};

const KEY = "xse-booking-request";

export function saveBookingRequest(req: BookingRequest) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(req));
  } catch {
    /* ignore */
  }
}

export function readBookingRequest(): BookingRequest | null {
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as BookingRequest) : null;
  } catch {
    return null;
  }
}
