/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"El Messiri"', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        messiri: ['"El Messiri"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
