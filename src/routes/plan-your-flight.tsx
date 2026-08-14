import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/plan-your-flight")({
  beforeLoad: () => {
    throw redirect({ to: "/faq", statusCode: 301 });
  },
});
