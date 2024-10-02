/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [   
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './app/[locale]/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        workSans: ['var(--font-work-sans)'],
      },
      colors: {
        lightBg: '#FFFFFF', // Light theme background color
        darkBg: '#181A2A', // Dark theme background color
      },
    },
  },
  plugins: [],
  darkMode :"class",
}

