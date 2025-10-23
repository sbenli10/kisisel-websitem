/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      borderRadius: { "2xl": "1rem" },
      boxShadow: { soft: "0 10px 30px -10px rgb(0 0 0 / 0.25)" },
    },
  },
  plugins: [],
};
