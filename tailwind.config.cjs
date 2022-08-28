/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // Basic Setup
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      debug: "red",

      // Utility Setup
      primary: {
        50: "var(--primary-color-50)",
        100: "var(--primary-color-100)",
        200: "var(--primary-color-200)",
        300: "var(--primary-color-300)",
        400: "var(--primary-color-400)",
        500: "var(--primary-color-500)",
        600: "var(--primary-color-600)",
        700: "var(--primary-color-700)",
        800: "var(--primary-color-800)",
        900: "var(--primary-color-900)",
      },
    },
  },
};
