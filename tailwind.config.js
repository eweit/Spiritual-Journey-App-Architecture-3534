/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cardo': ['Cardo', 'serif'],
        'assistant': ['Assistant', 'sans-serif'],
      },
      colors: {
        primary: '#F97316',
        'primary-hover': '#EA580C',
        'primary-light': '#FB923C',
        background: '#0A0A0A',
        card: '#1A1A1A',
        'card-hover': '#1E1E1E',
        border: '#2A2A2A',
        'border-orange': 'rgba(249, 115, 22, 0.3)',
        'border-orange-hover': 'rgba(249, 115, 22, 0.5)',
        muted: '#9CA3AF',
        'text-secondary': '#D1D5DB',
        accent: '#FCD34D',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}