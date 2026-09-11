/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00f3ff',
        'neon-magenta': '#ff007f',
        'neon-purple': '#9d4edd',
        'cyber-black': '#080810',
        'cyber-dark': '#0a0a12',
        'cyber-darker': '#05050a',
      },
      backgroundImage: {
        'neon-glow': 'radial-gradient(circle at 20% 50%, rgba(0, 243, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 0, 127, 0.1) 0%, transparent 50%)',
        'grid-overlay': 'linear-gradient(90deg, rgba(0, 243, 255, 0.03) 1px, transparent 1px), linear-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '50px 50px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-flicker': 'glow-flicker 4s ease-in-out infinite',
        'scanlines': 'scanlines 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 0.15s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(0, 243, 255, 0.5), inset 0 0 20px rgba(0, 243, 255, 0.1)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(0, 243, 255, 0.8), inset 0 0 30px rgba(0, 243, 255, 0.2)',
          },
        },
        'glow-flicker': {
          '0%, 100%': {
            'text-shadow': '0 0 10px rgba(0, 243, 255, 0.8), 0 0 20px rgba(0, 243, 255, 0.5)',
          },
          '50%': {
            'text-shadow': '0 0 20px rgba(0, 243, 255, 1), 0 0 30px rgba(0, 243, 255, 0.7), 0 0 40px rgba(255, 0, 127, 0.5)',
          },
        },
        'scanlines': {
          '0%': {
            'background-position': '0 0',
          },
          '100%': {
            'background-position': '0 100px',
          },
        },
        'float': {
          '0%, 100%': {
            'transform': 'translateY(0px)',
          },
          '50%': {
            'transform': 'translateY(-20px)',
          },
        },
        'border-glow': {
          '0%, 100%': {
            'border-color': 'rgba(0, 243, 255, 0.5)',
            'box-shadow': '0 0 10px rgba(0, 243, 255, 0.3)',
          },
          '50%': {
            'border-color': 'rgba(0, 243, 255, 1)',
            'box-shadow': '0 0 20px rgba(0, 243, 255, 0.8), 0 0 30px rgba(255, 0, 127, 0.3)',
          },
        },
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            'opacity': '1',
          },
          '20%, 24%, 55%': {
            'opacity': '0.8',
          },
        },
      },
      fontFamily: {
        'mono': ['Monaco', 'Courier New', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
