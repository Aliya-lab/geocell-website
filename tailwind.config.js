/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'slate-rock': {
          50: '#ECEFF1',
          100: '#CFD8DC',
          200: '#B0BEC5',
          300: '#90A4AE',
          400: '#78909C',
          500: '#546E7A',
          600: '#455A64',
          700: '#37474F',
          800: '#263238',
          900: '#1a2327',
        },
        'eco-forest': {
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        'pearl-grey': {
          DEFAULT: '#F5F7F8',
          50: '#FAFBFC',
          100: '#F5F7F8',
        },
      },
      fontFamily: {
        heading: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        data: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        btn: '4px',
        card: '4px',
        tag: '2px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(55,71,79,0.08)',
        'card-hover': '0 4px 12px rgba(55,71,79,0.12)',
      },
    },
  },
  plugins: [],
}
