/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1D1D1D',
      },
      backgroundImage: {
        LoginBG: "url('/assets/loginBG.mp4')"
      },
      boxShadow: {
        custom: '0px 6px 10px 3px rgba(0, 0, 0, 0.6)'
      },
      gridTemplateColumns: {
        layout: "70% 1fr"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })]
}

