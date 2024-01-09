/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'desaturated-red': 'hsl(var(--clr-desaturated-red))',
        'soft-red': 'hsl(var(--clr-soft-red))',
        'dark-grayish-red': 'hsl(var(--clr-dark-grayish-red))',
      },
    },
  },
  plugins: [],
}

// secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
