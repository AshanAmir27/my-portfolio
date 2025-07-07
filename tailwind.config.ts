// tailwind.config.js
module.exports = {
  darkMode: 'media', 
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // include all components/pages
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
    },
  },
  plugins: [],
};
