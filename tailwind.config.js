/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{html,js,jsx}'];
export const mode = 'jit';
export const theme = {
  extend: {
    colors: {
      primary: '#000',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    letterSpacing: {
      wide: '5px',
    },
  },
  screens: {
    xl: '1700px',
    lg: '1200px',
    md: '1060px',
    sm: '768px',
    ss: '620px',
    xs: '480px',
  },
};
export const plugins = [];
