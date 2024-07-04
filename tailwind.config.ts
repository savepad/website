import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        neutral: {
          900: '#1f2937',
        },
        gray: {
          100: '#f7fafc',
        },
      },
      lineHeight: {
        relaxed: '1.5',
      },
      maxWidth: {
        content: '900px',
      },
      screens: {
        tablet: '640px',
        desktop: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
}

export default config
