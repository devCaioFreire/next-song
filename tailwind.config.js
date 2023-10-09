/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        LoginBG: "url('/assets/loginBG.mp4')"
      },
      gridTemplateColumns: {
        layout: "70% 1fr"
      }
    },
  },
  plugins: [],
}

