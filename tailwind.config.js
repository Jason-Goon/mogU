/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.125rem', // Base font size to 18px
        lg: '1.25rem',    // Large font size to 20px
        xl: '1.5rem',     // Extra-large font size to 24px
        '2xl': '1.875rem',// 2xl font size to 30px
        '3xl': '2.25rem', // 3xl font size to 36px
        '4xl': '3rem',    // 4xl font size to 48px
        '5xl': '3.75rem', // 5xl font size to 60px
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '700',
      },
      colors: {
        background: '#111111',  // Very dark, almost black background
        foreground: '#f7f7f7',  // Off-white text color
        accent: '#f2c3aa',      // Pastel pink for borders and accent text
        secondary: '#200207',   // Light cream for secondary elements
        tertiary: '#e9dac1',    // Soft pastel for additional accents
        highlight: '#ffffff',   // Soft brown for buttons or links
        contentBox: '#111111',  // Content box color same as background
        outlineWhite: '#f2c3aa', // White outline for content boxes
        transparentWhite: 'rgba(255, 255, 255, 0.8)', // Blurred white transparent background
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Roboto font
      },
      borderColor: {
        white: '#ffffff', // White border color
      }
    },
  },
  plugins: [],
}
