/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--inter)"],
        poppins: ["var(--poppins)"],
        Roboto: ["var(--roboto)"]
      }
    },
  },
  plugins: [],
}