/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EDFF',
          100: '#CCDAFF',
          200: '#99B5FF',
          300: '#6690FF',
          400: '#336BFF',
          500: '#3366FF', // Main primary color
          600: '#0033CC',
          700: '#002999',
          800: '#001F73',
          900: '#00144D',
        },
        secondary: {
          50: '#E0F7F6',
          100: '#B3ECEB',
          200: '#80E0DE',
          300: '#4DD4D0',
          400: '#26C9C3',
          500: '#00B8A9', // Main secondary color
          600: '#00A699',
          700: '#008F88',
          800: '#007A77',
          900: '#005755',
        },
        accent: {
          50: '#FFF2E6',
          100: '#FFE5CC',
          200: '#FFD0A8',
          300: '#FFBB85',
          400: '#FFA361',
          500: '#FF8C42', // Main accent color
          600: '#FF7019',
          700: '#F55A00',
          800: '#CC4A00',
          900: '#A63C00',
        },
        success: {
          500: '#4CAF50',
        },
        warning: {
          500: '#F9A825',
        },
        error: {
          500: '#F44336',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};