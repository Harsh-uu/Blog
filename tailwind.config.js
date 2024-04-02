/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "lakki": ['Lakki Reddy', 'sans-serif'],
        "protest": ['Protest Strike', 'sans-serif'], 
        "abril": ['Abril Fatface', 'sans-serif'], 
        "volt": ['Voltaire', 'sans-serif'], 
        "ledger": ['Ledger', 'sans-serif'], 
        "one": ['Days One', 'sans-serif'], 
        "franklin": ['Libre Franklin', 'sans-serif'], 
        "gotu": ['Gotu', 'sans-serif'], 
        "poly": ['PolySans', 'sans-serif'], 
    } 
    },
  },
  plugins: [],
}

