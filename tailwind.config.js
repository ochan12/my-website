module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'star-wars-dark': '#eb212e',
        'star-wars-light': '#2e67f8',
        cruncho: 'rgb(236, 75, 68)',
        'reputacion-digital': 'rgb(16, 89, 118)',
        qbit: 'rgb(15, 128, 185)',
        'solo-projects': '#ffe81f',
        tracab: '#5cac71',
      },
      fontFamily: {
        'star-wars': ['StarWarsGlyph', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
