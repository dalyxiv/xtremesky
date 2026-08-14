import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cancellation-weather-policy")({
  beforeLoad: () => {
    throw redirect({ to: "/refund", statusCode: 301 });
  },
});
