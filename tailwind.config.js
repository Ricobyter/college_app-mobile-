// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          red: "#e33b38",
          blue: "#10d1b2",
        },
        flexCenter: {
          '@apply flex items-center justify-center': {},
        },
      },
    },
    plugins: [],
  }