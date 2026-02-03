/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-crimson': '#8B0000',
        'soft-rose': '#E8B4B8',
        'off-white': '#FAF9F6',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
