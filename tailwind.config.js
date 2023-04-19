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
      zIndex: {
        modal: "1000",
      },
      opacity: {
        modal: "0",
      },
      transitionProperty: {
        modal: "opacity",
      },
      keyframes: {
        "modal-show": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "modal-hide": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "modal-show": "modal-show 0.3s ease-out",
        "modal-hide": "modal-hide 0.3s ease-out",
      },
    },
    variants: {
      extend: {
        opacity: ["disabled"],
      },
    },
  },
  plugins: [],
};
