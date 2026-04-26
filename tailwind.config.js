/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#00221E',
          dark: '#032723',
          mid: '#15665D',
          base: '#2F8A81',
          light: '#59B6AD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #00221E 0%, #032723 40%, #15665D 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(47,138,129,0.15) 0%, rgba(21,102,93,0.1) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(89,182,173,0.2)',
        'glow': '0 0 30px rgba(89,182,173,0.25)',
        'glow-lg': '0 0 60px rgba(89,182,173,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
