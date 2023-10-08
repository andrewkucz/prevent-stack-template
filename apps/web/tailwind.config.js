
import config from '../../packages/ui/tailwind.config'

/** @type {import('tailwindcss').Config} */
export default {
  ...config,
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ui package files also need to be monitored
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/tailwind.config.js',
  ],
  // theme ? from import?
  plugins: [require("tailwindcss-animate")],
}

