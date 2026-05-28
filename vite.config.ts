import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // 1. Add the empty array at the very top level for Cloudflare's bot
  plugins: [],
  
  tanstackStart: {
    server: { entry: "server" },
  },
  
  // 2. Force-enable the nitro deploy plugin as requested by the logs
  nitro: true
});
