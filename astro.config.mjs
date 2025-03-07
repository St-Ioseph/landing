import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: netlify({
    redirects: [], 
    builders: true,
  }),
  output: "server", // Asegúrate de usar SSR
  build: {
    format: "directory", // Formato de salida para Netlify
  },
});
