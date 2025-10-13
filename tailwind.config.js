/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'], // para títulos mais elegantes
      },
      colors: {
        brand: {
          blue: '#1d4ed8',
          light: '#3b82f6',
          dark: '#1e40af',
        },
      },
      spacing: {
        section: '6rem', // espaçamento vertical padrão para seções
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        smooth: '0 4px 24px rgba(0, 0, 0, 0.08)',
      },

      /* 🔥 Keyframes */
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      /* 🔥 Animations */
      animation: {
        marquee: 'marquee 25s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        slideUp: 'slideUp 0.6s ease-out forwards',
      },

      /* 🔥 Transitions */
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
