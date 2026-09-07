/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces — near-black "mission control" canvas
        base: {
          950: '#09090b',
          900: '#0d0d10',
          850: '#111114',
        },
        // Borders / hairlines
        line: {
          800: '#27272a',
          700: '#3f3f46',
        },
        // Text hierarchy
        ink: {
          100: '#f4f4f5',
          300: '#c7c7cd',
          500: '#8b8b93',
          700: '#525258',
        },
        // Signal colors — telemetry accents
        signal: {
          cyan: '#22d3ee',
          emerald: '#34d399',
          indigo: '#818cf8',
        },
      },
      fontFamily: {
        // Display face: geometric + technical, carries the "engineering" personality
        display: ['"Space Grotesk"', 'sans-serif'],
        // Body face: quiet, highly legible
        body: ['"Inter"', 'sans-serif'],
        // Utility face: telemetry / data / eyebrow labels
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        orbit: 'orbit 34s linear infinite',
        'orbit-slow': 'orbit 54s linear infinite',
        'orbit-reverse': 'orbit-reverse 46s linear infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
