/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      screen: {
        "3xl": "2000px",
      },
      boxShadow: {
        "shadow-3": "1px 1px 1px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
