import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/helicopter-tours/gold-pyramids-flight")({
  beforeLoad: () => {
    throw redirect({ to: "/tours/pyramids-sphinx-discovery", statusCode: 301 });
  },
});
