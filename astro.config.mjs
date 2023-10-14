import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://ronituohino.github.io", // Update this once custom domain set
  // Also read this https://docs.astro.build/en/guides/deploy/github/
  integrations: [solidJs(), sitemap()],
  // Enable passing class names from parent to child components
  scopedStyleStrategy: "class",
});
