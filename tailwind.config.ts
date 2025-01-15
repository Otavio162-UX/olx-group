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
        container1328: '1328px',
      },
      colors: {
        white: 'var(--white)',
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
          100: 'var(--neutral-100)',
        },
        danger: {
          100: 'var(--danger-100)',
        },
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
      })
    },
  ],
} satisfies Config
