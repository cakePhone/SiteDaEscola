/** @type {import('tailwindcss').Config} */
let config;

config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "surface-950": "var(--surface-950)",
        "surface-900": "var(--surface-900)",
        "surface-850": "var(--surface-850)",
        "surface-800": "var(--surface-800)",
        "surface-750": "var(--surface-750)",
        "surface-700": "var(--surface-700)",
        "surface-650": "var(--surface-650)",
        "surface-600": "var(--surface-600)",
        "surface-550": "var(--surface-550)",
        "surface-500": "var(--surface-500)",
        "surface-450": "var(--surface-450)",
        "surface-400": "var(--surface-400)",
        "surface-350": "var(--surface-350)",
        "surface-300": "var(--surface-300)",
        "surface-250": "var(--surface-250)",
        "surface-200": "var(--surface-200)",
        "surface-150": "var(--surface-150)",
        "surface-100": "var(--surface-100)",
        "surface-50": "var(--surface-50)",

        "accent-950": "var(--accent-950)",
        "accent-900": "var(--accent-900)",
        "accent-850": "var(--accent-850)",
        "accent-800": "var(--accent-800)",
        "accent-750": "var(--accent-750)",
        "accent-700": "var(--accent-700)",
        "accent-650": "var(--accent-650)",
        "accent-600": "var(--accent-600)",
        "accent-550": "var(--accent-550)",
        "accent-500": "var(--accent-500)",
        "accent-450": "var(--accent-450)",
        "accent-400": "var(--accent-400)",
        "accent-350": "var(--accent-350)",
        "accent-300": "var(--accent-300)",
        "accent-250": "var(--accent-250)",
        "accent-200": "var(--accent-200)",
        "accent-150": "var(--accent-150)",
        "accent-100": "var(--accent-100)",
        "accent-50": "var(--accent-50)",

        text: "#eaf3ff",
        "text-dark": "#000103",

        headings: "#efefef",
        "headings-dark": "#000000",
      },
      gridTemplateColumns: {
        "sidebar-layout": "300px 1fr",
      },
    },
  },
  plugins: [],
};

export default config;
