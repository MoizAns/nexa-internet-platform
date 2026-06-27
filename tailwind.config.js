/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        neon: {
          blue:   '#38bdf8',
          purple: '#a78bfa',
          cyan:   '#22d3ee',
          pink:   '#f472b6',
        },
        surface: {
          900: '#05050f',
          800: '#0a0a1f',
          700: '#0f0f2e',
          600: '#14143d',
          500: '#1a1a50',
          glass: 'rgba(255,255,255,0.04)',
          glassBorder: 'rgba(255,255,255,0.08)',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(167,139,250,0.2) 0%, transparent 60%), linear-gradient(180deg, #05050f 0%, #0a0a1f 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(167,139,250,0.08) 100%)',
        'popular-gradient': 'linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #38bdf8 100%)',
        'section-gradient': 'linear-gradient(180deg, #05050f 0%, #08082a 50%, #05050f 100%)',
      },
      boxShadow: {
        'glow-blue':   '0 0 30px rgba(99,102,241,0.4)',
        'glow-purple': '0 0 30px rgba(167,139,250,0.4)',
        'glow-cyan':   '0 0 20px rgba(34,211,238,0.35)',
        'card':        '0 4px 32px rgba(0,0,0,0.4)',
        'card-hover':  '0 8px 48px rgba(99,102,241,0.25)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':  'spin 20s linear infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}