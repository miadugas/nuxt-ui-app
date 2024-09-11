import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#171717', // Replace with your desired neutral-900 color
          800: '#1c1c1c', // Equivalent to neutral-800
          700: '#404040', // Equivalent to neutral-700
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('@headlessui/tailwindcss'),
  ],
};

export default config;

