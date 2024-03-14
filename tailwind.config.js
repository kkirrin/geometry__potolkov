/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': 'rgb(0, 19, 28)',
      'white': '#fff',
      'blue': 'rgb(54, 168, 221)',
      'light-blue': 'rgb(226, 245, 255)',
      'light-bg-blue': '#B9E2F5',
      'bg-white': '#fff',
      'bg-main': 'rgba(54,168,221, 0.1)',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
     
    }
  },
  plugins: [],
}

