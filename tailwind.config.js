module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#f6f7ff",100:"#ecefff",200:"#d8ddff",300:"#b8c2ff",
          400:"#8f9bff",500:"#6775ff",600:"#4f5ce6",700:"#3d47b4",
          800:"#30388c",900:"#262c6e"
        }
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Kanit", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Sarabun", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: []
}