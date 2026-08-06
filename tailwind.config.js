/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080b14',
          card: '#0f172a',
          cyan: '#00f0ff',
          blue: '#0072ff',
          purple: '#7000ff',
          pink: '#ff007f',
          emerald: '#00ff9d',
          dark: '#030712'
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'matrix-scan': 'matrixScan 4s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(112, 0, 255, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 240, 255, 0.8), 0 0 50px rgba(112, 0, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientX: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        matrixScan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(112,0,255,0.15) 50%, rgba(0,0,0,0) 100%)',
        'cyber-grid': 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
