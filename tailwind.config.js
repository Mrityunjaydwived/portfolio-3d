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
          bg: '#050811',
          card: 'rgba(10, 15, 30, 0.75)',
          border: 'rgba(56, 189, 248, 0.2)',
          blue: '#0ea5e9',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          purple: '#a855f7',
          neon: '#00f0ff',
          emerald: '#10b981',
          accent: '#38bdf8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), inset 0 0 15px rgba(6, 182, 212, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.5), inset 0 0 25px rgba(14, 165, 233, 0.3)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
