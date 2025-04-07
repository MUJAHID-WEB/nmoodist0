const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    '../../pages/**/*.md',
    '../../../../themes/metricalo-base/js/**/*.js',
    '../../../../themes/metricalo-base/templates/**/*.twig',
    './blueprints/**/*.yaml',
    './templates/**/*.twig',
    './nmoodist0.yaml',
    './nmoodist0.php'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['LibreFranklin', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'brand': 'rgb(var(--color-brand) / <alpha-value>)',
        'brand-light': 'rgb(var(--color-brand-light) / <alpha-value>)',
        'brand-dark': 'rgb(var(--color-brand-dark) / <alpha-value>)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-invert-body': theme('colors.gray.100'),
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ]
}
