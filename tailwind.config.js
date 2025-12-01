/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#EC4899',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'bounce-smooth': 'bounce-smooth 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'bounce-smooth': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
