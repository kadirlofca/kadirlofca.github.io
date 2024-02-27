const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "sunlight": "#ffffff",
        "kroger-highlight": "#000000",
        "kroger-neutral": "#58442b",
      },

      gap: {
        itemwide: "0.5rem",
        sectionwide: "4rem",
      }
    },
  },
};
