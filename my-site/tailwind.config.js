/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  plugins: [],
}

