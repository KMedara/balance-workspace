/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './projects/**/*.{html,ts}',
    ]
  },
  theme: {
    extend: {},
  },
  //plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],

}

