import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          sans: { value: 'Alegreya Sans, Alegreya Sans Fallback' },
        },
        colors: {
          primary: {
            50: { value: '#f0fdf9' },
            100: { value: '#ccfbef' },
            200: { value: '#98f7e0' },
            300: { value: '#5debcf' },
            400: { value: '#2cd5b9' },
            500: { value: '#12af97' },
            600: { value: '#0c9583' },
            700: { value: '#0e776a' },
            800: { value: '#115e56' },
            900: { value: '#134e47' },
            950: { value: '#042f2c' },
          },
          gray: {
            50: { value: '#F5F7F6' }, // background molto chiaro, superfici
            100: { value: '#ECEFEF' }, // background secondari
            200: { value: '#DCE2E1' }, // separatori soft, card
            300: { value: '#C5CECC' }, // border chiari, NON testo
            400: { value: '#A3AFAD' }, // placeholder, testo non critico
            500: { value: '#7A8785' }, // hint, disabled text
            600: { value: '#5A6664' }, // meta, label, caption
            700: { value: '#3E4947' }, // body secondario
            800: { value: '#2A3231' }, // body text principale
            900: { value: '#1A201F' }, // headings standard
            950: { value: '#0F1413' }, // headings forti, hero
          },
        },
        animations: {
          heroFloat: {
            value: 'heroFloat 20s ease-in-out infinite',
          },
        },
      },
      keyframes: {
        heroFloat: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
