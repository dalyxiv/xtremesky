import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/safety-and-aircraft")({
  beforeLoad: () => {
    throw redirect({ to: "/safety", statusCode: 301 });
  },
});
