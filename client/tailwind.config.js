/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3498db', // Primary color (blue)
          dark: '#2980b9',    // Darker shade of primary
        },
        secondary: {
          DEFAULT: '#e74c3c', // Secondary color (red)
          dark: '#c0392b',    // Darker shade of secondary
        },
        accent: {
          DEFAULT: '#f1c40f', // Accent color (yellow)
          dark: '#f39c12',    // Darker shade of accent
        },
        background: {
          DEFAULT: '#ecf0f1', // Background color (light gray)
          dark: '#333333',    // Darker shade for backgrounds
        },
        text: {
          DEFAULT: '#333333', // Default text color
          light: '#666666',   // Lighter shade for text
          white: '#FFFFFF',   // White text
        },
        success: '#2ecc71',   // Success color (green)
        danger: '#e74c3c',    // Danger color (red)
        warning: '#f1c40f',   // Warning color (yellow)
        info: '#3498db',      // Info color (blue)
      },
    },
  },
  plugins: [daisyui],
}

