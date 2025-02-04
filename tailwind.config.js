/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all pages in /src/app
    "./src/components/**/*.{js,ts,jsx,tsx}", // Future-proofing for components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
