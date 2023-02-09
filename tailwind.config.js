/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/templates/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export {tailwindConfig}
