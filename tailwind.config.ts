import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['geist', 'sans-serif'],
        epilogue: ['epilogue', 'sans-serif'],
        outfit: ['outfit', 'sans-serif'],
      },
      colors: {
        neutral: {
          900: '#1f2937',
        },
        gray: {
          100: '#f7fafc',
          300: '#d1d5db',
          900: '#111827',
        },
        violet: {
          700: '#5b21b6',
          500: '#8b5cf6',
        },
      },
      lineHeight: {
        relaxed: '1.5',
        loose: '2.0',
      },
      maxWidth: {
        content: '1140px',
      },
      screens: {
        tablet: '640px',
        desktop: '1024px',
        xl: '1280px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.violet.400'),
              '&:hover': {
                color: theme('colors.violet.500'),
              },
            },
            h1: {
              color: theme('colors.gray.300'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.400'),
            },
            h4: {
              color: theme('colors.gray.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
