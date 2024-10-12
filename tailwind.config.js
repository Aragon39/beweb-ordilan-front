/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{'perano': {
        '50': '#f0f5fe',
        '100': '#dce7fd',
        '200': '#c1d5fc',
        '300': '#a8c7fa',
        '400': '#6699f4',
        '500': '#4274ef',
        '600': '#2c55e4',
        '700': '#2441d1',
        '800': '#2336aa',
        '900': '#223386',
        '950': '#192152',
      },
    },
    extend: {},
  },
  plugins: [],
}
