/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#EEE3FF",
        "primary-600": "#8054C7",
        "primary-700": "#5A3696",
        "secondary-600": "#63D838",
        "color-primary": "#1F2937",
        "color-secondary": "#6B7280",
        "color-dgray": "#111827;",
      },
    },
  },
  plugins: [],
};
