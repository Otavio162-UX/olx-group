import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ZonaPro: 'var(--font-ZonaPro)',
        Roboto: 'var(--font-Roboto)',
        Inter: 'var(--font-Inter)',
      },
      maxWidth: {
        container1328: '83rem',
        container1056: '66rem',
      },
      colors: {
        'header-desktop-background': 'var(--header-desktop-background)',
        'header-mobile-background': 'var(--header-mobile-background)',
        'header-desktop-icons': 'var(--header-desktop-icons)',
        'header-mobile-icons': 'var(--header-mobile-icons)',
        'button-menu': 'var(--button-menu)',
        primary: {
          70: 'var(--primary-70)',
          80: 'var(--primary-80)',
          90: 'var(--primary-90)',
          100: 'var(--primary-100)',
          110: 'var(--primary-110)',
          120: 'var(--primary-120)',
          130: 'var(--primary-130)',
        },
        secondary: {
          70: 'var(--secondary-70)',
          80: 'var(--secondary-80)',
          90: 'var(--secondary-90)',
          100: 'var(--secondary-100)',
          110: 'var(--secondary-110)',
          120: 'var(--secondary-120)',
          130: 'var(--secondary-130)',
        },
        neutral: {
          70: 'var(--neutral-70)',
          80: 'var(--neutral-80)',
          90: 'var(--neutral-90)',
          100: 'var(--neutral-100)',
          130: 'var(--neutral-130)',
        },
        danger: {
          100: 'var(--danger-100)',
        },
      },
      minWidth: {
        minContainer: '24.375rem',
      },
    },
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        '.wrapperContainer': {
          margin: '0 auto',
          width: 'calc(100% - 2rem)',
          '@media(min-width: 1024px)': {
            width: '98%',
          },
          '@media(min-width: 1440px)': {
            width: '100%',
          },
        },
        '.spinner': {
          animation: 'rotation 1s linear infinite',
          '@keyframes rotation': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        },
      })
    },
  ],
} satisfies Config
