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

        "accent-950": "#fef8ee",
        "accent-900": "#fcf1dd",
        "accent-850": "#fbeacb",
        "accent-800": "#f9e3ba",
        "accent-750": "#f7dba8",
        "accent-700": "#f6d496",
        "accent-650": "#f4cd83",
        "accent-600": "#f2c56f",
        "accent-550": "#f0be58",
        "accent-500": "#eeb63d",
        "accent-450": "#cf9e34",
        "accent-400": "#b1862b",
        "accent-350": "#936f22",
        "accent-300": "#77591a",
        "accent-250": "#5c4412",
        "accent-200": "#42300a",
        "accent-150": "#2a1d04",
        "accent-100": "#140c01",
        "accent-50": "#030200",

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
