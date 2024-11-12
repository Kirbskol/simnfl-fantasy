/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: { 
        'shiny-gold': 'linear-gradient(135deg, #d4af37 0%, #c09700 20%, #ffd700 40%, #c09700 60%, #d4af37 80%, #ffd700 100%)',
        'shiny-dark-blue': 'linear-gradient(135deg, #0f172a 0%, #2a374d 50%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
}