/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050505',
          light: '#0a0a0a',
          card: '#0f0f0f',
        },
        accent: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9',
        },
        secondary: {
          DEFAULT: '#00E5FF',
          dim: '#00B8D4',
        },
        muted: '#888888',
      },
      fontFamily: {
        display: ['Clash Display', 'Poppins', 'sans-serif'],
        sans: ['Satoshi', 'Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.3), transparent)',
        'hero-cinematic':
          'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(0,229,255,0.08) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 10% 60%, rgba(139,92,246,0.1) 0%, transparent 50%)',
        'glow-purple':
          'radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
        'glow-cyan':
          'radial-gradient(circle at center, rgba(0,229,255,0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 229, 255, 0.15)',
        'glow-purple': '0 0 40px rgba(124, 58, 237, 0.25)',
        'glow-sm': '0 0 20px rgba(124, 58, 237, 0.15)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
