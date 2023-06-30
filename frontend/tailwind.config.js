/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--fontMain)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--fontMono)', 'monospace'],
        deco: ['var(--fontDeco)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
