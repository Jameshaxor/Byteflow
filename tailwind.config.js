/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'Satoshi', 'Inter', 'sans-serif'],
        sans: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#0a0a0a',
        coal: '#111111',
        slate: '#1a1a1a',
        line: '#262626',
        bone: '#fafaf7',
        muted: '#8a8a85',
        lime: '#d8ff36',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.16, 1, 0.3, 1)',
        out4: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
