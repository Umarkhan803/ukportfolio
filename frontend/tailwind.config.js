module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E88E5',
          50: '#f8f8f8',
          100: '#e8e8e8',
          // ... rest of color definitions
        },
        secondary: {
          DEFAULT: '#212121',
          // ... rest of color definitions
        },
        accent: {
          DEFAULT: '#FFC107',
          // ... rest of color definitions
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      // ... other extensions
    },
  },
  plugins: [],
}