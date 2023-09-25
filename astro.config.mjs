import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ronituohino.fi",
  integrations: [sitemap()],

  // enable passing class names from parent to child components
  scopedStyleStrategy: "class",
});