/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Alumni Sans"', 'Fallback Font'],
      },
    },
  },
  plugins: [],
  safelist: [
    'hover:text-fuchsia-200',
    'hover:text-blue-600',
    'hover:text-red-500',
    'hover:text-lime-400',
    'hover:text-orange-600',
    'hover:text-sky-500',
    'hover:text-purple-800',
    'hover:text-rose-400',
  ],
};
