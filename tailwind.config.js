/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper:   '#FDFDF9',
        ivory:   '#E1D6C6',
        crimson: { DEFAULT: '#910E1A', dark: '#a81220' },
      },
      fontFamily: {
        display: ['Oswald', 'Arial Narrow', 'Arial', 'sans-serif'],
        quote:   ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
