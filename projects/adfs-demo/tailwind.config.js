/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,css,scss,sass,less,styl}',
    './projects/**/*.{html,ts,css,scss,sass,less,styl}'
  ],
  theme: {
    extend: {
      colors: {
        primary     : 'var(--primary)',
        secondary   : 'var(--secondary)',
        tertiary    : 'var(--tertiary)',
        accent      : 'var(--accent)',
        accent_light: 'var(--accent-light)'
      },
    },
  },
  plugins: [],
}