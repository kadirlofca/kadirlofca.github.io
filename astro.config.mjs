// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import siteData from "./src/data/site.json";

export default defineConfig({
  integrations: [mdx(), sitemap()],
  site: siteData.siteUrl,
  server: {
    port: 3000,
  },
  redirects: {
    "/posts": "/",
  },
});
