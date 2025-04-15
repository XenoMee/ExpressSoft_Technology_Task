/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '24px'],
      sm: ['14px', '24px'],
      base: ['16px', '24px'],
      lg: ['18px', '22px'],
      xl: ['20px', '22px'],
      '2xl': ['24px', '20px'],
      '3xl': ['40px', '19.2px'],
      '4xl': ['56px', '19.2px']
    },

    extend: {
      colors: {
        primary: 'hsl(14, 86%, 42%)',
        'primary-dark': 'hsl(14, 86%, 25%)',
        secondary: 'hsl(159, 69%, 38%)',
        rose: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)'
        },
        backdrop: 'rgba(0,0,0,0.5)'
      },

      fontFamily: {
        redhat: 'var(--font-redhat)'
      },

      screens: {
        xxs: '320px',
        xs: '375px',
        ss: '620px',
        sm: '785px',
        md: '1060px',
        lg: '1200px',
        wide: '1440px'
      },

      gridTemplateColumns: {
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))'
      },

      content: {
        confirmedIcon: 'url("/images/icon-order-confirmed.svg")'
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, addComponents }) {
      addBase({}),
        addComponents({
          '.container': {
            '@apply max-w-[70rem] min-h-[100svh] mx-auto py-6 px-5 sm:p-10 lg:max-w-[80rem]':
              {}
          },
          '.modal': {
            '@apply fixed inset-0 overflow-x-hidden overflow-y-auto z-50 m-auto rounded-lg sm:h-[717px] xxs:h-[90vh] sm:w-[688px] sm:h-[685px] xs:px-6 xs:pt-10 xs:pb-6 xxs:mb-0 xxs:px-3 xxs:py-4':
              {}
          },
          '.heading1': {
            '@apply font-bold text-rose-900 text-[2.5rem] leading-[1.2]': {}
          },
          '.heading2': {
            '@apply font-bold text-rose-900 text-[1.5rem]': {}
          },
          '.heading3': {
            '@apply font-bold text-rose-900 text-base': {}
          },
          '.heading4': {
            '@apply font-bold text-rose-900 text-sm': {}
          },
          '.button': {
            '@apply font-semibold py-2 px-6 rounded-full cursor-pointer transition delay-100 ease-in':
              {}
          },
          '.btn-primary': {
            '@apply bg-white text-rose-900 border-[2px] border-rose-400 hover:text-primary hover:border-primary hover:bg-rose-50 transition scale-100 delay-150 ease-in hover:scale-110 focus:scale-110 focus:border-primary focus:outline-none focus:ring-0 focus:bg-rose-50 focus:text-primary':
              {}
          },
          '.orderConfirmed': {
            '@apply before:content-confirmedIcon before:w-[48px] before:h-[48px]':
              {}
          },
          '.overlay': {
            '@apply fixed w-[100vw] h-[100vh] inset-0 bg-[rgba(0,0,0,0.5)]': {}
          },
          '.ellipsis': {
            '@apply w-[160px] text-ellipsis overflow-hidden whitespace-nowrap':
              {}
          }
        }),
        addUtilities({})
    })
  ]
}
