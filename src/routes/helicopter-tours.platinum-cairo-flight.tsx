import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/helicopter-tours/platinum-cairo-flight")({
  beforeLoad: () => {
    throw redirect({ to: "/tours/cairo-heritage-panorama", statusCode: 301 });
  },
});
